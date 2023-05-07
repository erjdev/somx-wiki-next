import { notFound } from "next/navigation";
import { SomArmor } from "../../../../somdata/types/item";
import Armor from "@/components/armor";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor/${id}` /* ,{ next: { revalidate: 60 }} */);
  const resSomArmor = (await res.json()) as unknown as SomArmor;
  if (!resSomArmor?.name) notFound();
  return resSomArmor;
}

export default async function ArmorPage({ params }: { params: { id: string } }) {
  const armor = await getArmorAsync(params.id);
  return <Armor armor={armor} />;
}
