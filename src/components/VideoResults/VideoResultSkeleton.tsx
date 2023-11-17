import React from "react";
import { Skeleton } from "../ui/skeleton";

const VideoResultSkeleton = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col">
          <Skeleton className="h-3 w-64 rounded-lg" />
        </div>
      </div>

      <Skeleton className="h-4 rounded-lg mt-2" />

      <div className="flex gap-2 mt-3">
        <Skeleton className="w-32 h-20 object-cover rounded-lg shrink-0" />

        <div className="flex flex-col gap-1 ml-2 w-full">
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default VideoResultSkeleton;
