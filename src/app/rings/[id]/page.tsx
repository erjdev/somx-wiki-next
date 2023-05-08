import { SomRing } from "../../../../somdata/types/item";
import Ring from "@/components/ring";
import Link from "next/link";
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
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/rings" className="underline-offset-2 decoration-blue-700 hover:underline">Rings</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/rings/${ring.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{ring.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Ring ring={ring} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
