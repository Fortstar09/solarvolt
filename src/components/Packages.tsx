import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

// const categoryLabels: Record<string, string> = {
//   all: "All Packages",
//   "solar-package": "Solar Packages",
//   upgrade: "Upgrades",
//   portable: "Portable Power",
//   security: "Security",
//   commercial: "Commercial",
// };

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
};

const Packages = () => {
  const [activeCategory] = useState<string>("solar-package");
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Get featured packages (first 3 solar packages)
  const featuredPackages = PRODUCTS.filter(
    (pkg) => pkg.category === "solar-package",
  ).slice(0, 3);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".pkg-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.4,
          ease: "power2.out",
        },
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-black/30 text-sm font-light">(02)</span>
          <p className="text-xl font-bold text-[#333]/80 leading-tight mb-8">
            Featured Solar Packages
          </p>
        </div>

        {/* Title + CTA Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black/90 font-bricolage max-w-2xl leading-tight">
            Start saving on{" "}
            <span className="text-teal-600 font-normal">electricity today</span>
          </h2>

          {/* View All Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition duration-300 whitespace-nowrap"
          >
            View All Products
            <MoveUpRight size={16} />
          </Link>
        </div>

        {/* Featured Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredPackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/products/${pkg.id}`}
              className="pkg-card group bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-lg hover:border-teal-600/20 transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
                  style={{
                    backgroundImage: pkg.image ? `url('${pkg.image}')` : "none",
                  }}
                />
                {!pkg.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-teal-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                )}
                <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wide">
                  Solar Package
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-black group-hover:text-teal-600 transition">
                  {pkg.name}
                </h4>

                <p className="text-sm text-black/50 mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs text-black/30">Starting from</p>
                    <p className="text-xl font-bold text-teal-600">
                      {formatPrice(pkg.price)}
                    </p>
                  </div>

                  <div className="flex items-center group/btn">
                    <button className="px-4 py-2 border border-black/10 text-black text-sm rounded-full font-medium group-hover/btn:bg-black/5 transition">
                      View
                    </button>
                    <button className="w-9 h-9 flex -ml-1.5 items-center justify-center rounded-full bg-[#333] text-white transition group-hover/btn:rotate-90 group-hover/btn:bg-teal-600">
                      <MoveUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-teal-50 rounded-2xl border border-teal-200">
          <p className="text-black/70 mb-4">
            Not sure which package is right for you?
          </p>
          <button className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
