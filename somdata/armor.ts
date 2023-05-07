import { SomArmor } from "./types/item";

const unsortedArmor: SomArmor[] = [
  {
    id: "blessed-robes", // 
    name: "Blessed Robes",
    description: "Blocks Damage Tiles in Demon Island in sinai and keeps some demons from attacking.",
    imageUrl: "/pictures/item26.png",
    requiredStats: {
      defense: 1,
    },
    durability: 1000,
  },
  {
    id: "forest-camo", // 
    name: "Forest Camo",
    description: "Soulbound event item. This turns off the auto agro of some critters during events. Tends to drop from Stoneshire Militia",
    imageUrl: "/pictures/item569.png",
    requiredStats: {
      defense: 1,
    },
    durability: 100,
  },
  {
    id: "healers-robes", // 
    name: "Healer's Robes",
    description: "Blocks Damage Tiles in Nether and some spells. Drops from several Nether area npcs.",
    imageUrl: "/pictures/item27.png",
    requiredStats: {
      defense: 1,
    },
    durability: 150,
  },
  {
    id: "templum-cloak", // 
    name: "Templum Cloak",
    description: "Templum helps npcs not agro mages and angels in Templum. Buy for 1,000 Templum Shards.",
    imageUrl: "/pictures/item116.png",
    requiredStats: {
      defense: 1,
    },
    durability: 300,
  },
  {
    id: "light-cloak", // 
    name: "Light Cloak",
    description: "Free at Ipsen Docks.",
    imageUrl: "/pictures/item212.png",
    requiredStats: {
      defense: 3,
    },
    durability: 65,
  },
  {
    id: "worn-leather-coat", // 
    name: "Worn Leather Coat",
    description: "",
    imageUrl: "/pictures/item220.png",
    requiredStats: {
      defense: 8,
    },
    durability: 100,
  },
  {
    id: "wind-cape", // 
    name: "Wind Cape",
    description: "",
    imageUrl: "/pictures/item73.png",
    requiredStats: {
      defense: 12,
    },
    durability: 100,
  },
  {
    id: "rusted-mail", // 
    name: "Rusted Mail",
    description: "",
    imageUrl: "/pictures/item215.png",
    requiredStats: {
      defense: 16,
    },
    durability: 100,
  },
  {
    id: "dwarven", // 
    name: "Dwarven Armor",
    description: "",
    imageUrl: "/pictures/item22.png",
    requiredStats: {
      defense: 20,
    },
    durability: 110,
  },
  {
    id: "iron-chainmail", // 
    name: "Iron Chainmail",
    description: "",
    imageUrl: "/pictures/item218.png",
    requiredStats: {
      defense: 21,
    },
    durability: 110,
  },
  {
    id: "avian-cloak", // 
    name: "Avian Cloak",
    description: "",
    imageUrl: "/pictures/item70.png",
    requiredStats: {
      defense: 25,
    },
    durability: 115,
  },
  {
    id: "hunters", // 
    name: "Hunter's Armor",
    description: "",
    imageUrl: "/pictures/item65.png",
    requiredStats: {
      defense: 30,
    },
    durability: 145,
  },
  {
    id: "harlequin-crest", // 
    name: "Harlequin Crest",
    description: "",
    imageUrl: "/pictures/item23.png",
    requiredStats: {
      defense: 38,
    },
    durability: 100,
  },
  {
    id: "titan", // 
    name: "Titan Armor",
    description: "",
    imageUrl: "/pictures/item64.png",
    requiredStats: {
      defense: 40,
    },
    durability: 140,
  },
  {
    id: "crimson-hide", // 
    name: "Titan Armor",
    description: "",
    imageUrl: "/pictures/item63.png",
    requiredStats: {
      defense: 52,
    },
    durability: 150,
  },
  {
    id: "armush", // 
    name: "Armush",
    description: "",
    imageUrl: "/pictures/item23.png",
    requiredStats: {
      defense: 55,
    },
    durability: 160,
  },
  {
    id: "mana-plate", // 
    name: "Mana Plate",
    description: "",
    imageUrl: "/pictures/item102.png",
    requiredStats: {
      defense: 65,
    },
    durability: 168,
  },
  {
    id: "slayers", // 
    name: "Slayer's Armor",
    description: "",
    imageUrl: "/pictures/item25.png",
    requiredStats: {
      defense: 75,
    },
    durability: 200,
  },
  {
    id: "wolven-hide", // 
    name: "Wolven Hide",
    description: "",
    imageUrl: "/pictures/item62.png",
    requiredStats: {
      defense: 82,
    },
    durability: 200,
  },
  {
    id: "wanderers-garb", // 
    name: "Wanderer's Garb",
    description: "",
    imageUrl: "/pictures/item24.png",
    requiredStats: {
      defense: 100,
    },
    durability: 1,
  },
  {
    id: "cos", // 
    name: "Cape of Shadows",
    description: "",
    imageUrl: "/pictures/item208.png",
    requiredStats: {
      defense: 108,
    },
    durability: 250,
  },
  {
    id: "aom",
    name: "Armor of Might",
    imageUrl: "/pictures/item207.png",
    requiredStats: {
      defense: 113,
    },
    durability: 300,
  },
  {
    id: "crystal", // 
    name: "Crystal Armor",
    description: "",
    imageUrl: "/pictures/item67.png",
    requiredStats: {
      defense: 115,
    },
    durability: 235,
  },
  {
    id: "aranaea-fabric", // 
    name: "Aranaea Fabric",
    description: "",
    imageUrl: "/pictures/item216.png",
    requiredStats: {
      defense: 125,
    },
    durability: 235,
  },
  {
    id: "skud-hide", // 
    name: "Skud Hide",
    description: "",
    imageUrl: "/pictures/item533.png",
    requiredStats: {
      defense: 125,
    },
    durability: 250,
  },
  {
    id: "tiger-hide", // 
    name: "Tiger Hide",
    description: "",
    imageUrl: "/pictures/item215.png",
    requiredStats: {
      defense: 132,
    },
    durability: 350,
  },
  {
    id: "zbp", // 
    name: "Tiger Hide",
    description: "",
    imageUrl: "/pictures/item210.png",
    requiredStats: {
      defense: 140,
    },
    durability: 350,
  },
  {
    id: "griffon", // 
    name: "Griffon Armor",
    description: "",
    imageUrl: "/pictures/item112.png",
    requiredStats: {
      defense: 148,
    },
    durability: 350,
  },
  {
    id: "mithril-plate", // 
    name: "Mithril Plate",
    description: "",
    imageUrl: "/pictures/item21.png",
    requiredStats: {
      defense: 158,
    },
    durability: 400,
  },
];

// Sorted by defense, then durability, then name
export const armor = unsortedArmor.sort((a, b) => {
  let ret = (a.requiredStats?.defense ?? 0) - (b.requiredStats?.defense ?? 0);
  if (ret === 0) {
    ret = (a.durability ?? 0) - (b.durability ?? 0);
  }
  if (ret === 0) {
    ret = a.name.localeCompare(b.name);
  }
  return ret;
});
