import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export default function InfoCarousel() {
  const carouselCards = [
    {
      title: "Who Am I?",
      content: [
        "With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from Augsburg College and Hamline University respectively, I began my career teaching grades 2-6 in Minneapolis Public Schools. Driven by a belief in everyone’s right to literacy, I trained in Orton-Gillingham and now work to empower learners in both private settings and Groves Learning Organization.",
        "I grew up moving across the country—from the forests of the Pacific Northwest to the bustling streets of the Bay Area, through Chicago's winters and the desert sun of Phoenix—before finding my home in Minnesota. Here, I spend my days with my husband, and, on the best of days, our two grown sons, family, and friends. I lose myself in long walks outdoors, knitting, and books that take me on journeys of their own; each thread, each trail, each page, another world to experience. Robin Wall Kimmerer’s words echo back to me often: “all flourishing is mutual.” We're all stitched into each other's stories.",
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
    <Carousel className="sm:w-[400px] w-[300px] sm:right-8 rounded-lg">
      <CarouselContent className="rounded-lg">
        {carouselCards.map(({ title, content }, i) => (
          <CarouselItem
            className="border border-zinc-100 bg-gray-50 rounded-lg h-[400px] overflow-y-scroll"
            key={i}
          >
            <h3 className="text-2xl font-semibold p-4 pb-2 sticky top-0 bg-gray-200 rounded-t-lg">
              {title}
            </h3>
            {Array.isArray(content) ? (
              content.map((paragraph, j) => (
                <p key={j} className="px-4 py-2 text-[1.2rem]">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="px-4 py-2  text-[1.2rem]">{content}</p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
