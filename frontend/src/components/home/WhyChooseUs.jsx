import { Award, Headset, PackageCheck, Truck } from "lucide-react";

const points = [
  {
    icon: Award,
    number: "01",
    title: "Curated Quality",
    description:
      "Every natural slab and designer tile is hand-inspected for grain, finish, and structural density before dispatch.",
  },
  {
    icon: PackageCheck,
    number: "02",
    title: "Complete Range",
    description:
      "Italian marble, vitrified tiles, sanitary ware, and architectural fittings under one expansive showroom.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Direct Logistics",
    description:
      "Secure crate packaging, batch reservation, and coordinated site delivery across Bihar and surrounding regions.",
  },
  {
    icon: Headset,
    number: "04",
    title: "Expert Guidance",
    description:
      "Experienced material consultants help you match patterns, finishes, and specs to your exact architectural blueprints.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 text-ink md:py-24">
      <div className="container-page">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-[1px] w-6 bg-brass-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brass-700">
              The R.P. Tiles Standard
            </span>
            <span className="h-[1px] w-6 bg-brass-400" />
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Engineered for Enduring Luxury
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brass-400 hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brass-50 border border-brass-200/80 text-brass-800 transition-colors group-hover:bg-brass-500 group-hover:text-white">
                    <point.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-stone-400 group-hover:text-brass-700">
                    {point.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
