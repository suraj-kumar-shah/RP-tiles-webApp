const toneClasses = {
  neutral: "bg-stone-100 text-stone-700",
  accent: "bg-brass-50 text-brass-700",
  success: "bg-emerald-50 text-emerald-700",
  dark: "bg-stone-900 text-cream",
};

export default function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm px-2.5 py-1 text-xs font-medium tracking-wide uppercase ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
