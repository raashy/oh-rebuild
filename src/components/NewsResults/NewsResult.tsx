import { NewsResult as NewsResultType } from "@/actions/brave/types/results";
import { PlayCircleIcon } from "lucide-react";
import React, { useTransition } from "react";

const NewsResult = ({ result }: { result: NewsResultType }) => {
  return (
    <div key={result.source} className="flex flex-row gap-8">
      <div className="flex-col flex">
        <div className="flex gap-2 items-center">
          <img src={result.meta_url?.favicon} className="w-4 h-4 object-contain" />

          <div className="flex flex-col">
            <span className="text-sm line-clamp-1">{result.meta_url?.netloc}</span>
          </div>
        </div>

        <a href={result.url} className=" hover:underline mt-1 line-clamp-2 font-medium text-[var(--link-color)] visited:text[var(--link-color-visited)]">
          {result.title}
        </a>

        <p className="text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: result.description }} />
      </div>
      {result.thumbnail?.src && <img src={result.thumbnail?.src} className="w-32 h-32 object-cover rounded-lg shrink-0" />}
    </div>
  );
};

export default NewsResult;
