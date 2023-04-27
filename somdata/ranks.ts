import { SomRankData } from "./types/base-data";
import { SomClass, SomClassesMelee } from "./types/classes";

const meleeRanks: SomRankData[] = [
  {
    id: "melee-rank-newbie",
    name: "newbie",
    level: 1,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-baka",
    name: "saka",
    level: 10,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-slave",
    name: "slave",
    level: 20,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-peasant",
    name: "peasant",
    level: 30,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-resident",
    name: "resident",
    level: 40,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-adventurer",
    name: "adventurer",
    level: 50,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-apprentice",
    name: "apprentice",
    level: 60,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-warrior",
    name: "warrior",
    level: 70,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-squire",
    name: "squire",
    level: 80,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-noble",
    name: "noble",
    level: 90,
    classes: SomClassesMelee,
  },
  {
    id: "melee-rank-mercenary",
    name: "mercenary",
    level: 100,
    classes: SomClassesMelee,
  },
];

const mageRanks: SomRankData[] = [
  {
    id: "mage-rank-student",
    name: "student",
    level: 1,
    classes: [SomClass.MAGE],
  },
];

const skudRanks: SomRankData[] = [
  {
    id: "skud-rank-new-skud",
    name: "new skud",
    level: 1,
    classes: [SomClass.SKUD],
  },
];

export const ranks = [...meleeRanks, ...mageRanks, ...skudRanks];
