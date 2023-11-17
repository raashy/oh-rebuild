import ImageResultSkeleton from "./ImageResultSkeleton";

const ImageResultsContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 20 }).map((result, i) => {
        return <ImageResultSkeleton />;
      })}
    </div>
  );
};

export default ImageResultsContainer;
