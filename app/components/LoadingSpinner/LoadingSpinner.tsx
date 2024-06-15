import { memo } from 'react';

const BaseLoadingSpinner = () => {
  return (
    <div className="-bottom-2 -right-20 -z-10 h-40 w-40 animate-floatFast rounded-full bg-gradient-to-b from-slate-100 to-slate-700 shadow-md" />
  );
};

export const LoadingSpinner = memo(BaseLoadingSpinner);
