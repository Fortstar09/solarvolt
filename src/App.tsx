import About from "./components/About";
import Compare from "./components/Compare";
import FeaturedPackage from "./components/FeaturedPackage";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
// import StackedSections from "./components/ScrollSection";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturedPackage />
      <Compare />
      {/* <StackedSections /> */}
      <HowItWorks />
      <div className="h-dvh w-full bg-teal-50" />
    </div>
  );
}
