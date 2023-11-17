import { WebResult as WebResultType } from "@/actions/brave/types/results";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const WebResultSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Skeleton className="w-8 h-8 rounded-full" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-32 rounded-lg" />
          <Skeleton className="h-2 w-64 rounded-lg" />
        </div>
      </div>

      <Skeleton className="h-5 rounded-lg" />

      <Skeleton className="h-28 rounded-lg" />
    </div>
  );
};

export default WebResultSkeleton;
