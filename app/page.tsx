import type { DappCardProps } from "@/components/dapp-card/DappCard";
import type { DappCardMiniProps } from "@/components/dapp-card/DappCardMini";
import DappEmptyState from "@/components/home/DappEmptyState";
import Hero from "@/components/home/Hero";
import ShowingResultSection from "@/components/home/ShowingResultSection";
import TrendingSection from "@/components/home/TrendingSection";
import DottedLineBackground from "@/components/ui/DottedLineBackground";
import { dappsList } from "@/constants/dapps";
import { loadAdditionalDapps } from "../lib/loadAdditionalDapps";

type DappHubData = {
  trendingDapps: DappCardMiniProps[];
  dappResults: DappCardProps[];
  totalCount: number;
};

async function getDappHubData(): Promise<DappHubData> {
  const additionalDapps = await loadAdditionalDapps();
  const dappResults = [...additionalDapps, ...dappsList];

  return {
    trendingDapps: [],
    dappResults,
    totalCount: dappResults.length,
  };
}

export default async function Home() {
  const { trendingDapps, dappResults, totalCount } = await getDappHubData();
  const hasDapps = trendingDapps.length > 0 || dappResults.length > 0;

  return (
    <main className="relative w-full bg-background text-foreground">
      <Hero showControls={hasDapps} />
      {hasDapps ? (
        <div className="relative z-1">
          <DottedLineBackground />
          <div className="relative z-10 space-y-12 2xl:space-y-18 py-10 md:py-12 xl:py-14 2xl:py-20">
            <TrendingSection dapps={trendingDapps} />
            <ShowingResultSection dapps={dappResults} totalCount={totalCount} />
          </div>
        </div>
      ) : (
        <DappEmptyState />
      )}
    </main>
  );
}
