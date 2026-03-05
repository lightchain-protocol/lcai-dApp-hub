import { ArrowDown } from "lucide-react";
import { DappCard, type DappCardProps } from "../dapp-card/DappCard";
import { Button } from "../ui/Button";

const ShowingResultSection = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold leading-[1.2] tracking-[-0.18px] text-content-strong mb-3">Showing 12 of 485</h2>

        {/* Grid Cards */}
        <div className="grid gap-2.5 md:gap-4 grid-cols-[repeat(auto-fit,minmax(298px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(429px,1fr))]">
          {dappResults.map((dapp, i) => (
            <DappCard key={i} {...dapp} />
          ))}
        </div>

        {/* More Button */}
        <div className="flex flex-col items-center space-y-2 mt-12">
          <span className="text-xs leading-[1.2] tracking-[-0.12px] text-content-medium">
            · · · · · · 317 More dApps · · · · · ·
          </span>
          <Button
            variant={"gradient"}
            size={"md"}
          >
            Load more dApps
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ShowingResultSection;

const dappResults: DappCardProps[] = [
  {
    id: "dapp-001",
    name: "Uniswap",
    description:
      "The world's largest onchain marketplace, trusted by millions. Buy and sell crypto on Ethereum, Monad and 14+ other chains.",
    tags: ["TRADING", "NEW"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-07.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-01.png",
  },
  {
    id: "dapp-002",
    name: "Bro.fun",
    description:
      "Onchain arcade and social casino with skill-based games and creator leagues powered by crypto.",
    tags: ["GAMING", "HOT"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-08.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-02.png",
  },
  {
    id: "dapp-003",
    name: "Kuru",
    description:
      "High-frequency perp DEX bringing pro trading tools and deep liquidity to the Monad ecosystem.",
    tags: ["TRADING"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-09.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-03.png",
  },
  {
    id: "dapp-004",
    name: "Neverland",
    description:
      "Immersive onchain world with composable avatars, quests, and NFT-gated experiences.",
    tags: ["GAMING", "NFT"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-10.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-04.png",
  },
  {
    id: "dapp-005",
    name: "Matcha",
    description:
      "Best-rate DEX aggregator that splits orders across multiple venues for optimal pricing.",
    tags: ["TRADING", "AGGREGATOR"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-11.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-05.png",
  },
  {
    id: "dapp-006",
    name: "SwapKit",
    description:
      "Cross-chain swap router to move liquidity between Ethereum, Monad, and 10+ other L2s in seconds.",
    tags: ["BRIDGE", "CROSS-CHAIN"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-12.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-06.png",
  },
  {
    id: "dapp-007",
    name: "Yield Harbor",
    description:
      "Smart vaults that auto-compound and rebalance yield strategies across leading Monad protocols.",
    tags: ["YIELD"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-13.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-07.png",
  },
  {
    id: "dapp-008",
    name: "Questboard",
    description:
      "Onchain questing platform for discovering new dApps, completing tasks, and earning rewards.",
    tags: ["DISCOVERY", "REWARDS"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-14.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-08.png",
  },
  {
    id: "dapp-009",
    name: "Monad Name Service",
    description:
      "Human-readable names and identity layer for wallets, dApps, and communities on Monad.",
    tags: ["IDENTITY"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-15.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-09.png",
  },
  {
    id: "dapp-010",
    name: "Yield Harbor",
    description:
      "Smart vaults that auto-compound and rebalance yield strategies across leading Monad protocols.",
    tags: ["YIELD"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-16.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-01.png",
  },
  {
    id: "dapp-011",
    name: "Questboard",
    description:
      "Onchain questing platform for discovering new dApps, completing tasks, and earning rewards.",
    tags: ["DISCOVERY", "REWARDS"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-17.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-02.png",
  },
  {
    id: "dapp-012",
    name: "Monad Name Service",
    description:
      "Human-readable names and identity layer for wallets, dApps, and communities on Monad.",
    tags: ["IDENTITY"],
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-18.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-03.png",
  },
];