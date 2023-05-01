import { SomShield } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";

export const metadata = {
  title: `SoMX Wiki - Shields`,
  description: "Shields on SoMX Wiki",
}

async function getShieldsAsync(): Promise<SomShield[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shields`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomShield[];
}

export default async function ShieldsPage() {
  const shields = await getShieldsAsync();
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {shields.map((weapon) => <Weapon weapon={weapon} key={weapon.name} />)}
    </div>
  );
}
