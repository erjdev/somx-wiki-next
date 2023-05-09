import { notFound } from "next/navigation";
import { SomWeapon } from "../../../somdata/types/item";
import Weapon from "@/components/weapon";
import Link from "next/link";
import { Metadata } from "next";
import BreadCrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `SoMX Wiki - Weapons`,
  description: "Weapons on SoMX Wiki",
}

async function getWeaponsAsync(): Promise<SomWeapon[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/weapons`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomWeapon[];
}

export default async function WeaponsPage() {
  const weapons = await getWeaponsAsync();
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="weapons" categoryName="Weapons" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {weapons.map((w) => <Weapon weapon={w} key={w.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
