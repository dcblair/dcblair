import { memo, type ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

type bgObject = 'none' | 'left' | 'right';
export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  loading?: boolean;
  bgObject?: bgObject;
}

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
    <div className="relative">
      <div className="z-10 border border-black/5 bg-white/30 px-6 py-6 shadow-sm backdrop-blur-md">
        {header && (
          <div className="mb-4 border-b-2 border-slate-800 py-2">{header}</div>
        )}
        {children}
      </div>
      {bgObject === 'left' ? (
        <div className="absolute -bottom-2 left-2 -z-10 h-56 w-1/5 rounded-lg bg-gradient-to-b from-slate-200 to-slate-400" />
      ) : bgObject === 'right' ? (
        <div className="absolute -bottom-2 right-2 -z-10 h-56 w-1/5 rounded-lg bg-gradient-to-b from-slate-200 to-slate-400" />
      ) : null}
    </div>
  );
};

export const Card = memo(CardBase);
