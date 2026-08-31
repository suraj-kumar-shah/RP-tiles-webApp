export function formatPrice(price, unit) {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
  return unit ? `${formatted} / ${unit}` : formatted;
}

export function resolveAsset(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
  return `${cleanBase}${cleanUrl}`;
}
