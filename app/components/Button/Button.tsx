import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { classed } from '@tw-classed/react';

interface ButtonProps
  extends Pick<
    ComponentPropsWithoutRef<'button'>,
    'children' | 'className' | 'disabled' | 'onClick' | 'type'
  > {
  loading?: boolean;
  iconOnly?: boolean;
  variant?: 'primary' | 'secondary';
}

const StyledButton = classed(
  'button',
  'bg-slate-500 text-sky-100 font-medium',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      loading: {
        true: '',
        false: '',
      },
      iconOnly: {
        true: 'rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const BaseButton = ({
  children,
  iconOnly = false,
  loading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      iconOnly={iconOnly}
      loading={loading}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export const Button = memo(BaseButton);
