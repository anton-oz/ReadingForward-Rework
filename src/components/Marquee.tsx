export default function Marquee() {
  const studentImages = [
    "Etta2",
    "Etta7",
    "Etta9",
    "Etta10",
    "Martha2",
    "Martha4",
    "Martha6",
    "Nigel1",
    // "Nigel5",
    // "Nigel7",
    "Nigel9",
    // "Nigel10",
    "Nigel11",
  ];

  const studentImageDimensions = 400;

  return (
    <section className="w-screen h-fit pt-[4em] md:pt-[7em] flex flex-col justify-start items-center">
      {/* 
          for the css behind the marquee go to ./index.css 
        */}
      <div className="wrapper border-y-2 border-y-black h-[292.5px]">
        {studentImages.map((image, i) => (
          <img
            key={i}
            src={`/images/${image}.HEIC.jpg`}
            alt={image}
            className={`item item${i + 1}`}
            width={studentImageDimensions}
            // style={{ aspectRatio: "4 / 3" }}
          />
        ))}
      </div>
      <p className="md:w-[50%] w-[80%] p-6 border-b-2 border-black relative text-2xl font-semibold text-center">
        Advancing students on their literacy journey through personalized
        instruction and unwavering support
      </p>
    </section>
  );
}
