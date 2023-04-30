import { SomWeapon } from "./types/item";

export const weapons: SomWeapon[] = [
  {
    id: "iron-sabre",
    name: "Iron Sabre",
    imageUrl: "/pictures/item238.png",
    requiredStats: {
      strength: 135,
    },
    durability: 270
  },
  {
    id: "abs",
    name: "Ainkurn Broadsword",
    imageUrl: "/pictures/item169.png",
    requiredStats: {
      strength: 165,
    },
    durability: 330,
  },
  {
    id: "ba",
    name: "Berserker's Axe",
    imageUrl: "/pictures/item183.png",
    requiredStats: {
      strength: 188,
    },
    durability: 376,
  },
  {
    id: "bhb",
    name: "Battlehardened Blade",
    imageUrl: "/pictures/item531.png",
    poisonPercent: 2,
    requiredStats: {
      strength: 480,
    },
    durability: 960,
  },
];
