import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SearchBar from "../components/ui/SearchBar.jsx";
import Button from "../components/ui/Button.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import ProductFilter from "../components/products/ProductFilter.jsx";
import { products } from "../data/products.js";

const PAGE_SIZE = 8;

const defaultFilters = { category: "all", maxPrice: 300, sort: "featured" };

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [filters, setFilters] = useState({
    ...defaultFilters,
    category: searchParams.get("category") || "all",
  });
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const next = {};
    if (query) next.q = query;
    if (filters.category !== "all") next.category = filters.category;
    setSearchParams(next, { replace: true });
    setVisibleCount(PAGE_SIZE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filters]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = filters.category === "all" || p.categoryId === filters.category;
      const matchesPrice = filters.maxPrice >= 300 || p.price <= filters.maxPrice;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    switch (filters.sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [query, filters]);

  const visible = filtered.slice(0, visibleCount);

  const resetFilters = () => {
    setFilters(defaultFilters);
    setQuery("");
  };

  return (
    <>
      <Breadcrumb items={[{ label: "Products" }]} />
      <div className="container-page py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            All Products
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            Browse our complete range of marble, tiles, sanitary ware and
            architectural hardware. Use the filters to narrow your search.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchBar value={query} onChange={setQuery} className="sm:max-w-md" />
            <Button
              variant="outline"
              icon={SlidersHorizontal}
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden"
            >
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <ProductFilter
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            resultCount={filtered.length}
            mobileOpen={mobileFiltersOpen}
            onCloseMobile={() => setMobileFiltersOpen(false)}
          />

          <div className="flex-1">
            <ProductGrid
              products={visible}
              loading={loading}
              emptyAction={
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              }
            />

            {!loading && visibleCount < filtered.length && (
              <div className="mt-10 flex justify-center">
                <Button variant="outline" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
