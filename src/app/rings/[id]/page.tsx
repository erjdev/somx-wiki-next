import { SomRing } from "../../../../somdata/types/item";

async function getRingAsync(ringId: string): Promise<SomRing> {
  const res = await fetch(`http://localhost:3000/api/rings/${ringId}`);
  return res.json() as unknown as SomRing;
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync(params.id);

  return (
    <div>
      <h1>{ring.name}</h1>
      <p>{ring.description}</p>
    </div>
  );
}
