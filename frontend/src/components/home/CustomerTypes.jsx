import { ArrowRight, Building2, Home as HomeIcon, PhoneCall } from "lucide-react";
import Button from "../ui/Button.jsx";
import { site } from "../../data/site.js";

export default function CustomerTypes() {
  return (
    <section className="bg-white pt-6 pb-16 md:pt-8 md:pb-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Homeowners Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:border-stone-300">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brass-50 text-brass-800 border border-brass-200/80">
                  <HomeIcon size={14} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-800">
                  Private Residences
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                For Homeowners &amp; Renovations
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                Explore premium marble flooring, designer bathroom tiles, and luxury sanitary fittings crafted to bring lasting elegance to your living space.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                to="/products"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="rounded-lg px-5 py-2.5"
              >
                Browse Collection
              </Button>
              <Button
                to="/quote"
                variant="outline"
                size="sm"
                className="rounded-lg border-stone-300 px-5 py-2.5 text-stone-800 hover:bg-stone-50"
              >
                Request Quote
              </Button>
            </div>
          </div>

          {/* Trade & Architecture Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:border-stone-300">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brass-50 text-brass-800 border border-brass-200/80">
                  <Building2 size={14} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-800">
                  Commercial &amp; Trade
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                For Architects &amp; Contractors
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                Direct factory pricing, volume slab lot matching, scheduled site dispatch, and dedicated commercial project management support.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                to="/quote"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="rounded-lg px-5 py-2.5"
              >
                Trade Inquiry
              </Button>
              <Button
                href={`tel:${site.phoneRaw}`}
                variant="outline"
                size="sm"
                icon={PhoneCall}
                className="rounded-lg border-stone-300 px-5 py-2.5 text-stone-800 hover:bg-stone-50"
              >
                Call Specialist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
