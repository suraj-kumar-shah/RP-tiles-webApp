export const categories = [
  {
    id: "marble",
    name: "Marble",
    description: "Natural and engineered marble slabs for floors, walls and countertops.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiles",
    name: "Tiles",
    description: "Floor, wall, kitchen and bathroom tiles in a range of finishes.",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Complete bathroom solutions — from fixtures to finishing touches.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sanitary-ware",
    name: "Sanitary Ware",
    description: "Toilet seats, wash basins and sanitary fixtures for every space.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "faucets-fittings",
    name: "Faucets & Fittings",
    description: "Taps, showers and bathroom fittings in premium finishes.",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "door-gate-hardware",
    name: "Door & Gate Hardware",
    description: "Handles, locks, hinges, latches and bolts built to last.",
    image:
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "construction-hardware",
    name: "Construction Hardware",
    description: "Dependable hardware essentials for every construction project.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "home-architecture",
    name: "Home Architecture",
    description: "Materials and finishes for architectural and interior projects.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
