import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function CustomerTypes() {
  return (
    <section className="container-page pt-10 pb-4 md:pt-14 md:pb-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Homeowners Card */}
        <div className="flex flex-col justify-between rounded-xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-stone-300">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              For Homeowners
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
              Discover natural marble slabs and designer vitrified tiles tailored for your home renovation or new construction.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              to="/products"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="rounded-lg"
            >
              Browse Catalog
            </Button>
            <Button
              to="/quote"
              variant="outline"
              size="sm"
              className="rounded-lg border-stone-300 text-stone-800 hover:bg-stone-50"
            >
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Trade Card */}
        <div className="flex flex-col justify-between rounded-xl border border-stone-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-stone-300">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              For Architects &amp; Contractors
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
              Direct factory pricing, volume slab lot matching, scheduled site dispatch, and dedicated commercial project support.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              to="/quote"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="rounded-lg"
            >
              Request Bulk Quote
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="sm"
              icon={PhoneCall}
              className="rounded-lg border-stone-300 text-stone-800 hover:bg-stone-50"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
