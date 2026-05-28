import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/home" },

    {
      label: "About Us",
      dropdown: [
        { label: "The Institute", href: "/institute" },
        { label: "The University", href: "/university" },
        { label: "About Pune", href: "/AboutPune" },
      ],
    },

    { label: "Committees", href: "#committees" },
    { label: "Places", href: "/AboutPune" },
    { label: "For Authors", href: "/authors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">

      {/* CONTAINER */}
      <nav className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between min-h-[90px] py-2">

          {/* LEFT — LOGOS */}
          <div className="flex items-center gap-3 lg:gap-1 flex-shrink">

            {/* LOGO 1 */}
            <img
              src="/images/logos/logo1.png"
              alt="SIT Pune"
              className="h-14 md:h-[85px] w-auto object-contain"
            />

            {/* LOGO 5 */}
            <img
              src="/images/logos/logo5.png"
              alt="SIT Pune 1"
              className="h-12 md:h-[60px] w-auto object-contain"
            />

          </div>

          {/* CENTER NAVIGATION */}
          <div className="hidden lg:flex flex-1 justify-center items-center">

            <div className="flex items-center gap-5 xl:gap-6">

              {menuItems.map((item) => (
                <div key={item.label} className="relative group">

                  {/* NORMAL LINK */}
                  {!item.dropdown ? (
                    <a
                      href={item.href}
                      className="text-[14px] md:text-[15px] font-medium text-gray-800 hover:text-[#1E3A8A] whitespace-nowrap transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      {/* DROPDOWN BUTTON */}
                      <button className="flex items-center gap-1 text-[14px] md:text-[15px] font-medium text-gray-800 hover:text-[#1E3A8A] whitespace-nowrap transition-colors duration-300">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* DROPDOWN MENU */}
                      <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-5 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}

                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* SUBMIT BUTTON */}
              <a
                href="https://easychair.org/conferences/?conf=icei2026"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-5 py-2.5 text-[13px] font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow hover:shadow-md transition-all duration-300 whitespace-nowrap"
              >
                Submit Paper
              </a>

            </div>
          </div>

          {/* RIGHT LOGOS */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-4">

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

            <img
              src="/images/logos/logo6.jpg"
              alt="SSIT Logo"
              className="h-12 md:h-12 w-auto object-contain"
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
              <div key={item.label}>

                {!item.dropdown ? (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-800 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    <div className="px-3 py-2 font-medium text-gray-800">
                      {item.label}
                    </div>

                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                )}

              </div>
            ))}

            <a
              href="https://easychair.org/account/signin?l=1462013209260267560.1779723204.90191373"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-[#1E3A8A] to-blue-600 shadow-sm"
            >
              Submit Paper
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;