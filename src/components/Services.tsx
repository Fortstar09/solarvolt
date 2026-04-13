import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Wrench,
  TrendingUp,
  Shield,
  Leaf,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Zap,
    title: "Installation",
    description: "Professional installation by certified technicians",
    details: "We handle everything from consultation to activation",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular maintenance and support for optimal performance",
    details: "Keep your system running at peak efficiency",
  },
  {
    icon: TrendingUp,
    title: "Monitoring",
    description: "Real-time system monitoring and analytics",
    details: "Track your energy production and consumption",
  },
  {
    icon: Shield,
    title: "Warranty",
    description: "5-year comprehensive warranty on all systems",
    details: "Peace of mind with complete protection",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Help the environment while saving money",
    details: "Reduce your carbon footprint significantly",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support",
    details: "We're always here when you need us",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector(".services-heading"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateY: -10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="services-heading mb-16">
          <span className="text-black/30 text-sm font-light">(02)</span>
          <div className="mt-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-black/90 font-bricolage leading-tight mb-6">
              Why choose{" "}
              <span className="text-teal-600 font-normal">SolarVolt</span>?
            </h2>
            <p className="text-black/60 text-lg">
              We don't just sell solar systems—we provide complete solutions with
              professional service, warranty protection, and lifetime support.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 border border-black/5 hover:border-teal-600/20 hover:shadow-lg transition duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600/10 group-hover:bg-teal-600 transition duration-300">
                  <Icon
                    className="text-teal-600 group-hover:text-white transition duration-300"
                    size={24}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-black/60 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-black/40 text-xs italic border-l-2 border-teal-600 pl-3">
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-black/60 mb-6">
            Ready to switch to clean, reliable solar energy?
          </p>
          <button className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition duration-300 shadow-lg hover:shadow-xl">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
