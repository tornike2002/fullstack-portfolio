function HeaderSkeleton() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="p-4 max-w-7xl flex justify-center items-center flex-col mx-auto relative z-10 w-full font-inter">
        {/* Top Title Skeleton */}
        <div className="h-4 md:h-6 w-32 bg-neutral-700 rounded animate-pulse"></div>

        {/* Middle Title Skeleton */}
        <div className="mt-4 w-[80%] space-y-3">
          <div className="h-8 md:h-12 bg-neutral-700 rounded animate-pulse"></div>
          <div className="h-8 md:h-12 bg-neutral-700 rounded animate-pulse"></div>
        </div>

        {/* Bottom Title Skeleton */}
        <div className="mt-4 h-6 w-64 md:w-80 bg-neutral-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default HeaderSkeleton;
