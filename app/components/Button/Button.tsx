import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { classed } from '@tw-classed/react';

interface ButtonProps
  extends Pick<
    ComponentPropsWithoutRef<'button'>,
    'children' | 'disabled' | 'onClick' | 'type'
  > {
  loading?: boolean;
  variant?: 'primary' | 'icon';
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
      loading: {
        true: '',
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
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton loading={loading} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export const Button = memo(BaseButton);
