import { SomData } from "../../../../../somdata";

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params;
  const armor = SomData.armor.find((a) => a.id === id);
  if (!armor) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(armor));
}
