import { SomNeck } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";

export const metadata = {
  title: `SoMX Wiki - Necks`,
  description: "Necks on SoMX Wiki",
}

async function getNecksAsync(): Promise<SomNeck[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks`);
  return res.json() as unknown as SomNeck[];
}

export default async function NecksPage() {
  const necks = await getNecksAsync();
  return (
    <div className="flex flex-col gap-4">
      {necks.map((weapon) => <Weapon weapon={weapon} key={weapon.name} />)}
    </div>
  );
}
