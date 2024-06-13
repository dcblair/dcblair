import { memo } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { classed } from '@tw-classed/react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  header?: ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const StyledCardWrapper = classed('div', 'z-10 border backdrop-blur-md', {
  variants: {
    variant: {
      primary: 'border-black/5 bg-white/30 shadow-sm p-6 md:p-8',
      secondary:
        'border-black/5 bg-white/20 shadow-sm px-4 py-1 md:px-8 md:py-2 rounded-md',
      tertiary:
        'flex items-center rounded-3xl justify-center bg-white shadow-md p-2 md:p-8',
    },
  },
});

const CardBase = ({
  children,
  header,
  loading = false,
  variant = 'primary',
  ...props
}: CardProps) => {
  // Loading state
  if (loading) {
    <div>
      <LoadingSpinner />
    </div>;
  }

  return (
    <StyledCardWrapper variant={variant} {...props}>
      {header && (
        <div className="mb-4 border-b-2 border-slate-800 py-1 md:py-2.5">
          {header}
        </div>
      )}
      {children}
    </StyledCardWrapper>
  );
};

export const Card = memo(CardBase);
