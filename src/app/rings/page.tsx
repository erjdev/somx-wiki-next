import Ring from "@/components/ring";
import { SomRing } from "../../../somdata/types/item";
import Link from "next/link";

export const metadata = {
  title: `SoMX Wiki - Rings`,
  description: "Rings on SoMX Wiki",
}

async function getRingsAsync(): Promise<SomRing[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomRing[];
}

export default async function RingsPage() {
  const rings = await getRingsAsync();
  return (
    <div>
      <p className="flex space-x-2 items-center p-4">
        <Link href="/rings" className="underline-offset-2 decoration-blue-700 hover:underline">Rings</Link>
      </p>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {rings.map((ring) => <Ring ring={ring} key={ring.name} />)}
      </div>
    </div>
  );
}
