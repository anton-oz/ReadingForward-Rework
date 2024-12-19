import InfoCarousel from "./ui/Carousel/InfoCarousel";
import InfoAccordion from "./ui/Accordion/InfoAccordion";

export default function AboutSection() {
  const placeholderDimensions = 50;

  return (
    <section className="h-full w-screen sm:p-10 p-[1.8rem] flex flex-wrap justify-center items-start">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start items-start w-full">
          {/* space-x-2 sm:space-x-6 */}
          <img
            src="https://placehold.co/250"
            height={placeholderDimensions}
            width={placeholderDimensions}
            alt="placeholder image"
            className="object-cover rounded-md h-[125px] w-[125px] md:w-[200px] md:h-[200px] mr-2"
          />
          <div className="h-full sm:h-[80%] flex flex-col justify-around items-start text-xl">
            <div>
              <h2 className="text-lg sm:text-2xl font-medium">
                Nativida Osland
              </h2>
              <p className="text-sm sm:text-base font-light text-wrap">
                Certified Orton Gillingham Reading Specialist
              </p>
            </div>
            <div className="w-fit flex flex-col justify-start items-start pt-2">
              <p className="font-medium">Contact:</p>
              <a
                href="mailto:readingforwardmn@gmail.com"
                className="flex items-center underline hover:font-normal transition-all duration-200 font-light text-sm sm:text-base text-wrap"
              >
                readingforwardmn@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center rounded-lg">
          <InfoCarousel />
        </div>
      </div>
      <div className="flex justify-center sm:max-h-[600px] max-h-full overflow-y-scroll">
        <InfoAccordion />
      </div>
    </section>
  );
}
