import { memo } from 'react';
import type { ReactNode } from 'react';
import { Link } from '@remix-run/react';
import { classed } from '@tw-classed/react';

interface AppLinkProps {
  children: ReactNode;
  to: string;
  variant?: 'primary' | 'icon';
}

const StyledLink = classed(Link, '', {
  variants: {
    variant: {
      primary:
        'px-2.5 py-1 hover:underline focus:shadow-2 focus:outline-none hover:focus:no-underline',
      icon: 'px-3 py-2 focus:outline-2 focus:outline-black rounded-none',
    },
  },
});

const BaseLink = ({ children, to, variant = 'primary' }: AppLinkProps) => {
  return (
    <StyledLink to={to} variant={variant}>
      {children}
    </StyledLink>
  );
};

export const AppLink = memo(BaseLink);
