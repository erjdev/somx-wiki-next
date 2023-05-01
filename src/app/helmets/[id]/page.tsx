import { notFound } from "next/navigation";
import { SomHelmet } from "../../../../somdata/types/item";
import Helmet from "@/components/helmet";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const helmet = await getHelmetAsync(params.id);

  return {
    title: `SoMX Wiki - Helmets - ${helmet.name}`,
    description: helmet.description,
    openGraph: {
      images: [helmet.imageUrl],
    }
  }
}

async function getHelmetAsync(id: string): Promise<SomHelmet> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/helmets/${id}`, { next: { revalidate: 60 }});
  const resSomHelmet = (await res.json()) as unknown as SomHelmet;
  if (!resSomHelmet?.name) notFound();
  return resSomHelmet;
}

export default async function HelmetPage({ params }: { params: { id: string } }) {
  const helmet = await getHelmetAsync(params.id);
  return <Helmet helmet={helmet} />;
}
