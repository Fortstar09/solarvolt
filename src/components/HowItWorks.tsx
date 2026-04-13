import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  const steps = [
    {
      title: "Consultation",
      desc: "We understand your energy needs.",
    },
    {
      title: "Site Inspection",
      desc: "We assess your space and sunlight.",
    },
    {
      title: "System Design",
      desc: "We create a custom solar plan.",
    },
    {
      title: "Installation",
      desc: "Our team installs your system.",
    },
    {
      title: "Activation",
      desc: "Your solar system goes live.",
    },
  ];

  useEffect(() => {
    stepsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.4,
            // markers: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-teal-600 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT - STICKY TEXT */}
        <div className="relative flex justify-start items-start py-20">
          <div className="md:sticky md:top-1/4 ">
            <div className=" font-bricolage">
              <span className="text-white/30 text-sm font-light">(01)</span>
              <p className="text-xl font-bold text-white/80 mb-8 leading-tight">
                How it works
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold py-20 text-white inline-flex flex-col gap-10 items-start">
              <span className="block inline-flex justify-center items-end gap-4">
                Why
                <span className="w-50 h-20 rounded-full bg-white block bg-[url('/hero/hero-img.jpg')] bg-cover bg-center bg-no-repeat"></span>
              </span>
              Choose SolarVolt
            </h2>
          </div>
        </div>

        {/* RIGHT - SCROLLING STEPS */}
        <div className="space-y-24 ">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="min-h-[60vh] flex flex-col justify-center pl-6"
            >
              <div className="mb-3 text-sm text-gray-400">Step {index + 1}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
