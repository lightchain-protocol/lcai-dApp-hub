import { Badge } from "../ui/Badge"
import PreviewScreenshot from "./PreviewScreenshot"


const DappDetailsContent = () => {
  return (
    <div className="grow h-full space-y-8">
      <PreviewScreenshot />
      <article className="prose prose-lg prose-dapp">
        <p>KyberSwap is a cutting-edge decentralized trading platform that empowers users to find the most advantageous token swap rates. Here’s what makes KyberSwap stand out:</p>
        <ul>
          <li>Intelligent Trade Routing</li>
          <li>The platform smartly directs trades through various decentralized exchanges (DEXs) and liquidity sources, ensuring optimal rates.</li>
          <li><strong>Multi-Blockchain Support:</strong> KyberSwap operates across multiple blockchain networks, enhancing accessibility and trading options for users.</li>
          <li><strong>User-Friendly Interface:</strong> Designed with simplicity in mind, the platform allows both novice and experienced traders to navigate effortlessly.</li>
          <li><strong>Real-Time Analytics:</strong> Users can access live market data and analytics to make informed trading decisions.</li>
          <li><strong>Security First:</strong> With robust security measures in place, users can trade with confidence, knowing their assets are protected.</li>
          <li><strong>Community Driven:</strong> KyberSwap thrives on community feedback, continuously evolving to meet user needs.</li>
          <li><strong>Liquidity Incentives:</strong> Users can earn rewards by providing liquidity, making it a win-win situation.</li>
        </ul>
      </article>

      {/* Tags */}
      <div className="flex gap-4 items-center">
        <span className="text-content-ultra text-lg font-normal leading-[1.7] tracking-[-0.18px]">Tags:</span>
        <div className="flex gap-2 flex-wrap items-center">
          <Badge
            href="#"
            size={"lg"}
          >
            DeFi
          </Badge>
          <Badge
            href="#"
            size={"lg"}
          >
            Social
          </Badge>
          <Badge
            href="#"
            size={"lg"}
          >
            AI
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default DappDetailsContent