import { AlarmClock, MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SolarPackage } from "../utils/solar-package";
import { Link } from "react-router-dom";

interface SolarPackageType {
  id: string;
  category: "low" | "mid" | "premium" | "commercial";
  name: string;
  description: string;
  price: number;
  image: string;
  otherImages: string[];
  components: string[];
  powers: string[];
  backupTime: string;
}

const FeaturedPackageComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Get featured package (first premium package) and other packages
  const featuredPackage = SolarPackage.find(
    (pkg) => pkg.category === "premium",
  ) as SolarPackageType;
  const otherPackages = SolarPackage.filter(
    (pkg) => pkg.category !== "premium",
  ).slice(0, 3) as SolarPackageType[];

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }
  }, []);

  return (
    <section className="relative w-full bg-teal-50 py-20 px-6 md:px-12">
      <div ref={contentRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-black/30 text-sm font-light">(02)</span>
          <p className="text-xl font-bold text-[#333]/80 leading-tight">
            Featured Solar Packages
          </p>
        </div>

        {/* Featured Package */}
        {featuredPackage && (
          <div className="mb-4 md:mb-10 bg-white rounded-3xl group border border-[#333]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 lg:gap-8">
              {/* Featured Image */}
              <div className="relative rounded-3xl overflow-hidden h-80 md:h-full bg-gradient-to-br from-teal-400 to-gray-600">
                <div
                  className="w-full h-full bg-cover group-hover:scale-105 transition bg-center"
                  style={{
                    backgroundImage: `url('${
                      featuredPackage.image || "/hero/hero-img.jpg"
                    }')`,
                  }}
                />
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center p-5">
                <span className="text-sm font-medium text-teal-600 mb-1 uppercase">
                  {featuredPackage.category} - Premium
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
                  {featuredPackage.name}
                </h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {featuredPackage.description}
                </p>

                {/* Components */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 underline mb-2">
                    Key Components:
                  </p>
                  <ul className="space-y-2">
                    {featuredPackage.components.map((component, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backup Time */}
                <div className="mb-5 flex gap-2 items-center">
                  <AlarmClock color="#4a5565" size={16} />
                  <p className="font-light text-gray-600 text-sm">
                    {featuredPackage.backupTime}
                  </p>
                </div>

                <div className="flex justify-between">
                  {/* Price */}
                  <div className="">
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-3xl md:text-4xl font-bold text-teal-600">
                      {formatPrice(featuredPackage.price)}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <Link
                    to={`/products/${featuredPackage.id}`}
                    className="flex items-center group w-fit"
                  >
                    <button className="hidden lg:flex px-8 py-3 border border-black/10 text-black rounded-full font-medium group-hover:cursor-pointer group-hover:bg-black/10 transition flex items-center gap-3 backdrop-blur-sm">
                      GET QUOTE
                    </button>
                    <button className="w-12 h-12 flex -ml-2 items-center justify-center rounded-full bg-[#333] text-white transition group-hover:cursor-pointer group-hover:rotate-90 group-hover:bg-teal-600">
                      <MoveUpRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Packages Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:gap-8">
            {otherPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group mb-3 md:mb-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
                    style={{
                      backgroundImage: `url('${
                        pkg.image || "/hero/hero-img.jpg"
                      }')`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-600 uppercase block">
                      {pkg.category}
                    </span>
                    {/* Backup Time */}
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <AlarmClock color="#4a5565" strokeWidth={1.5} size={12} />
                      {pkg.backupTime}
                    </p>
                  </div>
                  <h4 className="text-lg font-bold text-black mt-2 mb-2 group-hover:text-teal-600 transition">
                    {pkg.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-teal-600">
                      {formatPrice(pkg.price)}
                    </p>
                    <Link
                      to={`/products/${pkg.name}`}
                      className="w-10 h-10 flex -ml-2 items-center justify-center rounded-full bg-[#333] text-white transition group-hover:cursor-pointer group-hover:rotate-90 group-hover:bg-teal-600"
                    >
                      <MoveUpRight size={16} />
                    </Link>
                  </div>

                  {/* Quick Features */}
                  {/* <div className="space-y-2">
                    {pkg.powers.slice(0, 3).map((power, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        ✓ {power}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="/products"
            className="px-8 cursor-pointer py-3 border border-black/10 text-black rounded-full font-medium group-hover:cursor-pointer hover:bg-teal-600 hover:text-white hover:border-none transition flex items-center gap-3 backdrop-blur-sm"
          >
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackageComponent;
