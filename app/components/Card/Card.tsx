import { memo, type ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { classed } from '@tw-classed/react';

type bgObject = 'none' | 'left' | 'right';
export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  loading?: boolean;
  bgObject?: bgObject;
}

const StyledCardWrapper = classed('div', 'relative w-full');

const CardBase = ({
  bgObject = 'none',
  children,
  header,
  loading = false,
}: CardProps) => {
  // Loading state
  if (loading) {
    <div>
      <LoadingSpinner />
    </div>;
  }

  return (
    <StyledCardWrapper>
      <div className="z-10 border border-black/5 bg-white/30 p-6 shadow-sm backdrop-blur-md md:p-8">
        {header && (
          <div className="mb-4 border-b-2 border-slate-800 py-1 md:py-2.5">
            {header}
          </div>
        )}
        {children}
      </div>
      {bgObject === 'left' ? (
        <div className="absolute -bottom-10 -left-3 -z-10 h-72 w-12 animate-float rounded-md bg-gradient-to-b from-slate-200 to-slate-500 shadow-md" />
      ) : bgObject === 'right' ? (
        <div className="absolute -bottom-5 -right-3 -z-10 h-72 w-12 rounded-md bg-gradient-to-b from-slate-200 to-slate-400 shadow-md" />
      ) : null}
    </StyledCardWrapper>
  );
};

export const Card = memo(CardBase);
