import { SomClass } from './classes';
import { SomArmor, SomBoot, SomHelmet, SomNeck, SomRing, SomShield, SomWeapon } from './item';
import { SomNpc } from './npc';
import { SomQuest } from './quest';
import { SomSpellData } from './spell';

export type SomDatabase = {
  // Equippable Items
  armor: SomArmor[];
  boots: SomBoot[];
  helmets: SomHelmet[];
  necks: SomNeck[];
  rings: SomRing[];
  shields: SomShield[];
  weapons: SomWeapon[];
  
  quests: SomQuest[];
  ranks: SomRankData[];
  npcs: SomNpc[];
  spells: SomSpellData[];
  
}

export type SomStats = {
  strength?: number;
  defense?: number;
  magic?: number;
  speed?: number;

  health?: number;
  mana?: number;

  exp?: number;
  level?: number;
}

export type SomObject = {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
}

export type SomRankData = {
  id: string;
  name: string;
  level: number;
  classes: SomClass[];

  includesAo?: boolean;
}
