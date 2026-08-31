import SectionHeading from "../ui/SectionHeading.jsx";
import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../../data/categories.js";

export default function CategorySection() {
  return (
    <section className="container-page pt-8 pb-4 md:pt-12 md:pb-6">
      <SectionHeading
        eyebrow="Browse by Category"
        title="Everything for Your Build"
        description="Explore our full collection of marble, tiles, sanitary ware, and hardware."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
