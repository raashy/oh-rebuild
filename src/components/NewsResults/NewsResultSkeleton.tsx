import { NewsResult as NewsResultType } from "@/actions/brave/types/results";
import { PlayCircleIcon } from "lucide-react";
import React, { useTransition } from "react";
import { Skeleton } from "../ui/skeleton";

const NewsResultSkeleton = () => {
  return (
    <div className="flex flex-row gap-8 w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-3 items-center">
          <Skeleton className="w-6 h-6 rounded-full" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-32 rounded-lg" />
          </div>
        </div>

        <Skeleton className="h-5 rounded-lg" />

        <Skeleton className="h-16 rounded-lg" />
      </div>

      <Skeleton className="h-32 w-32 rounded-lg shrink-0" />
    </div>
  );
};

export default NewsResultSkeleton;
