import { SomData } from "../../../../somdata";

export async function GET(request: Request) {
  return new Response(JSON.stringify(SomData.necks));
}
