import { SomObject, SomStats } from "./base-data";

export type SomNpc = SomObject & {
  /** A list of drops */
  drops?: SomNpcDrop[];
  stats?: SomStats;
}

export type SomNpcDrop = {
  /** The id of the item that can drop */
  itemId: string;

  /** `1/{percentSelectDrop}` is the chance on NPC kill for this `SomNpcDrop` to be selected for drop
   * 
   * 10 would mean 1 in 10 kills will select this drop
   */
  percentSelectDrop: number;

  /** `1/{dropChanceDenominator}` is the chance of this item dropping on NPC kill once the drop is selected from the list of drops
   * 
   * 1000 would mean 1 out of every 1000 drop attempts will drop this item
   */
  dropChanceDenominator: number;
}