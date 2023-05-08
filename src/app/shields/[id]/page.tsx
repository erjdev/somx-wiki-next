import { notFound } from "next/navigation";
import { SomShield } from "../../../../somdata/types/item";
import Shield from "@/components/shield";
import Link from "next/link";

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
      <p className="flex space-x-2 items-center">
        <Link href="/shields" className="underline-offset-2 decoration-blue-700 hover:underline">Shields</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/shields/${shield.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{shield.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Shield shield={shield} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
