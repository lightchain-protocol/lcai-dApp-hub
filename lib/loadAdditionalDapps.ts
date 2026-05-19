import type { DappCardProps } from "@/components/dapp-card/DappCard";
import { isKnownDappTag } from "@/lib/dappTags";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ADDITIONAL_DAPPS_DIR = path.join(
  process.cwd(),
  "constants",
  "additionalDapps"
);

const ALLOWED_ICON_PREFIX = "/images/dapp-item-logo/";
const ALLOWED_IMAGE_PREFIX = "/images/dapp-item-thumb/";

/**
 * Validate that `value` is a string starting with one of `prefixes`.
 * Used to constrain `iconSrc` and `imageSrc` to repo-local paths so
 * community PRs can't sneak in external image URLs (which would need
 * to be allowlisted in next.config.ts anyway).
 */
function isAllowedAssetPath(value: unknown, prefix: string): value is string {
  return typeof value === "string" && value.startsWith(prefix);
}

/**
 * Validate that `value` is a parseable URL with an http(s) scheme.
 * Rejects javascript:, data:, file:, etc. so community submissions
 * can't land XSS or phishing payloads via the external link.
 */
function isHttpUrl(value: unknown): value is string {
  if (typeof value !== "string" || value.trim().length === 0) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Validate that `value` is a non-empty array of canonical, uppercase tags
 * from the README's tag taxonomy. See `lib/dappTags.ts`.
 */
function isValidTagList(value: unknown): value is string[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  return value.every(isKnownDappTag);
}

function hasRequiredDappFields(
  dappResultItem: unknown
): dappResultItem is DappCardProps {
  if (!dappResultItem || typeof dappResultItem !== "object") return false;
  const dapp = dappResultItem as Record<string, unknown>;

  return Boolean(
    (typeof dapp.id === "string" || typeof dapp.id === "number") &&
      typeof dapp.name === "string" &&
      dapp.name.trim().length > 0 &&
      typeof dapp.description === "string" &&
      dapp.description.trim().length > 0 &&
      isValidTagList(dapp.tags) &&
      isAllowedAssetPath(dapp.iconSrc, ALLOWED_ICON_PREFIX) &&
      isAllowedAssetPath(dapp.imageSrc, ALLOWED_IMAGE_PREFIX) &&
      isHttpUrl(dapp.externalUrl)
  );
}

async function loadOne(fileName: string): Promise<DappCardProps | null> {
  const filePath = path.join(ADDITIONAL_DAPPS_DIR, fileName);
  try {
    const fileContent = await readFile(filePath, "utf-8");
    const parsedFile: unknown = JSON.parse(fileContent);

    if (!hasRequiredDappFields(parsedFile)) {
      console.warn(
        `[additionalDapps] Skipping ${fileName}: missing or invalid required fields. ` +
          `Check id/name/description, asset paths under /images/dapp-item-{logo,thumb}/, ` +
          `https externalUrl, and tags from the canonical taxonomy (see README § "Tag taxonomy").`
      );
      return null;
    }

    // Strip official-badge fields from community submissions. Both casings
    // are stripped so a submitter can't claim the badge regardless of which
    // form they use. See README § "Adding the official badge to a dApp".
    const {
      added_by_team: _ignoredAddedByTeam,
      addedByTeam: _ignoredAddedByTeamCamel,
      powered_by_lightchain: _ignoredPoweredByLightchain,
      poweredByLightchain: _ignoredPoweredByLightchainCamel,
      ...safeDappResultItem
    } = parsedFile;

    return {
      ...safeDappResultItem,
      added_by_team: false,
      powered_by_lightchain: false,
    };
  } catch (error) {
    // One bad file should not blank the entire catalogue.
    console.warn(
      `[additionalDapps] Failed to load ${fileName}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return null;
  }
}

export async function loadAdditionalDapps(): Promise<DappCardProps[]> {
  let files: string[];
  try {
    files = await readdir(ADDITIONAL_DAPPS_DIR);
  } catch (error) {
    // Directory missing is fine - just means no community submissions yet.
    if ((error as NodeJS.ErrnoException)?.code !== "ENOENT") {
      console.warn(
        `[additionalDapps] Failed to read ${ADDITIONAL_DAPPS_DIR}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
    return [];
  }

  const jsonFiles = files.filter((fileName) => fileName.endsWith(".json"));

  const loaded = await Promise.all(jsonFiles.map(loadOne));
  const valid = loaded.filter((item): item is DappCardProps => item !== null);

  // Deterministic sort: by `id` descending, with `name` as a stable
  // tiebreaker. `fs.stat().birthtimeMs` was unreliable on Linux/CI
  // (often returned 0) - see BUGS.md #B5.
  return valid.sort((a, b) => {
    const idA = String(a.id);
    const idB = String(b.id);
    if (idA !== idB) return idB.localeCompare(idA);
    return a.name.localeCompare(b.name);
  });
}
