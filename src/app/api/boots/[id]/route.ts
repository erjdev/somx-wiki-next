import { SomData } from "../../../../../somdata";

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params;
  const boots = SomData.boots.find((b) => b.id === id);
  if (!boots) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(boots));
}
