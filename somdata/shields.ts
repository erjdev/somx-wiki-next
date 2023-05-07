import { SomShield } from "./types/item";

const unsortedShields: SomShield[] = [
  {
    id: "wooden", // 5
    name: "Wooden Shield",
    description: "A poorly-made wooden shield that seems to bend a little under pressure.",
    imageUrl: "/pictures/item196.png",
    durability: 35,
    blockPercent: 3,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "bronze", // 10
    name: "Bronze Shield",
    description: "A well-crafted bronze shield.",
    imageUrl: "/pictures/item74.png",
    durability: 45,
    blockPercent: 5,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "tiger", // 23
    name: "Tiger Shield",
    description: "A finely-crafted shield sporting an emblem of a vicious tiger.",
    imageUrl: "/pictures/item15.png",
    durability: 60,
    blockPercent: 7,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "mush", // 1579
    name: "Mushield",
    description: "Makes sense 10% of the time, every time.",
    imageUrl: "/pictures/item678.png",
    durability: 75,
    blockPercent: 10,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "soul", // 107
    name: "Soul Shield",
    description: "A shield that seems to be made of pure energy.",
    imageUrl: "/pictures/item66.png",
    durability: 90,
    blockPercent: 12,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "ice", // 57
    name: "Ice Shield",
    description: "A shield forged from cold diamonds.",
    imageUrl: "/pictures/item570.png",
    durability: 110,
    blockPercent: 15,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "ipsen", // 436
    name: "Ipsen Shield",
    description: "The shield given to the hard-working defenders of Ipsen.",
    imageUrl: "/pictures/item157.png",
    durability: 200,
    blockPercent: 21,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "shadow", // 235
    name: "Shadow Shield",
    description: "A shield forged from cold diamonds.",
    imageUrl: "/pictures/item31.png",
    durability: 150,
    blockPercent: 25,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "hero", // 510
    name: "Hero's Shield",
    description: "A shield forged with the essences of three powerful deities.",
    imageUrl: "/pictures/item412.png",
    durability: 600,
    blockPercent: 25,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "boneforged", // 1621
    name: "Boneforged Shield",
    description: "A shield forged from the bones of the fallen.",
    imageUrl: "/pictures/item530.png",
    durability: 700,
    blockPercent: 30,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "viking", // 2977
    name: "Viking Shield",
    description: "Forged with the finest steel in all of Rora.",
    imageUrl: "/pictures/item570.png",
    durability: 450,
    blockPercent: 30,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "sog", // 1211
    name: "Shield of Glory",
    description: "Glory to the wearer of this shield.",
    imageUrl: "/pictures/item702.png",
    durability: 800,
    blockPercent: 31,
    requiredStats: {
      level: 300,
    },
  },
  {
    id: "fsog", // 1212
    name: "Fortified Shield of Glory",
    description: "Fortified with the finest metals of the land.",
    imageUrl: "/pictures/item280.png",
    durability: 900,
    blockPercent: 32,
    requiredStats: {
      level: 300,
    },
  },
  {
    id: "maze", // 1248
    name: "Maze Prize Shield",
    description: "Shield available as a reward from Maze events - it's your favorite shade of green.",
    imageUrl: "/pictures/item672.png",
    unique: true,
    durability: 370,
    blockPercent: 20,
    requiredStats: {
      level: 50,
    },
  },
  {
    id: "mazeupg", // 1261
    name: "(Upgraded) Maze Prize Shield",
    description: "Just like the original, but better.  This one has a bunch of smiley-face stickers.",
    imageUrl: "/pictures/item672.png",
    unique: true,
    durability: 500,
    blockPercent: 25,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "nether", // 1317
    name: "Nether Shield",
    description: "Reinforced with the power of the nether realm, this is one of the strongest shields known to man.",
    imageUrl: "/pictures/item685.png",
    durability: 1100,
    blockPercent: 33,
    requiredStats: {
      level: 500,
    },
  },
  {
    id: "scorp", // 222
    name: "Scorpio's Ring",
    description: "A ring that was once worn by the great Scorpio; thought to possess godlike blocking abilities.",
    imageUrl: "/pictures/item312.png",
    durability: 1650,
    blockPercent: 35,
    requiredStats: {
      level: 1,
    },
  },
];

// Sorted by block percent, then name
export const shields = unsortedShields.sort((a, b) => {
  let ret = a.blockPercent - b.blockPercent;
  if (ret === 0) {
    ret = a.name.localeCompare(b.name);
  }
  return ret;
});
