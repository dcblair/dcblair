import { memo } from 'react';
import type { ReactNode } from 'react';
import { Link } from '@remix-run/react';

interface AppLinkProps {
  children: ReactNode;
  to: string;
}

const BaseLink = ({ children, to }: AppLinkProps) => {
  return (
    <Link
      className="px-2.5 py-1 hover:underline focus:shadow-2 focus:outline-none hover:focus:no-underline"
      to={to}
    >
      {children}
    </Link>
  );
};

export const AppLink = memo(BaseLink);
