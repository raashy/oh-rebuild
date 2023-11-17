import WebResultSkeleton from "@/components/WebResults/WebResultSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default () => {
  return (
    <section className="px-[16.5rem] py-8">
      <div className="flex max-w-[35rem] flex-col gap-8">
        {Array.from({ length: 15 }).map((_, i) => (
          <WebResultSkeleton />
        ))}
      </div>
    </section>
  );
};
