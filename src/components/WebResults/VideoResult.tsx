import { VideoResult as VideoResultType } from "@/actions/brave/types/results";
import { PlayCircleIcon } from "lucide-react";
import React, { useTransition } from "react";

const VideoResult = ({ result }: { result: VideoResultType }) => {
  return (
    <div key={result.title} className="flex flex-row gap-2 overflow-hidden py-4 border-b">
      <a className="relative w-32 h-20 shrink-0" href={result.url}>
        <img src={result.thumbnail?.src} className="w-32 h-20 object-cover rounded-lg shrink-0" />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/20 text-3xl">
          <PlayCircleIcon />
        </div>
        <span className="absolute bottom-1 px-2 py-0.5 left-2 text-white text-[0.65rem] bg-black/70 rounded-full">{result.video?.duration}</span>
      </a>

      <div className="flex flex-col gap-1 ml-2 items-start h-full">
        <a href={result.url} className="line-clamp-1 hover:underline font-medium text-oceanblue">
          {result.title}
        </a>
        <p className="text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: result.description }} />
      </div>
    </div>
  );
};

export default VideoResult;
