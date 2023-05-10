import BreadCrumb from "@/components/breadcrumb";
import { SomRing } from "../../../../somdata/types/item";
import Ring from "@/components/ring";
import { notFound } from "next/navigation";
import MoreDetailsWrapper from "@/components/more-details-wrapper";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);

  return {
    title: `SoMX Wiki - Rings - ${ring.name}`,
    description: ring.description,
    openGraph: {
      images: [ring.imageUrl],
    }
  }
}

async function getRingAsync(ringId: string): Promise<SomRing> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings/${ringId}`, { next: { revalidate: 60 }});
  const resSomRing = (await res.json()) as unknown as SomRing;
  if (!resSomRing?.name) notFound();
  return resSomRing;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);
  return (
    <MoreDetailsWrapper>
      <BreadCrumb categoryId="rings" categoryName="Rings" itemId={ring.id} itemName={ring.name} />
      <div className="flex flex-col md:flex-row gap-4">
        <Ring ring={ring} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </MoreDetailsWrapper>
  );
}
