import { memo, type ReactNode } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  loading?: boolean;
}

const CardBase = ({ children, header, loading = false }: CardProps) => {
  // Loading state
  if (loading) {
    <div>
      <LoadingSpinner />
    </div>;
  }

  return (
    <div>
      {header && <div className="border-b-2 border-slate-800">{header}</div>}
      {children}
    </div>
  );
};

export const Card = memo(CardBase);
