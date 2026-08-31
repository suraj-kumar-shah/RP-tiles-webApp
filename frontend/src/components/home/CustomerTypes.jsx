import Button from "../ui/Button.jsx";
import { site } from "../../data/site.js";

export default function CustomerTypes() {
  return (
    <section className="bg-white pt-2 pb-16 md:pt-4 md:pb-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Homeowners Card */}
          <div className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                For Homeowners
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Discover natural marble slabs, designer tiles, and luxury sanitary fittings tailored for your home construction or renovation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                to="/products"
                variant="primary"
                size="sm"
                className="rounded-md px-5 py-2.5"
              >
                Browse Collection
              </Button>
              <Button
                to="/quote"
                variant="outline"
                size="sm"
                className="rounded-md border-stone-300 px-5 py-2.5 text-ink hover:bg-stone-50"
              >
                Request Quote
              </Button>
            </div>
          </div>

          {/* Trade & Architecture Card */}
          <div className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-7 sm:p-9 shadow-sm">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                For Architects &amp; Contractors
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Direct factory pricing, volume slab lot matching, scheduled site dispatch, and dedicated commercial project support.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                to="/quote"
                variant="primary"
                size="sm"
                className="rounded-md px-5 py-2.5"
              >
                Request Bulk Quote
              </Button>
              <Button
                href={`tel:${site.phoneRaw}`}
                variant="outline"
                size="sm"
                className="rounded-md border-stone-300 px-5 py-2.5 text-ink hover:bg-stone-50"
              >
                Call Showroom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
