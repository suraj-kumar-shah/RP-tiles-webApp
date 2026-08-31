import { useEffect, useState } from "react";
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
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={site.logo}
            alt={site.fullName}
            className="h-11 w-11 shrink-0 object-contain md:h-12 md:w-12"
          />
          <span className="font-display text-xl font-semibold tracking-wide text-ink md:text-2xl">
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

        <div className="flex items-center gap-1 sm:gap-2">
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
            className="relative rounded-full p-2.5 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink"
          >
            <ShoppingBag size={19} strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brass-500 text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </NavLink>

          <Button to="/quote" variant="accent" size="sm" className="hidden lg:inline-flex">
            Get Quote
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink lg:hidden"
          >
            <Menu size={21} strokeWidth={1.75} />
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

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream shadow-card-hover">
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
              <span className="font-display text-lg font-semibold text-ink">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-2 text-ink-soft hover:bg-stone-100 hover:text-ink"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            <form onSubmit={submitSearch} className="px-5 pt-4">
              <SearchBar value={searchValue} onChange={setSearchValue} />
            </form>

            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) =>
                link.isExternal ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-semibold text-brass-700">Open Maps ↗</span>
                  </a>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                        isActive ? "bg-stone-100 text-ink" : "text-ink-soft hover:bg-stone-100 hover:text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/wishlist"
                className="flex items-center justify-between rounded-sm px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink"
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
                className="flex items-center justify-between rounded-sm px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-stone-100 hover:text-ink"
              >
                <span>Cart</span>
                {itemCount > 0 && (
                  <span className="rounded-full bg-brass-500 px-2 py-0.5 text-xs font-semibold text-white">
                    {itemCount}
                  </span>
                )}
              </NavLink>
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-stone-200 px-5 py-5">
              <Button to="/quote" variant="accent" className="w-full">
                Get Quote
              </Button>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-center text-sm font-medium text-ink-soft hover:text-ink"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
