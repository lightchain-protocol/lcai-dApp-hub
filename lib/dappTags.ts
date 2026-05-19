/**
 * Canonical tag taxonomy for dApp submissions.
 *
 * Mirrors the table in README.md § "Tag taxonomy". The loader
 * (`lib/loadAdditionalDapps.ts`) rejects community submissions whose
 * tags fall outside this set.
 *
 * To extend the taxonomy: add the tag here AND to the README table in
 * the same PR. Keep all tags UPPERCASE.
 */
export const KNOWN_DAPP_TAGS = [
  // DeFi
  "DEFI",
  "SWAP",
  "LENDING",
  "STAKING",
  "YIELD",

  // Liquidity
  "DEX",
  "AMM",
  "LP",
  "LIQUIDITY",

  // Bridges
  "BRIDGE",
  "INTERCHAIN",
  "LCAI",

  // AI
  "AI",
  "WORKERS",
  "MODELS",
  "INFERENCE",
  "AGENTS",

  // NFTs
  "NFT",
  "MARKETPLACE",
  "MINTING",

  // Gaming
  "GAMING",
  "GAMEFI",
  "PLAY-TO-EARN",

  // Social
  "SOCIAL",
  "IDENTITY",
  "DAO",

  // Infra / Tools
  "INFRA",
  "EXPLORER",
  "ANALYTICS",
  "FAUCET",
  "IDE",
  "DEVTOOLS",
  "CONTRACTS",
  "TOOLS",
  "BUILDER",

  // Networks
  "MAINNET",
  "TESTNET",
] as const;

export type KnownDappTag = (typeof KNOWN_DAPP_TAGS)[number];

const KNOWN_DAPP_TAG_SET: ReadonlySet<string> = new Set(KNOWN_DAPP_TAGS);

export function isKnownDappTag(value: unknown): value is KnownDappTag {
  return typeof value === "string" && KNOWN_DAPP_TAG_SET.has(value);
}
