import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { classed } from '@tw-classed/react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  iconOnly?: boolean;
  variant?: 'primary' | 'secondary';
}

const StyledButton = classed(
  'button',
  'shadow-xl hover:shadow-2xl hover:transition-colors focus:outline-2 focus:outline-sky-900',
  {
    variants: {
      variant: {
        primary:
          'bg-white text-sky-800 hover:bg-sky-800/10 focus:bg-sky-800/10',
        secondary: '',
      },
      loading: {
        true: 'before:content-[data-loading] before:animate-spin',
      },
      iconOnly: {
        true: 'p-3 size-8 md:size-16 flex items-center bg-white justify-center rounded-full hover:outline-2 duration-1000 hover:bg-slate-700/20 focus:outline-2 focus:outline-sky-900',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
    compoundVariants: [
      {
        variant: 'primary',
        iconOnly: true,
        className: 'rounded-full size-8 md:size-16',
      },
      {
        variant: 'secondary',
        iconOnly: true,
        className: 'rounded-full size-8 md:size-16',
      },
      {
        variant: 'primary',
        iconOnly: false,
        className: 'rounded-md',
      },
      {
        variant: 'secondary',
        iconOnly: false,
        className: 'rounded-full',
      },
    ],
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
