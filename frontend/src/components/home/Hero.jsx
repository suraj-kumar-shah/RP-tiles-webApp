import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BACKGROUND_IMAGES = [
  {
    url: "/images/hero/hero-showroom-1.webp",
    alt: "Luxury Italian marble showroom with illuminated slabs",
  },
  {
    url: "/images/hero/hero-gallery-2.webp",
    alt: "Designer architectural stone and tile gallery",
  },
  {
    url: "/images/hero/hero-warehouse-3.webp",
    alt: "Organized luxury marble slabs and stone inventory warehouse",
  },
];

const INTERVAL_MS = 6000;

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
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
        <div className="absolute inset-0" style={{ backgroundImage: SCRIM }} />
      </div>

      <div className="container-page relative z-20 flex min-h-[380px] flex-col justify-center py-14 sm:min-h-[430px] sm:py-16 md:max-w-xl lg:min-h-[480px] lg:py-20">
        <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-cream text-balance sm:text-4xl lg:text-[2.85rem]">
          Luxury Tiles &amp; Natural Marble Slabs
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
          Curated collection of natural marble slabs, designer tiles, and architectural fittings for modern spaces.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            to="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium tracking-wide text-stone-900 shadow-sm transition-all duration-200 hover:bg-stone-100"
          >
            <span>Explore Collection</span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to="/quote"
            className="inline-flex items-center justify-center rounded-md border border-white/40 bg-black/20 px-5 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-2">
          {BACKGROUND_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIdx(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIdx ? "w-6 bg-cream" : "w-2 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
