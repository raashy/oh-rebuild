import { VideoResult as VRType } from "@/actions/brave/types/results";
import VideoResult from "./VideoResult";
import { FileVideoIcon } from "lucide-react";

export const VideoResultsContainer = ({ results }: { results: VRType[] }) => {
  return (
    <div>
      <h1 className="text-xl flex items-center justify-start border-b py-3">
        <FileVideoIcon className="inline-block w-6 h-6 mr-2 opacity-50" />
        Videos
      </h1>

      {results.map((result) => (
        <VideoResult key={result.title} result={result} />
      ))}
    </div>
  );
};
