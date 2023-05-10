import Boot from "@/components/boot";
import BreadCrumb from "@/components/breadcrumb";
import { SomBoot } from "../../../../somdata/types/item";
import { notFound } from "next/navigation";
import MoreDetailsWrapper from "@/components/more-details-wrapper";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const boot = await getBootAsync(params.id);

  return {
    title: `SoMX Wiki - Boots - ${boot.name}`,
    description: boot.description,
    openGraph: {
      images: [boot.imageUrl],
    }
  }
}

async function getBootAsync(id: string): Promise<SomBoot> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boots/${id}`, { next: { revalidate: 60 }});
  const resSomBoot = (await res.json()) as unknown as SomBoot;
  if (!resSomBoot?.name) notFound();
  return resSomBoot;
}

export default async function BootPage({ params }: { params: { id: string } }) {
  const boot = await getBootAsync(params.id);
  return (
    <MoreDetailsWrapper>
      <BreadCrumb categoryId="boots" categoryName="Boots" itemId={boot.id} itemName={boot.name} />
      <div className="flex flex-col md:flex-row gap-4">
        <Boot boot={boot} />
        <div className="basis-full">
          More details...
        </div>
      </div>
    </MoreDetailsWrapper>
  );
}
