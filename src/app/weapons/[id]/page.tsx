import { notFound } from "next/navigation";
import { SomWeapon } from "../../../../somdata/types/item";
import Weapon from "@/components/weapon";
import Link from "next/link";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/weapons/${weaponId}`, { next: { revalidate: 60 }});
  const resSomWeapon = (await res.json()) as unknown as SomWeapon;
  if (!resSomWeapon?.name) notFound();
  return resSomWeapon;
}

export default async function WeaponPage({ params }: { params: { id: string } }) {
  const weapon = await getWeaponAsync(params.id);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/weapons" className="underline-offset-2 decoration-blue-700 hover:underline">Weapons</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/weapons/${weapon.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{weapon.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Weapon weapon={weapon} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
