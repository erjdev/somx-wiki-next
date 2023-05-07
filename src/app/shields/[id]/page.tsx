import { notFound } from "next/navigation";
import { SomShield } from "../../../../somdata/types/item";
import Shield from "@/components/shield";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shields/${id}` /* ,{ next: { revalidate: 60 }} */);
  const resSomShield = (await res.json()) as unknown as SomShield;
  if (!resSomShield?.name) notFound();
  return resSomShield;
}

export default async function ShieldPage({ params }: { params: { id: string } }) {
  const shield = await getShieldAsync(params.id);
  return <Shield shield={shield} />;
}
