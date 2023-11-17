import { ImageResult as IRType } from "@/actions/brave/types/results";
import ImageResult from "./ImageResult";

const ImageResultsContainer = ({ results }: { results: IRType[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((result, i) => {
        return <ImageResult result={result} />;
      })}
    </div>
  );
};

export default ImageResultsContainer;
