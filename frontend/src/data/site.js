export const site = {
  name: "R.P. Tiles Araria",
  fullName: "R.P. Tiles Araria",
  logo: "/logo/RPL-navigation-logo.svg",
  tagline: "Premium Materials for Beautiful Spaces",
  description:
    "A premium showroom for marble, tiles, sanitary ware, bathroom fittings and architectural hardware for modern homes and commercial spaces.",
  phone: "+91 99312 93252",
  phoneSecondary: "+91 95722 13250",
  phoneRaw: "919931293252",
  phoneSecondaryRaw: "919572213250",
  email: "rptilesararia@gmail.com",
  address: {
    line1: "Near Pawan Showroom",
    line2: "Bus Stand Araria",
    city: "Araria",
    state: "Bihar",
    pincode: "854311",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/rp_tiles_araria/",
    facebook: "https://www.facebook.com/rptilesararia",
    youtube: "#",
    pinterest: "#",
  },
  googleMapsUrl: "https://maps.app.goo.gl/nzULhPqpGwdVzGGR9",
  mapEmbedUrl: "https://maps.google.com/maps?q=26.1317821,87.4582342&hl=en&z=16&output=embed",
  mapEmbedQuery: "R P Tiles, Near Pawan Showroom, Bus Stand Araria Bihar 854311",
};

export const whatsappLink = (message = "") => {
  const base = `https://wa.me/${site.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
