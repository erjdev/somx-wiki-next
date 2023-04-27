import { SomRing } from "./types/item";

export const rings: SomRing[] = [
  {
    id: "ring-arom",
    name: "Accursed Ring of Magic",
    imageUrl: "/pictures/item118.png",
    unique: true,
    description: "A ring that increases the power of magic.",
    requiredStats: {
      level: 500,
    },
    benefitStats: {
      magic: 1600,
      mana: -1600,
      health: -250,
    }
  },
];
