import { notFound } from "next/navigation";
import { SomWeapon } from "../../../../somdata/types/item";
import Weapon from "@/components/weapon";
import BreadCrumb from "@/components/breadcrumb";
import MoreDetailsWrapper from "@/components/more-details-wrapper";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const weapon = await getWeaponAsync(params.id);

  return {
    title: `SoMX Wiki - Weapons - ${weapon.name}`,
    description: weapon.description,
    openGraph: {
      images: [weapon.imageUrl],
    }
  }
}

async function getWeaponAsync(weaponId: string): Promise<SomWeapon> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/weapons/${weaponId}`, { next: { revalidate: 60 }});
  const resSomWeapon = (await res.json()) as unknown as SomWeapon;
  if (!resSomWeapon?.name) notFound();
  return resSomWeapon;
}

export default async function WeaponPage({ params }: { params: { id: string } }) {
  const weapon = await getWeaponAsync(params.id);
  return (
    <MoreDetailsWrapper>
      <BreadCrumb categoryId="weapons" categoryName="Weapons" itemId={weapon.id} itemName={weapon.name} />
      <div className="flex flex-col md:flex-row gap-4">
        <Weapon weapon={weapon} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </MoreDetailsWrapper>
  );
}
