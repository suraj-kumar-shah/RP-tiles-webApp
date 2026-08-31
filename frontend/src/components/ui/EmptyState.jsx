export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-dashed border-stone-300 bg-paper px-6 py-16 text-center">
      {Icon && (
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-stone-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        {description && (
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
