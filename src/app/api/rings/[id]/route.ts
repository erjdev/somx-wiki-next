import { SomData } from "../../../../../somdata";

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params;
  const ring = SomData.rings.find((r) => r.id === id);
  if (!ring) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(ring));
}
