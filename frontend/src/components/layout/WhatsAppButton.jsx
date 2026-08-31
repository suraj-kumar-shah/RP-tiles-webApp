import { WhatsAppIcon } from "../ui/SocialIcons.jsx";
import { whatsappLink } from "../../data/site.js";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi, I would like to enquire about your marble, tiles, and fittings.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon size={28} className="text-white drop-shadow-sm" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-stone-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
