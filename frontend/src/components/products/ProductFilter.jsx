import { SlidersHorizontal, X } from "lucide-react";
import { categories } from "../../data/categories.js";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export default function ProductFilter({
  filters,
  onChange,
  onReset,
  resultCount,
  mobileOpen,
  onCloseMobile,
}) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  const content = (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="font-display text-lg font-semibold text-ink">Filters</h3>
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Close filters"
          className="rounded-full p-1.5 text-stone-500 hover:bg-stone-100 hover:text-ink"
        >
          <X size={18} strokeWidth={1.75} />
        </button>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-2.5 text-sm text-ink-soft">
            <input
              type="radio"
              name="category"
              checked={filters.category === "all"}
              onChange={() => update("category", "all")}
              className="h-4 w-4 accent-stone-900"
            />
            All Categories
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2.5 text-sm text-ink-soft">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => update("category", cat.id)}
                className="h-4 w-4 accent-stone-900"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
          Max Price ({filters.maxPrice === 300 ? "300+" : filters.maxPrice})
        </h4>
        <input
          type="range"
          min={0}
          max={300}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => update("maxPrice", Number(e.target.value))}
          className="w-full accent-stone-900"
        />
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
          Sort By
        </h4>
        <select
          value={filters.sort}
          onChange={(e) => update("sort", e.target.value)}
          className="w-full rounded-sm border border-stone-300 bg-white px-3 py-2.5 text-sm text-ink focus:border-stone-900 focus:outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="text-sm font-medium text-brass-700 underline underline-offset-2 hover:text-brass-800"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="mb-4 flex items-center gap-2 text-sm text-ink-soft">
          <SlidersHorizontal size={15} strokeWidth={1.75} />
          <span>{resultCount} results</span>
        </div>
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={onCloseMobile} aria-hidden="true" />
          <div className="absolute inset-y-0 left-0 w-full max-w-xs overflow-y-auto bg-cream p-6 shadow-card-hover">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
