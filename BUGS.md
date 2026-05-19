# Known issues + suggested fixes

This file catalogs bugs discovered during a thorough review of the codebase, ordered by severity. Each entry includes the symptom, the file and line, the suggested fix, and a rough difficulty estimate. PRs against any of these are welcome.

Items marked **⚠️ blocker** are user-facing and ship-breaking.
Items marked **🐛 bug** are observable but contained.
Items marked **🔒 security** weaken the trust model documented in the README.
Items marked **🧹 polish** are quality-of-life or hygiene.

A PR has already been opened applying the items marked ✅ at the bottom of each entry.

---

## ⚠️ B1 — The dApp detail page is a hardcoded KyberSwap stub

**Severity:** blocker. Every dApp card click on the live site goes to the same broken page.

**Files:**
- [`app/[slug]/page.tsx`](./app/[slug]/page.tsx) — the route handler ignores `params.slug` entirely
- [`components/dapp-details/DappSidebar.tsx`](./components/dapp-details/DappSidebar.tsx) — all data is hardcoded
- [`components/dapp-details/DappDetailsContent.tsx`](./components/dapp-details/DappDetailsContent.tsx) — Lorem-ipsum-style KyberSwap copy

**Symptoms:**
- Every dApp detail URL (e.g. `/lightchain-bridge-dapp-001`, `/lcai-faucet-dapp-002`) renders "**KyberSwap**" with the tagline "Your Finance, Your Freedom" and links to `https://kyberswap.com/swap/monad`
- The sidebar has placeholder values for Website, Listed on DappRadar (`13 Jun 2025`), Last Updated (`16 Oct 2025`), Project ID (`52591`)
- The content body describes KyberSwap (a Monad DEX) on what's supposed to be a Lightchain hub — major brand confusion
- Three social/docs icons in the sidebar are `href="#"` with `TODO` comments

**Repro:**
Visit any dApp detail link on hub.lightchain.ai, e.g. <https://hub.lightchain.ai/lightchain-bridge-dapp-001>.

**Suggested fix:** non-trivial. Requires:

1. `app/[slug]/page.tsx`:
   - Read `params.slug` (Next.js 16 `async` params).
   - Add `generateStaticParams()` enumerating all known dApps so each page pre-renders.
   - Add `generateMetadata()` returning per-dApp `<title>` and OG tags for SEO + social shares.
   - Resolve `slug` → `DappCardProps` by re-splitting the slug (slug format is `${slugify(name)}-${id}`) — or store a `slug` field on the data directly.
   - Pass the resolved dApp data down to `<DappSidebar>` and `<DappDetailsContent>` as props.
   - 404 if the slug doesn't match any dApp.
2. `components/dapp-details/DappSidebar.tsx`: rewrite as a pure-presentational component taking the resolved dApp as a prop. Remove all hardcoded data. Replace the three TODO icons with optional `docsUrl`, `discordUrl`, `twitterUrl` fields (if not provided, hide the button).
3. `components/dapp-details/DappDetailsContent.tsx`: render `dapp.description` (and optionally an extended markdown `longDescription` field) instead of the hardcoded KyberSwap copy. Use `next-mdx-remote` or `react-markdown` if you want rich content.
4. Extend `DappCardProps` (in [`components/dapp-card/DappCard.tsx`](./components/dapp-card/DappCard.tsx)) with optional `longDescription`, `docsUrl`, `discordUrl`, `twitterUrl`, `listedOn`, `projectId` fields. Update the README's [dApp submission schema](./README.md#4-required-field-reference) section accordingly.

**Difficulty:** 1-2 days of focused work, including design review of the new detail-page layout.

---

## 🔒 B2 — `loadAdditionalDapps.ts` accepts arbitrary URL schemes

**Severity:** security. A malicious PR could land `javascript:`, `data:`, or `file:` URLs in the catalogue.

**File:** [`lib/loadAdditionalDapps.ts`](./lib/loadAdditionalDapps.ts) lines 11-25 (`hasRequiredDappFields`)

**Symptom:** the only validation on `externalUrl` is that it's a non-empty string. A submission like:

```json
{ "externalUrl": "javascript:alert(document.cookie)" }
```

would be accepted. While `DappCard.tsx` does pre-wrap with `target="_blank" rel="noopener noreferrer"`, browsers still execute `javascript:` URLs in some contexts.

**Suggested fix:** add scheme + URL parsing validation:

```ts
function isValidExternalUrl(url: unknown): url is string {
  if (typeof url !== "string" || url.trim().length === 0) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
```

**Status:** ✅ fixed in this PR.

---

## 🔒 B3 — `loadAdditionalDapps.ts` accepts arbitrary `iconSrc` / `imageSrc` paths

**Severity:** security + reliability. A submission can reference paths that don't exist (404 on load) or external URLs (would need allowlisting in `next.config.ts`).

**File:** [`lib/loadAdditionalDapps.ts`](./lib/loadAdditionalDapps.ts) lines 11-25.

**Suggested fix:** restrict `iconSrc` to start with `/images/dapp-item-logo/` and `imageSrc` to `/images/dapp-item-thumb/`. The README already documents this convention; the loader should enforce it.

