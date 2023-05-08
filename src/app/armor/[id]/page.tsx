import { notFound } from "next/navigation";
import { SomArmor } from "../../../../somdata/types/item";
import Armor from "@/components/armor";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const armor = await getArmorAsync(params.id);

  return {
    title: `SoMX Wiki - Armor - ${armor.name}`,
    description: armor.description,
    openGraph: {
      images: [armor.imageUrl],
    }
  }
}

async function getArmorAsync(id: string): Promise<SomArmor> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor/${id}`, { next: { revalidate: 60 }});
  const resSomArmor = (await res.json()) as unknown as SomArmor;
  if (!resSomArmor?.name) notFound();
  return resSomArmor;
}

export default async function ArmorPage({ params }: { params: { id: string } }) {
  const armor = await getArmorAsync(params.id);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/armor" className="underline-offset-2 decoration-blue-700 hover:underline">Armor</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/armor/${armor.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{armor.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Armor armor={armor} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
