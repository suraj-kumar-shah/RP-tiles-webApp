import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Heart, MessageCircle, PhoneCall, ShoppingBag } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ProductGallery from "../components/products/ProductGallery.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import { getProductById, getRelatedProducts } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { formatPrice } from "../utils/format.js";
import { site, whatsappLink } from "../data/site.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = getRelatedProducts(product);
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: product.category, to: `/category/${product.categoryId}` },
          { label: product.name },
        ]}
      />

      <div className="container-page py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Badge tone="accent">{product.category}</Badge>
              <Badge tone={product.availability === "In Stock" ? "success" : "neutral"}>
                {product.availability}
              </Badge>
            </div>

            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              {product.name}
            </h1>

            <p className="text-lg font-semibold text-ink">
              {product.quoteOnly ? "Price on Request" : formatPrice(product.price, product.unit)}
            </p>

            <p className="text-sm leading-relaxed text-ink-soft">{product.description}</p>

            <dl className="grid grid-cols-2 gap-4 border-y border-stone-200 py-5 text-sm sm:grid-cols-3">
              <Spec label="Material" value={product.material} />
              <Spec label="Finish" value={product.finish} />
              <Spec label="Color" value={product.color} />
              <Spec label="Sizes" value={product.sizes.join(", ")} />
              <Spec label="Applications" value={product.applications.join(", ")} />
            </dl>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-ink">Quantity</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-sm border border-stone-300">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-ink-soft hover:text-ink"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-ink">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-2 text-ink-soft hover:text-ink"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                icon={ShoppingBag}
                onClick={handleAddToCart}
                className="flex-1 justify-center"
              >
                {added ? "Added to Cart" : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Heart}
                onClick={() => toggleWishlist(product)}
                className="flex-1 justify-center"
              >
                {wishlisted ? "Wishlisted" : "Add to Wishlist"}
              </Button>
            </div>

            <div className="flex flex-col gap-3 rounded-sm border border-stone-200 bg-paper p-5">
              <p className="text-sm font-medium text-ink">
                Ordering in bulk for a project?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to={`/quote?product=${product.id}`} variant="accent" size="sm">
                  Request Quote
                </Button>
                <Button
                  href={whatsappLink(
                    `Hi, I'm interested in bulk pricing for ${product.name}.`
                  )}
                  variant="ghost"
                  size="sm"
                  icon={MessageCircle}
                >
                  WhatsApp Sales
                </Button>
                <Button
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  variant="ghost"
                  size="sm"
                  icon={PhoneCall}
                >
                  Call for Bulk Pricing
                </Button>
              </div>
            </div>

            {Object.keys(product.specifications).length > 0 && (
              <div className="flex flex-col gap-3 pt-4">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Specifications
                </h2>
                <dl className="divide-y divide-stone-200 rounded-sm border border-stone-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between px-4 py-2.5 text-sm">
                      <dt className="text-ink-soft">{key}</dt>
                      <dd className="font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-stone-200 pt-14">
            <SectionHeading
              eyebrow="You May Also Like"
              title="Related Products"
              action={
                <Link
                  to={`/category/${product.categoryId}`}
                  className="text-sm font-medium text-brass-700 hover:text-brass-800"
                >
                  View all in {product.category}
                </Link>
              }
            />
            <div className="mt-10">
              <ProductGrid products={related} loading={false} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Spec({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs uppercase tracking-wider text-stone-500">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}
