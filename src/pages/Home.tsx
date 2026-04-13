import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import FeaturedPackage from "../components/FeaturedPackage";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <About />
      <FeaturedPackage />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
