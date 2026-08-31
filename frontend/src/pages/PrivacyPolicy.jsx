import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import { site } from "../data/site.js";

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <div className="container-page max-w-3xl py-10 md:py-14">
        <h1 className="mb-6 font-display text-3xl font-semibold text-ink">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-ink-soft">
          <p>
            This placeholder policy outlines how {site.name} would handle
            information submitted through this website, such as contact and
            quotation form details. Replace this content with your business's
            official privacy policy before going live.
          </p>
          <p>
            Information submitted through our contact and quote forms is used
            solely to respond to your enquiry and is not shared with third
            parties for marketing purposes.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-brass-700 hover:text-brass-800">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
