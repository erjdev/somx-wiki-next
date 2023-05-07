import Neck from "@/components/neck";
import { SomNeck } from "../../../somdata/types/item";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `SoMX Wiki - Necks`,
  description: "Necks on SoMX Wiki",
}

async function getNecksAsync(): Promise<SomNeck[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/necks` /* ,{ next: { revalidate: 60 }} */);
  return (await res.json()) as unknown as SomNeck[];
}

export default async function NecksPage() {
  const necks = await getNecksAsync();
  return (
    <div>
      <p className="flex space-x-2 items-center p-4">
        <Link href="/necks" className="underline-offset-2 decoration-blue-700 hover:underline">Necks</Link>
      </p>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {necks.map((neck) => <Neck neck={neck} key={neck.name} showBenefits={false} />)}
      </div>
    </div>
  );
}
