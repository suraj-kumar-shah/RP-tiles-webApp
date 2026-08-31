import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";
import { formatPrice } from "../../utils/format.js";

export default function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-card transition-colors hover:text-brass-600"
        >
          <Heart
            size={17}
            strokeWidth={1.75}
            className={wishlisted ? "fill-brass-500 text-brass-500" : ""}
          />
        </button>
        {product.availability !== "In Stock" && (
          <Badge tone="dark" className="absolute left-3 top-3">
            {product.availability}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-brass-600">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-display text-base font-semibold text-ink transition-colors hover:text-brass-700">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs leading-relaxed text-ink-soft">
          {product.material} &middot; {product.finish}
        </p>

        <div className="mt-1 flex items-center justify-between gap-2">
          {product.quoteOnly ? (
            <span className="text-sm font-semibold text-ink">Get Quote</span>
          ) : (
            <span className="text-sm font-semibold text-ink">
              {formatPrice(product.price, product.unit)}
            </span>
          )}
        </div>

        <Button to={`/products/${product.id}`} variant="outline" size="sm" className="mt-2 w-full">
          View Details
        </Button>
      </div>
    </div>
  );
}
