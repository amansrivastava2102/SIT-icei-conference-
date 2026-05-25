import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/campus/campus1.png",
    alt: "Symbiosis Institute of Technology Campus 1",
  },
  {
    src: "/images/campus/campus2.png",
    alt: "Symbiosis Institute of Technology Campus 2",
  },
  {
    src: "/images/campus/campus3.png",
    alt: "Symbiosis Institute of Technology Campus 3",
  },
];

const SLIDE_INTERVAL = 4000;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative mt-24 h-[85vh] min-h-[600px] w-full overflow-hidden bg-black"
      aria-label="ICEI 2026 conference hero section"
    >
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-75" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/75" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex h-full items-start pt-[35px]">
        <div className="w-full">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-6">

            {/* IEEE tag */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-xs sm:text-sm tracking-[0.24em] uppercase text-gray-100">
                IEEE Conference #71994

              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white uppercase leading-tight tracking-wide">
              ICEI 2026: IEEE Conference on Engineering Informatics
          
            </h1>

            {/* SUB THEME */}
            <div>
            <p className="text-lg sm:text-xl md:text-4xl font-semibold text-white leading-relaxed max-w-5xl mx-auto">
            Agentic and Generative AI for Next-Generation Engineering Informatics (AGNEI)
              </p>
            </div>

            {/* DETAILS */}
            <div className="space-y-3 text-sm sm:text-base md:text-lg text-white">
              <p>
                <span className="font-bold">Date:</span> December 4-5, 2026
              </p>

              <p className="max-w-5xl mx-auto">
                <span className="font-bold">Organised By:</span>{" "}
                Symbiosis Institute of Technology, Pune, Maharashtra, India
              </p>

              <p>
                <span className="font-bold">Technically Co-Sponsored by:</span>{" "}
                IEEE Maharashtra Section (Hybrid Section)
              </p>
            </div>

            {/* CENTER PARTNER ONLY */}
            <div className="pt-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-200 mb-3">
                Conference Partners
              </p>

              <img
                src="/images/logos/logo3.png"
                alt="Swinburne Academy"
                className="mx-auto h-12 sm:h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* LIGHTER BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
    </section>
  );
};

export default Hero;