**Status:** ✅ fixed in this PR.

---

## 🐛 B4 — `loadAdditionalDapps.ts` casts before validating

**Severity:** bug. One malformed JSON file kills the entire catalogue silently.

**File:** [`lib/loadAdditionalDapps.ts`](./lib/loadAdditionalDapps.ts) lines 48-55.

**Symptom:** `JSON.parse(fileContent) as DappCardProps` followed by `hasRequiredDappFields(parsedFile)`. If `parsedFile` is `null` (`JSON.parse("null")`), `hasRequiredDappFields` returns `false` correctly. But if a file is an array, a string, or has unexpected types, the cast silently lies to TypeScript and any field access could throw before the validator runs. The outer try/catch wraps the entire `loadAdditionalDapps`, so one bad file returns `[]` for the whole list.

**Suggested fix:** wrap the per-file processing in its own try/catch so one bad submission doesn't blank the catalogue, and remove the misleading `as DappCardProps` cast — let the validator narrow the type.

**Status:** ✅ fixed in this PR.

---

## 🐛 B5 — `loadAdditionalDapps.ts` sorts by `birthtimeMs` which is unreliable

**Severity:** bug. Order of newest-first dApps is non-deterministic on Linux/CI builds.

**File:** [`lib/loadAdditionalDapps.ts`](./lib/loadAdditionalDapps.ts) lines 31-42.

**Symptom:** on most Linux filesystems (ext4, xfs without `birth` enabled), `fs.stat().birthtimeMs` returns `0` or `Date(1970-01-01)`. On Vercel's build infra, all files in a fresh checkout have nearly identical `birthtimeMs`. Result: sort order is essentially undefined.

**Suggested fix:** use the `id` field (or file name) as a deterministic tiebreaker, or fall back to alphabetical sort entirely. Submission timestamps from Git history are the only reliable "newness" signal — extract them with `git log` at build time if you want true recency ordering.

**Status:** ✅ fixed in this PR (alphabetical sort by id, with stable tiebreaker on filename).

---

## 🐛 B6 — `<article rel="noreferrer">` is invalid HTML

**Severity:** bug. React DOM warning in every dApp card render.

**File:** [`components/dapp-card/DappCard.tsx`](./components/dapp-card/DappCard.tsx) line 144.

**Symptom:**

```tsx
<article rel="noreferrer" className="group block h-full">
```

The `rel` attribute is only valid on `<a>`, `<area>`, `<link>`, and `<form>`. React logs a warning in dev mode.

**Suggested fix:** remove `rel="noreferrer"`. The actual external links inside (the `<a>` elements inside `<CardLink>`) already set `rel="noopener noreferrer"`.

**Status:** ✅ fixed in this PR.

---

## 🐛 B7 — `openedWindow.opener = null` is a no-op (and throws)

**Severity:** bug. Silent failure due to a misunderstanding of the modern API.

**File:** [`components/dapp-card/DappCard.tsx`](./components/dapp-card/DappCard.tsx) line 122.

**Symptom:**

```tsx
const openedWindow = window.open(externalUrl, "_blank", "noopener,noreferrer");
if (openedWindow) openedWindow.opener = null;
```

When `window.open` is called with `noopener`, `openedWindow` is always `null` (per spec), so the assignment never executes. If it weren't null, `opener` is now a read-only property in modern browsers and the assignment would throw.

**Suggested fix:** remove the dead line. `noopener` in the third argument already does the right thing.

**Status:** ✅ fixed in this PR.

---

## 🐛 B8 — "Submit your dApp" button in empty state does nothing

**Severity:** bug. The CTA on an empty hub is non-functional.

**File:** [`components/home/DappEmptyState.tsx`](./components/home/DappEmptyState.tsx) lines 82-89.

**Symptom:** the `<Button>` has no `href`. Clicking it does nothing.

**Suggested fix:** wire it to the README anchor, same as the Hero CTA: `href="https://github.com/lightchain-protocol/lcai-dApp-hub#submit-a-dapp"`.

**Status:** ✅ fixed in this PR.

---

## 🐛 B9 — Trending section is dead code

**Severity:** bug. Time-range tabs (24H / 7D / 1M) are styled but non-functional, and the data source for "trending" doesn't exist.

**File:** [`app/page.tsx`](./app/page.tsx) line 22, [`components/home/TrendingSection.tsx`](./components/home/TrendingSection.tsx) lines 50-70.

**Symptom:** `getDappHubData` hardcodes `trendingDapps: []`, so the trending section never renders (due to the `if (dapps.length === 0) return null;` guard). The time-range tabs have no `onClick` handlers — if data ever flowed in, they'd be cosmetic.

**Suggested fix:** either (a) wire up a real "trending" data source (page views from analytics, click-through count from a `/api/click` route, or weekly Vercel Analytics pulls), or (b) remove the trending section entirely until the data exists. The current half-built state misleads code readers.

**Status:** documented, not fixed. Needs a product decision.

---

## 🔒 B10 — `next.config.ts` has no image policy or security headers

