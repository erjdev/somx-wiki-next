import { StatsBlock } from "@/components/stat-block";
import { SomWeapon } from "../../../../somdata/types/item";
import Ring from "@/components/ring";
import Weapon from "@/components/weapon";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const weapon = await getWeaponAsync(params.id);

  return {
    title: `SoMX Wiki - Weapons - ${weapon.name}`,
    description: weapon.description,
    openGraph: {
      images: [weapon.imageUrl],
    }
  }
}

async function getWeaponAsync(weaponId: string): Promise<SomWeapon> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/weapons/${weaponId}`);
  return res.json() as unknown as SomWeapon;
}

export default async function WeaponPage({ params }: { params: { id: string } }) {
  const weapon = await getWeaponAsync(params.id);
  return <Weapon weapon={weapon} />;
}
