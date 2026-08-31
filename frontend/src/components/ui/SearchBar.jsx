import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search products, categories, materials...",
  className = "",
  autoFocus = false,
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-sm border border-stone-300 bg-white px-4 py-2.5 transition-colors focus-within:border-stone-900 ${className}`}
    >
      <Search size={18} strokeWidth={1.75} className="shrink-0 text-stone-500" />
      <input
        type="text"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-ink placeholder:text-stone-400 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="shrink-0 text-stone-400 hover:text-ink transition-colors"
        >
          <X size={16} strokeWidth={1.75} />
        </button>
      )}
    </div>
  );
}
