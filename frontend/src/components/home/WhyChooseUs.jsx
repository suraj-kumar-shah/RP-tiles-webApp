import { Award, Headset, PackageCheck, Truck } from "lucide-react";

const points = [
  {
    icon: Award,
    title: "Curated Quality",
    description:
      "Every product is selected for finish, durability and consistency before it reaches our showroom floor.",
  },
  {
    icon: PackageCheck,
    title: "Wide Range",
    description:
      "Marble, tiles, sanitary ware, fittings and hardware sourced under one roof for retail and bulk buyers.",
  },
  {
    icon: Truck,
    title: "Project Support",
    description:
      "Bulk quotations and coordinated delivery for contractors, builders and architects working to a schedule.",
  },
  {
    icon: Headset,
    title: "Personal Guidance",
    description:
      "Our team helps you match materials, sizes and finishes to your space before you commit to an order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-stone-200 bg-paper py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-cream">
                <point.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
