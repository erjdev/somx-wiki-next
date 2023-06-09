import { SomBoot } from "../../../somdata/types/item";
import Boot from "@/components/boot";
import BreadCrumb from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `SoMX Wiki - Boots`,
  description: "Boots on SoMX Wiki",
}

async function getBootsAsync(): Promise<SomBoot[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boots`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomBoot[];
}

export default async function BootsPage() {
  const boots = await getBootsAsync();
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="boots" categoryName="Boots" />
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {boots.map((boot) => <Boot boot={boot} key={boot.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
