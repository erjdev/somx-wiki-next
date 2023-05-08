import { SomWeapon } from "./types/item";

const unsortedWeapons: SomWeapon[] = [
  {
    id: "staff", // 86
    name: "Staff",
    description: "The insult of getting hit by this is worse than the actual damage.",
    imageUrl: "/pictures/item28.png",
    requiredStats: {
      level: 1,
      strength: 1,
    },
    durability: 50
  },
  {
    id: "wooden-dagger", // 126
    name: "Wooden Dagger",
    description: "Gives splinters to the weilder and the attacked.",
    imageUrl: "/pictures/item158.png",
    requiredStats: {
      level: 1,
      strength: 1,
    },
    durability: 66
  },
  {
    id: "cursed-viulent-dagger", // 1544
    name: "Cursed Viulent Dagger",
    description: "A dagger that has been bewitched and infused with the most potent toxic known to mankind. However, wielding this dagger shall bind you into keeping it with you for all eternity, until you break free from its curse.",
    imageUrl: "/pictures/item163.png",
    poisonPercent: 50,
    bindOnEquip: true,
    requiredStats: {
      level: 1,
      strength: 5,
    },
    durability: 95
  },
  {
    id: "dagger", // 2
    name: "Dagger",
    description: "Poorly made but effective enough.",
    imageUrl: "/pictures/item7.png",
    requiredStats: {
      level: 1,
      strength: 5,
    },
    durability: 95
  },
  {
    id: "short-sword", // 6
    name: "Short Sword",
    description: "The first sword of most adventurers. The pointy end goes towards the enemy.",
    imageUrl: "/pictures/item42.png",
    requiredStats: {
      level: 1,
      strength: 8,
    },
    durability: 100,
  },
  {
    id: "hammer", // 11
    name: "Hammer",
    description: "A bulky hammer with a firm grip.",
    imageUrl: "/pictures/item5.png",
    requiredStats: {
      level: 1,
      strength: 12,
    },
    durability: 105,
  },
  {
    id: "blunt-mace", // 18
    name: "Blunt Mace",
    description: "A mace you can swing around and bash things with.",
    imageUrl: "/pictures/item51.png",
    requiredStats: {
      level: 1,
      strength: 15,
    },
    durability: 110,
  },
  {
    id: "sabre", // 24
    name: "Sabre",
    description: "A sabre with a perfectly fitting hilt. The preferred weapon of the Ipsen Guards.",
    imageUrl: "/pictures/item177.png",
    requiredStats: {
      level: 1,
      strength: 20,
    },
    durability: 115,
  },
  {
    id: "dwarven-axe", // 27
    name: "Dwarven Axe",
    description: "A labrys type axe that Dwarven smiths produce in high quantities due to the high demand by residents.",
    imageUrl: "/pictures/item185.png",
    requiredStats: {
      level: 1,
      strength: 25,
    },
    durability: 140,
  },
  {
    id: "lance", // 31
    name: "Lance",
    description: "A long, pointy lance that requires 2 hands to wield.",
    imageUrl: "/pictures/item186.png",
    requiredStats: {
      level: 1,
      strength: 30,
    },
    durability: 135,
  },
  {
    id: "theosis-staff", // 114
    name: "Theosi's Staff",
    description: "A staff that belongs to the witch in training, Thoesi. Won't really do much good for you, probably best to return it to her.",
    imageUrl: "/pictures/item186.png",
    requiredStats: {
      level: 1,
      strength: 30,
    },
    durability: 100,
  },
  {
    id: "sof", // 48
    name: "Sword of Fire",
    description: "A sword with a fiery blade that the Flame Warriors use in combat.",
    imageUrl: "/pictures/item10.png",
    requiredStats: {
      level: 1,
      strength: 35,
    },
    durability: 145,
  },
  {
    id: "hs", // 63
    name: "Headstriker",
    description: "A bulbous mace that delivers alot of power.",
    imageUrl: "/pictures/item54.png",
    requiredStats: {
      level: 1,
      strength: 42,
    },
    durability: 155,
  },
  {
    id: "hammush", // 1576
    name: "Hammush",
    description: "A strong yet squishy hammer crafted by mushrooms. Not really edible.",
    imageUrl: "/pictures/item679.png",
    poisonPercent: 2,
    requiredStats: {
      level: 1,
      strength: 50,
    },
    durability: 100,
  },
  {
    id: "halberd", // 289
    name: "Halberd",
    description: "A smith's version of a utility knife on a pole.",
    imageUrl: "/pictures/item189.png",
    requiredStats: {
      level: 1,
      strength: 52,
    },
    durability: 104,
  },
  {
    id: "sop", // 104
    name: "Sword of Power",
    description: "Energies from Rorrim spill out from this blue blade.",
    imageUrl: "/pictures/item189.png",
    requiredStats: {
      level: 1,
      strength: 65,
    },
    durability: 168,
  },
  {
    id: "slayers-blade", // 69
    name: "Slayer's Blade",
    description: "Beginner Vampire hunters favor this blade.",
    imageUrl: "/pictures/item166.png",
    requiredStats: {
      level: 1,
      strength: 75,
    },
    durability: 185,
  },
  {
    id: "twin-daggers", // 188
    name: "Twin Daggers",
    description: "Being ambidextrous helps when weilding two small blades, regardless these weapons still manage to work when wearing a shield. Well.. well enough.",
    imageUrl: "/pictures/item131.png",
    requiredStats: {
      level: 1,
      strength: 85,
    },
    durability: 170,
  },
  {
    id: "nb", // 140
    name: "Night Blade",
    description: "Another prize blade given by the vampire hunters guild to anyone who can bring them the head of a Varg. It adds an even 100 dmg when wielded for light, or you know... darkness, like using this to kill vampire hunters.",
    imageUrl: "/pictures/item171.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 100,
    },
    durability: 200,
  },
  {
    id: "sword-of-triviality", // 1550
    name: "Sword of Triviality",
    description: "A sword that almost measures up to the... no.. it's just a lame attempt of replicating the Sword of Worth. Showing your worth before the mighty god of the alternate realm may turn this dud into a stud. ",
    imageUrl: "/pictures/item513.png",
    requiredStats: {
      level: 1,
      strength: 100,
    },
    durability: 250,
  },
  {
    id: "sword-of-ice", // 54
    name: "Sword of Ice",
    description: "A sword forged of cold diamonds and the tears of snow spirits.",
    imageUrl: "/pictures/item44.png",
    requiredStats: {
      level: 1,
      strength: 112,
    },
    durability: 225,
  },
  {
    id: "take", // 215
    name: "Takemitsu",
    description: "Favored blade of the master in Glacier this weapon is fast and powerful; unless you are a baka.",
    imageUrl: "/pictures/item176.png",
    requiredStats: {
      level: 1,
      strength: 125,
    },
    durability: 250,
  },
  {
    id: "iron-saber", // 422
    name: "Iron Sabre",
    description: "This weapon was made as a thank you for providing Millenia with enough iron to build several ships.",
    imageUrl: "/pictures/item238.png",
    requiredStats: {
      level: 1,
      strength: 135,
    },
    durability: 270,
  },
  {
    id: "midnight-blade", // 1575
    name: "Midnight Blade",
    description: "A blade wielded by the elite Vampire Slayers this is a coveted weapon.",
    imageUrl: "/pictures/item584.png",
    requiredStats: {
      level: 1,
      strength: 150,
    },
    durability: 300,
  },
  {
    id: "defender", // 268
    name: "Defender",
    description: "A sword weilded by and occasionally dropped by a monster of the same name in the ruined shrine. It can provide an additional damage to stuff you hit it with, provided you are holding the correct end of it.",
    imageUrl: "/pictures/item170.png",
    requiredStats: {
      level: 1,
      strength: 155,
    },
    durability: 310,
  },
  {
    id: "abs", // 120
    name: "Ainkurn Broadsword",
    description: "Awarded by a traveller to anyone who can bring to him the proof of the deaths of many mountain trolls. This weapon provides additional damage when you hit stuff with it.",
    imageUrl: "/pictures/item169.png",
    requiredStats: {
      level: 1,
      strength: 165,
    },
    durability: 330,
  },
  {
    id: "ba", // 144
    name: "Berserker's Axe",
    description: "This sturdy weapon takes the mistreatment of berserker's and laughs it off.",
    imageUrl: "/pictures/item183.png",
    requiredStats: {
      level: 1,
      strength: 188,
    },
    durability: 376,
  },
  {
    id: "ipb", // 128
    name: "Ipsen Powerblade",
    description: "Orginally made for the captain of the guard of Ipsen, however since his disgrace due to the underpants gnome incident the town smith will make this weapon for anyone with enough gold.",
    imageUrl: "/pictures/item168.png",
    requiredStats: {
      level: 1,
      strength: 200,
    },
    durability: 400,
  },
  {
    id: "sh", // 203
    name: "Sphinx Hammer",
    description: "Favored hammer of ancient pharaohs.",
    imageUrl: "/pictures/item5.png",
    requiredStats: {
      level: 1,
      strength: 215,
    },
    durability: 430,
  },
  {
    id: "curtana", // 327
    name: "Curtana",
    description: "Also known as the Sword of Mercy, this sword has been used for the killing of millions of skuds. Time has certainly taking its toll, leaving the blade brittle and easily chips away, but the power still radiates from within.",
    imageUrl: "/pictures/item467.png",
    requiredStats: {
      level: 1,
      strength: 220,
    },
    durability: 440,
  },
  {
    id: "skyrra-frozen-sword", // 1181
    name: "Skyrra Frozen Sword",
    description: "The sword perpetually leaves a puddle on the floor if ever taken into an inn.",
    imageUrl: "/pictures/item566.png",
    poisonPercent: 20,
    requiredStats: {
      level: 1,
      strength: 230,
    },
    durability: 460,
  },
  {
    id: "sword-of-unity", // 1503
    name: "Sword of Unity",
    description: "A sword that has been forged with the elements.",
    imageUrl: "/pictures/item464.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 230,
    },
    durability: 460,
  },
  {
    id: "encrypted-dagger", // 1602
    name: "Encrypted Dagger",
    description: "Puzzling dagger that plays with the eyes of all who behold it.",
    imageUrl: "/pictures/item344.png",
    requiredStats: {
      level: 1,
      strength: 235,
    },
    durability: 470,
  },
  {
    id: "pd", // 223
    name: "Poison Dirge",
    description: "This blade was forged with and quenched all the most poisonous liquids the blacksmith could find. Engraved on the hilt are the words \"Do not lick\" sold in shadyview inn.",
    imageUrl: "/pictures/item8.png",
    poisonPercent: 25,
    requiredStats: {
      level: 1,
      strength: 235,
    },
    durability: 470,
  },
  {
    id: "lesi", // 224
    name: "Lesithar",
    description: "Give the elven smith enough pixie leaves and he gives you this purple blade. Why you ask? Well the short answer is... Elves.",
    imageUrl: "/pictures/item107.png",
    requiredStats: {
      level: 1,
      strength: 245,
    },
    durability: 490,
  },
  {
    id: "red-ls", // 133
    name: "Red Lightsaber",
    description: "Made by passing magical energies through a flawless ruby in the hilt.",
    imageUrl: "/pictures/item172.png",
    requiredStats: {
      level: 1,
      strength: 250,
    },
    durability: 250,
  },
  {
    id: "vorhees-machete", // 1919
    name: "Vorhees Machete",
    description: "A blade with terrible power resonating from within.",
    imageUrl: "/pictures/item510.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 250,
    },
    durability: 500,
  },
  {
    id: "talon-slicer", // 1611
    name: "Talon Slicer",
    description: "Often used by residents of Syn to disable foes from behind.",
    imageUrl: "/pictures/item509.png",
    requiredStats: {
      level: 1,
      strength: 262,
    },
    durability: 524,
  },
  {
    id: "npb", // 1577
    name: "Nepsi Powerblade",
    description: "Made with the blood of the unwilling by a particularly focused smith.",
    imageUrl: "/pictures/item582.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 262,
    },
    durability: 530,
  },
  {
    id: "blade-of-darkness", // 420
    name: "Blade of Darkness",
    description: "Sharper and less brittle than most would expect.",
    imageUrl: "/pictures/item479.png",
    requiredStats: {
      level: 1,
      strength: 275,
    },
    durability: 550,
  },
  {
    id: "ssc", // 1612
    name: "Soulspirit Cleaver",
    description: "The best weapon made in Syn this brutal blade uses it's massive weight to inflict devistating wounds.",
    imageUrl: "/pictures/item472.png",
    requiredStats: {
      level: 1,
      strength: 285,
    },
    durability: 570,
  },
  {
    id: "mlc", // 1622
    name: "Moonlight Claymore",
    description: "A blade favored by adventurers who wander into Deadlands from the lands beyond. Some of the local guards use this as thier primary weapon.",
    imageUrl: "/pictures/item9.png",
    requiredStats: {
      level: 1,
      strength: 292,
    },
    durability: 584,
  },
  {
    id: "blue-ls", // 664
    name: "Blue Lightsaber",
    description: "Magical energies run through a flawless sapphire in the hilt of this dangerous blade.",
    imageUrl: "/pictures/item417.png",
    requiredStats: {
      level: 1,
      strength: 300,
    },
    durability: 335,
  },
  {
    id: "bunnality", // 1921
    name: "Bunnality Blade",
    description: "A special sword that is overpowering with the Easter Bunny's spirit.",
    imageUrl: "/pictures/item501.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 300,
    },
    durability: 350,
  },
  {
    id: "fb", // 233
    name: "Finality Blade",
    description: "This blade's power is incredible. Those on the receiving end quickly realize that their final moments are approaching.",
    imageUrl: "/pictures/item165.png",
    requiredStats: {
      level: 1,
      strength: 300,
    },
    durability: 350,
  },
  {
    id: "kaines-blade", // 619
    name: "Kaine's Blade",
    description: "A hardened blade dipped in poison. Also has a tally on the hilt Kaine 1 Able 0.",
    imageUrl: "/pictures/item253.png",
    poisonPercent: 33,
    requiredStats: {
      level: 1,
      strength: 300,
    },
    durability: 600,
  },
  {
    id: "vfb", // 585
    name: "Venemous Finality Blade",
    description: "This version of the finality blade still glows with powerful energy but seems to have some sort of infectious corruption that you can feel clawing at your arm as you hold it.",
    imageUrl: "/pictures/item408.png",
    poisonPercent: 15,
    requiredStats: {
      level: 1,
      strength: 330,
    },
    durability: 660,
  },
  {
    id: "sow", // 332
    name: "Sword of Worth",
    description: "A sword forged by a god of a parallel dimension. You can feel the power surging through your body while you grip it. Only those who have proven their worth can wield it.",
    imageUrl: "/pictures/item42.png",
    requiredStats: {
      level: 1,
      strength: 325,
    },
    durability: 650,
  },
  {
    id: "rfb", // 586
    name: "Reinforced Finality Blade",
    description: "Upgrade form of the wielded Finality Blade.",
    imageUrl: "/pictures/item487.png",
    requiredStats: {
      level: 1,
      strength: 345,
    },
    durability: 690,
  },
  {
    id: "green-ls", // 666
    name: "Green Lightsaber",
    description: "Magical energy flows through the flawless emerald that creates this blade.",
    imageUrl: "/pictures/item418.png",
    requiredStats: {
      level: 1,
      strength: 360,
    },
    durability: 375,
  },
  {
    id: "sith-lords-ls", // 172
    name: "Sith Lord's Lightsaber",
    description: "Malevolent energy passes through the ruby that houses the soul of a lost innocent to create this sinister blade.",
    imageUrl: "/pictures/item172.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 360,
    },
    durability: 310,
  },
  {
    id: "zodiac-claymore", // 887
    name: "Zodiac Claymore",
    description: "An extremely powerful and legendary weapon capable of bringing an entire planet to its destruction.",
    imageUrl: "/pictures/item465.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 375,
    },
    durability: 750,
  },
  {
    id: "sow-mk-ii", // 1024
    name: "Sword of Worth Mk II",
    description: "A sword forged by a god of a parallel dimension. You can feel the power surging through your body while you grip it.",
    imageUrl: "/pictures/item562.png",
    requiredStats: {
      level: 300,
      strength: 390,
    },
    durability: 780,
  },
  {
    id: "maze-prize", // 1250
    name: "Maze Prize Sword",
    description: " A broad bladed green weapon that cuts through the air an enemies equally well.",
    imageUrl: "/pictures/item468.png",
    unique: true,
    requiredStats: {
      level: 50,
      strength: 400,
    },
    durability: 800,
  },
  {
    id: "tipb", // 711
    name: "True Ipsen Powerblade",
    description: "The smith somehow combined the 2 swords to make this with the help of a warriors soul and a talking ferret.",
    imageUrl: "/pictures/item711.png",
    poisonPercent: 5,
    requiredStats: {
      level: 1,
      strength: 400,
    },
    durability: 800,
  },
  {
    id: "purple-ls", // 667
    name: "Purple Lightsaber",
    description: "This expert lightsaber glows with a purple hue by passing energy through a violet amethyst and emits a sense of true balance.",
    imageUrl: "/pictures/item419.png",
    requiredStats: {
      level: 1,
      strength: 410,
    },
    durability: 450,
  },
  {
    id: "trinity-blade", // 504
    name: "Trinity Blade",
    description: "Forged deep in the depths of Tetra over a suitably epic anvil after being pulled form an admittedly subpar fire by a being of unspeakable light.",
    imageUrl: "/pictures/item175.png",
    poisonPercent: 3,
    requiredStats: {
      level: 1,
      strength: 420,
    },
    durability: 840,
  },
  {
    id: "excal", // 1004
    name: "Excalibur",
    description: "A sword made from the mythical Holy Grail, forged by the flame of Prometheus. You can feel the power flowing through your veins as you weild this legendary weapon.",
    imageUrl: "/pictures/item512.png",
    poisonPercent: 1,
    requiredStats: {
      level: 1,
      strength: 450,
    },
    durability: 900,
  },
  {
    id: "toxic-sabre", // 828
    name: "Toxic Sabre",
    description: "A sabre imbued with the element of toxicity to give it great strength. The toxic element makes it very brittle.",
    imageUrl: "/pictures/item488.png",
    poisonPercent: 75,
    requiredStats: {
      level: 1,
      strength: 450,
    },
    durability: 10,
  },
  {
    id: "sow-mk-iii", // 564
    name: "Sword of Worth MK III",
    description: "A sword forged by an elder god of a parallel dimension. You can feel the power surging through your body while you grip it.",
    imageUrl: "/pictures/item564.png",
    requiredStats: {
      level: 300,
      strength: 470,
    },
    durability: 940,
  },
  {
    id: "frozen-sword-of-glacier", // 1076
    name: "Frozen Sword of Glacier",
    description: "A sword that was laying in a snowbank so long that it achieved epic properties.",
    imageUrl: "/pictures/item44.png",
    requiredStats: {
      level: 1,
      strength: 470,
    },
    durability: 950,
  },
  {
    id: "upgraded-maze-prize", // 1257
    name: "Upgraded Maze Prize Sword",
    description: "This refined version of maze prize sword repels others of its kind.",
    imageUrl: "/pictures/item468.png",
    unique: true,
    requiredStats: {
      level: 85,
      strength: 475,
    },
    durability: 950,
  },
  {
    id: "bhb", // 364
    name: "Battlehardened Blade",
    description: "A blade hardened by experiencing many battles.",
    imageUrl: "/pictures/item531.png",
    requiredStats: {
      level: 1,
      strength: 480,
    },
    durability: 960,
  },
  {
    id: "caliburn", // 1456
    name: "Caliburn",
    description: "Once weilded by Mordred Caliburn is a very powerful Weapon.",
    imageUrl: "/pictures/item467.png",
    poisonPercent: 50,
    requiredStats: {
      level: 1,
      strength: 550,
    },
    durability: 1100,
  },
  {
    id: "sow-mk-iv", // 
    name: "Sword of Worth MK IV",
    description: "A sword forged by a crazed god of a parallel dimension. You can feel the power surging through your body while you grip it.",
    imageUrl: "/pictures/item46.png",
    requiredStats: {
      level: 300,
      strength: 560,
    },
    durability: 1120,
  },
  {
    id: "true-dagger", // 874
    name: "True Dagger",
    description: "Yes. You finally found the dagger. It was in plain sight since the first day you adventured.",
    imageUrl: "/pictures/item422.png",
    poisonPercent: 6,
    requiredStats: {
      level: 1,
      strength: 600,
    },
    durability: 1200,
  },
  {
    id: "toxic-true-dagger", // 852
    name: "Toxic True Dagger",
    description: "An incredibly poisonous and strong dagger.",
    imageUrl: "/pictures/item163.png",
    poisonPercent: 90,
    requiredStats: {
      level: 1,
      strength: 600,
    },
    durability: 1200,
  },
  {
    id: "viking-battle-axe", // 1974
    name: "Viking Battle Axe",
    description: "An axe carried by the Rora Vikings into battle.",
    imageUrl: "/pictures/item255.png",
    poisonPercent: 5,
    requiredStats: {
      level: 1,
      strength: 650,
    },
    durability: 1300,
  },
  {
    id: "dragon-lance", // 2978
    name: "Dragon Lance",
    description: "Forged by the ancestors of the Highlanders.",
    imageUrl: "/pictures/item478.png",
    poisonPercent: 5,
    requiredStats: {
      level: 1,
      strength: 650,
    },
    durability: 1300,
  },
  {
    id: "jeweled-destroyer", // 1262
    name: "Jeweled Destroyer",
    description: "A gaudy weapon that is actually good contrary to expectations.",
    imageUrl: "/pictures/item49.png",
    poisonPercent: 5,
    requiredStats: {
      level: 1,
      strength: 650,
    },
    durability: 1300,
  },
  {
    id: "sow-mk-v", // 1027
    name: "Sword of Worth MK V",
    description: "A sword forged by Steve we don't talk about Steve....",
    imageUrl: "/pictures/item115.png",
    requiredStats: {
      level: 400,
      strength: 675,
    },
    durability: 1340,
  },
  {
    id: "sog", // 1207
    name: "Sword of Glory",
    description: "Demon slayers have long perfected the creation of these blades.",
    imageUrl: "/pictures/item651.png",
    requiredStats: {
      level: 300,
      strength: 700,
    },
    durability: 1400,
  },
  {
    id: "combat-destroyer", // 1263
    name: "Combat Destroyer",
    description: "Instills a sense of deep purpose in the heat of battle.",
    imageUrl: "/pictures/item238.png",
    poisonPercent: 20,
    requiredStats: {
      level: 1,
      strength: 750,
    },
    durability: 1400,
  },
  {
    id: "fsog", // 1210
    name: "Fortified Sword of Glory",
    description: "Fortified with the finest metals of the land in the demon slayers forge.",
    imageUrl: "/pictures/item652.png",
    requiredStats: {
      level: 300,
      strength: 750,
    },
    durability: 1500,
  },
  {
    id: "sow-mk-vi", // 1028
    name: "Sword of Worth MK VI",
    description: "A sword forged by a devil of a parallel dimension. You can feel the power surging through your body while you grip it.",
    imageUrl: "/pictures/item.png",
    requiredStats: {
      level: 500,
      strength: 810,
    },
    durability: 1620,
  },
  {
    id: "viking-battle-axe-plus", // 2953
    name: "Viking Battle Axe+",
    description: "Forged by the best Viking smiths for the fiercest of battles.",
    imageUrl: "/pictures/item255.png",
    poisonPercent: 10,
    requiredStats: {
      level: 1,
      strength: 850,
    },
    durability: 1700,
  },
  {
    id: "dragon-lance-plus", // 2956
    name: "Dragon Lance+",
    description: "No doubt one day a series of books will be written about this blade.",
    imageUrl: "/pictures/item478.png",
    poisonPercent: 10,
    requiredStats: {
      level: 1,
      strength: 850,
    },
    durability: 1700,
  },
  {
    id: "enchanted-destroyer", // 1264
    name: "Enchanted Destroyer",
    description: "A sword created by the apprentace blacksmith who keeps getting all those impressive portents of greatness.",
    imageUrl: "/pictures/item257.png",
    requiredStats: {
      level: 1,
      strength: 850,
    },
    durability: 1700,
  },
  {
    id: "sow-mk-vii", // 1029
    name: "Sword of Worth MK VII",
    description: "A sword forged by a parallel dimension. Wait what?! they can do that?! You can feel the power surging through your very soul while you grip it.",
    imageUrl: "/pictures/item119.png",
    requiredStats: {
      level: 500,
      strength: 970,
    },
    durability: 1940,
  },
  {
    id: "reinforced-destroyer", // 1265
    name: "Reinforced Destroyer",
    description: "The ruins on the blade pulse in time with your hearbeat.",
    imageUrl: "/pictures/item478.png",
    poisonPercent: 40,
    requiredStats: {
      level: 300,
      strength: 975,
    },
    durability: 1900,
  },
  {
    id: "maleficent-destroyer", // 1267
    name: "Maleficent Destroyer",
    description: "It can talk but usually limits itself to making cool sound effects when you swing it.",
    imageUrl: "/pictures/item476.png",
    poisonPercent: 10,
    requiredStats: {
      level: 300,
      strength: 1050,
    },
    durability: 2200,
  },
  {
    id: "nether-mace", // 1231
    name: "Nether Mace",
    description: "Sometimes weilded by Nether Annhilations this weapon seeps the power of the Nether out into the real world weakening it.",
    imageUrl: "/pictures/item500.png",
    poisonPercent: 10,
    requiredStats: {
      level: 300,
      strength: 1150,
    },
    durability: 2300,
  },
  {
    id: "reaper-of-souls", // 2944
    name: "Reaper of Souls",
    description: "Power leaks out of the blade and forms a deathly red cloud around it.",
    imageUrl: "/pictures/item615.png",
    poisonPercent: 10,
    requiredStats: {
      level: 1,
      strength: 1250,
    },
    durability: 2500,
  },
  {
    id: "viking-warhammer", // 2947
    name: "Viking Warhammer",
    description: "An ancient viking warhammer enfused with the souls of man killing beasts.",
    imageUrl: "/pictures/item246.png",
    poisonPercent: 10,
    requiredStats: {
      level: 1,
      strength: 1250,
    },
    durability: 2500,
  },
  {
    id: "dark-battle-axe", // 1222
    name: "Dark Battle Axe",
    description: "An amazing Battle Axe from the elite area of Nether! Like most adventurers just ignore it's mild world destroying side effects.",
    imageUrl: "/pictures/item508.png",
    poisonPercent: 10,
    requiredStats: {
      level: 300,
      strength: 1250,
    },
    durability: 2500,
  },
  {
    id: "shadow-sword", // 1223
    name: "Shadow Sword",
    description: "Sword crafted in the depths of a mysterious realm. Not much is known other than the eerie feeling each swing. Perhaps it may be cursed, or it's truly made within the shadows.",
    imageUrl: "/pictures/item546.png",
    poisonPercent: 10,
    requiredStats: {
      level: 300,
      strength: 1350,
    },
    durability: 2700,
  },
  {
    id: "phantom-sword", // 1242
    name: "Phantom Sword",
    description: "An incredibly rare sword of immense power. The best weapon in the land.",
    imageUrl: "/pictures/item473.png",
    poisonPercent: 25,
    requiredStats: {
      level: 1,
      strength: 1400,
    },
    durability: 3750,
  },
  {
    id: "overwhelming-power", // 856
    name: "Overwhelming Power",
    description: "A burst of overwhelming power consumes this scroll when it is damaged.",
    imageUrl: "/pictures/item591.png",
    poisonPercent: 100,
    requiredStats: {
      level: 1,
      strength: 1500,
    },
    durability: 1,
  },
];

// Sorted by strength, then durability, then name
export const weapons = unsortedWeapons.sort((a, b) => {
  let ret = (a.requiredStats?.strength ?? 0) - (b.requiredStats?.strength ?? 0);
  if (ret === 0) {
    ret = (a.durability ?? 0) - (b.durability ?? 0);
  }
  if (ret === 0) {
    ret = a.name.localeCompare(b.name);
  }
  return ret;
});
