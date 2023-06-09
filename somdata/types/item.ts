import { SomObject, SomStats } from "./base-data";
import { SomClass } from "./classes";

export type SomEquippableItemBase = SomObject & {
  durability?: number;

  requiredStats?: SomStats;
  benefitStats?: SomStats;
  availableClasses?: SomClass[];
  bindOnEquip?: boolean;
  bindOnPickup?: boolean;
  unique?: boolean;

  howToObtainMarkdown?: string;

  // Related items, npcs, quests, etc are referenced by id and type
  // such that we know which area to link to and under what id
  related?: {
    id: string;
    type: "weapons" | "boots" | "armor" | "helmets" | "shields" | "rings" | "necks" | "npcs" | "quests";
  }[];
}

export type SomArmor = SomEquippableItemBase;
export type SomBoot = SomEquippableItemBase;
export type SomHelmet = SomEquippableItemBase;
export type SomNeck = SomEquippableItemBase & {
  showsHealth?: boolean;
};
export type SomRing = SomEquippableItemBase & {
  showsHealth?: boolean;
};
export type SomShield = SomEquippableItemBase & {
  blockPercent: number;
};
// Base type with one additional property
export type SomWeapon = SomEquippableItemBase & {
  poisonPercent?: number;
}
