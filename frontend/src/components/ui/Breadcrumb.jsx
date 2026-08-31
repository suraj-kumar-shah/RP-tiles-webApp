import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-stone-200 bg-paper">
      <div className="container-page flex items-center gap-2 py-3 text-sm text-ink-soft overflow-x-auto whitespace-nowrap">
        <Link to="/" className="flex items-center gap-1.5 hover:text-ink transition-colors">
          <Home size={14} strokeWidth={1.75} />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            <ChevronRight size={14} strokeWidth={1.75} className="text-stone-400" />
            {item.to ? (
              <Link to={item.to} className="hover:text-ink transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
