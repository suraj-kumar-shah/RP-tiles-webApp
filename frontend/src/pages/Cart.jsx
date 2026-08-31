import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import Button from "../components/ui/Button.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice, resolveAsset } from "../utils/format.js";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <>
      <Breadcrumb items={[{ label: "Cart" }]} />
      <div className="container-page py-10 md:py-14">
        <h1 className="mb-8 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <EmptyState
            icon={ShoppingBag}
            title="Your cart is empty"
            description="Browse our products and add items to your cart to get started."
            action={
              <Button to="/products" variant="primary">
                Browse Products
              </Button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex flex-col gap-4 lg:col-span-2">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 rounded-sm border border-stone-200 bg-white p-4 shadow-card sm:flex-row sm:items-center"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src={resolveAsset(product.images[0])}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-brass-600">
                      {product.category}
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {product.name}
                    </h3>
                    <span className="text-sm text-ink-soft">
                      {product.quoteOnly
                        ? "Price on Request"
                        : formatPrice(product.price, product.unit)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center rounded-sm border border-stone-300">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-2 text-ink-soft hover:text-ink"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.75} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-ink">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-2 text-ink-soft hover:text-ink"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.75} />
                      </button>
                    </div>

                    <span className="w-20 text-right text-sm font-semibold text-ink">
                      {product.quoteOnly
                        ? "—"
                        : formatPrice(product.price * quantity)}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="p-2 text-stone-400 hover:text-red-600"
                    >
                      <Trash2 size={17} strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex h-fit flex-col gap-5 rounded-sm border border-stone-200 bg-paper p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold text-ink">
                Order Summary
              </h2>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <span>Subtotal</span>
                <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs leading-relaxed text-ink-soft">
                Items marked "Price on Request" are not included in the
                subtotal. Final pricing will be confirmed after enquiry.
              </p>
              <div className="flex items-center justify-between border-t border-stone-300 pt-4 text-base font-semibold text-ink">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <Button to="/quote" variant="accent" size="lg" className="justify-center">
                Proceed to Enquiry
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
