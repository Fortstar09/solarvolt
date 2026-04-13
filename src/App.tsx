import { useState } from "react";
import About from "./components/About";
import Compare from "./components/Compare";
import CTA from "./components/CTA";
import FeaturedPackage from "./components/FeaturedPackage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ChatWindow from "./components/ChatWindow";
import ChatButton from "./components/ChatButton";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <FeaturedPackage />
        <Compare />
        <Packages />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
      <ChatButton onClick={() => setOpen(true)} />
      <ChatWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
}
