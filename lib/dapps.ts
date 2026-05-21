import type { DappCardProps } from "@/components/dapp-card/DappCard";
import { dappsList } from "@/constants/dapps";
import { generateSlugWithId } from "@/lib/utils";
import { loadAdditionalDapps } from "@/lib/loadAdditionalDapps";

/**
 * Returns the merged dApp catalogue: community submissions first (newest by
 * id), then the team-curated list. Mirrors the ordering used by the home page
 * so `Showing N of M` and `/[slug]` agree on the canonical list.
 */
export async function getAllDapps(): Promise<DappCardProps[]> {
  const additionalDapps = await loadAdditionalDapps();
  return [...additionalDapps, ...dappsList];
}

/**
 * Resolve a URL slug (e.g. `lightchain-bridge-dapp-001`) to a dApp record.
 * Slugs follow `${slugify(name)}-${id}` (see lib/utils.ts), so we look up
 * by exact match against the same generator rather than parsing the slug.
 */
export function findDappBySlug(
  dapps: DappCardProps[],
  slug: string
): DappCardProps | undefined {
  return dapps.find((dapp) => generateSlugWithId(dapp.name, dapp.id) === slug);
}

/**
 * Up to `limit` dApps related to `current`. Heuristic: shares at least one
 * tag, falls back to the first N other dApps. Excludes `current` itself.
 *
 * NOTE: This is a local heuristic. If/when the backend team exposes a real
 * "related dApps" or "trending" feed, swap this for that data source.
 */
export function getSimilarDapps(
  dapps: DappCardProps[],
  current: DappCardProps,
  limit = 6
): DappCardProps[] {
  const others = dapps.filter((dapp) => dapp.id !== current.id);
  const currentTags = new Set(current.tags.map((tag) => tag.toUpperCase()));

  const tagged = others.filter((dapp) =>
    dapp.tags.some((tag) => currentTags.has(tag.toUpperCase()))
  );
  const seen = new Set(tagged.map((dapp) => dapp.id));
  const fillers = others.filter((dapp) => !seen.has(dapp.id));

  return [...tagged, ...fillers].slice(0, limit);
}
