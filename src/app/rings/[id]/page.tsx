import { SomData } from "../../../../somdata";
import { SomRing } from "../../../../somdata/types/item";

export default function RingPage(props: { ring?: SomRing }) {
  return (
    <div>
      <h1>{props.ring?.name}</h1>
      <p>{props.ring?.description}</p>
    </div>
  );
}

export async function generateStaticParams({ params }: { params: { id: string } }) {
  console.log(JSON.stringify(SomData.rings));
  const ring = SomData.rings.find((ring) => ring.id === params.id);
  return {
    props: { ring },
  };
}
