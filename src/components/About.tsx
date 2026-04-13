import { useEffect, useRef } from "react";
import { MoveUpRight } from "lucide-react";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate left content
    if (leftContentRef.current) {
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }

    // Animate right content
    if (rightContentRef.current) {
      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.4,
        },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-100">
          {/* LEFT SIDE */}
          <div
            ref={leftContentRef}
            className="flex flex-col justify-between h-full"
          >
            {/* Number Badge */}
            <div className=" font-bricolage">
              <span className="text-black/30 text-sm font-light">(01)</span>
              <p className="text-xl font-bold text-[#333]/80 mb-8 leading-tight">
                About Us
              </p>
            </div>

            {/* Description */}
            <p className="text-black/70 text-lg leading-relaxed max-w-md">
              We Ardently Strive To Encapsulate Life's Most Precious Moments,
              Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic.
              With The Timeless Essence Of The Human Experience.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={rightContentRef}
            className="flex flex-col h-full justify-between"
          >
            {/* Main Heading */}
            <h3 className="text-4xl md:text-6xl font-light text-black/90 mb-12 leading-tight font-bricolage">
              <span className="text-black">Photography</span> is driven by a
              deep passion for{" "}
              <span className="text-teal-600 font-normal">
                capturing life's precious moments
              </span>{" "}
              with artistry and a touch of magic
            </h3>

            {/* Learn More Button */}
            <div className="flex items-center group w-fit">
              <button className="px-8 py-3 border border-black/10 text-black rounded-full font-medium group-hover:cursor-pointer group-hover:bg-black/10 transition flex items-center gap-3 backdrop-blur-sm">
                Watch our Story
              </button>
              <button className="w-12 h-12 flex -ml-2 items-center justify-center rounded-full bg-[#333] text-white transition group-hover:cursor-pointer group-hover:rotate-90 group-hover:bg-teal-600">
                <MoveUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
