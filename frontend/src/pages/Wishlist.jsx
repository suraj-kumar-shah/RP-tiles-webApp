import { Heart } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import Button from "../components/ui/Button.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

export default function Wishlist() {
  const { items } = useWishlist();

  return (
    <>
      <Breadcrumb items={[{ label: "Wishlist" }]} />
      <div className="container-page py-10 md:py-14">
        <h1 className="mb-8 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Your Wishlist
        </h1>

        {items.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="Your wishlist is empty"
            description="Save products you're interested in to compare and revisit them later."
            action={
              <Button to="/products" variant="primary">
                Browse Products
              </Button>
            }
          />
        ) : (
          <ProductGrid products={items} loading={false} />
        )}
      </div>
    </>
  );
}
