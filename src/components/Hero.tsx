import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/images/campus/campus1.png',
    alt: 'Symbiosis Institute of Technology Campus 1',
  },
  {
    src: '/images/campus/campus2.png',
    alt: 'Symbiosis Institute of Technology Campus 2',
  },
  {
    src: '/images/campus/campus3.png',
    alt: 'Symbiosis Institute of Technology Campus 3',
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
      className="relative mt-24 h-[75vh] min-h-[480px] w-full overflow-hidden bg-black"
      aria-label="ICEI 2026 conference hero section"
    >
      {/* Campus slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/75" />
      </div>

      {/* Centered overlay content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-xs sm:text-sm tracking-[0.24em] uppercase text-gray-100">
                IEEE Conference
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white drop-shadow-md uppercase max-w-4xl mx-auto">
              ICEI 2026: 2026 IEEE Conference on Engineering Informatics
            </h1>

            <div className="mt-5 sm:mt-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-100 font-medium uppercase tracking-[0.16em]">
                Sub Theme
              </p>
              <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
                Agentic and Generative AI for Next-Generation Engineering Informatics (AGNEI)
              </p>
            </div>

            <div className="mt-7 sm:mt-8 space-y-1 text-sm sm:text-base text-gray-100">
              <p>
                <span className="font-semibold">Date:</span>{' '}
                <span>November 27–28, 2026</span>
              </p>
              <p>
                <span className="font-semibold">Organised By:</span>{' '}
                <span>Symbiosis Institute of Technology, Pune, Maharashtra, India</span>
              </p>
              <p>
                <span className="font-semibold">Technically Co-Sponsored by:</span>{' '}
                <span>IEEE Maharashtra Section</span>
              </p>
            </div>

            {/* Partner logos row */}
            <div className="mt-8 sm:mt-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-200 mb-3">
                Conference Partners
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <img
                  src="/images/logos/logo2.png"
                  alt="IEEE Conference"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/logos/logo3.png"
                  alt="Swinburne Academy"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/logos/logo4.png"
                  alt="IEEE"
                  className="h-10 sm:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot navigation indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Soft fade into main page content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
