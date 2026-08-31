export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${align === "center" ? "text-center" : ""}`}>
      <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-ink-soft">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
