import { memo } from 'react';

const BaseLoadingSpinner = () => {
  return (
    <div
      aria-label="loading"
      className="size-40 animate-floatFast rounded-full bg-gradient-to-b from-slate-400 to-slate-950 shadow-md md:size-80"
    />
  );
};

export const LoadingSpinner = memo(BaseLoadingSpinner);
