import { SomClass } from "./types/classes";
import { SomRing } from "./types/item";

export const rings: SomRing[] = [
  {
    id: "trinity", // 877
    name: "Trinity Ring",
    description: "A ring forged from smelted minerals obtained from Tetra.  The ring has been enchanted to turn a player's sprite into a Trinity blade.  How firce is that?!  Yeah, not very fierce... but a floating sword!",
    imageUrl: "/pictures/item294.png",
    unique: true,
    requiredStats: { level: 1 },
  },
  {
    id: "merlin", // 1281
    name: "Merlin's Ring",
    description: "An incredibly rare and powerful magic ring.  It is said that Merlin himself crafted this ring, and that it is imbued with his magical powers.",
    imageUrl: "/pictures/item307.png",
    unique: true,
    requiredStats: { level: 2 },
    benefitStats: {
      mana: 900,
      magic: 900,
      speed: 150,
    },
  },
  {
    id: "spectral", // 1190
    name: "Spectral Ring",
    description: "A ring that has \"wear me to go upstairs\" inscribed on the inside with a picture of a ghost.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    requiredStats: { level: 1 },
    benefitStats: {
      health: 5,
      mana: 5,
      speed: 10,
    },
  },
  {
    id: "plain", // 1080
    name: "Plain Ring",
    description: "A ring made from the remnants of a magical sword, granting a slight magical increase.",
    imageUrl: "/pictures/item327.png",
    availableClasses: [SomClass.MAGE],
    requiredStats: { level: 2 },
    benefitStats: {
      magic: 4,
    },
  },
  {
    id: "robos", // 934
    name: "Ring of Bos",
    description: "A ring that raises your defense stat slightly and makes you feel like a cow.",
    imageUrl: "/pictures/item269.png",
    unique: true,
    requiredStats: { level: 1 },
    benefitStats: {
      defense: 3,
    },
  },
  {
    id: "love", // 972
    name: "Ring of Love",
    description: "A beautiful ring crafted by a magical smith for those who wish to express their love.  This ring is magical and can expand to any size!",
    imageUrl: "/pictures/item713.png",
    requiredStats: { level: 1 },
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
    requiredStats: { level: 5 },
    benefitStats: {
      health: 10,
    },
  },
  {
    id: "brod", // 186
    name: "Basic Ring of Defiance",
    description: "You feel slightly tougher while wearing this odd ring.  For some reason, you feel like this ring is a key to something great.",
    imageUrl: "/pictures/item458.png",
    unique: true,
    requiredStats: { level: 5 },
    benefitStats: {
      defense: 3,
    },
  },
  {
    id: "brom", // 756
    name: "Basic Ring of Mana",
    description: "A ring that slightly increases the wearer's mana.",
    imageUrl: "/pictures/item458.png",
    unique: true,
    requiredStats: { level: 5 },
    benefitStats: {
      mana: 20,
    }
  },
  {
    id: "rol", // 355
    name: "Ring of Life",
    description: "When wearing this ring, you become transformed into a sea creature, giving you the ability to survive in deep water. (Use in Tower)",
    imageUrl: "/pictures/item458.png",
    unique: true,
    requiredStats: { level: 1 }
  },
  {
    id: "engagement", // 491
    name: "Engagement Ring",
    imageUrl: "/pictures/item330.png",
    unique: true,
    requiredStats: { level: 75 },
    benefitStats: {
      health: 10,
      mana: 10,
      strength: 30,
      defense: 10,
      magic: 40,
      speed: 10,
    },
  },
  {
    id: "rop", // 613
    name: "Ring of Power",
    description: "A ring possessing mystical power.",
    imageUrl: "/pictures/item270.png",
    requiredStats: { level: 100 },
    benefitStats: {
      strength: 30,
    },
  },
  {
    id: "romight", // 889
    name: "Ring of Might",
    description: "A ring possessing mystical defensive power.",
    imageUrl: "/pictures/item279.png",
    unique: true,
    requiredStats: { level: 100 },
    benefitStats: {
      defense: 30,
    },
  },
  {
    id: "scorprepl", // 878
    name: "Scorpio's Ring Replica",
    description: "You must be a wealthy player to have one of these.  A replica of the mythical Scorpio's Ring; while it does not act as a magical shield, it does raise all stats. Slightly.",
    imageUrl: "/pictures/item222.png",
    unique: true,
    requiredStats: { level: 100 },
    benefitStats: {
      health: 30,
      mana: 30,
      strength: 12,
      defense: 12,
      magic: 12,
      speed: 12,
    },
  },
  {
    id: "diamond", // 876
    name: "Diamond Ring",
    description: "A ring with a beautiful diamond on it.  This ring symbolizes a promise of devotion and true love.",
    imageUrl: "/pictures/item330.png",
    unique: true,
    requiredStats: { level: 10 },
    benefitStats: {
      health: 20,
      strength: 5,
    },
  },
  {
    id: "mros", // 670
    name: "Minor Ring of Strength",
    description: "A ring that slightly increases the muscle mass of the wearer.",
    imageUrl: "/pictures/item327.png",
    requiredStats: { level: 10 },
    benefitStats: {
      strength: 6,
    },
  },
  {
    id: "mrod", // 671
    name: "Minor Ring of Defense",
    description: "A ring that slightly increases the wearer's hardiness.",
    imageUrl: "/pictures/item327.png",
    requiredStats: { level: 10 },
    benefitStats: {
      defense: 6,
    },
  },
  {
    id: "mrom", // 672
    name: "Minor Ring of Magic",
    description: "A ring that slightly increases the power of magic.",
    imageUrl: "/pictures/item327.png",
    requiredStats: { level: 10 },
    benefitStats: {
      magic: 12,
    },
  },
  {
    id: "mrosp", // 757
    name: "Minor Ring of Speed",
    description: "A ring that slightly increases the wearer's speed.",
    imageUrl: "/pictures/item327.png",
    unique: true,
    requiredStats: { level: 10 },
    benefitStats: {
      speed: 6,
    },
  },
  {
    id: "mromana", // 1065
    name: "Minor Ring of Mana",
    description: "A ring that slightly increases the wearer's mana.",
    imageUrl: "/pictures/item222.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 10 },
    benefitStats: {
      mana: 50,
    },
  },
  {
    id: "modroh", // 674
    name: "Moderate Ring of Health",
    description: "A ring which seems to give its wearer a moderate boost of health.",
    imageUrl: "/pictures/item330.png",
    requiredStats: { level: 20 },
    benefitStats: {
      health: 30,
    },
  },
  {
    id: "augros", // 675
    name: "Augmented Ring of Strength",
    description: "A ring which seems to give its wearer a moderate boost of strength.",
    imageUrl: "/pictures/item98.png",
    requiredStats: { level: 25 },
    benefitStats: {
      strength: 15,
    },
  },
  {
    id: "augrod", // 676
    name: "Augmented Ring of Defense",
    description: "A ring which seems to give its wearer a moderate boost of defense.",
    imageUrl: "/pictures/item98.png",
    requiredStats: { level: 25 },
    benefitStats: {
      defense: 15,
    },
  },
  {
    id: "augrom", // 677
    name: "Augmented Ring of Magic",
    description: "A ring which seems to give its wearer a moderate boost of magic.",
    imageUrl: "/pictures/item98.png",
    unique: true,
    requiredStats: { level: 25 },
    benefitStats: {
      magic: 24,
    },
  },
  {
    id: "augromana", // 1066
    name: "Augmented Ring of Mana",
    description: "A ring which seems to give its wearer a moderate boost of mana.",
    imageUrl: "/pictures/item98.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 25 },
    benefitStats: {
      mana: 200,
    },
  },
  {
    id: "nimros", // 678
    name: "Nimble Ring of Strength",
    description: "A ring which seems to make its wearer more strong and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    requiredStats: { level: 30 },
    benefitStats: {
      strength: 15,
      speed: 15,
    },
  },
  {
    id: "nimrod", // 679
    name: "Nimble Ring of Defense",
    description: "A ring which seems to make its wearer more hardy and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    requiredStats: { level: 30 },
    benefitStats: {
      defense: 15,
      speed: 15,
    },
  },
  {
    id: "nimrom", // 680
    name: "Nimble Ring of Magic",
    description: "A ring which seems to make its wearer more intelligent and nimble.",
    imageUrl: "/pictures/item100.png",
    unique: true,
    requiredStats: { level: 30 },
    benefitStats: {
      magic: 24,
      speed: 15,
    },
  },
  {
    id: "majorrom", // 1700
    name: "Major Ring of Mana",
    description: "A mystical ring flowing with mana energy.",
    imageUrl: "/pictures/item271.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 75 },
    benefitStats: {
      mana: 800,
    },
  },
  {
    id: "somx", // 2023
    name: "Secrets of Mirage Ring",
    description: "Forged from the remains of the 2020 New Year equipment.",
    imageUrl: "/pictures/item222.png",
    unique: true,
    requiredStats: { level: 90 },
    benefitStats: {
      health: 100,
      mana: 100,
      strength: 100,
      defense: 50,
      magic: 200,
      speed: 50,
    },
  },
  {
    id: "asr", // 841
    name: "Azure Signet Ring",
    description: "A Signet Ring from the Azure Royal Family.",
    imageUrl: "/pictures/item282.png",
    unique: true,
    requiredStats: { level: 100 },
    benefitStats: {
      strength: 40,
      defense: 20,
      speed: 20,
    },
  },
  {
    id: "asmr", // 842
    name: "Azure Signet Magic Ring",
    description: "A Signet Ring from the Azure Royal Family.",
    imageUrl: "/pictures/item282.png",
    unique: true,
    requiredStats: { level: 100 },
    benefitStats: {
      mana: 200,
      magic: 80,
    },
  },
  {
    id: "dhr", // 772
    name: "Dragon Heart Ring",
    description: "This ring is silent, but you feel an eerie echo of the final beat of a massive heart contained in a scaled chest.",
    imageUrl: "/pictures/item270.png",
    unique: true,
    requiredStats: { level: 150 },
    benefitStats: {
      health: 50,
      strength: 5,
      defense: -3,
    },
  },
  {
    id: "berserk", // 843
    name: "Berserker's Ring",
    description: "Forged by a legendary Berserker, this ring is said to increase the wearer's strength and speed.",
    imageUrl: "/pictures/item271.png",
    unique: true,
    requiredStats: { level: 150 },
    benefitStats: {
      health: 100,
      speed: 100,
    },
  },
  {
    id: "enchroa", // 1606
    name: "Enchanted Ring of Agility",
    description: "Makes the wearer feel faster.",
    imageUrl: "/pictures/item332.png",
    unique: true,
    requiredStats: { level: 150 },
    benefitStats: {
      speed: 35,
    },
  },
  {
    id: "enhberserk", // 952
    name: "Enhanced Berserker's Ring",
    description: "This ring seems to be scarred to bits.  It's been through a lot, but it's still as strong as ever.",
    imageUrl: "/pictures/item271.png",
    unique: true,
    requiredStats: { level: 100 },
    benefitStats: {
      health: 140,
      speed: 140,
    },
  },
  {
    id: "glacrov", // 1071
    name: "Glacier Ring of Virtue",
    description: "Forged from the iron taken from the blood of Ezoria Tigers.",
    imageUrl: "/pictures/item314.png",
    unique: true,
    requiredStats: { level: 200 },
    benefitStats: {
      health: 30,
      mana: 30,
      strength: 60,
      magic: 60,
    },
  },
  {
    id: "obsidian", // 825
    name: "Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, this jewel radiates a strong life force.",
    imageUrl: "/pictures/item348.png",
    unique: true,
    requiredStats: { level: 200 },
    benefitStats: {
      health: 350,
      strength: 50,
      defense: 50,
      speed: 50,
    },
  },
  {
    id: "roodin", // 2983
    name: "Ring of Odin",
    description: "Odin's magical blessing flows throughout this ring.",
    imageUrl: "/pictures/item295.png",
    unique: true,
    requiredStats: { level: 250 },
    benefitStats: {
      health: 200,
      mana: 450,
      magic: 180,
    },
  },
  {
    id: "rowyvrn", // 2984
    name: "Ring of the Wyvern",
    description: "Crafted from the magical feather of a Wyvern, this ring is said to enhance your magical prowess and dexterity.",
    imageUrl: "/pictures/item314.png",
    unique: true,
    requiredStats: { level: 250 },
    benefitStats: {
      mana: 450,
      magic: 180,
      speed: 70,
    },
  },
  {
    id: "reinfobsidian", // 947
    name: "Reinforced Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    requiredStats: { level: 300 },
    benefitStats: {
      health: 500,
      strength: 75,
      defense: 75,
      speed: 50,
    },
  },
  {
    id: "infobsidian", // 948
    name: "Infused Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    requiredStats: { level: 300 },
    benefitStats: {
      mana: 500,
      magic: 200,
      speed: 50,
    },
  },
  {
    id: "holyobsidian", // 950
    name: "Holy Obsidian Ring",
    description: "Forged using the raw power of smoldered obsidian, then coated in the best minerals available.",
    imageUrl: "/pictures/item297.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 300 },
    benefitStats: {
      health: 250,
      mana: 250,
      defense: 75,
      magic: 75,
      speed: 50,
    },
  },
  {
    id: "necro", // 847
    name: "Necromancer's Ring",
    description: "Found in the depths of an ancient Necromancer's Sanctum, this ring grants magical bonuses when worn.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    showsHealth: true,
    requiredStats: { level: 250 },
    benefitStats: {
      health: 100,
      mana: 200,
      strength: 100,
      magic: 200,
    },
  },
  {
    id: "glata", // 1055
    name: "Glata Mage Espionage Ring",
    description: "A special ring crafted by the Undead Glata Mages; used to disguise mages as Glata members to sneak past certain enemies in Belthazar.",
    imageUrl: "/pictures/item302.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 300 },
    benefitStats: {
      mana: 1500,
      magic: 100,
      speed: 50,
    },
  },
  {
    id: "scorpreal", // 888
    name: "Scorpio's Real Ring",
    description: "Scorpio's REAL Ring!  This is extremely rare!",
    imageUrl: "/pictures/item307.png",
    unique: true,
    requiredStats: { level: 300 },
    benefitStats: {
      health: 500,
      mana: 1000,
      strength: 250,
      defense: 250,
      magic: 1000,
      speed: 50,
    },
  },
  {
    id: "ult", // 758
    name: "Ultimate Ring",
    description: "A ring which seems to make its wearer more intelligent and nimble.",
    imageUrl: "/pictures/item289.png",
    unique: true,
    bindOnPickup: true,
    requiredStats: { level: 400 },
    benefitStats: {
      health: 100,
      mana: 100,
      strength: 100,
      defense: 100,
      magic: 100,
      speed: 100,
    },
  },
  {
    id: "arom", // 861
    name: "Accursed Ring of Magic",
    description: "A ring that increases the power of magic.",
    imageUrl: "/pictures/item118.png",
    unique: true,
    bindOnEquip: true,
    requiredStats: { level: 500 },
    benefitStats: {
      magic: 1600,
      mana: -1600,
      health: -250,
    },
  },
  {
    id: "aros", // 831
    name: "Accursed Ring of Strength",
    description: "A dark ring of power, cursed to give the wearer strength at the expense of health.",
    imageUrl: "/pictures/item103.png",
    unique: true,
    bindOnEquip: true,
    requiredStats: { level: 500 },
    benefitStats: {
      strength: 400,
      health: -800,
    },
  },
  {
    id: "hercules", // 1224
    name: "Hercules Ring",
    description: "A powerful ring that provides a thorough boost to hardiness.",
    imageUrl: "/pictures/item314.png",
    unique: true,
    requiredStats: { level: 500 },
    benefitStats: {
      strength: 300,
      health: 500,
    },
  },
  {
    id: "morgan", // 1225
    name: "Morgan Le Fay's Ring",
    description: "",
    imageUrl: "/pictures/item293.png",
    unique: true,
    availableClasses: [SomClass.MAGE, SomClass.ANGEL],
    requiredStats: { level: 500 },
    benefitStats: {
      mana: 500,
      magic: 500,
      speed: 150,
    },
  },
  {
    id: "stormwind", // 1226
    name: "Stormwind Ring",
    description: "Provides a thorough boost to hardiness.",
    imageUrl: "/pictures/item310.png",
    unique: true,
    requiredStats: { level: 500 },
    benefitStats: {
      defense: 200,
      speed: 100,
    },
  },
  {
    id: "necromagic", // 1087
    name: "Necromancer's Magic Ring",
    description: "Found in the depths of an ancient Necromancer's Sanctum and reinforced with materials from the Nether Realm.  This ring grants magical bonuses when worn.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      mana: 400,
      magic: 400,
      speed: 50,
    },
  },
  {
    id: "necrostr", // 1088
    name: "Necromancer's Strength Ring",
    description: "Found in the depths of an ancient Necromancer's Sanctum and reinforced with materials from the Nether Realm.  This ring grants magical bonuses when worn.",
    imageUrl: "/pictures/item326.png",
    unique: true,
    showsHealth: true,
    requiredStats: { level: 500 },
    benefitStats: {
      health: 200,
      strength: 200,
      speed: 50,
    },
  },
  {
    id: "nether", // 1285
    name: "Nether Ring",
    description: "A mystical Nether Ring; can be traded for something more fitting.",
    imageUrl: "/pictures/item717.png",
    requiredStats: { level: 500 },
    benefitStats: {
      health: -1000,
      mana: -500,
      strength: -500,
      defense: -500,
      magic: -500,
      speed: -500,
    },
  },
].sort((a, b) => {
  // Sort by level then name
  let ret = a.requiredStats.level - b.requiredStats.level;
  if (ret === 0) ret = a.name.localeCompare(b.name);
  return ret;
});
