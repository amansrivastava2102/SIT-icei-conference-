import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Committees", href: "#committees" },
    { label: "Places", href: "#places" },
    { label: "For Authors", href: "#authors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      {/* CONTAINER */}
      <nav className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN ROW */}
        <div className="flex items-center justify-between min-h-[80px] py-3">

          {/* LEFT — LOGO + TEXT */}
          <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">

            {/* LOGO */}
            <img
              src="/images/logos/logo1.png"
              alt="SIT Pune"
              className="h-10 sm:h-14 md:h-16 object-contain"
            />

            {/* TEXT */}
            <div className="leading-tight">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-red-600 uppercase tracking-wide whitespace-nowrap">
                SYMBIOSIS INSTITUTE OF TECHNOLOGY, PUNE
              </p>

              <p className="text-[11px] sm:text-[13px] md:text-[14px] text-gray-800">
                Constituent of Symbiosis International (Deemed University), Pune
              </p>

              <p className="text-[10px] sm:text-[11px] text-gray-600">
                Established under Section 3 of the UGC Act of 1956
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-8 xl:gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] md:text-[16px] font-medium text-gray-800 hover:text-[#1E3A8A] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex flex-shrink-0">
            <button className="px-8 py-3 text-[14px] font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow hover:shadow-md">
              Submit Paper
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-4 text-gray-700"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-2 py-2 text-gray-800 hover:bg-gray-50 rounded-md whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              className="mt-3 inline-flex w-full items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Paper
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;