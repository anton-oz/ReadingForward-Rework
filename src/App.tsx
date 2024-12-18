import Nav from "./components/Nav";
import Marquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
function App() {
  return (
    <main className="h-full w-screen flex flex-col justify-center items-center bg-white">
      <Nav />
      <Marquee />
      <AboutSection />
    </main>
  );
}

export default App;
