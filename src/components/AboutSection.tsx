import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
  const placeholderDimensions = 50;
  const carouselCards = [
    {
      title: "Who Am I?",
      content: [
        "With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from Augsburg College and Hamline University respectively, I began my career teaching grades 2-6 in Minneapolis Public Schools. Driven by a belief in everyone’s right to literacy, I trained in Orton-Gillingham and now work to empower learners in both private settings and Groves Learning Organization.",
        "I grew up moving across the country—from the forests of the Pacific Northwest to the bustling streets of the Bay Area, through Chicago's winters and the desert sun of Phoenix—before finding my home in Minnesota. Here, I spend my days with my husband, and, on the best of days, our two grown sons, family, and friends. I lose myself in long walks outdoors, knitting, and books that take me on journeys of their own; each thread, each trail, each page, another world to experience. Robin Wall Kimmerer’s words echo back to me often: “all flourishing is mutual.” We’re all stitched into each other’s stories, whether we see it or not.",
      ],
    },
    {
      title: "What I do",
      content:
        "The goal is simple: to support students on their literacy journey with structured and personalized instruction. I believe in giving you the tools and guidance you need to understand language deeply. With tailored strategies and steady support, I'll assist you in understanding sounds and word patterns, improving your reading and writing skills with accuracy and confidence. Together, we move forward, unlocking the boundless possibilities that literacy affords.",
    },
    {
      title: "What I offer",
      content:
        "As an educator, my focus lies in teaching reading, spelling, and writing using Structured Literacy. What's notable about Structured Literacy is its universal effectiveness, benefiting students at every level, whether they're dyslexic, have other diverse learning needs, catching up or excelling. With me, students receive tailored, one-on-one Orton Gillingham instruction in reading, writing, and spelling, ensuring personalized support for their unique journey.",
    },
  ];
  return (
    <section className="h-screen w-screen p-10 flex justify-start items-start">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start items-start w-full space-x-3 sm:space-x-6">
          <img
            src="https://placehold.co/250"
            height={placeholderDimensions}
            width={placeholderDimensions}
            alt="placeholder image"
            className="object-cover rounded-md h-[150px] w-[150px] md:w-[200px] md:h-[200px] "
          />
          <div className="h-full sm:h-[80%] flex flex-col justify-around items-start text-xl">
            <div>
              <h2 className="text-lg sm:text-2xl font-medium">
                Nativida Osland
              </h2>
              <p className="text-sm sm:text-base font-light text-wrap w-52 sm:w-full">
                Certified Orton Gillingham Reading Specialist
              </p>
            </div>
            <div className="flex flex-col justify-start items-start pt-2">
              <p className="font-medium">Contact:</p>
              <a
                href="mailto:readingforwardmn@gmail.com"
                className="flex items-center underline hover:font-normal transition-all duration-200 font-light text-sm sm:text-base text-wrap w-52 sm:w-full"
              >
                readingforwardmn@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-[400px] right-8">
            <CarouselContent>
              {carouselCards.map(({ title, content }, i) => (
                <CarouselItem
                  className="border border-zinc-100 bg-gray-50 rounded-lg overflow-y-scroll h-[400px]"
                  key={i}
                >
                  <h3 className="text-2xl font-semibold p-4 pb-2 sticky top-0 bg-gray-200 rounded-t-lg">
                    {title}
                  </h3>
                  {Array.isArray(content) ? (
                    content.map((paragraph, j) => (
                      <p key={j} className="px-4 pb-2 text-[1.2rem]">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="px-4 pb-1  text-[1.2rem]">{content}</p>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* <div className="w-full flex flex-wrap md:justify-normal justify-center space-x-2">
        {carouselCards.map(({ title, content }, i) => (
          <div
            key={i}
            id={`card-${i}`}
            className={`w-[600px] h-[225px] my-2 bg-gray-100 rounded-md overflow-y-scroll absolute ${
              i !== 0 ? "hidden" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold p-4 pb-2 sticky top-0 bg-gray-100">
              {title}
            </h3>
            {Array.isArray(content) ? (
              content.map((paragraph, j) => (
                <p key={j} className="px-4 pb-2 text-[1.2rem]">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="px-4 pb-1  text-[1.2rem]">{content}</p>
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
}
