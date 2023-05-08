import { SomClass } from "./types/classes";
import { SomArmor } from "./types/item";

const unsortedArmor: SomArmor[] = [
  {
    id: "blessed-robes", // 483
    name: "Blessed Robes",
    description: "A Demon Slayer's blessed robes. Prevents demons from attacking and keeps you safe on cursed ground.",
    imageUrl: "/pictures/item26.png",
    requiredStats: {
      defense: 1,
    },
    durability: 1000,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "forest-camo", // 1245
    name: "Forest Camo",
    description: "Camoflouge for Stoneshire Forest. Feels kinda pokey like the sticks actually pentrate the fabric.",
    imageUrl: "/pictures/item569.png",
    unique: true,
    bindOnPickup: true,
    requiredStats: {
      defense: 1,
    },
    durability: 100,
  },
  {
    id: "healers-robes", // 1227
    name: "Healer's Robes",
    description: "The Robes of a Nether Healer. Allow crossing the magical barriers in the Nether Realm without damage and causes most of the creatures of the realm to recognize you as one of your own.",
    imageUrl: "/pictures/item27.png",
    requiredStats: {
      defense: 1,
    },
    durability: 150,
  },
  {
    id: "templum-cloak", // 1274
    name: "Templum Cloak",
    description: "A cloak worn by an ancient Templum Mage. Hides the wearer from view within the Templum.",
    imageUrl: "/pictures/item116.png",
    requiredStats: {
      defense: 1,
    },
    durability: 300,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "light-cloak", // 3
    name: "Light Cloak",
    description: "A light and breezy cloak that can be worn for some minor protection.",
    imageUrl: "/pictures/item212.png",
    requiredStats: {
      defense: 3,
    },
    durability: 65,
  },
  {
    id: "worn-leather-coat", // 7
    name: "Worn Leather Coat",
    description: "Armor made of fine leather. The Distressed look attracts attention.",
    imageUrl: "/pictures/item220.png",
    requiredStats: {
      defense: 8,
    },
    durability: 100,
  },
  {
    id: "wind-cape", // 35
    name: "Wind Cape",
    description: "A flowing cloak made of fine feathers. Birds do tend to avoid you though.",
    imageUrl: "/pictures/item73.png",
    requiredStats: {
      defense: 12,
    },
    durability: 100,
  },
  {
    id: "rusted-mail", // 19
    name: "Rusted Mail",
    description: "A protective mail that can be worn that's a bit rusted. Always stains your undershirt.",
    imageUrl: "/pictures/item215.png",
    requiredStats: {
      defense: 16,
    },
    durability: 100,
  },
  {
    id: "dwarven", // 26
    name: "Dwarven Armor",
    description: "Armor crafted using rich minerals found in the Dwarven mines. Probably has secret compartments in it.",
    imageUrl: "/pictures/item22.png",
    requiredStats: {
      defense: 20,
    },
    durability: 110,
  },
  {
    id: "iron-chainmail", // 66
    name: "Iron Chainmail",
    description: "Your basic chainmail, better than running around in a light cloak to be sure.",
    imageUrl: "/pictures/item218.png",
    requiredStats: {
      defense: 21,
    },
    durability: 110,
  },
  {
    id: "avian-cloak", // 29
    name: "Avian Cloak",
    description: "A silky smooth cape that waves freely while walking, almost as if there's always wind blowing it.",
    imageUrl: "/pictures/item70.png",
    requiredStats: {
      defense: 25,
    },
    durability: 115,
  },
  {
    id: "hunters", // 34
    name: "Hunter's Armor",
    description: "An armor piece that fits comfortably for hunting outings. It is also waterproof.",
    imageUrl: "/pictures/item65.png",
    requiredStats: {
      defense: 30,
    },
    durability: 145,
  },
  {
    id: "harlequin-crest", // 12
    name: "Harlequin Crest",
    description: "Armor that was once worn by a brave warrior, held dear by his loving wife.",
    imageUrl: "/pictures/item23.png",
    requiredStats: {
      defense: 38,
    },
    durability: 100,
  },
  {
    id: "titan", // 64
    name: "Titan Armor",
    description: "Forged by the dwarvish smiths in a brutalist style.",
    imageUrl: "/pictures/item64.png",
    requiredStats: {
      defense: 40,
    },
    durability: 140,
  },
  {
    id: "crimson-hide", // 290
    name: "Crimson Hide",
    description: "Smelly strongly of cranberries.",
    imageUrl: "/pictures/item63.png",
    requiredStats: {
      defense: 52,
    },
    durability: 150,
  },
  {
    id: "armush", // 1581
    name: "Armush",
    description: "Used alternately as a doorstop and paperweight. This armor does indeed make your butt look big",
    imageUrl: "/pictures/item23.png",
    requiredStats: {
      defense: 55,
    },
    durability: 160,
  },
  {
    id: "mana-plate", // 105
    name: "Mana Plate",
    description: "This armor has a constantly shifting pattern that diverts the eyes from the vital spots.",
    imageUrl: "/pictures/item102.png",
    requiredStats: {
      defense: 65,
    },
    durability: 168,
  },
  {
    id: "slayers", // 70
    name: "Slayer's Armor",
    description: "While initally visually impressive this armor is actually ill-fitting",
    imageUrl: "/pictures/item25.png",
    requiredStats: {
      defense: 75,
    },
    durability: 200,
  },
  {
    id: "wolven-hide", // 70
    name: "Wolven Hide",
    description: "Popular in glacier these armors are often made from the hides of local wolves and are popular mainstays of the local guards.",
    imageUrl: "/pictures/item62.png",
    requiredStats: {
      defense: 82,
    },
    durability: 200,
  },
  {
    id: "wanderers-garb", // 139
    name: "Wanderer's Garb",
    description: "A mysterious ill-constructed garb that was worn by a mysterious wanderer.",
    imageUrl: "/pictures/item24.png",
    requiredStats: {
      defense: 100,
    },
    durability: 1,
  },
  {
    id: "cos", // 
    name: "Cape of Shadows",
    description: "Typically worn by vampire hunters to aid them in thier unending quest.  These armors are highly prized in the vampire hunting profession",
    imageUrl: "/pictures/item208.png",
    requiredStats: {
      defense: 108,
    },
    durability: 250,
  },
  {
    id: "aom",
    name: "Armor of Might",
    description: "This armor is favored by the warrior denizens of the swamp.",
    imageUrl: "/pictures/item207.png",
    requiredStats: {
      defense: 113,
    },
    durability: 300,
  },
  {
    id: "crystal", // 
    name: "Crystal Armor",
    description: "Hardened Crystals studded with diamond. Works as a strong defense and a visual assault.",
    imageUrl: "/pictures/item67.png",
    requiredStats: {
      defense: 115,
    },
    durability: 235,
  },
  {
    id: "aranaea-fabric", // 
    name: "Aranaea Fabric",
    description: "A tough woven armor made by a dour inhabitant of the Deadlands.",
    imageUrl: "/pictures/item216.png",
    requiredStats: {
      defense: 125,
    },
    durability: 235,
  },
  {
    id: "skud-hide", // 
    name: "Skud Hide",
    description: "Armor quickly fastened together from the body parts of a Skud Beserker.",
    imageUrl: "/pictures/item533.png",
    requiredStats: {
      defense: 125,
    },
    durability: 250,
  },
  {
    id: "tiger-hide", // 
    name: "Tiger Hide",
    description: "Interlocked claws and tough fiber provide the excellent protection this armor provides.",
    imageUrl: "/pictures/item215.png",
    requiredStats: {
      defense: 132,
    },
    durability: 350,
  },
  {
    id: "zbp", // 
    name: "Zodiac Breastplate",
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
  {
    id: "leather-battle-robe", // 
    name: "Leather Battle Robe",
    description: "",
    imageUrl: "/pictures/item116.png",
    requiredStats: {
      defense: 168,
    },
    durability: 420,
  },
  {
    id: "conquerers-platemail", // 
    name: "Conquerer's Platemail",
    description: "",
    imageUrl: "/pictures/item20.png",
    requiredStats: {
      defense: 170,
    },
    durability: 450,
  },
  {
    id: "millenia-guard", // 
    name: "Millenia Guard",
    description: "",
    imageUrl: "/pictures/item17.png",
    requiredStats: {
      defense: 170,
    },
    durability: 450,
  },
  {
    id: "fused-bone-plate", // 
    name: "Fused Bone Plate",
    description: "",
    imageUrl: "/pictures/item16.png",
    requiredStats: {
      defense: 172,
    },
    durability: 285,
  },
  {
    id: "glacier-chest-plate", // 
    name: "Glacier Chest Plate",
    description: "",
    imageUrl: "/pictures/item102.png",
    requiredStats: {
      defense: 180,
    },
    durability: 450,
  },
  {
    id: "scarlet-robe", // 
    name: "Scarlet Robe",
    description: "",
    imageUrl: "/pictures/item206.png",
    requiredStats: {
      defense: 185,
    },
    durability: 450,
  },
  {
    id: "verdant-faulds", // 
    name: "Verdant Faulds",
    description: "",
    imageUrl: "/pictures/item557.png",
    requiredStats: {
      defense: 185,
    },
    durability: 470,
  },
  {
    id: "scale", // 
    name: "Scale Armor",
    description: "",
    imageUrl: "/pictures/item71.png",
    requiredStats: {
      defense: 190,
    },
    durability: 500,
  },
  {
    id: "golden", // 
    name: "Golden Armor",
    description: "",
    imageUrl: "/pictures/item214.png",
    requiredStats: {
      defense: 200,
    },
    durability: 265,
  },
  {
    id: "aod", // 
    name: "Armor of Darkness",
    description: "",
    imageUrl: "/pictures/item213.png",
    requiredStats: {
      defense: 210,
    },
    durability: 550,
  },
  {
    id: "cm", // 
    name: "Chaos Mantle",
    description: "",
    imageUrl: "/pictures/item205.png",
    requiredStats: {
      defense: 250,
    },
    durability: 650,
  },
  {
    id: "demonic-bloodmail", // 
    name: "Demonic Bloodmail",
    description: "",
    imageUrl: "/pictures/item528.png",
    requiredStats: {
      defense: 262,
    },
    durability: 655,
  },
  {
    id: "ccm", // 
    name: "Cold Chaos Mantle",
    description: "",
    imageUrl: "/pictures/item528.png",
    requiredStats: {
      defense: 275,
    },
    durability: 700,
  },
  {
    id: "reptillian", // 
    name: "Reptillian Armor",
    description: "",
    imageUrl: "/pictures/item18.png",
    requiredStats: {
      defense: 285,
    },
    durability: 750,
  },
  {
    id: "maze-prize", // 
    name: "Maze Prize Armor",
    description: "",
    imageUrl: "/pictures/item68.png",
    requiredStats: {
      defense: 300,
    },
    durability: 750,
  },
  {
    id: "ohka-monk-garb", // 
    name: "Ohka Monk Garb",
    description: "",
    imageUrl: "/pictures/item219.png",
    requiredStats: {
      defense: 300,
    },
    durability: 750,
  },
  {
    id: "midnight-chestpiece", // 
    name: "Midnight Chestpiece",
    description: "",
    imageUrl: "/pictures/item674.png",
    requiredStats: {
      defense: 340,
    },
    durability: 850,
  },
  {
    id: "upgrade-maze-prize", // 
    name: "Maze Prize Armor (Upgraded)",
    description: "",
    imageUrl: "/pictures/item68.png",
    requiredStats: {
      defense: 375,
    },
    durability: 900,
  },
  {
    id: "armor-of-insanity", // 
    name: "Armor of Insanity",
    description: "",
    imageUrl: "/pictures/item425.png",
    requiredStats: {
      defense: 400,
    },
    durability: 1000,
  },
  {
    id: "wdm", // 
    name: "White Dragon's Mail",
    description: "",
    imageUrl: "/pictures/item209.png",
    requiredStats: {
      defense: 425,
    },
    durability: 1100,
  },
  {
    id: "hha", // 
    name: "Hylian Hero Armor",
    description: "",
    imageUrl: "/pictures/item526.png",
    requiredStats: {
      defense: 500,
    },
    durability: 1250,
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
