import { SomArmor } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";

export const metadata = {
  title: `SoMX Wiki - Armor`,
  description: "Armor on SoMX Wiki",
}

async function getArmorAsync(): Promise<SomArmor[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor`);
  return res.json() as unknown as SomArmor[];
}

export default async function ArmorsPage() {
  const armor = await getArmorAsync();
  return (
    <div className="flex flex-col gap-4">
      {armor.map((weapon) => <Weapon weapon={weapon} key={weapon.name} />)}
    </div>
  );
}
