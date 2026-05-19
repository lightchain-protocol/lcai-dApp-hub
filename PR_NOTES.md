# Frontend fixes from BUGS.md

A small, focused PR from the frontend team. All changes are inside this repo —
no backend service, no data contract, no community submission schema was
touched.

## What's fixed

| ID | What we did |
|----|-------------|
| **B1 + B15** | `/[slug]` is now a real, statically generated dApp detail page. Reads `params.slug`, exports `generateStaticParams()` + `generateMetadata()`, 404s on unknown slugs, and passes a `dapp` prop into `DappSidebar`, `DappDetailsContent`, `PreviewScreenshot`, and `SimilarDapps`. Default export renamed to `Page`. New optional fields on `DappCardProps` (`tagline`, `longDescription`, `websiteUrl`, `docsUrl`, `discordUrl`, `twitterUrl`, `listedOn`, `lastUpdated`, `projectId`, `screenshots`) — every field is optional, so existing entries and community JSON keep working. |
| **B11** (frontend side) | Added baked-in fallback JSON (`lib/nav/defaultNav.json`, `lib/footer/defaultFooter.json`). Both fetchers now degrade gracefully on a non-2xx or network error with a `console.warn`, so the layout no longer 500s when `docs.lightchain.ai` is unreachable. |
| **B12** | Renamed `NodAppBox` → `NoDAppBox` (file, component, import, README reference). |
| **B14** | `lib/dappTags.ts` exports the canonical `KNOWN_DAPP_TAGS` set. The loader now rejects community submissions with empty or off-taxonomy tags. |

## What we did NOT touch

- `docs.lightchain.ai/nav-config.json` and `footer-config.json` payloads — owned by the backend / docs team.
- The community dApp submission schema — every new `DappCardProps` field is optional.
- `BUGS.md` — left untouched in this PR.
- Trending data (`B9`) — no fake data, no fake handlers, no section deletion. Section stays hidden via the existing empty-list guard.

## Verification

- `pnpm build` ✅ — all 6 dApp routes pre-render.
- No new lint errors in any file we touched.

## Handoff to the backend team

Two items remain open and they're yours when you're ready — happy to pair on either.

- **B9 — Trending feed.** Whenever the trending data source is ready (analytics, click-through count, etc.), share the endpoint URL + record shape and we'll wire it into the home page and the 24H / 7D / 1M tabs in a quick follow-up PR. Suggested shape: `{ id, score, timeRange: "24h" | "7d" | "1m" }`, but totally open to whatever works on your side.
- **B11 (root cause).** `docs.lightchain.ai/*-config.json` is now safely behind a fallback on our side, so a hiccup never takes the hub down. If you ever plan to change the JSON schema, please give us a heads-up so we can update `lib/nav/types.ts` + `lib/footer/types.ts` together.

**If you need any support from the frontend side — types, integration help,
a quick sync, or anything else — please share and we'll jump on it.**
