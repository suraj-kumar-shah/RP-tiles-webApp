import { ArrowRight } from "lucide-react";
import Button from "../ui/Button.jsx";
import { site } from "../../data/site.js";
import { resolveAsset } from "../../utils/format.js";

const galleryImages = [
  {
    title: "Marble Slab Yard",
    description: "Browse hundreds of raw and polished natural marble slabs under natural daylight.",
    image: resolveAsset("/images/hero/hero-marble-yard-1.webp"),
    tag: "Stock Yard",
  },
  {
    title: "Granite & Italian Slabs",
    description: "Imported marble and high-grade granite slabs ready for custom fabrication.",
    image: resolveAsset("/images/hero/hero-granite-slabs-2.webp"),
    tag: "Exotics",
  },
  {
    title: "Indoor Display Gallery",
    description: "Experience modern tile concepts, sanitary ware, and architectural fittings.",
    image: resolveAsset("/images/hero/hero-marble-display-3.webp"),
    tag: "Showroom",
  },
  {
    title: "Central Inventory Warehouse",
    description: "Ready stock ready for immediate dispatch across residential and commercial projects.",
    image: resolveAsset("/images/hero/hero-warehouse-slabs-4.webp"),
    tag: "Warehouse",
  },
];

export default function ShowroomGallery() {
  return (
    <section className="bg-[#f9f8f6] pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Visit Our Araria Experience Center
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Inspect full size slabs in person, feel natural surface textures, and consult with our material specialists before making your decision.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              className="rounded-md"
            >
              Get Showroom Directions
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-md bg-stone-900/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-cream backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brass-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
