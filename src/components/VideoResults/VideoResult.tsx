import { VideoResult as VideoResultType } from "@/actions/brave/types/results";
import { PlayCircleIcon } from "lucide-react";
import React, { useTransition } from "react";

const VideoResult = ({ result }: { result: VideoResultType }) => {
  return (
    <div key={result.title} className="flex flex-col overflow-hidden">
      <div className="flex gap-2 items-center">
        {/* <img src={result.meta_url?.favicon} className="w-5 h-5 object-contain" /> */}

        <div className="flex flex-col">
          <span className="text-sm text-gray-600 line-clamp-1">
            {result.meta_url.hostname} {result.meta_url.path}
          </span>
        </div>
      </div>

      <a href={result.url} className="line-clamp-1 hover:underline mt-1 font-medium text-oceanblue">
        {result.title}
      </a>

      <div className="flex gap-2 mt-1">
        <a className="relative w-32 h-20 shrink-0" href={result.url}>
          <img src={result.thumbnail?.src} className="w-32 h-20 object-cover rounded-lg shrink-0" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black/20 text-3xl">
            <PlayCircleIcon />
          </div>
          <span className="absolute bottom-1 px-2 py-0.5 left-2 text-white text-[0.65rem] bg-black/70 rounded-full">{result.video?.duration}</span>
        </a>

        <div className="flex flex-col gap-1 ml-2">
          <p className="text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: result.description }} />

          <div className="flex items-center gap-3 text-xs mt-3">
            <span>{result.video?.publisher} •</span>
            <span>{result.video?.creator} •</span>
            <span>{result.age}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoResult;
