export function formatPrice(price, unit) {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
  return unit ? `${formatted} / ${unit}` : formatted;
}
