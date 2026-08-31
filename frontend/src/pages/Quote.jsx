import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import QuoteForm from "../components/forms/QuoteForm.jsx";

export default function Quote() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");

  return (
    <>
      <Breadcrumb items={[{ label: "Request a Quote" }]} />
      <div className="container-page py-10 md:py-14">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
              Request a Quote
            </span>
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Tell us what you need
            </h1>
            <p className="text-sm leading-relaxed text-ink-soft">
              Whether it's a single item or bulk materials for a project, share
              your requirements and our team will send you a tailored quote.
            </p>
          </div>
          <QuoteForm defaultProductId={productId} />
        </div>
      </div>
    </>
  );
}
