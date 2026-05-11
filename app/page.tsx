import type { DappCardProps } from "@/components/dapp-card/DappCard";
import type { DappCardMiniProps } from "@/components/dapp-card/DappCardMini";
import DappEmptyState from "@/components/home/DappEmptyState";
import Hero from "@/components/home/Hero";
import ShowingResultSection from "@/components/home/ShowingResultSection";
import TrendingSection from "@/components/home/TrendingSection";
import DottedLineBackground from "@/components/ui/DottedLineBackground";

type DappHubData = {
  trendingDapps: DappCardMiniProps[];
  dappResults: DappCardProps[];
  totalCount: number;
};

const dappResults: DappCardProps[] = [
  {
    id: "dapp-001",
    name: "Lightchain Bridge",
    description:
      "Move LCAI between Ethereum and Lightchain Mainnet through a Hyperlane-powered bridge with chain-aware token routes and transaction review.",
    tags: ["BRIDGE", "INTERCHAIN", "LCAI"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-bridge.png",
    externalUrl: "https://bridge.lightchain.ai/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-002",
    name: "LCAI Swap",
    description:
      "Swap LCAI and ecosystem tokens on the Lightchain Mainnet with pool discovery, wallet-native routing, and explorer-linked transaction feedback.",
    tags: ["TRADING", "DEX", "TESTNET"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-swap.png",
    externalUrl: "https://dex-testnet.lightchain.ai/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-003",
    name: "LCAI Faucet",
    description:
      "Claim testnet LCAI for deployments, swaps, and contract testing. Paste a wallet, request funds, and track the claim transaction.",
    tags: ["FAUCET", "TESTNET", "BUILDER"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-faucet.png",
    externalUrl: "https://lightfaucet.ai/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-004",
    name: "Lightchain Explorer",
    description:
      "Inspect Lightchain blocks, transactions, contracts, wallets, and network activity through a customized Blockscout explorer.",
    tags: ["EXPLORER", "ANALYTICS", "MAINNET"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-lce.png",
    externalUrl: "https://mainnet.lightscan.app/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-005",
    name: "Worker Explorer",
    description:
      "Browse workers powering decentralized AI on Lightchain with super models. Track online workers, stakes, supported models, and node details.",
    tags: ["AI", "WORKERS", "MAINNET"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-we.png",
    externalUrl: "https://workers.lightchain.ai/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-006",
    name: "Lightchain IDE",
    description:
      "Write, compile, test, and deploy smart contracts in a browser workspace adapted from Remix for Lightchain builders.",
    tags: ["IDE", "DEVTOOLS", "CONTRACTS"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-ide.png",
    externalUrl: "https://deploy.lightchain.ai/",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-007",
    name: "Example dApp",
    description:
      "This is a example dapp description for the dapp card component.",
    tags: ["EXAMPLE", "DEMO", "TEST"],
    iconSrc: "/images/dapp-item-logo/example-logo.png",
    imageSrc: "/images/dapp-item-thumb/example-dapp.png",
    externalUrl: "https://example.com/",
    added_by_team: false,
    powered_by_lightchain: false,
  },
];

async function getDappHubData(): Promise<DappHubData> {
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
