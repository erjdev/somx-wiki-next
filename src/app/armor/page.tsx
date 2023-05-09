import Link from "next/link";
import { Metadata } from "next";
import Armor from "@/components/armor";
import { SomArmor } from "../../../somdata/types/item";
import BreadCrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
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
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="armor" categoryName="Armor" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {armor.map((a) => <Armor armor={a} key={a.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
