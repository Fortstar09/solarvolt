import { useEffect, useRef } from "react";
import gsap from "gsap";
import viteLogo from "../assets/vite.svg";
import { MoveUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  return (
    <nav className="absolute top-6 left-0 w-full z-50">
      <div
        ref={navRef}
        className="
          max-w-7xl
        mx-auto
          flex items-center justify-between
          px-3 py-3
        "
      >
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2 pl-2">
          <img src={viteLogo} className="w-10 h-10" />
          <span className="font-semibold text-white text-xl header tracking-wide">
            SolarVolt
          </span>
        </div>

        {/* CENTER - NAV PILL */}
        <div
          className="
            hidden md:flex items-center
            bg-white/20
            rounded-full
            px-2 py-1
            border border-gray-300/40
                  backdrop-blur-sm
          "
        >
          {navLinks.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <a
                href={item.href}
                className="
                  px-4 py-1.5
                  text-sm text-gray-200
                  hover:text-white
                  transition
                  whitespace-nowrap
                
                "
              >
                {item.label}
              </a>

              {/* Divider */}
              {index !== navLinks.length - 1 && (
                <span className="w-[0.5px] h-7 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT - CTA */}
        <div className="flex items-center group hover:cursor-pointer">
          <button
            className="
              flex items-center gap-3
              bg-white
              text-black
              text-sm font-medium
              px-5 py-3
              rounded-full
              hover:scale-[1.02]
              transition
              group-hover:cursor-pointer
            "
          >
            BOOK A CALL
          </button>
          <span className="bg-white p-2 rounded-full -ml-1.5 transition-transform duration-300 ease-out group-hover:cursor-pointer group-hover:rotate-90">
            <MoveUpRight color="#6a7282 " />
          </span>
        </div>
      </div>
    </nav>
  );
}
