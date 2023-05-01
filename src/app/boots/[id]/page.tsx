import Boot from "@/components/boot";
import { SomBoot } from "../../../../somdata/types/item";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const boot = await getBootAsync(params.id);

  return {
    title: `SoMX Wiki - Boots - ${boot.name}`,
    description: boot.description,
    openGraph: {
      images: [boot.imageUrl],
    }
  }
}

async function getBootAsync(id: string): Promise<SomBoot> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boots/${id}`, { next: { revalidate: 60 }});
  const resSomBoot = (await res.json()) as unknown as SomBoot;
  if (!resSomBoot?.name) notFound();
  return resSomBoot;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const boot = await getBootAsync(params.id);
  return <Boot boot={boot} />;
}
