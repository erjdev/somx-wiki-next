import Ring from "@/components/ring";
import { SomRing } from "../../../somdata/types/item";
import { Metadata } from "next";
import BreadCrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: `SoMX Wiki - Rings`,
  description: "Rings on SoMX Wiki",
}

async function getRingsAsync(): Promise<SomRing[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomRing[];
}

export default async function RingsPage() {
  const rings = await getRingsAsync();
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="rings" categoryName="Rings" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {rings.map((ring) => <Ring ring={ring} key={ring.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
