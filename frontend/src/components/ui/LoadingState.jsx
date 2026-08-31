import { Loader2 } from "lucide-react";

export default function LoadingState({ label = "Loading" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-ink-soft">
      <Loader2 size={26} strokeWidth={1.75} className="animate-spin text-brass-500" />
      <p className="text-sm tracking-wide">{label}...</p>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-sm border border-stone-200 bg-white">
      <div className="aspect-[4/3] w-full animate-pulse bg-stone-200" />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-3 w-16 animate-pulse rounded bg-stone-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-stone-200" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-stone-200" />
      </div>
    </div>
  );
}
