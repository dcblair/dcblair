import { memo, type ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { classed } from '@tw-classed/react';

type bgObject = 'none' | 'left' | 'right';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bgObject?: bgObject;
  children: ReactNode;
  header?: ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const StyledCardWrapper = classed(
  'div',
  'z-10 border p-6 backdrop-blur-md md:p-8',
  {
    variants: {
      variant: {
        primary: 'border-black/5 bg-white/30 shadow-sm',
        secondary: 'border-black/5 bg-white/40 shadow-sm',
        tertiary: 'flex items-center justify-center bg-white shadow-md',
      },
    },
  },
);

const CardBase = ({
  bgObject = 'none',
  children,
  header,
  loading = false,
  variant = 'primary',
}: CardProps) => {
  // Loading state
  if (loading) {
    <div>
      <LoadingSpinner />
    </div>;
  }

  return (
    <div className="relative w-full">
      <StyledCardWrapper variant={variant}>
        {header && (
          <div className="mb-4 border-b-2 border-slate-800 py-1 md:py-2.5">
            {header}
          </div>
        )}
        {children}
      </StyledCardWrapper>

      {/* Background object */}
      {bgObject === 'left' ? (
        <div className="absolute -bottom-10 -left-3 -z-10 h-72 w-12 animate-float rounded-md bg-gradient-to-b from-slate-200 to-slate-500 shadow-md" />
      ) : bgObject === 'right' ? (
        <div className="absolute -bottom-5 -right-3 -z-10 h-72 w-12 rounded-md bg-gradient-to-b from-slate-200 to-slate-400 shadow-md" />
      ) : null}
    </div>
  );
};

export const Card = memo(CardBase);
