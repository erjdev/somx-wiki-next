import { SomSpellData } from "./types/spell";

export const spells: SomSpellData[] = [
  {
    id: "spell-dark-strike",
    name: "Dark Strike",
    imageUrl: "/pictures/SP23.png",
    requiredStats: {
      level: 1,
      magic: 3900,
    },
    manaCost: 650,
    damage: 1300,
  },
];
