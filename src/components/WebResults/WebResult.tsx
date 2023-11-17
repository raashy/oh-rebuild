import { WebResult as WebResultType } from "@/actions/brave/types/results";
import React, { useTransition } from "react";

const WebResult = ({ result }: { result: WebResultType }) => {
  return (
    <div key={result.title} className="flex flex-col">
      <div className="flex gap-3 items-center">
        <img src={result.profile?.img} className="w-6 h-6 object-contain" />

        <div className="flex flex-col">
          <span className="text-sm ">{result.profile?.name}</span>
          <span className="text-xs text-gray-600 line-clamp-1">
            {result.meta_url.hostname} {result.meta_url?.path}
          </span>
        </div>
      </div>

      <a href={result.url} className=" hover:underline mt-1 font-medium text-oceanblue visited:text[var(--link-color-visited)]">
        {result.title}
      </a>

      <p className="text-sm" dangerouslySetInnerHTML={{ __html: result.description }} />
    </div>
  );
};

export default WebResult;
