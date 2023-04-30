import { StatsBlock } from "@/components/stat-block";
import { SomRing } from "../../../../somdata/types/item";

async function getRingAsync(ringId: string): Promise<SomRing> {
  const res = await fetch(`http://localhost:3000/api/rings/${ringId}`);
  return res.json() as unknown as SomRing;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);

  return (
    <div className="flex flex-col mx-auto p-4 gap-2">
      <div className="flex items-center gap-2">
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <h2 className="text-xl">{ring.name}</h2>
      </div>
      <p>{ring.description}</p>
      <p>{ring.availableClasses}</p>
      
      {ring.benefitStats && <StatsBlock statBlock={ring.benefitStats} title="Bonuses / Penalties" />}
      {ring.requiredStats && <StatsBlock statBlock={ring.requiredStats} title="Required Stats" />}
    </div>
  );
}
