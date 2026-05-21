import type { DappCardProps } from "@/components/dapp-card/DappCard";

export const dappsList: DappCardProps[] = [
  {
    id: "dapp-001",
    name: "Lightchain Bridge",
    tagline: "Move LCAI across chains, safely.",
    description:
      "Move LCAI between Ethereum and Lightchain Mainnet through a Hyperlane-powered bridge with chain-aware token routes and transaction review.",
    longDescription:
      "Lightchain Bridge is the official cross-chain bridge for moving LCAI between Ethereum and Lightchain Mainnet. Built on Hyperlane, every transfer is reviewed before it leaves your wallet, with chain-aware token routes and transparent fees. Track each bridge transaction on the explorer in real time.",
    tags: ["BRIDGE", "INTERCHAIN", "LCAI"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-bridge.png",
    externalUrl: "https://bridge.lightchain.ai/",
    websiteUrl: "https://bridge.lightchain.ai/",
    docsUrl: "https://docs.lightchain.ai/bridge",
    discordUrl: "https://discord.gg/lightchain",
    twitterUrl: "https://x.com/LightchainAI",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-002",
    name: "LCAI Faucet",
    tagline: "Testnet LCAI in a few clicks.",
    description:
      "Claim testnet LCAI for deployments, swaps, and contract testing. Paste a wallet, request funds, and track the claim transaction.",
    longDescription:
      "The LCAI Faucet drips testnet LCAI to builders so they can deploy contracts, run swaps, and stress-test integrations without spending real funds. Paste a wallet, request a claim, and follow the transaction through to confirmation.",
    tags: ["FAUCET", "TESTNET", "BUILDER"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-faucet.png",
    externalUrl: "https://lightfaucet.ai/",
    websiteUrl: "https://lightfaucet.ai/",
    docsUrl: "https://docs.lightchain.ai/faucet",
    discordUrl: "https://discord.gg/lightchain",
    twitterUrl: "https://x.com/LightchainAI",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-003",
    name: "Lightchain Explorer",
    tagline: "Inspect every block on Lightchain.",
    description:
      "Inspect Lightchain blocks, transactions, contracts, wallets, and network activity through a customized Blockscout explorer.",
    longDescription:
      "Lightchain Explorer is a customized Blockscout interface tailored to Lightchain Mainnet. Search blocks, transactions, contracts, and wallets; verify source code; and follow network-wide activity from a single dashboard.",
    tags: ["EXPLORER", "ANALYTICS", "MAINNET"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-lce.png",
    externalUrl: "https://mainnet.lightscan.app/",
    websiteUrl: "https://mainnet.lightscan.app/",
    docsUrl: "https://docs.lightchain.ai/explorer",
    discordUrl: "https://discord.gg/lightchain",
    twitterUrl: "https://x.com/LightchainAI",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-004",
    name: "Worker Explorer",
    tagline: "Find the workers powering on-chain AI.",
    description:
      "Browse workers powering decentralized AI on Lightchain with super models. Track online workers, stakes, supported models, and node details.",
    longDescription:
      "Worker Explorer surfaces the validator-style workers powering decentralized AI on Lightchain. Browse online workers, inspect stakes, see which models each node supports, and drill into individual node metrics.",
    tags: ["AI", "WORKERS", "MAINNET"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-we.png",
    externalUrl: "https://workers.lightchain.ai/",
    websiteUrl: "https://workers.lightchain.ai/",
    docsUrl: "https://docs.lightchain.ai/workers",
    discordUrl: "https://discord.gg/lightchain",
    twitterUrl: "https://x.com/LightchainAI",
    added_by_team: true,
    powered_by_lightchain: true,
  },
  {
    id: "dapp-005",
    name: "Lightchain IDE",
    tagline: "Write, compile, deploy \u2014 all in the browser.",
    description:
      "Write, compile, test, and deploy smart contracts in a browser workspace adapted from Remix for Lightchain builders.",
    longDescription:
      "Lightchain IDE is a Remix-derived browser workspace tuned for Lightchain. Write Solidity, compile in-place, run unit tests, and deploy straight to Mainnet or Testnet without leaving the tab.",
    tags: ["IDE", "DEVTOOLS", "CONTRACTS"],
    iconSrc: "/images/dapp-item-logo/lightchain.png",
    imageSrc: "/images/dapp-item-thumb/dapp-thumb-ide.png",
    externalUrl: "https://deploy.lightchain.ai/",
    websiteUrl: "https://deploy.lightchain.ai/",
    docsUrl: "https://docs.lightchain.ai/ide",
    discordUrl: "https://discord.gg/lightchain",
    twitterUrl: "https://x.com/LightchainAI",
    added_by_team: true,
    powered_by_lightchain: true,
  },
];
