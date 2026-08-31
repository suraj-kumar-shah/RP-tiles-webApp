import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import ProductGrid from "../products/ProductGrid.jsx";
import { products } from "../../data/products.js";

const featuredIds = [1, 2, 4, 8, 10, 12, 13, 15];

export default function FeaturedProducts() {
  const featured = products.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="container-page pt-14 pb-6 md:pt-20 md:pb-10">
      <SectionHeading
        eyebrow="Featured Products"
        title="A Closer Look at Our Showroom Favorites"
        description="Explore a handpicked selection of our most requested Italian marble slabs, designer tiles, luxury sanitary ware and precision architectural hardware."
        action={
          <Button to="/products" variant="ghost" icon={ArrowRight} iconPosition="right">
            View All Products
          </Button>
        }
      />
      <div className="mt-10">
        <ProductGrid products={featured} loading={false} />
      </div>
    </section>
  );
}
