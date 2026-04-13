const Footer = () => {
  const links = {
    Packages: ["Student / Starter", "Home Solutions", "Premium Packs", "Commercial"],
    Company: ["About Us", "How It Works", "Our Projects", "Contact"],
    Support: ["Book a Consultation", "FAQs", "Warranty Policy", "Installation Guide"],
  };

  return (
    <footer className="w-full bg-[#0a0a0a] px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-white text-2xl font-bricolage tracking-wide">
                SolarVolt
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              Clean, reliable solar energy for homes, students, and businesses
              across Nigeria.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/30 text-sm hover:text-white/70 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} SolarVolt. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 text-xs hover:text-white/40 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
