import {
  BadgeCheck,
  Building2,
  HeartHandshake,
  Layers,
  Store,
  Users,
} from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { site } from "../data/site.js";

const values = [
  {
    icon: Layers,
    title: "Our Products",
    description:
      "A curated range spanning marble, tiles, sanitary ware, bathroom fittings, faucets, door and gate hardware, and architectural finishes — sourced to suit both residential and commercial projects.",
  },
  {
    icon: BadgeCheck,
    title: "Our Quality",
    description:
      "Every product on our floor is chosen for consistent finish, durability and reliable performance, so what you see in the showroom is what arrives at your site.",
  },
  {
    icon: HeartHandshake,
    title: "Why Choose Us",
    description:
      "We work with homeowners on individual purchases and with contractors and architects on bulk project sourcing — with the same attention to detail either way.",
  },
  {
    icon: Store,
    title: "Our Showroom",
    description:
      "Our physical showroom lets you see textures, finishes and true colours in person before you decide — something a photograph alone can't always convey.",
  },
  {
    icon: Users,
    title: "Customer Service",
    description:
      "From your first enquiry to after-sales questions, our team is on hand to help you choose the right materials and quantities for your space.",
  },
  {
    icon: Building2,
    title: "Built for Projects",
    description:
      "We support builders and architects with quotations, coordinated quantities and dedicated communication for ongoing construction work.",
  },
];

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ label: "About Us" }]} />

      <section className="border-b border-stone-200 bg-paper">
        <div className="container-page flex flex-col gap-5 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
            About {site.name}
          </span>
          <h1 className="max-w-3xl font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
            A showroom built around materials that last
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">
            {site.name} brings together marble, tiles, sanitary ware,
            bathroom fittings and architectural hardware in one showroom —
            helping homeowners, contractors and architects find materials
            that suit both their vision and their budget.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Stand For"
          title="A complete resource for home and project materials"
          description="Whether you're renovating a single room or sourcing for a full project, here's what guides how we work."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-cream">
                <value.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-900">
        <div className="container-page flex flex-col items-start gap-5 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              Visit our showroom or request a quote today
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-stone-300">
              See our full range in person, or let us know what you need and
              we'll get back to you with pricing.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button to="/contact" variant="accent">
              Visit Showroom
            </Button>
            <Button to="/quote" variant="outlineDark">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
