import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DappDetailsContent from "@/components/dapp-details/DappDetailsContent";
import DappSidebar from "@/components/dapp-details/DappSidebar";
import SimilarDapps from "@/components/dapp-details/SimilarDapps";
import { findDappBySlug, getAllDapps, getSimilarDapps } from "@/lib/dapps";
import { generateSlugWithId } from "@/lib/utils";

type DappPageParams = { slug: string };

/**
 * Pre-render every known dApp at build time. Community submissions land via
 * JSON under constants/additionalDapps/ and are picked up automatically.
 */
export async function generateStaticParams(): Promise<DappPageParams[]> {
  const dapps = await getAllDapps();
  return dapps.map((dapp) => ({
    slug: generateSlugWithId(dapp.name, dapp.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DappPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dapps = await getAllDapps();
  const dapp = findDappBySlug(dapps, slug);

  if (!dapp) {
    return {
      title: "dApp not found \u2014 Lightchain DApp Hub",
      robots: { index: false, follow: false },
    };
  }

  const title = `${dapp.name} \u2014 Lightchain DApp Hub`;
  const description = dapp.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [dapp.imageSrc],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [dapp.imageSrc],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<DappPageParams>;
}) {
  const { slug } = await params;
  const dapps = await getAllDapps();
  const dapp = findDappBySlug(dapps, slug);

  if (!dapp) {
    notFound();
  }

  const similar = getSimilarDapps(dapps, dapp);

  return (
    <main className="space-y-10 md:space-y-12 lg:space-y-18 2xl:space-y-24 pt-4 md:pt-8 xl:pt-14 pb-8 md:pb-12 xl:pb-25">
      {/* Details Content */}
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6 xl:gap-10">
            <DappSidebar dapp={dapp} />
            <DappDetailsContent dapp={dapp} />
          </div>
        </div>
      </section>

      {/* Similar Dapps */}
      {similar.length > 0 ? (
        <section>
          <div className="container mx-auto">
            <SimilarDapps dapps={similar} />
          </div>
        </section>
      ) : null}
    </main>
  );
}
