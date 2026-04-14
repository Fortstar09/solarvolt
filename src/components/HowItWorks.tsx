import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    emoji: "🤖",
    title: "Smart AI Assistant",
    description:
      "Chat with our AI to understand your energy needs and get instant, tailored solar recommendations anytime.",
    benefit: "Get instant personalized guidance",
  },
  {
    emoji: "📍",
    title: "Site Assessment",
    description:
      "Our experts evaluate your space for sunlight, roof strength, and optimal panel placement. We use advanced tools for accuracy.",
    benefit: "Maximum system efficiency guaranteed",
  },
  {
    emoji: "⚡",
    title: "Custom Design",
    description:
      "We create a solar system specifically designed for your lifestyle. Every component is chosen for durability and performance.",
    benefit: "Perfect fit for your needs",
  },
  {
    emoji: "🔧",
    title: "Professional Installation",
    description:
      "Our certified technicians handle everything. Quick installation means you're saving on power bills faster.",
    benefit: "Start saving money immediately",
  },
  {
    emoji: "🎉",
    title: "System Activation",
    description:
      "Your system goes live and starts producing clean energy. We monitor everything to ensure peak performance.",
    benefit: "5-year warranty, lifetime support",
  },
];

const HowItWorks = ({ openChat }: { openChat: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate left content
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            once: true,
          },
        },
      );
    }

    // Stagger card animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const WhatsappMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=2347019155892&text=I+will+like+a+free+Consultation+with+your+brand`,
      "_blank",
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-teal-50 to-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Left Side - Why It Works */}
        <div ref={leftRef} className="mb-16 md:mb-20 max-w-2xl">
          <span className="text-black/30 text-sm font-light">(03)</span>
          <h2 className="text-4xl md:text-5xl font-light text-black/90 font-bricolage leading-tight my-6">
            Your path to energy{" "}
            <span className="text-teal-600 font-normal">independence</span>
          </h2>
          <p className="text-black/60 text-lg leading-relaxed mb-6">
            We've made it simple. Five straightforward steps from consultation
            to enjoying clean, reliable solar power. Most customers report
            saving 60-80% on electricity bills within the first month.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-black">Quick Process</p>
                <p className="text-sm text-black/60">
                  From consultation to activation in 2-4 weeks
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-black">Expert Team</p>
                <p className="text-sm text-black/60">
                  Certified installers with 10+ years experience
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-black">Money-Back Guarantee</p>
                <p className="text-sm text-black/60">
                  100% satisfaction or your money back in 30 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Cards */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {/* Card with tilt effect */}
              <div className="bg-white border border-black/8 rounded-2xl p-8 md:p-10 hover:border-teal-600/30 hover:shadow-lg transition duration-300 cursor-default">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Big Emoji */}
                  <div className="text-6xl md:text-7xl flex-shrink-0 group-hover:scale-110 transition duration-300">
                    {step.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Step number */}
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                      Step {index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-black my-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/60 text-base md:text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Benefit Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600/10 rounded-full">
                      <span className="text-sm text-teal-700 font-medium">
                        {step.benefit}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Step Indicator */}
                  <div className="hidden md:flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-teal-600 to-teal-200" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-3xl p-10 md:p-16 border border-teal-200/50">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-black/60 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ homes and businesses in Nigeria already enjoying the
            benefits of solar energy. Your free consultation is just one click
            away.
          </p>
          <div className="space-y-3 md:space-x-3 ">
            <button
              onClick={WhatsappMessage}
              className="px-6 py-3 md:px-8 md:py-4 cursor-pointer text-xs md:text-base bg-teal-600 text-white rounded-full font-normal hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </button>
            <button
              onClick={openChat}
              className="px-6 py-3 md:px-8 md:py-4 text-xs md:text-base cursor-pointer bg-teal-600 text-white rounded-full font-normal hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Ask Voltbot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
