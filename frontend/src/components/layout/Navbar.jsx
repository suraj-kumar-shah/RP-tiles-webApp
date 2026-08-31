import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import SearchBar from "../ui/SearchBar.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { site } from "../../data/site.js";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { href: site.googleMapsUrl, label: "Map", isExternal: true },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [navigate]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const submitSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    navigate(`/products?q=${encodeURIComponent(searchValue.trim())}`);
    setSearchOpen(false);
    setSearchValue("");
  };

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-shadow ${
        scrolled ? "border-stone-200 shadow-card" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <NavLink to="/" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <img
            src={site.logo}
            alt={site.fullName}
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl md:text-2xl sm:tracking-wide">
            {site.name}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses({ isActive: false })}
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClasses}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden rounded-full p-2.5 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink sm:flex"
          >
            <Search size={19} strokeWidth={1.75} />
          </button>

          <NavLink
            to="/wishlist"
            aria-label="Wishlist"
            className="relative hidden rounded-full p-2.5 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink sm:flex"
          >
            <Heart size={19} strokeWidth={1.75} />
            {wishlistItems.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brass-500 text-[10px] font-semibold text-white">
                {wishlistItems.length}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            aria-label="Cart"
            className="relative rounded-full p-2 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink sm:p-2.5"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brass-500 text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </NavLink>

          <div className="hidden lg:block">
            <Button to="/quote" variant="accent" size="sm">
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink sm:p-2.5 lg:hidden"
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="hidden border-t border-stone-200 bg-cream sm:block">
          <form onSubmit={submitSearch} className="container-page py-3">
            <SearchBar value={searchValue} onChange={setSearchValue} autoFocus />
          </form>
        </div>
      )}

      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999] flex justify-end lg:hidden">
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Solid Full-Height Slide Drawer */}
            <div className="relative z-10 flex h-full h-[100dvh] w-[85vw] max-w-[340px] flex-col bg-white shadow-2xl">
              {/* Drawer Header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-stone-200 bg-white px-5">
                <div className="flex items-center gap-2.5">
                  <img
                    src={site.logo}
                    alt={site.fullName}
                    className="h-9 w-9 object-contain"
                  />
                  <span className="font-display text-lg font-semibold text-ink">
                    {site.name}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 hover:bg-stone-100 hover:text-ink"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Search Input */}
              <div className="shrink-0 border-b border-stone-100 bg-white p-3.5">
                <form onSubmit={submitSearch}>
                  <SearchBar
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Search products..."
                    className="rounded-lg py-2"
                  />
                </form>
              </div>

              {/* Scrollable Navigation List */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#faf8f5] p-3.5">
                <nav className="space-y-1.5">
                  {navLinks.map((link) =>
                    link.isExternal ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-stone-200/70"
                      >
                        <span>{link.label}</span>
                        <span className="text-xs font-semibold text-brass-700">Open Maps ↗</span>
                      </a>
                    ) : (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-white font-semibold text-ink shadow-sm border border-stone-200"
                              : "text-ink-soft hover:bg-stone-200/70 hover:text-ink"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )
                  )}

                  <div className="my-2 border-t border-stone-200/80" />

                  <NavLink
                    to="/wishlist"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-stone-200/70 hover:text-ink"
                  >
                    <span>Wishlist</span>
                    {wishlistItems.length > 0 && (
                      <span className="rounded-full bg-brass-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {wishlistItems.length}
                      </span>
                    )}
                  </NavLink>

                  <NavLink
                    to="/cart"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-stone-200/70 hover:text-ink"
                  >
                    <span>Cart</span>
                    {itemCount > 0 && (
                      <span className="rounded-full bg-brass-500 px-2 py-0.5 text-xs font-semibold text-white">
                        {itemCount}
                      </span>
                    )}
                  </NavLink>

                  <NavLink
                    to="/social"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-stone-200/70 hover:text-ink"
                  >
                    <span>Instagram &amp; Reels</span>
                    <span className="text-xs font-semibold text-brass-700">@rp_tiles_araria</span>
                  </NavLink>
                </nav>
              </div>

              {/* Bottom Actions Footer */}
              <div className="shrink-0 border-t border-stone-200 bg-white p-4 space-y-2.5">
                <Button
                  to="/quote"
                  variant="accent"
                  onClick={() => setMobileOpen(false)}
                  className="w-full justify-center rounded-xl py-3 text-sm"
                >
                  Get a Quote
                </Button>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="block text-center text-xs font-medium text-ink-soft hover:text-ink"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
