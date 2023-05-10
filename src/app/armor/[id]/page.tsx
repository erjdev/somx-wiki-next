import { notFound } from "next/navigation";
import { SomArmor } from "../../../../somdata/types/item";
import Armor from "@/components/armor";
import BreadCrumb from "@/components/breadcrumb";
import MoreDetailsWrapper from "@/components/more-details-wrapper";

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
    <MoreDetailsWrapper>
      <BreadCrumb categoryId="armor" categoryName="Armor" itemId={armor.id} itemName={armor.name} />
      <div className="flex flex-col md:flex-row gap-4">
        <Armor armor={armor} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </MoreDetailsWrapper>
  );
}
