import Neck from "@/components/neck";
import { SomNeck } from "../../../somdata/types/item";
import Link from "next/link";
import { Metadata } from "next";
import BreadCrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `SoMX Wiki - Necks`,
  description: "Necks on SoMX Wiki",
}

async function getNecksAsync(): Promise<SomNeck[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomNeck[];
}

export default async function NecksPage() {
  const necks = await getNecksAsync();
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="necks" categoryName="Necks" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {necks.map((neck) => <Neck neck={neck} key={neck.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
