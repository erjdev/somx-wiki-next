import { SomClass } from "./types/classes";
import { SomRing } from "./types/item";

export const rings: SomRing[] = [
  {
    id: "trinity", // 877
    name: "Trinity Ring",
    description: "A ring forged from smelted minerals obtained from Tetra.  The ring has been enchanted to turn a player's sprite into a Trinity blade.  How firce is that?!  Yeah, not very fierce... but a floating sword!",
    imageUrl: "/pictures/item294.png",
    unique: true,
    requiredStats: {
      level: 1,
    },
  },
  {
    id: "plain", // 1080
    name: "Plain Ring",
    description: "A ring made from the remnants of a magical sword, granting a slight magical increase.",
    imageUrl: "/pictures/item327.png",
    requiredStats: {
      level: 2,
    },
    benefitStats: {
      magic: 4,
    },
    availableClasses: [SomClass.MAGE],
  },
  {
    id: "robos", // 934
    name: "Ring of Bos",
    description: "A ring that raises your defense stat slightly and makes you feel like a cow.",
    imageUrl: "/pictures/item269.png",
    unique: true,
    requiredStats: {
      level: 1,
    },
    benefitStats: {
      defense: 3,
    },
  },
  {
    id: "love", // 972
    name: "Ring of Love",
    description: "A beautiful ring crafted by a magical smith for those who wish to express their love.  This ring is magical and can expand to any size!",
    imageUrl: "/pictures/item713.png",
    requiredStats: {
      level: 1,
    },
    benefitStats: {
      mana: 25,
      magic: 5,
      speed: 10,
    },
  },
  {
    id: "broh", // 172
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
    id: "brod", // 186
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
    id: "brom", // 756
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
    id: "rol", // 355
    name: "Ring of Life",
    description: "When wearing this ring, you become transformed into a sea creature, giving you the ability to survive in deep water.",
    imageUrl: "/pictures/item458.png",
    unique: true,
  },
  {
    id: "engagement", // 491
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
    id: "rop", // 613
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
    id: "romight", // 889
    name: "Ring of Might",
    description: "A ring possessing mystical defensive power.",
    imageUrl: "/pictures/item279.png",
    benefitStats: {
      defense: 30,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "scorprepl", // 878
    name: "Scorpio's Ring Replica",
    description: "You must be a wealthy player to have one of these.  A replica of the mythical Scorpio's Ring; while it does not act as a magical shield, it does raise all stats. Slightly.",
    imageUrl: "/pictures/item222.png",
    unique: true,
    benefitStats: {
      health: 30,
      mana: 30,
      strength: 12,
      defense: 12,
      magic: 12,
      speed: 12,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "diamond", // 876
    name: "Diamond Ring",
    description: "A ring with a beautiful diamond on it.  This ring symbolizes a promise of devotion and true love.",
    imageUrl: "/pictures/item330.png",
    unique: true,
    benefitStats: {
      health: 20,
      strength: 5,
    },
    requiredStats: {
      level: 10,
    },
  },
  {
    id: "mros", // 670
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
    id: "mrod", // 671
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
    id: "mrom", // 672
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
    id: "mrosp", // 757
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
    id: "mromana", // 1065
    name: "Minor Ring of Mana",
    description: "A ring that slightly increases the wearer's mana.",
    imageUrl: "/pictures/item222.png",
    unique: true,
    benefitStats: {
      mana: 50,
    },
    requiredStats: {
      level: 10,
    },
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "modroh", // 674
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
    id: "augros", // 675
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
    id: "augrod", // 676
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
    id: "augrom", // 677
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
    id: "augromana", // 1066
    name: "Augmented Ring of Mana",
    description: "A ring which seems to give its wearer a moderate boost of mana.",
    imageUrl: "/pictures/item98.png",
    unique: true,
    benefitStats: {
      mana: 200,
    },
    requiredStats: {
      level: 25,
    },
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "nimros", // 678
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
    id: "nimrod", // 679
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
    id: "nimrom", // 680
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
    id: "asr", // 841
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
    id: "asmr", // 842
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
    id: "dhr", // 772
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
    id: "berserk", // 843
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
    id: "enhberserk", // 952
    name: "Enhanced Berserker's Ring",
    description: "This ring seems to be scarred to bits.  It's been through a lot, but it's still as strong as ever.",
    imageUrl: "/pictures/item271.png",
    unique: true,
    benefitStats: {
      health: 140,
      speed: 140,
    },
    requiredStats: {
      level: 100,
    },
  },
  {
    id: "glacrov", // 1071
    name: "Glacier Ring of Virtue",
    description: "Forged from the iron taken from teh blood of Ezoria Tigers.",
    imageUrl: "/pictures/item314.png",
    unique: true,
    benefitStats: {
      health: 30,
      mana: 30,
      strength: 60,
      magic: 60,
    },
    requiredStats: {
      level: 200,
    },
  },
  {
    id: "obsidian", // 825
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
    id: "reinfobsidian", // 947
    name: "Reinforced Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    benefitStats: {
      health: 500,
      strength: 75,
      defense: 75,
      speed: 50,
    },
    requiredStats: {
      level: 300,
    },
  },
  {
    id: "infobsidian", // 948
    name: "Infused Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    benefitStats: {
      mana: 500,
      magic: 200,
      speed: 50,
    },
    requiredStats: {
      level: 300,
    },
  },
  {
    id: "holyobsidian", // 950
    name: "Holy Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    benefitStats: {
      health: 250,
      mana: 250,
      defense: 75,
      magic: 75,
      speed: 50,
    },
    requiredStats: {
      level: 300,
    },
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "necro", // 847
    name: "Necromancer's Ring",
    description: "Casts Oracle on enemies; found in the depths of an ancient Necromancer's Sanctum, this ring grants magical bonuses when worn.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    benefitStats: {
      health: 100,
      mana: 200,
      strength: 100,
      magic: 200,
    },
    requiredStats: {
      level: 250,
    },
  },
  {
    id: "necromagic", // 1087
    name: "Necromancer's Magic Ring",
    description: "Casts Oracle on enemies; found in the depths of an ancient Necromancer's Sanctum and reinforced with materials from the Nether Realm.  This ring grants magical bonuses when worn.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    benefitStats: {
      mana: 400,
      magic: 400,
      speed: 50,
    },
    requiredStats: {
      level: 500,
    },
  },
  {
    id: "glata", // 1055
    name: "Glata Mage Espionage Ring",
    description: "A special ring crafted by the Undead Glata Mages; used to disguise mages as Glata members to sneak past certain enemies in Belthazar.",
    imageUrl: "/pictures/item302.png",
    unique: true,
    benefitStats: {
      mana: 1500,
      magic: 100,
      speed: 50,
    },
    requiredStats: {
      level: 300,
    },
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
  },
  {
    id: "ult", // 758
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
    id: "arom", // 861
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
    id: "aros", // 831
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
  {
    id: "scorpreal", // 888
    name: "Scorpio's Real Ring",
    description: "Scorpio's REAL Ring!  This is extremely rare!",
    imageUrl: "/pictures/item307.png",
    unique: true,
    benefitStats: {
      health: 500,
      mana: 1000,
      strength: 250,
      defense: 250,
      magic: 1000,
      speed: 50,
    },
    requiredStats: {
      level: 300,
    },
  },
];
