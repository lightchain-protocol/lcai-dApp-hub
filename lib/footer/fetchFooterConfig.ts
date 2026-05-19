import type { RawFooterConfig } from "./types";
import defaultFooter from "./defaultFooter.json";

const FOOTER_CONFIG_URL = "https://docs.lightchain.ai/footer-config.json";

const FALLBACK_FOOTER: RawFooterConfig = defaultFooter as RawFooterConfig;

/**
 * Fetches the shared Lightchain footer config from docs.lightchain.ai. The
 * `docs.lightchain.ai` service is owned by the backend / docs team; if it
 * 5xxs, returns a baked-in minimal-shell fallback so the dApp hub layout
 * never 500s. See BUGS.md #B11.
 *
 * BACKEND OWNERSHIP: the canonical footer-config.json lives on docs.lightchain.ai.
 * Any edits to the live footer must be made in that separate repo, NOT here.
 * `defaultFooter.json` is only an emergency stub kept intentionally tiny.
 */
export async function fetchFooterConfig(): Promise<RawFooterConfig> {
  try {
    const res = await fetch(FOOTER_CONFIG_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn(
        `[footer] Failed to fetch footer config (${res.status}); using baked-in fallback.`
      );
      return FALLBACK_FOOTER;
    }
    return (await res.json()) as RawFooterConfig;
  } catch (error) {
    console.warn(
      `[footer] Failed to fetch footer config: ${
        error instanceof Error ? error.message : String(error)
      }; using baked-in fallback.`
    );
    return FALLBACK_FOOTER;
  }
}
