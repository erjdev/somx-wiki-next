import { SomRing } from "../../../../somdata/types/item";
import Ring from "@/components/ring";
import { notFound } from "next/navigation";

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
  return <Ring ring={ring} />;
}
