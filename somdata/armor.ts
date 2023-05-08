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
    id: "wolven-hide", // 139
    name: "Wolven Hide",
    description: "Popular in glacier these armors are often made from the hides of local wolves and are popular mainstays of the local guards.",
    imageUrl: "/pictures/item62.png",
    requiredStats: {
      defense: 82,
    },
    durability: 200,
  },
  {
    id: "wanderers-garb", // 45
    name: "Wanderer's Garb",
    description: "A mysterious ill-constructed garb that was worn by a mysterious wanderer.",
    imageUrl: "/pictures/item24.png",
    requiredStats: {
      defense: 100,
    },
    durability: 1,
  },
  {
    id: "cos", // 143
    name: "Cape of Shadows",
    description: "Typically worn by vampire hunters to aid them in thier unending quest.  These armors are highly prized in the vampire hunting profession",
    imageUrl: "/pictures/item208.png",
    requiredStats: {
      defense: 108,
    },
    durability: 250,
  },
  {
    id: "aom", // 168
    name: "Armor of Might",
    description: "This armor is favored by the warrior denizens of the swamp.",
    imageUrl: "/pictures/item207.png",
    requiredStats: {
      defense: 113,
    },
    durability: 300,
  },
  {
    id: "crystal", // 55
    name: "Crystal Armor",
    description: "Hardened Crystals studded with diamond. Works as a strong defense and a visual assault.",
    imageUrl: "/pictures/item67.png",
    requiredStats: {
      defense: 115,
    },
    durability: 235,
  },
  {
    id: "aranaea-fabric", // 1448
    name: "Aranaea Fabric",
    description: "A tough woven armor made by a dour inhabitant of the Deadlands.",
    imageUrl: "/pictures/item216.png",
    requiredStats: {
      defense: 125,
    },
    durability: 235,
  },
  {
    id: "skud-hide", // 704
    name: "Skud Hide",
    description: "Armor quickly fastened together from the body parts of a Skud Beserker.",
    imageUrl: "/pictures/item533.png",
    requiredStats: {
      defense: 125,
    },
    durability: 250,
  },
  {
    id: "tiger-hide", // 226
    name: "Tiger Hide",
    description: "Interlocked claws and tough fiber provide the excellent protection this armor provides.",
    imageUrl: "/pictures/item215.png",
    requiredStats: {
      defense: 132,
    },
    durability: 350,
  },
  {
    id: "zbp", // 216
    name: "Zodiac Breastplate",
    description: "An armor constructed by a master smith who loves rare gems. It has stylized zodiac symbols engraved on it.",
    imageUrl: "/pictures/item210.png",
    requiredStats: {
      defense: 140,
    },
    durability: 350,
  },
  {
    id: "griffon", // 221
    name: "Griffon Armor",
    description: "An armor commonly worn by griffons. It can be won from them or by proving you've killed enough of them to a glacier bounty officer.",
    imageUrl: "/pictures/item112.png",
    requiredStats: {
      defense: 148,
    },
    durability: 350,
  },
  {
    id: "mithril-plate", // 227
    name: "Mithril Plate",
    description: "Made with rare metals in secret practices by master smiths",
    imageUrl: "/pictures/item21.png",
    requiredStats: {
      defense: 158,
    },
    durability: 400,
  },
  {
    id: "leather-battle-robe", // 1603
    name: "Leather Battle Robe",
    description: "Generations of archers have steadily improved this armor",
    imageUrl: "/pictures/item116.png",
    requiredStats: {
      defense: 168,
    },
    durability: 420,
  },
  {
    id: "conquerers-platemail", // 531
    name: "Conquerer's Platemail",
    description: "A well made armor orginally hailing from sky sector.",
    imageUrl: "/pictures/item20.png",
    requiredStats: {
      defense: 170,
    },
    durability: 450,
  },
  {
    id: "millenia-guard", // 236
    name: "Millenia Guard",
    description: "Commonly worn by Rora defenders this armour is uncommonly hard to remove.",
    imageUrl: "/pictures/item17.png",
    requiredStats: {
      defense: 170,
    },
    durability: 450,
  },
  {
    id: "fused-bone-plate", // 1451
    name: "Fused Bone Plate",
    description: "The brainchild of a necromancer this well made armor is popular among the denizens of Deadlands.",
    imageUrl: "/pictures/item16.png",
    requiredStats: {
      defense: 172,
    },
    durability: 285,
  },
  {
    id: "glacier-chest-plate", // 1079
    name: "Glacier Chest Plate",
    description: "The cold eminating from this armor requires a certain amount of skill to tolerate",
    imageUrl: "/pictures/item102.png",
    requiredStats: {
      defense: 180,
    },
    durability: 450,
  },
  {
    id: "scarlet-robe", // 161
    name: "Scarlet Robe",
    description: "Striking even from a distance this armor combines flair with protection.",
    imageUrl: "/pictures/item206.png",
    requiredStats: {
      defense: 185,
    },
    durability: 450,
  },
  {
    id: "verdant-faulds", // 1614
    name: "Verdant Faulds",
    description: "Imbued with the toxins and spores of Syn this armor pulses slowly as if alive.",
    imageUrl: "/pictures/item557.png",
    requiredStats: {
      defense: 185,
    },
    durability: 470,
  },
  {
    id: "scale", // 611
    name: "Scale Armor",
    description: "An armor sold by an angry smith in Pealu. This armor protects you from damage that the world throws at you but, cannot protect you from the insults of others.",
    imageUrl: "/pictures/item71.png",
    requiredStats: {
      defense: 190,
    },
    durability: 500,
  },
  {
    id: "golden", // 134
    name: "Golden Armor",
    description: "This rare armor shines with golden radiance.",
    imageUrl: "/pictures/item214.png",
    requiredStats: {
      defense: 200,
    },
    durability: 265,
  },
  {
    id: "aod", // 955
    name: "Armor of Darkness",
    description: "This blackened and scorched armor is the toughest thing to come out of the dwarven forges.",
    imageUrl: "/pictures/item213.png",
    requiredStats: {
      defense: 210,
    },
    durability: 550,
  },
  {
    id: "cm", // 294
    name: "Chaos Mantle",
    description: "A powerful mantle woven from the souls of the fallen, just as Death's own garb.",
    imageUrl: "/pictures/item205.png",
    requiredStats: {
      defense: 250,
    },
    durability: 650,
  },
  {
    id: "demonic-bloodmail", // 1500
    name: "Demonic Bloodmail",
    description: "Armor that was spawned from the beasts of darkness.",
    imageUrl: "/pictures/item528.png",
    requiredStats: {
      defense: 262,
    },
    durability: 655,
  },
  {
    id: "ccm", // 1569
    name: "Cold Chaos Mantle",
    description: "A powerful mantle that, much like Death's own garb, was woven from souls of the fallen. It has been enchanted with a powerful crystal coating that is as cold as Death's touch.",
    imageUrl: "/pictures/item528.png",
    requiredStats: {
      defense: 275,
    },
    durability: 700,
  },
  {
    id: "reptillian", // 1615
    name: "Reptillian Armor",
    description: "The scales of this armor slide over each other easily providing a flexible armor with the toughness of a powerful reptile.",
    imageUrl: "/pictures/item18.png",
    requiredStats: {
      defense: 285,
    },
    durability: 750,
  },
  {
    id: "maze-prize", // 1247
    name: "Maze Prize Armor",
    description: "This simple looking armor is well designed with few flaws.",
    imageUrl: "/pictures/item68.png",
    requiredStats: {
      defense: 300,
    },
    durability: 750,
  },
  {
    id: "ohka-monk-garb", // 811
    name: "Ohka Monk Garb",
    description: "Brightly colored and free flowing this fabric is Chi blessed.",
    imageUrl: "/pictures/item219.png",
    requiredStats: {
      defense: 300,
    },
    durability: 750,
  },
  {
    id: "midnight-chestpiece", // 283
    name: "Midnight Chestpiece",
    description: "Typically only worn by elite members of the night serpents gang in Deadlands.",
    imageUrl: "/pictures/item674.png",
    requiredStats: {
      defense: 340,
    },
    durability: 850,
  },
  {
    id: "upgrade-maze-prize", // 1259
    name: "Maze Prize Armor (Upgraded)",
    description: "The few flaws in the pervious armor are corrected in this version. It also actively repels armors of the same type.",
    imageUrl: "/pictures/item68.png",
    requiredStats: {
      defense: 375,
    },
    durability: 900,
  },
  {
    id: "armor-of-insanity", // 518
    name: "Armor of Insanity",
    description: "Made with special material that is as tough and durable that symbolizes the endurance a player has been through to have reached the level they have.",
    imageUrl: "/pictures/item425.png",
    requiredStats: {
      defense: 400,
    },
    durability: 1000,
  },
  {
    id: "wdm", // 736
    name: "White Dragon's Mail",
    description: "Durable armor crafted from the nearly inpenetrable skin of the legendary white dragon.",
    imageUrl: "/pictures/item209.png",
    requiredStats: {
      defense: 425,
    },
    durability: 1100,
  },
  {
    id: "hha", // 1546
    name: "Hylian Hero Armor",
    description: "A tunic worn by the mystic hero that has been magically endowed with protective charms making it very durable.",
    imageUrl: "/pictures/item526.png",
    requiredStats: {
      defense: 500,
    },
    durability: 1250,
  },
  {
    id: "vwl", // 2975
    name: "Viking War Leather",
    description: "The armor of choice for a seasoned Viking.",
    imageUrl: "/pictures/item220.png",
    requiredStats: {
      defense: 550,
    },
    durability: 1400,
  },
  {
    id: "dpm", // 2979
    name: "Dragon Platemail",
    description: "Forged by the ancestors of the Highlanders.",
    imageUrl: "/pictures/item71.png",
    requiredStats: {
      defense: 550,
    },
    durability: 1400,
  },
  {
    id: "aopi", // 827
    name: "Armor of Pure Insanity",
    description: "A magically fortified armor that can only be worn by those whose dedication borders on the purest of insanity.",
    imageUrl: "/pictures/item664.png",
    requiredStats: {
      defense: 555,
    },
    durability: 1400,
  },
  {
    id: "aog", // 1206
    name: "Armor of Glory",
    description: "Glory to the wearer of this armor for they have slain many bandits.",
    imageUrl: "/pictures/item646.png",
    requiredStats: {
      defense: 600,
    },
    durability: 1500,
  },
  {
    id: "vwlp", // 
    name: "Viking War Leather+",
    description: "",
    imageUrl: "/pictures/item220.png",
    requiredStats: {
      defense: 650,
    },
    durability: 1650,
  },
  {
    id: "dpmp", // 
    name: "Dragon Platemail+",
    description: "",
    imageUrl: "/pictures/item71.png",
    requiredStats: {
      defense: 650,
    },
    durability: 1650,
  },
  {
    id: "faog", // 
    name: "Fortified Armor of Glory",
    description: "",
    imageUrl: "/pictures/item649.png",
    requiredStats: {
      defense: 650,
    },
    durability: 1650,
  },
  {
    id: "defenders-cloak", // 
    name: "Defender's Cloak",
    description: "",
    imageUrl: "/pictures/item206.png",
    requiredStats: {
      defense: 700,
    },
    durability: 1785,
  },
  {
    id: "cloak-of-insanity", // 
    name: "Cloak of Insanity",
    description: "",
    imageUrl: "/pictures/item68.png",
    requiredStats: {
      defense: 710,
    },
    durability: 1800,
  },
  {
    id: "undead-dragon", // 
    name: "Undead Dragon Armor",
    description: "",
    imageUrl: "/pictures/item213.png",
    requiredStats: {
      defense: 800,
    },
    durability: 1900,
  },
  {
    id: "viking-battle", // 
    name: "Viking Battle Armor",
    description: "",
    imageUrl: "/pictures/item528.png",
    requiredStats: {
      defense: 800,
    },
    durability: 1900,
  },
  {
    id: "mal", // 
    name: "Malificent Platemail",
    description: "",
    imageUrl: "/pictures/item533.png",
    requiredStats: {
      defense: 850,
    },
    durability: 1950,
  },
  {
    id: "rmal", // 
    name: "Reinforced Malificent Platemail",
    description: "",
    imageUrl: "/pictures/item533.png",
    requiredStats: {
      defense: 850,
    },
    durability: 3900,
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
