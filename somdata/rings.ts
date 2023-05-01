import { SomRing } from "./types/item";

export const rings: SomRing[] = [
  {
    id: "broh",
    name: "Basic Ring of Health",
    description: "A simple ring which seems to give its wearer a small boost of health.",
    imageUrl: "/pictures/item458.png",
    benefitStats: {
      health: 10,
    },
    requiredStats: {
      level: 5,
    },
  },
  {
    id: "brod",
    name: "Basic Ring of Defiance",
    description: "You feel slightly tougher while wearing this odd ring.  For some reason, you feel like this ring is a key to something great.",
    imageUrl: "/pictures/item458.png",
    unique: true,
    benefitStats: {
      defense: 3,
    },
    requiredStats: {
      level: 5,
    },
  },
  {
    id: "brom",
    name: "Basic Ring of Mana",
    description: "A ring that slightly increases the wearer's mana.",
    imageUrl: "/pictures/item458.png",
    unique: true,
    requiredStats: {
      level: 5,
    },
    benefitStats: {
      mana: 20,
    }
  },
  {
    id: "rol",
    name: "Ring of Life",
    description: "When wearing this ring, you become transformed into a sea creature, giving you the ability to survive in deep water.",
    imageUrl: "/pictures/item458.png",
    unique: true,
  },
  {
    id: "engagement",
    name: "Engagement Ring",
    imageUrl: "/pictures/item330.png",
    unique: true,
    benefitStats: {
      health: 10,
      mana: 10,
      strength: 30,
      defense: 10,
      magic: 40,
      speed: 10,
    },
    requiredStats: {
      level: 75,
    },
  },
  {
    id: "rop",
    name: "Ring of Power",
    description: "A ring possessing mystical power.",
    imageUrl: "/pictures/item270.png",
    benefitStats: {
      strength: 30,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "mros",
    name: "Minor Ring of Strength",
    description: "A ring that slightly increases the muscle mass of the wearer.",
    imageUrl: "/pictures/item327.png",
    benefitStats: {
      strength: 6,
    },
    requiredStats: {
      level: 10,
    },
  },
  {
    id: "mrod",
    name: "Minor Ring of Defense",
    description: "A ring that slightly increases the wearer's hardiness.",
    imageUrl: "/pictures/item327.png",
    benefitStats: {
      defense: 6,
    },
    requiredStats: {
      level: 10,
    },
  },
  {
    id: "mrom",
    name: "Minor Ring of Magic",
    description: "A ring that slightly increases the power of magic.",
    imageUrl: "/pictures/item327.png",
    benefitStats: {
      magic: 12,
    },
    requiredStats: {
      level: 10,
    },
  },
  {
    id: "mrosp",
    name: "Minor Ring of Speed",
    description: "A ring that slightly increases the wearer's speed.",
    imageUrl: "/pictures/item327.png",
    benefitStats: {
      speed: 6,
    },
    requiredStats: {
      level: 10,
    },
  },
  {
    id: "modroh",
    name: "Moderate Ring of Health",
    description: "A ring which seems to give its wearer a moderate boost of health.",
    imageUrl: "/pictures/item330.png",
    benefitStats: {
      health: 30,
    },
    requiredStats: {
      level: 20,
    },
  },
  {
    id: "augros",
    name: "Augmented Ring of Strength",
    description: "A ring which seems to give its wearer a moderate boost of strength.",
    imageUrl: "/pictures/item98.png",
    benefitStats: {
      strength: 15,
    },
    requiredStats: {
      level: 25,
    },
  },
  {
    id: "augrod",
    name: "Augmented Ring of Defense",
    description: "A ring which seems to give its wearer a moderate boost of defense.",
    imageUrl: "/pictures/item98.png",
    benefitStats: {
      defense: 15,
    },
    requiredStats: {
      level: 25,
    },
  },
  {
    id: "augrom",
    name: "Augmented Ring of Magic",
    description: "A ring which seems to give its wearer a moderate boost of magic.",
    imageUrl: "/pictures/item98.png",
    unique: true,
    benefitStats: {
      magic: 24,
    },
    requiredStats: {
      level: 25,
    },
  },
  {
    id: "nimros",
    name: "Nimble Ring of Strength",
    description: "A ring which seems to make its wearer more strong and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    benefitStats: {
      strength: 15,
      speed: 15,
    },
    requiredStats: {
      level: 30,
    },
  },
  {
    id: "nimrod",
    name: "Nimble Ring of Defense",
    description: "A ring which seems to make its wearer more hardy and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    benefitStats: {
      defense: 15,
      speed: 15,
    },
    requiredStats: {
      level: 30,
    },
  },
  {
    id: "nimrom",
    name: "Nimble Ring of Magic",
    description: "A ring which seems to make its wearer more intelligent and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    benefitStats: {
      magic: 24,
      speed: 15,
    },
    requiredStats: {
      level: 30,
    },
  },
  {
    id: "asr",
    name: "Azure Signet Ring",
    description: "A Signet Ring from the Azure Royal Family.",
    imageUrl: "/pictures/item282.png",
    unique: true,
    benefitStats: {
      strength: 40,
      defense: 20,
      speed: 20,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "asmr",
    name: "Azure Signet Magic Ring",
    description: "A Signet Ring from the Azure Royal Family.",
    imageUrl: "/pictures/item282.png",
    unique: true,
    benefitStats: {
      mana: 200,
      magic: 80,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "dhr",
    name: "Dragon Heart Ring",
    description: "This ring is silent, but you feel an eerie echo of the final beat of a massive heart contained in a scaled chest.",
    imageUrl: "/pictures/item270.png",
    unique: true,
    benefitStats: {
      health: 50,
      strength: 5,
      defense: -3,
    },
    requiredStats: {
      level: 150,
    },
  },
  {
    id: "berserk",
    name: "Berserker's Ring",
    description: "Forged by a legendary Berserker, this ring is said to increase the wearer's strength and speed.",
    imageUrl: "/pictures/item271.png",
    unique: true,
    benefitStats: {
      health: 100,
      speed: 100,
    },
    requiredStats: {
      level: 150,
    },
  },
  {
    id: "ult",
    name: "Ultimate Ring",
    description: "A ring which seems to make its wearer more intelligent and nimble.",
    imageUrl: "/pictures/item289.png",
    unique: true,
    benefitStats: {
      health: 100,
      mana: 100,
      strength: 100,
      defense: 100,
      magic: 100,
      speed: 100,
    },
    requiredStats: {
      level: 400,
    },
  },
  {
    id: "obsidian",
    name: "Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, this jewel radiates a strong life force.",
    imageUrl: "/pictures/item348.png",
    unique: true,
    benefitStats: {
      health: 350,
      strength: 50,
      defense: 50,
      speed: 50,
    },
    requiredStats: {
      level: 200,
    },
  },
  {
    id: "arom",
    name: "Accursed Ring of Magic",
    description: "A ring that increases the power of magic.",
    imageUrl: "/pictures/item118.png",
    unique: true,
    requiredStats: {
      level: 500,
    },
    benefitStats: {
      magic: 1600,
      mana: -1600,
      health: -250,
    }
  },
  {
    id: "aros",
    name: "Accursed Ring of Strength",
    imageUrl: "/pictures/item103.png",
    unique: true,
    bound: true,
    description: "A dark ring of power, cursed to give the wearer strength at the expense of health.",
    requiredStats: {
      level: 500,
    },
    benefitStats: {
      strength: 400,
      health: -800,
    }
  },
  {
    id: "hercules",
    name: "Hercules Ring",
    description: "A powerful ring that provides a thorough boost to hardiness.",
    imageUrl: "/pictures/item314.png",
    unique: true,
    requiredStats: {
      level: 500,
    },
    benefitStats: {
      strength: 300,
      health: 500,
    },
  },
];
