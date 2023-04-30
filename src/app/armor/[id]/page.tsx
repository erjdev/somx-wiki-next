import { notFound } from "next/navigation";
import { SomArmor } from "../../../../somdata/types/item";
import Weapon from "@/components/weapon";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/armor/${id}`);
  const resSomArmor = res.json() as unknown as SomArmor;
  if (!resSomArmor?.name) notFound();
  return resSomArmor;
}

export default async function ArmorPage({ params }: { params: { id: string } }) {
  const armor = await getArmorAsync(params.id);
  return <Weapon weapon={armor} />;
}
