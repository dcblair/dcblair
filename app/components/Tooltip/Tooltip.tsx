import { memo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  autoUpdate,
  flip,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

interface TooltipProps {
  children: ReactNode;
  label: string;
}

const BaseTooltip = ({ children, label }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    middleware: [flip(), shift()],
    onOpenChange: setIsOpen,
    open: isOpen,
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps}>
        {children}
      </button>
      {isOpen && (
        <div
          className="absolute z-10 rounded-lg bg-slate-950 px-4 py-2 tracking-wider text-white shadow-lg"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps}
        >
          <p>{label}</p>
        </div>
      )}
    </>
  );
};

export const Tooltip = memo(BaseTooltip);
