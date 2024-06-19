import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { HTMLProps, ReactNode } from 'react';
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';

interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
}

// useTooltip hook —- manages tooltip state
export function useTooltip({
  initialOpen = false,
  placement = 'top',
}: TooltipOptions = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const hover = useHover(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      isOpen,
      setIsOpen,
      ...interactions,
      ...data,
    }),
    [isOpen, setIsOpen, interactions, data],
  );
}

const TooltipContext = createContext<any>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('tooltip components need to be wrapped in a <tooltip />');
  }

  return context;
};

// Tooltip wrapper
export const Tooltip = ({
  children,
  ...options
}: { children: ReactNode } & TooltipOptions) => {
  const context = useTooltip(options);

  return (
    <TooltipContext.Provider value={context}>
      {children}
    </TooltipContext.Provider>
  );
};

// TooltipTrigger
export const TooltipTrigger = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement> & { asChild?: boolean; children: ReactNode }
>(function TooltipTrigger({ asChild = false, children, ...props }, propRef) {
  const context = useTooltipContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([childrenRef, context.refs.setReference, propRef]);

  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.isOpen ? 'open' : 'closed',
      }),
    );
  }

  return (
    <button
      data-state={context.isOpen ? 'open' : 'closed'}
      ref={ref}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

// TooltipContent
export const TooltipContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.isOpen) return null;

  return (
    <FloatingPortal>
      <div
        className="z-50 rounded-md bg-slate-900 p-2 text-white shadow-lg"
        ref={ref}
        style={{ ...style, ...context.floatingStyles }}
        {...context.getFloatingProps(props)}
      />
    </FloatingPortal>
  );
});
