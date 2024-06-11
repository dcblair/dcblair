import { forwardRef, memo } from 'react';
import type { Ref, RefAttributes } from 'react';
import { Link as RemixLink } from '@remix-run/react';
import { classed } from '@tw-classed/react';
import { RemixLinkProps } from '@remix-run/react/dist/components';

interface LinkProps extends RefAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'icon';
}

const StyledLink = classed(RemixLink, '', {
  variants: {
    variant: {
      primary:
        'px-2.5 py-1 hover:underline focus:shadow-2 focus:outline-none hover:focus:no-underline',
      icon: 'px-3 py-2 focus:outline-2 focus:outline-black rounded-none',
    },
  },
});

const BaseLink = forwardRef(
  (
    props: LinkProps & RemixLinkProps & RefAttributes<HTMLAnchorElement>,
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return <StyledLink ref={ref} {...props} />;
  },
);

BaseLink.displayName = 'Link';

export const Link = memo(BaseLink);
