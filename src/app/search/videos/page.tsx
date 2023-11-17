import { VideoResult as VideoResultType } from "@/actions/brave/types/results";
import VideoResult from "@/components/VideoResults/VideoResult";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import VideoResultSkeleton from "@/components/VideoResults/VideoResultSkeleton";

export default async ({ searchParams }: { searchParams: { q: string; page: string } }) => {
  if (!searchParams.q) {
    redirect("/");
  }

  const braveToken = process.env.BRAVE_API_KEY as string;

  const response = await fetch(`https://api.search.brave.com/res/v1/videos/search?q=${searchParams.q}&offset=${searchParams.page || 0}`, {
    headers: {
      "X-Subscription-Token": braveToken,
    },
    next: { tags: ["suggest"] },
  });

  const data = await response.json();

  const results = data.results as VideoResultType[];

  const previousPage = parseInt(searchParams.page) && parseInt(searchParams.page) - 1;
  const nextPage = (parseInt(searchParams.page) || 0) + 1 <= 9 ? (parseInt(searchParams.page) || 0) + 1 : null;

  return (
    <Suspense fallback={<Loading />} key={searchParams.q}>
      <section className="pl-[16.5rem] pr-[6rem] py-8">
        <div className="flex max-w-[35rem] flex-col gap-6">
          {results.map((result) => (
            <VideoResult result={result} />
          ))}
          <div className="flex gap-3 justify-between w-full">
            {previousPage || previousPage === 0 ? (
              <a
                href={`/search/videos?q=${searchParams.q}&page=${previousPage}`}
                className="text-oceanblue flex items-center justify-center gap-2 hover:underline"
              >
                <ArrowLeft className="inline" size={18} />
                Previous
              </a>
            ) : (
              <></>
            )}

            {nextPage ? (
              <a
                href={`/search/videos?q=${searchParams.q}&page=${nextPage}`}
                className="text-oceanblue  flex items-center justify-center gap-2 hover:underline ml-auto"
              >
                Next
                <ArrowRight className="inline" size={18} />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
};
