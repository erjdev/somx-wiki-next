import { notFound } from "next/navigation";
import { SomNeck } from "../../../../somdata/types/item";
import Neck from "@/components/neck";
import Link from "next/link";

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
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/necks" className="underline-offset-2 decoration-blue-700 hover:underline">Necks</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/necks/${neck.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{neck.name}</Link>
      </p>
      <div className="flex flex-row gap-2">
        <Neck neck={neck} />
        <div className="">
          More details...
        </div>
      </div>
    </div>
  )
}
