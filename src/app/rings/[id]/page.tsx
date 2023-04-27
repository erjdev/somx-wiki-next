import { SomRing } from "../../../../somdata/types/item";

async function getRingAsync(): Promise<SomRing> {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function RingPage({ params }: { params: { id: string } }) {
  const ring = await getRingAsync();

  return (
    <div>
      <h1>{ring.name}</h1>
      <p>{ring.description}</p>
    </div>
  );
}
