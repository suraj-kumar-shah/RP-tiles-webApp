import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const spaces = [
  {
    title: "Living & Dining Halls",
    description: "Bookmatched natural marble and large format vitrified tiles.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    link: "/products?category=marble",
    tag: "Flooring & Walls",
  },
  {
    title: "Designer Bathrooms",
    description: "Anti skid floor tiles, rain showers, and countertop vanities.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    link: "/products?category=sanitary-ware",
    tag: "Sanitary & Tiles",
  },
  {
    title: "Modular Kitchens",
    description: "Polished quartz slabs, wall tiles, and pull down sink faucets.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
    link: "/products?category=faucets-fittings",
    tag: "Sinks & Faucets",
  },
  {
    title: "Exterior & Terraces",
    description: "Natural stone wall cladding, gate hardware, and heavy bolts.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    link: "/products?category=home-architecture",
    tag: "Cladding & Hardware",
  },
];

export default function SpacesShowcase() {
  return (
    <section className="container-page pt-4 pb-16 md:pt-6 md:pb-20">
      <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Materials Curated by Space
        </h2>
        <p className="mt-3 text-sm text-ink-soft sm:text-base">
          Find the perfect combination of marble, tiles, and fittings engineered for every zone of your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {spaces.map((space, idx) => (
          <Link
            key={idx}
            to={space.link}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass-300 hover:shadow-xl"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
              <img
                src={space.image}
                alt={space.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              
              <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-stone-900 shadow-sm backdrop-blur-sm">
                {space.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-xl font-semibold leading-tight text-white transition-colors group-hover:text-brass-200">
                  {space.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-200/90">
                  {space.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brass-300 transition-colors group-hover:text-brass-100">
                  <span>Explore Materials</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
