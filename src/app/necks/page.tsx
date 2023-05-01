import Neck from "@/components/neck";
import { SomNeck } from "../../../somdata/types/item";

export const metadata = {
  title: `SoMX Wiki - Necks`,
  description: "Necks on SoMX Wiki",
}

async function getNecksAsync(): Promise<SomNeck[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomNeck[];
}

export default async function NecksPage() {
  const necks = await getNecksAsync();
  return (
    <div className="flex flex-col gap-4">
      {necks.map((neck) => <Neck neck={neck} key={neck.name} />)}
    </div>
  );
}
