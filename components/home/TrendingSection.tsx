import { DappCardMini } from "../dapp-card/DappCardMini"
import { Button } from "../ui/Button"

const TrendingSection = () => {
  return (
    <section className="py-20 border-y border-border-light">
      <div className="container mx-auto">
        <div className="space-y-4 px-6 py-6 rounded-3xl bg-surface-base-extra-light">
          <div className="flex gap-4 items-center justify-between">
            {/* Section Title */}
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4795 2.14679C11.73 1.99398 12.0372 1.95794 12.3193 2.05304C12.642 2.16198 12.8871 2.42777 12.9697 2.75812C13.588 5.23098 14.8131 7.20884 16.6406 8.73175C18.7946 10.5268 20 12.6193 20 15.0003C19.9999 17.1219 19.1574 19.1573 17.6572 20.6575C16.1569 22.1577 14.1217 23.0003 12 23.0003C9.87834 23.0003 7.84305 22.1577 6.34277 20.6575C4.84255 19.1573 4.00008 17.1219 4 15.0003C4 13.7022 4.42143 12.4392 5.2002 11.4007C5.45845 11.0564 5.90806 10.916 6.31641 11.0521C6.72454 11.1883 7 11.57 7 12.0003C7.00008 12.398 7.15822 12.7796 7.43945 13.0609C7.72074 13.3421 8.10225 13.5003 8.5 13.5003C8.89775 13.5003 9.27926 13.3421 9.56055 13.0609C9.84178 12.7796 9.99992 12.398 10 12.0003C10 11.2645 9.73634 10.7093 9.35547 9.94757C8.98644 9.20951 8.50008 8.26429 8.5 7.00031C8.5 5.2188 9.61335 3.62842 11.375 2.21906L11.4795 2.14679ZM11.5156 4.81671C10.7828 5.63972 10.5 6.36854 10.5 7.00031C10.5001 7.73603 10.7636 8.29127 11.1445 9.05304C11.5136 9.79113 12 10.7363 12 12.0003C11.9999 12.9285 11.6309 13.8186 10.9746 14.4749C10.3182 15.1312 9.42819 15.5003 8.5 15.5003C7.57665 15.5003 6.69149 15.1346 6.03613 14.4847C6.01399 14.655 6 14.8271 6 15.0003C6.00008 16.5915 6.63267 18.1173 7.75781 19.2425C8.88302 20.3676 10.4088 21.0003 12 21.0003C13.5912 21.0003 15.117 20.3676 16.2422 19.2425C17.3673 18.1173 17.9999 16.5915 18 15.0003C18 13.3814 17.2051 11.807 15.3594 10.2689C13.5995 8.80224 12.3188 6.97738 11.5156 4.81671Z"
                  fill="url(#paint0_linear_54663_7622)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_54663_7622"
                    x1="1.28"
                    y1="4.20558"
                    x2="22.8668"
                    y2="6.11806"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5B4BFF" />
                    <stop offset={1} stopColor="#EE11FB" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-xl font-semibold leading-[1.2] tracking-[-0.18px] text-content-strong">
                Trending dApps
              </h2>
            </div>

            {/* Right Side Tabs */}
            <div className="flex gap-1.5 items-center">
              <Button
                variant="primary"
                size="xs"
              >
                24H
              </Button>
              <Button
                variant="outline"
                size="xs"
              >
                7D
              </Button>
              <Button
                variant="outline"
                size="xs"
              >
                1M
              </Button>
            </div>
          </div>

          {/* Grid Card */}
          <div className="grid gap-2.5 md:gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(410px,1fr))]">
            {trendingDapps.map((dapp) => (
              <DappCardMini
                key={dapp.name}
                name={dapp.name}
                description={dapp.description}
                tags={dapp.tags}
                href={dapp.href}
                iconSrc={dapp.iconSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection;

const trendingDapps = [
  {
    name: "Uniswap",
    description:
      "The world's largest onchain marketplace, trusted by millions. Buy and sell crypto on Ethereum, Monad and 14+ other chains.",
    tags: ["TRADING", "NEW"],
    href: "https://app.uniswap.org",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-01.png",
  },
  {
    name: "Magma",
    description:
      "A blazing-fast DEX built for high-throughput chains with deep onchain liquidity and advanced routing.",
    tags: ["TRADING", "DEX"],
    href: "https://magma.finance",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-02.png",
  },
  {
    name: "KyberSwap",
    description:
      "Multichain liquidity hub offering best-rate swaps, yield opportunities, and onchain limit orders.",
    tags: ["TRADING", "YIELD"],
    href: "https://kyberswap.com",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-03.png",
  },
  {
    name: "Fomo",
    description:
      "Social trading and discovery platform to explore trending tokens and copy onchain strategies.",
    tags: ["SOCIAL", "NEW"],
    href: "https://fomo.xyz",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-04.png",
  },
  {
    name: "Monad Bridge",
    description:
      "Secure bridge for moving assets between Monad and major L1/L2 ecosystems with low fees.",
    tags: ["BRIDGE", "INFRA"],
    href: "https://bridge.monad.org",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-05.png",
  },
  {
    name: "LightLend",
    description:
      "Decentralized money market for supplying and borrowing assets with real-time risk controls.",
    tags: ["LENDING", "DEFI"],
    href: "https://lightlend.xyz",
    iconSrc: "/images/dapp-item-logo/dapp-logo-icon-06.png",
  },
]