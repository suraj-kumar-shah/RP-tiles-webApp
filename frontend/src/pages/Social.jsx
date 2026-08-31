import { ExternalLink } from "lucide-react";
import InstagramReels from "../components/home/InstagramReels.jsx";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "../components/ui/SocialIcons.jsx";
import { site } from "../data/site.js";

export default function Social() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <div className="border-b border-stone-200 bg-white py-14 md:py-20">
        <div className="container-page text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brass-200 bg-brass-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brass-700">
            <InstagramIcon size={16} />
            <span>Connect With Us</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Social Media &amp; Reels
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft sm:text-base">
            Follow our official social channels to see daily showroom walkthroughs, new stock arrivals, design trends, and customer projects.
          </p>

          {/* Social Profiles Pill Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-all hover:border-brass-400 hover:bg-stone-50"
            >
              <InstagramIcon size={20} />
              <span>@rp_tiles_araria on Instagram</span>
              <ExternalLink size={14} className="text-stone-400" />
            </a>
            {site.social.facebook && site.social.facebook !== "#" && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-all hover:border-blue-400 hover:bg-stone-50"
              >
                <FacebookIcon size={20} />
                <span>Facebook Page</span>
                <ExternalLink size={14} className="text-stone-400" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Instagram Reels Grid */}
      <InstagramReels />
    </div>
  );
}
