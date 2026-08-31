import { Navigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import Button from "../components/ui/Button.jsx";
import { getCategoryById } from "../data/categories.js";
import { getProductsByCategory } from "../data/products.js";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = getProductsByCategory(categoryId);

  return (
    <>
      <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: category.name }]} />

      <div className="relative">
        <div className="absolute inset-0">
          <img src={category.image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 to-stone-900" />
        </div>
        <div className="container-page relative flex flex-col gap-3 py-14 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
            Category
          </span>
          <h1 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            {category.name}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-stone-300">
            {category.description}
          </p>
        </div>
      </div>

      <div className="container-page py-12 md:py-16">
        <ProductGrid
          products={categoryProducts}
          loading={false}
          emptyAction={
            <Button to="/products" variant="outline">
              Browse All Products
            </Button>
          }
        />
      </div>
    </>
  );
}
