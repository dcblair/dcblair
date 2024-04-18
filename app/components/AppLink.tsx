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
      className="focus:shadow-2 px-2.5 py-1 hover:underline focus:outline-none hover:focus:no-underline"
      to={to}
    >
      {children}
    </Link>
  );
};

const AppLink = memo(BaseLink);

export default AppLink;
