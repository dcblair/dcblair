import { memo } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { classed } from '@tw-classed/react';

interface ButtonProps
  extends Pick<
    ComponentPropsWithoutRef<'button'>,
    'children' | 'disabled' | 'onClick' | 'type'
  > {
  loading: boolean;
  icon: ReactNode;
  variant: 'primary' | 'icon';
}

const StyledButton = classed(
  'button',
  'bg-slate-500 text-sky-100 font-medium',
  {
    variants: {
      variant: {
        primary: '',
        icon: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const BaseButton = ({ children, icon, variant, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {icon}
      {children}
    </StyledButton>
  );
};

const AppButton = memo(BaseButton);

export default AppButton;
