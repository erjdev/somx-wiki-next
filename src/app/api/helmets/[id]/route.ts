import { SomData } from "../../../../../somdata";

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params;
  const helmet = SomData.helmets.find((h) => h.id === id);
  if (!helmet) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(helmet));
}
