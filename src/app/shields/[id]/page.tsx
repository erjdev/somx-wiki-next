import { notFound } from "next/navigation";
import { SomShield } from "../../../../somdata/types/item";
import Shield from "@/components/shield";
import Link from "next/link";
import BreadCrumb from "@/components/breadcrumb";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const shield = await getShieldAsync(params.id);

  return {
    title: `SoMX Wiki - Shields - ${shield.name}`,
    description: shield.description,
    openGraph: {
      images: [shield.imageUrl],
    }
  }
}

async function getShieldAsync(id: string): Promise<SomShield> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shields/${id}`, { next: { revalidate: 60 }});
  const resSomShield = (await res.json()) as unknown as SomShield;
  if (!resSomShield?.name) notFound();
  return resSomShield;
}

export default async function ShieldPage({ params }: { params: { id: string } }) {
  const shield = await getShieldAsync(params.id);
  return (
    <div className="w-full flex flex-col gap-2">
      <BreadCrumb categoryId="shields" categoryName="Shields" itemId={shield.id} itemName={shield.name} />
      <div className="flex flex-col md:flex-row gap-4">
        <Shield shield={shield} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
