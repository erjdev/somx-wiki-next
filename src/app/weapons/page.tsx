import { SomWeapon } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";

export const metadata = {
  title: `SoMX Wiki - Weapons`,
  description: "Weapons on SoMX Wiki",
}

async function getWeaponsAsync(): Promise<SomWeapon[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/weapons`);
  return res.json() as unknown as SomWeapon[];
}

export default async function RingsPage() {
  const weapons = await getWeaponsAsync();
  return (
    <div className="flex flex-col gap-4">
      {weapons.map((weapon) => {
        return <Weapon weapon={weapon} key={weapon.name} />
      })}
    </div>
  );
}
