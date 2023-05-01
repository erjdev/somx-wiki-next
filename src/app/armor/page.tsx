import Armor from "@/components/armor";
import { SomArmor } from "../../../somdata/types/item";

export const metadata = {
  title: `SoMX Wiki - Armor`,
  description: "Armor on SoMX Wiki",
}

async function getArmorAsync(): Promise<SomArmor[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomArmor[];
}

export default async function ArmorsPage() {
  const armor = await getArmorAsync();
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {armor.map((armor) => <Armor armor={armor} key={armor.name} />)}
    </div>
  );
}
