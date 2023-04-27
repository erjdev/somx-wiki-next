import { SomObject, SomStats } from "./base-data";

export type SomSpellData = SomObject & {
  requiredStats: SomStats;
  manaCost: number;
  
  castTimeMilliseconds?: number;
  damage?: number;
  heal?: number;
  poisonPercent?: number;
}
