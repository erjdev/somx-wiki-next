import Helmet from "@/components/helmet";
import { SomHelmet } from "../../../somdata/types/item";
import Link from "next/link";
import { Metadata } from "next";
import BreadCrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `SoMX Wiki - Helmets`,
  description: "Helmets on SoMX Wiki",
}

async function getHelmetsAsync(): Promise<SomHelmet[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helmets`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomHelmet[];
}

export default async function HelmetsPage() {
  const helmets = await getHelmetsAsync();
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="helmets" categoryName="Helmets" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {helmets.map((helmet) => <Helmet helmet={helmet} key={helmet.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
