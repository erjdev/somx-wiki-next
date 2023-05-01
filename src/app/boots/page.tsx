import { SomBoot } from "../../../somdata/types/item";
import Boot from "@/components/boot";

export const metadata = {
  title: `SoMX Wiki - Boots`,
  description: "Boots on SoMX Wiki",
}

async function getBootsAsync(): Promise<SomBoot[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boots`, { next: { revalidate: 60 }});
  return (await res.json()) as unknown as SomBoot[];
}

export default async function RingsPage() {
  const boots = await getBootsAsync();
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {boots.map((boot) => <Boot boot={boot} key={boot.name} />)}
    </div>
  );
}
