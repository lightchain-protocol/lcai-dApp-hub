import type { DappCardProps } from "@/components/dapp-card/DappCard";

export const dappsList: DappCardProps[] = [
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
    id: "dapp-003",
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
    id: "dapp-004",
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
    id: "dapp-005",
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
];
