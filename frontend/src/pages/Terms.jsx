import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import { site } from "../data/site.js";

export default function Terms() {
  return (
    <>
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
      <div className="container-page max-w-3xl py-10 md:py-14">
        <h1 className="mb-6 font-display text-3xl font-semibold text-ink">
          Terms &amp; Conditions
        </h1>
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-ink-soft">
          <p>
            This placeholder page outlines general terms for using the{" "}
            {site.name} website. Replace this content with your business's
            official terms and conditions before going live.
          </p>
          <p>
            Product prices and availability shown on this website are
            indicative and subject to confirmation at the time of order.
            Quotation requests are not binding orders until confirmed by our
            team.
          </p>
          <p>
            All product images are representative; actual materials may vary
            slightly in colour, veining or texture, which is characteristic
            of natural materials.
          </p>
        </div>
      </div>
    </>
  );
}
