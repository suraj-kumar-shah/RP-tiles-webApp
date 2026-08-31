import { ExternalLink, Play } from "lucide-react";
import { InstagramIcon } from "../ui/SocialIcons.jsx";
import { site } from "../../data/site.js";
import { resolveAsset } from "../../utils/format.js";

const reels = [
  {
    id: 1,
    image: resolveAsset("/instagram-relles-video-photos/1-insta.webp"),
    link: "https://www.instagram.com/p/DTeuTY1EqSc/",
    title: "Showroom Walkthrough",
    caption: "Rp TIles Bus Stand Araria Bihar @rp_tiles_araria ❤️",
    handle: "@rp_tiles_araria",
  },
  {
    id: 2,
    image: resolveAsset("/instagram-relles-video-photos/2-insta.webp"),
    link: "https://www.instagram.com/p/DSWttGeEsu9/",
    title: "Marble & Tiles Collection",
    caption: "Premium natural marble slabs & vitrified tiles display",
    handle: "@rp_tiles_araria",
  },
  {
    id: 3,
    image: resolveAsset("/instagram-relles-video-photos/3-insta.webp"),
    link: "https://www.instagram.com/p/DTzO46sknUv/",
    title: "Designer Finishes",
    caption: "Exclusive surface textures and architectural fittings",
    handle: "@rp_tiles_araria",
  },
  {
    id: 4,
    image: resolveAsset("/instagram-relles-video-photos/4-insta.webp"),
    link: "https://www.instagram.com/p/DTS1czTkxAk/",
    title: "Luxury Sanitary Ware",
    caption: "Countertop vanities and bathroom accessories showcase",
    handle: "@rp_tiles_araria",
  },
  {
    id: 5,
    image: resolveAsset("/instagram-relles-video-photos/5-insta.webp"),
    link: "https://www.instagram.com/p/DOTSp0_kj2G/",
    title: "Quality & Dispatch",
    caption: "Fresh lot arrivals and direct customer site deliveries",
    handle: "@rp_tiles_araria",
  },
];

export default function InstagramReels() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brass-700">
            <InstagramIcon size={18} />
            <span>Instagram Feed</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Watch Our Reels
          </h2>
          <p className="mt-2 text-sm text-ink-soft sm:text-base">
            Explore live showroom walkthroughs, new slab unboxings, and product highlights on{" "}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-brass-400 underline-offset-4 hover:text-brass-700"
            >
              @rp_tiles_araria
            </a>
          </p>
        </div>

        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-sm transition-all hover:border-stone-400 hover:bg-stone-50"
        >
          <InstagramIcon size={18} />
          <span>Follow on Instagram</span>
          <ExternalLink size={14} className="text-stone-400" />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-5">
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex aspect-[9/16] flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-stone-400 hover:shadow-xl"
          >
            {/* Background Thumbnail */}
            <img
              src={reel.image}
              alt={reel.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/30" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 flex items-center justify-between p-3.5 sm:p-4">
              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                <InstagramIcon size={12} />
                <span>Reel</span>
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-md transition-transform group-hover:scale-110 group-hover:text-white">
                <ExternalLink size={13} />
              </div>
            </div>

            {/* Center Play Icon on Hover */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-950 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                <Play size={20} className="ml-0.5 fill-stone-950" />
              </div>
            </div>

            {/* Bottom Info inside Card */}
            <div className="relative z-10 p-3.5 sm:p-4 text-white">
              <p className="text-xs font-semibold text-white/90 drop-shadow-sm line-clamp-1">
                {reel.handle}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-white/70 line-clamp-2">
                {reel.caption}
              </p>
              <div className="mt-2.5 flex items-center gap-1 text-[11px] font-medium text-brass-300">
                <span>Watch on Instagram</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
