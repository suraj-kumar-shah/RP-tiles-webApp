import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import Button from "../components/ui/Button.jsx";
import { site, whatsappLink } from "../data/site.js";

export default function Contact() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="container-page py-10 md:py-14">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-600">
            Contact Us
          </span>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Visit our showroom or get in touch
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
            Have a question about a product, sizing or bulk pricing? Reach out
            and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <InfoCard icon={MapPin} title="Showroom Address">
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} {site.address.pincode}
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">
              <div className="flex flex-col gap-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                  {site.phone}
                </a>
                {site.phoneSecondary && (
                  <a href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-ink">
                    {site.phoneSecondary}
                  </a>
                )}
              </div>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Business Hours">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="font-medium text-ink">{h.time}</span>
                </div>
              ))}
            </InfoCard>

            <Button
              href={whatsappLink("Hi, I'd like to know more about your products.")}
              variant="accent"
              icon={MessageCircle}
              className="justify-center"
            >
              Chat on WhatsApp
            </Button>

            <div className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brass-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink">
                    Exact Showroom Location
                  </span>
                </div>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brass-700 underline decoration-brass-400 hover:text-ink"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                <iframe
                  title="R P Tiles exact store location map"
                  src={site.mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <Button
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={MapPin}
                className="w-full justify-center rounded-lg"
              >
                Get Live Driving Directions
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-sm border border-stone-200 bg-white p-5 shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-700">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1 text-sm text-ink-soft">
        <span className="font-medium text-ink">{title}</span>
        {children}
      </div>
    </div>
  );
}
