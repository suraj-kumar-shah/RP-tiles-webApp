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
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Request a Quote
            </h1>
            <p className="mx-auto max-w-md text-sm text-ink-soft">
              Share your project requirements for direct pricing and delivery estimates.
            </p>
          </div>
          <QuoteForm defaultProductId={productId} />
        </div>
      </div>
    </>
  );
}
