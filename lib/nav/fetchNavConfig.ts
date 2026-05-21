import type { RawNavConfig } from "./types";
import defaultNav from "./defaultNav.json";

const NAV_CONFIG_URL = "https://docs.lightchain.ai/nav-config.json";

const FALLBACK_NAV: RawNavConfig[] = defaultNav as RawNavConfig[];

/**
 * Fetches the shared Lightchain nav config from docs.lightchain.ai. The
 * `docs.lightchain.ai` service is owned by the backend / docs team; if it
 * 5xxs, returns a baked-in minimal-shell fallback so the dApp hub layout
 * never 500s. See BUGS.md #B11.
 *
 * BACKEND OWNERSHIP: the canonical nav-config.json lives on docs.lightchain.ai.
 * Any edits to the live nav must be made in that separate repo, NOT here.
 * `defaultNav.json` is only an emergency stub kept intentionally tiny.
 */
export async function fetchNavConfig(): Promise<RawNavConfig[]> {
  try {
    const res = await fetch(NAV_CONFIG_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn(
        `[nav] Failed to fetch nav config (${res.status}); using baked-in fallback.`
      );
      return FALLBACK_NAV;
    }
    return (await res.json()) as RawNavConfig[];
  } catch (error) {
    console.warn(
      `[nav] Failed to fetch nav config: ${
        error instanceof Error ? error.message : String(error)
      }; using baked-in fallback.`
    );
    return FALLBACK_NAV;
  }
}
