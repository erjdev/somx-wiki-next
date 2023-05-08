import { notFound } from "next/navigation";
import { SomHelmet } from "../../../../somdata/types/item";
import Helmet from "@/components/helmet";
import Link from "next/link";

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
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/helmets" className="underline-offset-2 decoration-blue-700 hover:underline">Helmets</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/helmets/${helmet.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{helmet.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Helmet helmet={helmet} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
