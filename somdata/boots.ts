import { SomBoot } from "./types/item";

export const boots: SomBoot[] = [
  {
    id: "titanium-tetra", // 626
    name: "Titanium Tetra Boots",
    description: "Boots worn to protected you from the evil magical bindings in Tetra. (Use in Tetra)",
    imageUrl: "/pictures/item276.png",
    durability: 100,
  },
  {
    id: "reinforced", // 580
    name: "Reinforced Boots",
    description: "Reinforced boots capable of withstanding the harshest ground. Perfect for crossing incredibly rocky paths. (Use in Tower)",
    imageUrl: "/pictures/item286.png",
    unique: true,
    durability: 200,
  },
  {
    id: "lava-cavern", // 421
    name: "Lava Cavern Boots",
    description: "Forged from lava and blessed by a blind mage, this armour can withstand the heat of the lava caverns.",
    imageUrl: "/pictures/item647.png",
    durability: 550,
  },
].sort((a, b) => a.durability - b.durability);
