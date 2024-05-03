import { memo } from 'react';
import { AppLink } from '../AppLink/AppLink';

const BaseHeader = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center md:mb-48">
      <div className="mb-10">
        <h1 className="font-nunito text-4xl font-black tracking-wider text-slate-900">
          Devin Blair
        </h1>
      </div>

      <nav className="flex items-center space-x-4 p-2 text-lg leading-6 tracking-widest">
        <AppLink to="/">About</AppLink>
        <div className="h-8 w-0.5 rounded-sm bg-black" />
        <AppLink to="/experience">Experience</AppLink>
        <div className="h-8 w-0.5 rounded-sm bg-black" />
        <AppLink to="/contact">Contact</AppLink>
      </nav>
    </div>
  );
};

export const Header = memo(BaseHeader);
