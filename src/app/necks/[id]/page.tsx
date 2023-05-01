import { notFound } from "next/navigation";
import { SomNeck } from "../../../../somdata/types/item";
import Neck from "@/components/neck";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const neck = await getNeckAsync(params.id);

  return {
    title: `SoMX Wiki - Necks - ${neck.name}`,
    description: neck.description,
    openGraph: {
      images: [neck.imageUrl],
    }
  }
}

async function getNeckAsync(id: string): Promise<SomNeck> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks/${id}`, { next: { revalidate: 60 }});
  const resSomNeck = (await res.json()) as unknown as SomNeck;
  if (!resSomNeck?.name) notFound();
  return resSomNeck;
}

export default async function NeckPage({ params }: { params: { id: string } }) {
  const neck = await getNeckAsync(params.id);
  return <Neck neck={neck} />;
}
