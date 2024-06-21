import { memo } from 'react';
import { Link } from '../Link/Link';

const BaseHeader = () => {
  return (
    <div className="mb-6 flex w-full flex-col items-center md:mb-10">
      <div className="mb-4 md:mb-10">
        <h1 className="font-nunito text-3xl font-black tracking-wider text-slate-900 md:text-4xl">
          Devin Blair
        </h1>
      </div>

      <nav className="flex items-center space-x-3 p-2 text-base leading-6 tracking-widest md:space-x-4 md:text-lg">
        <Link to="/">About</Link>
        <div className="h-8 w-0.5 rounded-sm bg-black" />
        <Link to="/experience">Experience</Link>
        <div className="h-8 w-0.5 rounded-sm bg-black" />
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export const Header = memo(BaseHeader);