**Severity:** security + reliability. If any code path accidentally accepts an external image URL, Next/Image will fail with an explicit error (current behavior is to deny by default) — but there's no positive allowlist for the few hosts we *do* want to allow (e.g. CDN-hosted official logos), and no security headers like CSP / X-Frame-Options.

**File:** [`next.config.ts`](./next.config.ts) — currently 7 lines, all empty.

**Suggested fix:** add explicit image policy (forbidding all external hosts is the default and matches our security model from the README), plus a sensible `headers()` block.

**Status:** ✅ partial fix in this PR (image config + basic security headers).

---

## 🐛 B11 — Layout throws unrecoverably if `docs.lightchain.ai` is down

**Severity:** bug. A 5xx from `nav-config.json` or `footer-config.json` 500s the entire hub.

**File:** [`lib/nav/fetchNavConfig.ts`](./lib/nav/fetchNavConfig.ts), [`lib/footer/fetchFooterConfig.ts`](./lib/footer/fetchFooterConfig.ts).

**Symptom:**

```ts
if (!res.ok) throw new Error(`Failed to fetch nav config: ${res.status}`);
```

Both fetchers throw on any non-2xx. `app/layout.tsx` awaits both. So a docs.lightchain.ai outage takes down the entire dApp hub.

**Suggested fix:** add a fallback. Either ship a baked-in default JSON committed to the repo (e.g. `lib/nav/defaultNav.json`) that the fetcher returns on failure, or render a minimal-shell layout when the config is unavailable.

**Status:** documented, not fixed. Needs sign-off on the fallback design (do we want stale-but-shown navigation or a stripped-down emergency layout?).

---

## 🧹 B12 — `NodAppBox.tsx` is a typo for `NoDAppBox.tsx`

**Severity:** polish. Component is named `NodAppBox` ("Nod App Box"?), filename matches. Used in [`DappEmptyState.tsx`](./components/home/DappEmptyState.tsx).

**Suggested fix:** rename to `NoDAppBox.tsx` (or `EmptyDappBox.tsx` if you want to be more descriptive) and update the import. Two-file change.

**Status:** documented, not fixed (renames create noisy diffs — bundle with another refactor).

---

## 🧹 B13 — Repo is missing `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md`, PR template, issue templates

**Severity:** polish. Standard repo hygiene for an open-source community-driven catalogue.

**Suggested fix:** add MIT license (since the README declares MIT), a contributor guide, security disclosure policy, and `.github/` templates for bug reports + dApp submissions + PR descriptions.

**Status:** ✅ partial fix in this PR (LICENSE, CONTRIBUTING.md, PR template, bug-report + dApp-submission issue templates added).

---

## 🧹 B14 — No tag taxonomy enforcement

**Severity:** polish. Tags in [`constants/dapps.ts`](./constants/dapps.ts) are inconsistent (`"BRIDGE"`, `"INTERCHAIN"`, `"LCAI"`, `"FAUCET"`, `"TESTNET"`, `"BUILDER"`, `"EXPLORER"`, `"ANALYTICS"`, `"MAINNET"`, `"AI"`, `"WORKERS"`, `"IDE"`, `"DEVTOOLS"`, `"CONTRACTS"`) — some are categories, some are networks, some are roles, with no controlled vocabulary. Will only get worse as community submissions land.

**Suggested fix:** define a string-literal union type for `tags`, validate against it in the loader, and document it in the README. (The README's [Tag taxonomy](./README.md#tag-taxonomy) section is a first cut.)

**Status:** documented in README, not enforced in code.

---

## 🧹 B15 — `app/[slug]/page.tsx` exports lowercase `page`

**Severity:** polish. React component naming convention is PascalCase. Next.js doesn't care, but linters and code readers do.

**File:** [`app/[slug]/page.tsx`](./app/[slug]/page.tsx) line 5, line 28.

**Suggested fix:** rename to `Page`. Bundled with the [B1](#-b1--the-dapp-detail-page-is-a-hardcoded-kyberswap-stub) rewrite.

---

## 🧹 B16 — No test runner

**Severity:** polish. Catalogue logic (sorting, validation, slug generation) has no unit tests; the hub has no E2E coverage.

**Suggested fix:** add Vitest for unit tests (covering `loadAdditionalDapps`, `generateSlugWithId`, `getDisplayHost`, the URL/scheme validator) and Playwright for at least one happy-path E2E (visit home, click first dApp, verify external link gating).

**Status:** documented.

---

## Summary

Total: **16 named issues**. Of these:

| Severity      | Count | Fixed in this PR |
| ------------- | ----- | ---------------- |
| ⚠️ blocker    | 1     | 0 (B1 is too big for this PR — needs a design review) |
| 🔒 security   | 3     | 2 (B2, B3); B10 partial |
| 🐛 bug        | 7     | 4 (B4, B5, B6, B7, B8); B9 + B11 documented |
| 🧹 polish     | 5     | 1 (B13 partial); rest documented |

Reviewers — please open issues for the unfixed items so they don't get lost. If you want me to handle conversion to GitHub issues in bulk, drop a comment on the PR.
