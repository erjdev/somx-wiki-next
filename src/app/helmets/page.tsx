import { SomHelmet } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";

export const metadata = {
  title: `SoMX Wiki - Helmets`,
  description: "Helmets on SoMX Wiki",
}

async function getHelmetsAsync(): Promise<SomHelmet[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helmets`);
  return res.json() as unknown as SomHelmet[];
}

export default async function HelmetsPage() {
  const helmets = await getHelmetsAsync();
  return (
    <div className="flex flex-col gap-4">
      {helmets.map((weapon) => <Weapon weapon={weapon} key={weapon.name} />)}
    </div>
  );
}
