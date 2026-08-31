import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-stone-900 text-cream hover:bg-stone-800 focus-visible:outline-stone-900",
  accent:
    "bg-brass-500 text-cream hover:bg-brass-600 focus-visible:outline-brass-500",
  outline:
    "border border-stone-300 text-stone-900 bg-transparent hover:border-stone-900 hover:bg-stone-900 hover:text-cream",
  // For use on dark backgrounds (e.g. stone-900 cards/sections) — a plain
  // `outline` variant with a className color override is unreliable here:
  // Tailwind's generated stylesheet order decides which of two same-property
  // utility classes wins, not the order they're written in the JSX string,
  // so text-stone-900 (from the outline variant) can beat a text-cream
  // override and render invisible dark text on a dark card.
  outlineDark:
    "border border-stone-600 text-cream bg-transparent hover:border-cream hover:bg-cream hover:text-stone-900",
  ghost: "text-stone-700 hover:text-stone-900 hover:bg-stone-100",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={17} strokeWidth={1.75} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={17} strokeWidth={1.75} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  const Component = as || "button";
  return (
    <Component className={classes} {...props}>
      {content}
    </Component>
  );
}
