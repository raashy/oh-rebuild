import { ImageResult as ImageResultType } from "@/actions/brave/types/results";
import { Skeleton } from "../ui/skeleton";

const ImageResult = ({ result }: { result: ImageResultType }) => {
  return (
    <div className="flex flex-col">
      <a href={result.properties.url}>
        <div className="relative">
          <img src={result.thumbnail.src} className="w-72 h-48 object-cover shadow-md rounded-lg shrink-0 hover:scale-[1.025] transition" />
          <Skeleton className="absolute inset-0 rounded-lg -z-10" />
        </div>
      </a>
      <div className="flex items-center justify-start gap-2 line-clamp-1 mt-2.5">
        <img src={result.meta_url.favicon} className="w-3 h-3 object-contain" />
        <span className="text-xs">{result.source}</span>
      </div>
      <a className="text-sm font-medium line-clamp-1 hover:underline text-oceanblue" href={result.url}>
        {result.title}
      </a>
    </div>
  );
};

export default ImageResult;
