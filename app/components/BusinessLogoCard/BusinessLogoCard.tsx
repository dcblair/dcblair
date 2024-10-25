import { memo } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { classed } from '@tw-classed/react';
import { Link } from '../Link/Link';
import { Card } from '../Card/Card';

export interface BusinessLogoCardProps extends HTMLAttributes<HTMLDivElement> {
  ariaLabel?: string;
  icon?: ReactNode;
  to?: string;
  withLink?: boolean;
}

const StyledCardWrapper = classed(
  'div',
  'flex items-center justify-center',
  {},
);

const BusinessLogoCardBase = ({
  icon: Icon,
  to,
  withLink = true,
  ...props
}: BusinessLogoCardProps) => {
  return (
    <StyledCardWrapper {...props}>
      {withLink ? (
        <Link
          aria-label="Comcast Business"
          target="_blank"
          rel="noreferrer"
          to={to ?? '/'}
          variant="icon"
        >
          <Card
            className="size-32 duration-2000 hover:bg-slate-600/20 hover:shadow-2xl hover:transition-all md:h-60 md:w-96"
            variant="tertiary"
          >
            {Icon}
          </Card>
        </Link>
      ) : (
        <Card
          className="size-32 duration-2000 hover:shadow-2xl hover:transition-all md:h-60 md:w-96"
          variant="tertiary"
        >
          {Icon}
        </Card>
      )}
    </StyledCardWrapper>
  );
};

export const BusinessLogoCard = memo(BusinessLogoCardBase);
