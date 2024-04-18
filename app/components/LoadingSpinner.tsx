const LoadingSpinner = () => {
  return (
    <div className="relative flex items-center justify-center h-20 w-h-20 md:h-32 md:w-32">
      <div className="relative animate-spin rounded-full bg-gradient-to-l from-slate-100 to-slate-800 w-full h-full" />
      {/* TODO: Make the center transparent */}
      <div className="absolute bg-white rounded-full w-16 h-16 md:h-20 md:w-20" />
    </div>
  )
}

export default LoadingSpinner;