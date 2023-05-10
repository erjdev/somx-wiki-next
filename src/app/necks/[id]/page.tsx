import { notFound } from "next/navigation";
import { SomNeck } from "../../../../somdata/types/item";
import Neck from "@/components/neck";
import { Metadata } from "next";
import BreadCrumb from "@/components/breadcrumb";
import MoreDetailsWrapper from "@/components/more-details-wrapper";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const neck = await getNeckAsync(params.id);

  const meta: Metadata = {
    title: `SoMX Wiki - Necks - ${neck.name}`,
    description: neck.description || "No description found",
    openGraph: {
      images: [neck.imageUrl],
    },
  };

  return meta;
}

async function getNeckAsync(id: string): Promise<SomNeck> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks/${id}`, { next: { revalidate: 60 }});
  const resSomNeck = (await res.json()) as unknown as SomNeck;
  if (!resSomNeck?.name) notFound();
  return resSomNeck;
}

export default async function NeckPage({ params }: { params: { id: string } }) {
  const neck = await getNeckAsync(params.id);
  return (
    <MoreDetailsWrapper>
      <BreadCrumb categoryId="necks" categoryName="Necks" itemId={neck.id} itemName={neck.name} />
      <div className="flex flex-col md:flex-row gap-2">
        <Neck neck={neck} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </MoreDetailsWrapper>
  )
}
