import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I visit the showroom to inspect marble slabs in person?",
    answer:
      "Yes. Our showroom and stock yard in Araria allow you to view full size natural marble slabs, feel surface textures, and choose specific lots under natural daylight.",
  },
  {
    question: "Do you offer custom cutting, sizing, and edge polishing services?",
    answer:
      "Yes. We provide precision slab cutting, thickness sizing, corner chamfering, and high gloss edge polishing tailored to your architectural blueprints.",
  },
  {
    question: "Do you offer wholesale bulk pricing for contractors and builders?",
    answer:
      "Yes. We offer tiered wholesale pricing, batch reservation, and dedicated project management support for commercial and residential developments.",
  },
  {
    question: "How do I request a custom quotation for my project?",
    answer:
      "You can add items to your online quote cart or submit your room dimensions directly through our quote page for a fast, itemized estimate.",
  },
  {
    question: "What are your delivery areas and timelines?",
    answer:
      "We provide scheduled direct delivery across Araria, Purnia, Kishanganj, Katihar, and surrounding districts with careful crate packaging.",
  },
  {
    question: "Can your team help match tiles, sanitary ware, and fittings?",
    answer:
      "Our material consultants assist you in pairing marble floor patterns with complementary wall tiles, faucets, and vanity hardware for a harmonious finish.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="container-page max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-ink-soft sm:text-base">
            Everything you need to know about our marble slabs, tiles, ordering, and delivery.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors duration-200 hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-ink sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className={`shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-stone-800" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-stone-100 bg-stone-50/40 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
