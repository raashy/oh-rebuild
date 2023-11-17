import { Skeleton } from "../ui/skeleton";

const ImageResultSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-48 w-68 rounded-lg" />

      <div className="flex items-center justify-start gap-2 line-clamp-1 mt-2.5">
        <Skeleton className="w-3 h-3 rounded-full" />
        <Skeleton className="w-32 h-3 rounded-lg" />
      </div>
      <Skeleton className="h-4 rounded-lg mt-2" />
    </div>
  );
};

export default ImageResultSkeleton;
