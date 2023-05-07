import Link from "next/link";
import { Metadata } from "next";
import Armor from "@/components/armor";
import { SomArmor } from "../../../somdata/types/item";

export const metadata: Metadata = {
  title: `SoMX Wiki - Armor`,
  description: "Armor on SoMX Wiki",
}

async function getArmorAsync(): Promise<SomArmor[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor` /* ,{ next: { revalidate: 60 }} */);
  return (await res.json()) as unknown as SomArmor[];
}

export default async function ArmorsPage() {
  const armor = await getArmorAsync();
  return (
    <div>
      <p className="flex space-x-2 items-center p-4">
        <Link href="/armor" className="underline-offset-2 decoration-blue-700 hover:underline">Armor</Link>
      </p>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {armor.map((a) => <Armor armor={a} key={a.name} />)}
      </div>
    </div>
  );
}
