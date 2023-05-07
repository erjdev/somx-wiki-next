import { SomClass } from "./types/classes";
import { SomNeck } from "./types/item";

const unsortedNecks: SomNeck[] = [
  {
    id: "brilliant-finality", // 839
    name: "Brilliant Finality Amulet",
    imageUrl: "/pictures/item676.png",
    unique: true,
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      strength: 345,
      defense: 100,
    },
  },
  {
    id: "crimson-trinity", // ??? - Not sure what ID this is
    name: "Crimson Trinity Pendant",
    description: "", // todo - add description
    imageUrl: "/pictures/item143.png", // todo - fix icon
    showsHealth: true,
    requiredStats: { level: 425 },
    benefitStats: {
      strength: 200,
      defense: 200,
      speed: 200,
      health: 100,
    },
  },
  {
    id: "hellforged-trinity", // 871
    name: "Hellforged Trinity Amulet",
    description: "A reforged version of the Crimson Trinity Pendant that has been molten down with a Trinity Source by the Flame of Prometheus.",
    imageUrl: "/pictures/item143.png",
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      strength: 200,
      defense: 200,
      speed: 200,
      magic: 200,
      health: 200,
      mana: 100,
    },
  },
  {
    id: "scarlet-mage", // 1272
    name: "Scarlet Mage Necklace",
    imageUrl: "/pictures/item630.png",
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      strength: 350,
      mana: 2000,
      defense: 50,
      magic: 450,
      speed: 175,
    },
  },
  {
    id: "shadow-mage", // 1273
    name: "Shadow Mage Necklace",
    description: "A supremely powerful necklace that was once worn by the Shadow Mage.  It is said to have been forged from the remains of the Shadow Mage's staff.",
    imageUrl: "/pictures/item639.png",
    bindOnPickup: true,
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      health: 500,
      mana: 3000,
      defense: 75,
      magic: 600,
      speed: 250,
    },
  },
  {
    id: "old-necklace", // 451
    name: "Old Necklace",
    description: "Rusty and fairly generic.  Maybe someone will want it.",
    imageUrl: "/pictures/item323.png",
    unique: true,
    requiredStats: { level: 1 },
    benefitStats: {
      health: 100,
      strength: 10,
    }
  },
  {
    id: "cobalt-bolt", // 820
    name: "Cobalt Bolt Necklace",
    description: "A necklace made of cobalt shards.",
    imageUrl: "/pictures/item638.png",
    showsHealth: true,
    requiredStats: { level: 325 },
    benefitStats: {
      health: 150,
      mana: 900,
      magic: 300,
      speed: 75,
    },
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "crimson-wave", // 821
    name: "Crimson Wave Necklace",
    description: "A necklace made of palladium chunks.",
    imageUrl: "/pictures/item636.png",
    showsHealth: true,
    requiredStats: { level: 250 },
    benefitStats: {
      health: 400,
      strength: 50,
      defense: 50,
      speed: 80,
    },
  },
  // {
  //   id: "worthy", // 836
  //   name: "Worthy Necklace",
  //   description: "",
  //   imageUrl: "/pictures/item579.png",
  //   showsHealth: true,
  //   requiredStats: { level: 300 },
  //   benefitStats: {
  //     health: 250,
  //     mana: 100,
  //     strenth: 100,
  //     defense: 100,
  //     magic: 50,
  //     speed: 100,
  //   },
  // },
  {
    id: "inforged-chaos", // 1054
    name: "Ironforged Chaos Necklace",
    description: "A necklace forged from great quantities of iron and the mythical Chaos Mantle.  It provides a strong defensive aura.",
    imageUrl: "/pictures/item635.png",
    requiredStats: { level: 250 },
    benefitStats: {
      defense: 250,
    },
  },
  {
    id: "frozen-chaos", // 838
    name: "Frozen Chaos Necklace",
    description: "The skilled Diamond Forger was able to amplify the power of the Ironforged Chaos Necklace by adding the power of cold with rare multifacted diamonds.",
    imageUrl: "/pictures/item641.png",
    showsHealth: true,
    requiredStats: { level: 350 },
    benefitStats: {
      health: 500,
      strength: 100,
      defense: 275,
    },
  },
  {
    id: "gerudo-warlock", // 870
    name: "Gerudo Warlock Neck Cuffs",
    description: "A royal jewel passed down by the Gerudo clan.",
    imageUrl: "/pictures/item334.png",
    showsHealth: true,
    requiredStats: { level: 400 },
    benefitStats: {
      health: 250,
      mana: 1200,
      defense: 50,
      magic: 350,
      speed: 125,
    },
  },
  {
    id: "sapphire", // 879
    name: "Sapphire Necklace",
    description: "A really fancy necklace with magical properties made from the sapphires found deep in the northern mines.",
    imageUrl: "/pictures/item318.png",
    requiredStats: { level: 1 },
    benefitStats: {
      mana: 20,
      magic: 4,
    },
  },
  {
    id: "enchanted", // 880
    name: "Enchanted Necklace",
    description: "A basic, enchanted necklace with magical properties.",
    imageUrl: "/pictures/item135.png",
    requiredStats: { level: 1 },
    benefitStats: {
      mana: 20,
      magic: 20,
    },
  },
  {
    id: "boggy", // 2242
    name: "Boggy Necklace",
    description: "Who knows how long this necklace has been accumulating power in the bog.  It's probably safe to wear.",
    showsHealth: true,
    imageUrl: "/pictures/item324.png",
    requiredStats: { level: 1 },
  },
  {
    id: "trophy", // 2600
    name: "Trophy Necklace",
    description: "A necklace suited for the winner of the Battle Royale event.",
    showsHealth: true,
    unique: true,
    imageUrl: "/pictures/item164.png",
    requiredStats: { level: 1 },
    benefitStats: {
      health: 2000,
      strength: 275,
      defense: 100,
      speed: 30,
    },
  },
  {
    id: "glacier-charm", // ??? - Not sure what ID this is
    name: "Glacier Charm",
    description: "", // todo - add description
    showsHealth: true,
    unique: true,
    imageUrl: "/pictures/item164.png", // todo - fix icon
    requiredStats: { level: 200 },
    benefitStats: {
      health: 50,
      mana: 500,
      magic: 165,
      speed: 75,
    },
    availableClasses: [SomClass.MAGE],
  },
  {
    id: "golden-finality", // ??? - Not sure what ID this is
    name: "Golden Finality Chain",
    description: "", // todo - add description
    showsHealth: true,
    unique: true,
    imageUrl: "/pictures/item164.png", // todo - fix icon
    requiredStats: { level: 275 },
    benefitStats: {
      strength: 300,
    },
  },
];

// Sorted by level, then alphabetically
export const necks = unsortedNecks.sort((a, b) => {
  let ret = (a.requiredStats?.level ?? 0) - (b.requiredStats?.level ?? 0);
  if (ret === 0) {
    ret = a.name.localeCompare(b.name);
  }
  return ret;
});
