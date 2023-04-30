import { StatsBlock } from "@/components/stat-block";
import { SomRing } from "../../../../somdata/types/item";

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings/${ringId}`);
  return res.json() as unknown as SomRing;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl">
      <div className="flex items-center gap-4 flex-grow-0">
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl underline underline-offset-4 decoration-blue-700">{ring.name}</h2>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm">
            {ring.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Required Level: {ring.requiredStats?.level}</p>}
            {ring.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 gap-3">
        <p className="flex-wrap">{ring.description}</p>
        <p className="flex-wrap">{ring.availableClasses}</p>
        <div className="flex flex-col px-2 gap-3 flex-wrap">
          {ring.benefitStats && <StatsBlock statBlock={ring.benefitStats} title="Bonuses / Penalties" />}
          {ring.requiredStats && <StatsBlock statBlock={ring.requiredStats} title="Required Stats" />}
        </div>
      </div>
    </div>
  );
}
