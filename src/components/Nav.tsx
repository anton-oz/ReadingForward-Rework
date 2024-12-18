export default function Nav() {
  return (
    <nav className="w-screen flex justify-center absolute top-0 left-0 p-4 md:p-8 space-x-4 bg-primaryLighter">
      <h1 className="text-2xl md:text-5xl font-normal ">Reading Forward</h1>
      <img
        src="/readingforward.svg"
        alt="Reading Forward Logo"
        className="h-[2em] md:h-[3em] w-[2em] md:w-[4em] text-center"
      />
    </nav>
  );
}
