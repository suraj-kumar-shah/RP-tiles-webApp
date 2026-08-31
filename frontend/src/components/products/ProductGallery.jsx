import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const gallery = images.length ? images : ["/logo/RPL-navigation-logo.svg"];

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-square w-full overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
        <img
          src={gallery[active]}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      {gallery.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {gallery.map((img, idx) => (
            <button
              key={img + idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`View image ${idx + 1}`}
              aria-current={active === idx}
              className={`aspect-square overflow-hidden rounded-sm border-2 bg-stone-100 transition-colors ${
                active === idx ? "border-stone-900" : "border-transparent hover:border-stone-300"
              }`}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
