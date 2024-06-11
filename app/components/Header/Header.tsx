import { memo } from 'react';
import { Link } from '../Link/Link';

const BaseHeader = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center md:mb-14">
      <div className="mb-10">
        <h1 className="font-nunito text-4xl font-black tracking-wider text-slate-900">
          Devin Blair
        </h1>
      </div>

      <nav className="flex items-center space-x-4 p-2 text-lg leading-6 tracking-widest">
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
