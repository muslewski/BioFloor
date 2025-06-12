// if we want to have section intro and section image horizontally we can use it,
// we need to specify the first and second component that will be displayed together.
// framer motion makes them appear from two sides

interface HorizontalStructureProps {
  textElement: React.ReactNode;
  imageElement: React.ReactNode;
  imageOnLeft?: boolean; // Optional prop to control image position
}

export function HorizontalStructure({
  textElement,
  imageElement,
  imageOnLeft = false, // Default to image on right
}: HorizontalStructureProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-16">
      <div
        className={`w-full lg:w-1/2 ${
          imageOnLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {textElement}
      </div>
      <div
        className={`w-full lg:w-1/2 ${
          imageOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {imageElement}
      </div>
    </div>
  );
}
