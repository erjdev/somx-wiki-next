import { StatsBlock } from "@/components/stat-block";
import { SomRing } from "../../../../somdata/types/item";

async function getRingAsync(ringId: string): Promise<SomRing> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rings/${ringId}`);
  return res.json() as unknown as SomRing;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);

  return (
    <div className="flex flex-col mx-auto p-4 gap-2 max-w-xl">
      <div className="flex items-center gap-2">
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <div className="flex flex-col">
          <h2 className="text-xl underline underline-offset-4 decoration-blue-700">{ring.name}</h2>
          <div className="flex justify-between italic font-light gap-12">
            {ring.requiredStats?.level && <p>Required Level: {ring.requiredStats?.level}</p>}
            {ring.unique && <p>Unique</p>}
          </div>
        </div>
      </div>
      <p>{ring.description}</p>
      <p>{ring.availableClasses}</p>
      
      {ring.benefitStats && <StatsBlock statBlock={ring.benefitStats} title="Bonuses / Penalties" />}
      {ring.requiredStats && <StatsBlock statBlock={ring.requiredStats} title="Required Stats" />}
    </div>
  );
}
