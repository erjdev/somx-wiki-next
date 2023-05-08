import Boot from "@/components/boot";
import { SomBoot } from "../../../../somdata/types/item";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="flex space-x-2 items-center">
        <Link href="/boots" className="underline-offset-2 decoration-blue-700 hover:underline">Boots</Link>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/boots/${boot.id}`} className="underline-offset-2 decoration-blue-700 hover:underline">{boot.name}</Link>
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Boot boot={boot} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </div>
  );
}
