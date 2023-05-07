import Link from "next/link";
import { SomShield } from "../../../somdata/types/item";
import Shield from "@/components/shield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `SoMX Wiki - Shields`,
  description: "Shields on SoMX Wiki",
}

async function getShieldsAsync(): Promise<SomShield[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shields` /* ,{ next: { revalidate: 60 }} */);
  return (await res.json()) as unknown as SomShield[];
}

export default async function ShieldsPage() {
  const shields = await getShieldsAsync();
  return (
    <div>
      <p className="flex space-x-2 items-center p-4">
        <Link href="/shields" className="underline-offset-2 decoration-blue-700 hover:underline">Shields</Link>
      </p>
      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {shields.map((shield) => <Shield shield={shield} key={shield.name} />)}
      </div>
    </div>
  );
}
