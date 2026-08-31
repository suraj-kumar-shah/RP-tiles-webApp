import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { categories } from "../../data/categories.js";
import { site } from "../../data/site.js";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../ui/SocialIcons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={site.logo}
              alt={site.fullName}
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="font-display text-xl font-semibold text-cream">
              {site.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-400">
            {site.description}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="rounded-full border border-stone-700 p-2 text-stone-300 transition-colors hover:border-brass-400 hover:text-brass-400"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="rounded-full border border-stone-700 p-2 text-stone-300 transition-colors hover:border-brass-400 hover:text-brass-400"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={site.social.youtube}
              aria-label="YouTube"
              className="rounded-full border border-stone-700 p-2 text-stone-300 transition-colors hover:border-brass-400 hover:text-brass-400"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Categories
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/category/${cat.id}`}
                  className="text-stone-400 transition-colors hover:text-cream"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/products" className="text-stone-400 transition-colors hover:text-cream">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-stone-400 transition-colors hover:text-cream">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-stone-400 transition-colors hover:text-cream">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link to="/social" className="text-stone-400 transition-colors hover:text-cream">
                Instagram &amp; Reels
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-stone-400 transition-colors hover:text-cream">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-stone-400 transition-colors hover:text-cream">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-stone-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brass-400" />
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                {site.address.line1}, {site.address.line2}, {site.address.city},{" "}
                {site.address.state} {site.address.pincode}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} strokeWidth={1.75} className="shrink-0 text-brass-400" />
              <div className="flex flex-wrap gap-x-1.5">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                  {site.phone}
                </a>
                {site.phoneSecondary && (
                  <>
                    <span>,</span>
                    <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-cream">
                      {site.phoneSecondary}
                    </a>
                  </>
                )}
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} strokeWidth={1.75} className="shrink-0 text-brass-400" />
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-3 py-5 text-xs text-stone-500 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-stone-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-stone-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
