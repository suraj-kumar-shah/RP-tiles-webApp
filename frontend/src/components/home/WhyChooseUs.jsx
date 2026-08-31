const points = [
  {
    title: "Curated Quality",
    description:
      "Every natural marble slab and designer tile is inspected for finish, density, and consistency before reaching the showroom.",
  },
  {
    title: "Comprehensive Range",
    description:
      "Natural marble, vitrified tiles, sanitary ware, and architectural fittings sourced under one expansive showroom.",
  },
  {
    title: "Direct Logistics",
    description:
      "Careful crate packaging and scheduled site deliveries across Araria and surrounding districts.",
  },
  {
    title: "Material Consultation",
    description:
      "Experienced guidance to help match patterns, dimensions, and specifications to your architectural plan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col gap-2">
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
