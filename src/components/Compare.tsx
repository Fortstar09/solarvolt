import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ComparisonItem {
  id: number;
  title: string;
  description: string;
}

interface ComparisonSection {
  title: string;
  subtitle: string;
  color: string;
  items: ComparisonItem[];
}

const Compare = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const comparisons: {
    traditional: ComparisonSection;
    solar: ComparisonSection;
  } = {
    traditional: {
      title: "Problems",
      subtitle: "What wasn’t working",
      color: "bg-red-600",
      items: [
        {
          id: 1,
          title: "Hard to Understand",
          description: "Content was confusing and unclear.",
        },
        {
          id: 2,
          title: "Inconsistent Design",
          description: "Different devices felt disconnected.",
        },
        {
          id: 3,
          title: "No User Connection",
          description: "Users didn’t feel engaged or confident.",
        },
      ],
    },
    solar: {
      title: "Solutions",
      subtitle: "What we improved",
      color: "bg-teal-600",
      items: [
        {
          id: 1,
          title: "Clear Structure",
          description: "Simple layout that’s easy to follow.",
        },
        {
          id: 2,
          title: "Unified Experience",
          description: "Consistent design across all devices.",
        },
        {
          id: 3,
          title: "Better Engagement",
          description: "Cleaner visuals that build trust.",
        },
      ],
    },
  };

  useEffect(() => {
    // WHITE BACKGROUND COVER (comes first)
    gsap.fromTo(
      containerRef.current,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 0.6,
        },
      },
    );

    // PROBLEMS (start BEFORE cover finishes)
    gsap.fromTo(
      problemsRef.current,
      { opacity: 0, y: 100, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: problemsRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.4,
        },
      },
    );

    // SOLUTIONS (slight delay but overlapping)
    gsap.fromTo(
      solutionsRef.current,
      { opacity: 0, y: 100, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 0.4,
          //   markers: true,
        },
      },
    );

    // CARD STAGGER
    const cards = document.querySelectorAll(".compare-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 0.2,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-25 px-6 md:px-12 h-full z-10 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto origin-top">
        {/* PROBLEMS */}
        <div ref={problemsRef} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Header */}
            <div className="bg-red-600 text-white rounded-3xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2">
                {comparisons.traditional.title}
              </h3>
              <p className="text-sm opacity-90">
                {comparisons.traditional.subtitle}
              </p>
            </div>

            {/* Items */}
            {comparisons.traditional.items.map((item) => (
              <div
                key={item.id}
                className="compare-card bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                    {item.id}
                  </div>
                  <h4 className="font-semibold">Problem</h4>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTIONS */}
        <div ref={solutionsRef}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Header */}
            <div className="bg-teal-600 text-white rounded-3xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2">
                {comparisons.solar.title}
              </h3>
              <p className="text-sm opacity-90">{comparisons.solar.subtitle}</p>
            </div>

            {/* Items */}
            {comparisons.solar.items.map((item) => (
              <div
                key={item.id}
                className="compare-card bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <h4 className="font-semibold">Solution</h4>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
