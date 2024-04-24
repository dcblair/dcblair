import { memo } from 'react';

const BaseLoadingSpinner = () => {
  return (
    <div className="w-h-20 relative flex h-20 items-center justify-center md:h-32 md:w-32">
      <div className="relative h-full w-full animate-spin rounded-full bg-gradient-to-l from-slate-100 to-slate-800" />
      {/* TODO: Make the center transparent */}
      <div className="absolute h-16 w-16 rounded-full bg-white md:h-20 md:w-20" />
    </div>
  );
};

export const LoadingSpinner = memo(BaseLoadingSpinner);
