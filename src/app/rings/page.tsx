import Ring from "@/components/ring";
import { SomRing } from "../../../somdata/types/item";

export const metadata = {
  title: `SoMX Wiki - Rings`,
  description: "Rings on SoMX Wiki",
}

async function getRingsAsync(): Promise<SomRing[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings`);
  return res.json() as unknown as SomRing[];
}

export default async function RingsPage() {
  const rings = await getRingsAsync();
  return (
    <>
      {rings.map((ring) => {
        return <Ring ring={ring} key={ring.name} />
      })}
    </>
  );
}
