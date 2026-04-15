import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import viteLogo from "../assets/vite.svg";
import { MoveUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
        {/* LEFT - LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={viteLogo} className="w-10 h-10" alt="SolarVolt" />
          <span className="font-semibold text-black text-xl font-bricolage tracking-wide hidden sm:inline">
            SolarVolt
          </span>
        </Link>

        {/* CENTER - NAV PILL (Desktop) */}
        <div className="hidden md:flex items-center bg-white/20 rounded-full px-2 py-1 border border-gray-300/40 backdrop-blur-sm">
          {navLinks.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <a
                href={item.href}
                className="px-4 py-1.5 text-sm text-gray-700 hover:text-black transition whitespace-nowrap font-medium"
              >
                {item.label}
              </a>

              {/* Divider */}
              {index !== navLinks.length - 1 && (
                <span className="w-[0.5px] h-7 bg-gray-300/60" />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center group hover:cursor-pointer">
            <button className="flex items-center gap-3 bg-black text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-black/90 transition group-hover:cursor-pointer">
              BOOK A CALL
            </button>
            <span className="bg-black p-2 rounded-full -ml-1.5 transition-transform duration-300 ease-out group-hover:cursor-pointer group-hover:rotate-90">
              <MoveUpRight color="white" size={16} />
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-black/5 rounded-lg transition font-medium text-sm"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-black/5">
              <button className="w-full flex items-center justify-center gap-2 bg-black text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-black/90 transition">
                BOOK A CALL
                <MoveUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
