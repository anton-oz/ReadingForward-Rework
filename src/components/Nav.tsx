import { animate } from "motion";

export default function Nav() {
  return (
    <nav className="w-screen flex justify-center absolute top-0 left-0 p-4 md:p-8 bg-primaryLighter">
      <div
        id="readingForwardLogoContainer"
        className="w-fit flex"
        onMouseEnter={() => {
          animate(
            "#logoImage",
            { transform: "translateX(-562%)" },
            { duration: 0.5 }
          );
          animate(
            "#logoName",
            { transform: "translateX(23%)" },
            { duration: 0.5 }
          );
        }}
        onMouseLeave={() => {
          animate(
            "#logoImage",
            { transform: "translateX(0)" },
            { duration: 0.5 }
          );
          animate(
            "#logoName",
            { transform: "translateX(0)" },
            { duration: 0.5 }
          );
        }}
      >
        <h1 id="logoName" className="text-2xl md:text-5xl font-normal">
          Reading Forward
        </h1>
        <img
          id="logoImage"
          src="/readingforward.svg"
          alt="Reading Forward Logo"
          className="h-[2em] md:h-[3em] w-[2em] md:w-[4em] text-center"
        />
      </div>
    </nav>
  );
}
