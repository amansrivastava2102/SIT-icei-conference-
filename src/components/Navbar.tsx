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
      <nav className="max-w-[1370px] px-4">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between h-[95px]">

          {/* LEFT — LOGO + TEXT */}
          <div className="flex items-center gap-9">

            {/* LOGO */}
            <img
              src="/images/logos/logo1.png"
              alt="SIT Pune"
              className="h-[65px] object-contain"
            />

            {/* TEXT */}
            <div className="leading-tight">
              <p className="text-[18px] font-bold text-red-600 uppercase tracking-wide">
                SYMBIOSIS INSTITUTE OF TECHNOLOGY, PUNE
              </p>

              <p className="text-[14px] text-gray-800">
                Constituent of Symbiosis International (Deemed University), Pune
              </p>

              <p className="text-[11px] text-gray-600">
                Established under Section 3 of the UGC Act of 1956
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] font-medium text-gray-800 hover:text-[#1E3A8A] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex">
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
    </header>
  );
};

export default Navbar;