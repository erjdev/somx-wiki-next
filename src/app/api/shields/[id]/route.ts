import { SomData } from "../../../../../somdata";

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params;
  const shield = SomData.shields.find((s) => s.id === id);
  if (!shield) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(shield));
}
