import { useState, useEffect } from "react";
import { resolveAsset } from "../../utils/format.js";

const BACKGROUND_IMAGES = [
  {
    url: resolveAsset("/images/hero/hero-showroom-1.webp"),
    alt: "Luxury Italian marble showroom with illuminated slabs",
  },
  {
    url: resolveAsset("/images/hero/hero-gallery-2.webp"),
    alt: "Designer architectural stone and tile gallery",
  },
  {
    url: resolveAsset("/images/hero/hero-warehouse-3.webp"),
    alt: "Organized luxury marble slabs and stone inventory warehouse",
  },
];

const INTERVAL_MS = 2000;

const SCRIM =
  "linear-gradient(90deg, rgba(10,10,10,0.86) 0%, rgba(10,10,10,0.58) 42%, rgba(10,10,10,0.18) 75%, rgba(10,10,10,0.02) 100%)";

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        {BACKGROUND_IMAGES.map((item, index) => {
          const isActive = index === currentIdx;
          return (
            <div
              key={item.url}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
        {/* Desktop Gradient Scrim */}
        <div className="hidden sm:block absolute inset-0" style={{ backgroundImage: SCRIM }} />
        {/* Mobile Balanced Backdrop Overlay for optimal readability and background visibility */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/45" />
      </div>

      <div className="container-page relative z-20 flex min-h-[300px] flex-col justify-center py-8 sm:min-h-[400px] sm:py-16 md:max-w-xl lg:min-h-[450px] lg:py-20">
        <h1 className="font-display text-[1.65rem] font-medium leading-[1.2] tracking-tight text-white drop-shadow sm:text-3xl sm:leading-[1.18] lg:text-[2.75rem]">
          Luxury Tiles &amp; Natural Marble Slabs
        </h1>

        <p className="mt-2 max-w-md text-[13px] font-normal leading-relaxed text-stone-100 drop-shadow sm:mt-3 sm:max-w-lg sm:text-base">
          Araria&apos;s premier destination for natural marble slabs, designer tiles, and architectural fittings.
        </p>

        <div className="mt-5 flex items-center gap-1.5 sm:mt-8 sm:gap-2">
          {BACKGROUND_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIdx(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-300 sm:h-1.5 ${
                index === currentIdx ? "w-6 bg-white sm:w-7" : "w-1.5 bg-white/40 hover:bg-white/70 sm:w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
