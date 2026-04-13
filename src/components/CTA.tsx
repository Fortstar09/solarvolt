import { MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#111] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Ready to switch?
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white font-bricolage leading-tight">
              Start saving on{" "}
              <span className="text-teal-400">electricity</span> today
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <p className="text-white/50 text-lg leading-relaxed">
              Join over 500 homes and businesses across Nigeria that have made
              the switch to clean, reliable solar energy. Our team handles
              everything from consultation to installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <div className="flex items-center group hover:cursor-pointer">
                <button className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium group-hover:bg-teal-500 transition">
                  Book Free Consultation
                </button>
                <span className="bg-teal-600 p-3 rounded-full -ml-1.5 transition-transform duration-300 group-hover:rotate-90 group-hover:bg-teal-500">
                  <MoveUpRight color="white" size={18} />
                </span>
              </div>

              {/* Secondary CTA */}
              <button className="px-8 py-3 border border-white/20 text-white/70 rounded-full font-medium hover:border-white/40 hover:text-white transition">
                View All Packages
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-2">
              {["Free site assessment", "No hidden fees", "5-year warranty"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-teal-400/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </div>
                    <span className="text-sm text-white/40">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
