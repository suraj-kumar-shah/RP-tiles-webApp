import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-ink">
            {category.name}
          </h3>
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            className="shrink-0 text-stone-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-600"
          />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {category.description}
        </p>
        <span className="mt-1 text-sm font-medium text-brass-600">
          View Products
        </span>
      </div>
    </Link>
  );
}
