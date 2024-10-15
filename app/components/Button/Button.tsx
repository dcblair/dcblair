import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { classed } from '@tw-classed/react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  iconOnly?: boolean;
  variant?: 'primary' | 'secondary';
}

const StyledButton = classed('button', 'text-sky-100 font-medium', {
  variants: {
    variant: {
      primary: 'bg-slate-500',
      secondary: '',
    },
    loading: {
      true: '',
      false: '',
    },
    iconOnly: {
      true: 'p-3 size-8 md:size-16 flex items-center justify-center bg-slate-400 rounded-full hover:outline-2 hover:outline-sky-900 transition-all duration-1000 hover:bg-slate-400 focus:outline-2 focus:outline-sky-900',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

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
