"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavButton from "@/components/ui/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useSwiperEdgeState } from "@/hooks/useSwiperEdgeState";
import { DappCardMini } from "@/components/dapp-card/DappCardMini";

const SimilarDapps = () => {
  // const { isBeginning, isEnd, handleSwiper } = useSwiperEdgeState();
  const { handleSwiper } = useSwiperEdgeState();

  return (
    <div className="relative w-full space-y-2 md:space-y-3">
      <div className="flex gap-4 items-center justify-between">
        <h2 className="text-lg font-semibold leading-[1.2] tracking-[-0.18px] text-content-ultra">Similar dApps </h2>
        <div className="w-19 h-10 flex items-center justify-between">
          <SwiperNavButton direction="prev" customClass="lcai-dapp-prev" className="static! z-20! m-0!" />
          <SwiperNavButton direction="next" customClass="lcai-dapp-next" className="static! z-20! m-0!" />
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        speed={600}
        navigation={{
          nextEl: ".lcai-dapp-next",
          prevEl: ".lcai-dapp-prev",
        }}
        modules={[Navigation]}
        onSwiper={handleSwiper}
      >
        {trendingDapps?.map((dapp, idx) => (
          <SwiperSlide key={dapp?.id} className={`max-w-[426px] ${idx === trendingDapps.length - 1 ? 'mr-0' : 'mr-5'}`}>
            <DappCardMini
              key={dapp.name}
              {...dapp}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SimilarDapps;

const trendingDapps = [
  {
    id: "dapp-001",
    name: "Uniswap",
    description:
      "The world's largest onchain marketplace, trusted by millions. Buy and sell crypto on Ethereum, Monad and 14+ other chains.",
    tags: ["TRADING", "NEW"],
    href: "https://app.uniswap.org",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-01.png",
  },
  {
    id: "dapp-002",
    name: "Magma",
    description:
      "A blazing-fast DEX built for high-throughput chains with deep onchain liquidity and advanced routing.",
    tags: ["TRADING", "DEX"],
    href: "https://magma.finance",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-02.png",
  },
  {
    id: "dapp-003",
    name: "KyberSwap",
    description:
      "Multichain liquidity hub offering best-rate swaps, yield opportunities, and onchain limit orders.",
    tags: ["TRADING", "YIELD"],
    href: "https://kyberswap.com",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-03.png",
  },
  {
    id: "dapp-004",
    name: "Fomo",
    description:
      "Social trading and discovery platform to explore trending tokens and copy onchain strategies.",
    tags: ["SOCIAL", "NEW"],
    href: "https://fomo.xyz",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-04.png",
  },
  {
    id: "dapp-005",
    name: "Monad Bridge",
    description:
      "Secure bridge for moving assets between Monad and major L1/L2 ecosystems with low fees.",
    tags: ["BRIDGE", "INFRA"],
    href: "https://bridge.monad.org",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-05.png",
  },
  {
    id: "dapp-006",
    name: "LightLend",
    description:
      "Decentralized money market for supplying and borrowing assets with real-time risk controls.",
    tags: ["LENDING", "DEFI"],
    href: "https://lightlend.xyz",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-06.png",
  },
];