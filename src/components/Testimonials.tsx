import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Adebayo Okonkwo",
    role: "Homeowner, Lagos",
    quote:
      "SolarVolt changed everything. My electricity bills dropped by 80% and I haven't experienced a blackout in 8 months. Best investment I've ever made.",
    rating: 5,
  },
  {
    name: "Ngozi Eze",
    role: "Salon Owner, Abuja",
    quote:
      "My salon runs perfectly now even when NEPA takes light. The Salon Power Pack pays for itself — customers keep coming because we never close early.",
    rating: 5,
  },
  {
    name: "Emeka Chukwu",
    role: "Student, Port Harcourt",
    quote:
      "The Starter Pack was exactly what I needed for my self-con. Affordable, simple installation, and my devices stay charged all day.",
    rating: 5,
  },
  {
    name: "Fatima Bello",
    role: "Business Owner, Kano",
    quote:
      "Professional team, honest pricing, and the system works as promised. SolarVolt is the real deal — no hidden charges, no nonsense.",
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll(".testimonial-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
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
    <section ref={sectionRef} className="relative w-full bg-[#f8fffe] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-black/30 text-sm font-light">(04)</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-1">
            <p className="text-xl font-bold text-[#333]/80 leading-tight">
              What our customers say
            </p>
            <p className="text-sm text-black/40 max-w-xs text-right hidden md:block">
              Over 500 happy homes and businesses powered across Nigeria
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-6 border border-black/6 hover:shadow-md hover:border-teal-200 transition duration-300 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-teal-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-black/60 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-black/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
