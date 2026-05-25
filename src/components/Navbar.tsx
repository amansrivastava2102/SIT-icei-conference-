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
      <nav className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between min-h-[90px] py-2">

          {/* LEFT — LOGOS */}
          <div className="flex items-center gap-3 lg:gap-3 flex-shrink">

            {/* LOGO 1 */}
            <img
              src="/images/logos/logo1.png"
              alt="SIT Pune"
              className="h-14 md:h-[90px] w-auto object-contain"
            />

            {/* LOGO 5 */}
            <img
              src="/images/logos/logo5.png"
              alt="SIT Pune 1"
              className="h-12 md:h-[70px] w-auto object-contain"
            />

          </div>

          {/* CENTER NAVIGATION */}
          <div className="hidden lg:flex flex-1 justify-center items-center">

            {/* REDUCED GAP */}
            <div className="flex items-center gap-5 xl:gap-6">

              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[14px] md:text-[15px] font-medium text-gray-800 hover:text-[#1E3A8A] whitespace-nowrap transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}

              {/* SUBMIT BUTTON */}
              <button className="ml-1 px-5 py-2.5 text-[13px] font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow hover:shadow-md transition-all duration-300 whitespace-nowrap">
                Submit Paper
              </button>

            </div>
          </div>

          {/* RIGHT LOGOS */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0 ml-4">

            {/* SWINBURNE */}
            <img
              src="/images/logos/logo3.png"
              alt="Swinburne Academy"
              className="h-10 md:h-12 w-auto object-contain"
            />

            {/* LOGO 2 */}
            <img
              src="/images/logos/logo2.png"
              alt="Conference Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />

            {/* IEEE */}
            <img
              src="/images/logos/logo4.png"
              alt="IEEE"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-3 text-gray-700"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">

          <div className="px-4 py-4 space-y-2">

            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              className="mt-3 w-full px-4 py-3 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow-sm"
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