import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

type Category =
  | "all"
  | "solar-package"
  | "upgrade"
  | "portable"
  | "security"
  | "commercial";

const categoryLabels: Record<Category, string> = {
  all: "All Products",
  "solar-package": "Solar Packages",
  upgrade: "Upgrades",
  portable: "Portable Power",
  security: "Security",
  commercial: "Commercial",
};

const categoryColors: Record<Category, string> = {
  all: "bg-[#111] text-white",
  "solar-package": "bg-teal-600 text-white",
  upgrade: "bg-blue-600 text-white",
  portable: "bg-orange-600 text-white",
  security: "bg-red-600 text-white",
  commercial: "bg-purple-600 text-white",
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    "all",
    "solar-package",
    "upgrade",
    "portable",
    "security",
    "commercial",
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".product-card"),
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

  return (
    <div className="min-h-screen w-full bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-black/90 font-bricolage mb-4">
            All Products
          </h1>
          <p className="text-black/60 text-lg max-w-2xl">
            Explore our complete range of solar solutions, from affordable
            starter packs to premium commercial systems. Find the perfect
            product for your energy needs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition border
                ${
                  activeCategory === cat
                    ? categoryColors[cat] + " border-transparent"
                    : "bg-transparent text-black/60 border-black/10 hover:border-black/30 hover:text-black"
                }
              `}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-sm text-black/40 mb-8">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {activeCategory !== "all"
            ? ` in ${categoryLabels[activeCategory]}`
            : ""}
        </p>

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card group bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-lg hover:border-teal-600/20 transition duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100 rounded-t-2xl">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition duration-300"
                  style={{
                    backgroundImage: product.image
                      ? `url('${product.image}')`
                      : "none",
                  }}
                />
                {!product.image && (
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
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wide">
                  {categoryLabels[product.category as Category]}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-black group-hover:text-teal-600 transition mb-1">
                  {product.name}
                </h4>

                <p className="text-sm text-black/50 mb-4 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs text-black/30">Starting from</p>
                    <p className="text-xl font-bold text-teal-600">
                      {formatPrice(product.price)}
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black/60 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
