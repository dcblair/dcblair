import { forwardRef, memo } from 'react';
import type { Ref, RefAttributes } from 'react';
import { Link as RemixLink } from '@remix-run/react';
import { classed } from '@tw-classed/react';
import { RemixLinkProps } from '@remix-run/react/dist/components';

interface LinkProps extends RefAttributes<HTMLAnchorElement> {
  variant?: 'icon' | 'primary';
}

const StyledLink = classed(RemixLink, '', {
  variants: {
    variant: {
      primary:
        'px-2.5 py-1 hover:underline focus:shadow-2 focus:outline-black hover:focus:no-underline',
      icon: 'px-3 py-2 focus:outline-2 focus:outline-black rounded-none',
    },
  },
});

const BaseLink = forwardRef(
  (
    {
      variant = 'primary',
      ...props
    }: LinkProps & RemixLinkProps & RefAttributes<HTMLAnchorElement>,
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return <StyledLink ref={ref} variant={variant} {...props} />;
  },
);

BaseLink.displayName = 'Link';

export const Link = memo(BaseLink);
