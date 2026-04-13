import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);

  const sections = [
    {
      title: "Discover",
      desc: "We understand your energy needs and goals.",
      bg: "bg-black text-white",
    },
    {
      title: "Design",
      desc: "We design a custom solar system for your home.",
      bg: "bg-white text-black",
    },
    {
      title: "Deliver",
      desc: "We install and activate your solar system.",
      bg: "bg-teal-500 text-white",
    },
  ];

  useEffect(() => {
    // Animate content inside each section
    contentRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 60, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {sections.map((sec, i) => (
        <section
          key={i}
          ref={(el) => {
            if (el) sectionsRef.current[i] = el;
          }}
          className={`
            relative h-screen w-full flex items-center justify-center
            sticky top-0
            ${sec.bg}
          `}
          style={{
            zIndex: i + 1,
          }}
        >
          {/* soft overlay for depth when stacking */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          <div
            ref={(el) => {
              if (el) contentRef.current[i] = el;
            }}
            className="relative text-center max-w-2xl px-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">{sec.title}</h2>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              {sec.desc}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StackedSections;
