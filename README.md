# Lightchain dApp Hub

The official landing surface for **decentralized apps built on [Lightchain](https://lightchain.ai)** — a curated, community-extensible catalogue at [hub.lightchain.ai](https://hub.lightchain.ai). DeFi, NFTs, gaming, developer tools, AI agents, and infrastructure — anyone can submit a dApp via pull request.

[![Live](https://img.shields.io/badge/live-hub.lightchain.ai-22c55e)](https://hub.lightchain.ai)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

---

## Table of contents

- [Submit a dApp](#submit-a-dapp) ← if you're here to list your app, start here
- [What this repo is](#what-this-repo-is)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Production build](#production-build)
- [Adding the *official* badge to a dApp](#adding-the-official-badge-to-a-dapp)
- [How nav and footer are populated](#how-nav-and-footer-are-populated)
- [Image and asset guidelines](#image-and-asset-guidelines)
- [Tag taxonomy](#tag-taxonomy)
- [Security model](#security-model)
- [Reporting bugs](#reporting-bugs)
- [Contributing code](#contributing-code)
- [License](#license)

---

## Submit a dApp

Add your dApp to the hub by opening a pull request that creates a single JSON file. **No code changes required.**

### 1. Fork the repo

[Click here to fork on GitHub.](https://github.com/lightchain-protocol/lcai-dApp-hub/fork)

### 2. Add a JSON file under `constants/additionalDapps/`

Name it `dapp-<unique-id>.json`. The id should be short, lowercase, hyphen-separated, and globally unique within the repo (e.g. `dapp-acme-swap`, not `dapp-101`).

```json
{
  "id": "dapp-acme-swap",
  "name": "Acme Swap",
  "description": "One- or two-sentence description shown on the card. Keep it under 160 characters for clean truncation.",
  "tags": ["DEFI", "SWAP", "MAINNET"],
  "iconSrc": "/images/dapp-item-logo/acme-swap.png",
  "imageSrc": "/images/dapp-item-thumb/acme-swap.png",
  "externalUrl": "https://acme-swap.example/"
}
```

### 3. Add the images

Place your dApp's two images under `public/images/`:

| Field      | Path                                | Size                 | Format               |
| ---------- | ----------------------------------- | -------------------- | -------------------- |
| `iconSrc`  | `public/images/dapp-item-logo/`     | 256×256 px (1:1)     | PNG with transparency, < 100 KB |
| `imageSrc` | `public/images/dapp-item-thumb/`    | 800×450 px (16:9)    | PNG or JPG, < 250 KB |

Don't use external URLs for `iconSrc` / `imageSrc` — they get blocked by our `next.config.ts` image policy. Host the files in this repo via your PR.

### 4. Required field reference

| Field         | Type     | Notes                                                                                                            |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`          | string   | Globally unique within the repo. Prefix with `dapp-`. Used in URLs.                                              |
| `name`        | string   | The dApp's display name. 2-40 chars.                                                                             |
| `description` | string   | Card description. Keep under 160 chars; longer text is truncated to 3 lines in the UI.                           |
| `tags`        | string[] | 1-3 tags from the [tag taxonomy](#tag-taxonomy). All uppercase.                                                  |
| `iconSrc`     | string   | Path beginning with `/images/dapp-item-logo/`. Repo-relative only.                                               |
| `imageSrc`    | string   | Path beginning with `/images/dapp-item-thumb/`. Repo-relative only.                                              |
| `externalUrl` | string   | Full HTTPS URL of your dApp's homepage. `http://`, `javascript:`, and other schemes are rejected by the loader. |

### 5. Commit, push, open a PR

```bash
git checkout -b add-dapp-acme-swap
git add constants/additionalDapps/dapp-acme-swap.json public/images/dapp-item-logo/acme-swap.png public/images/dapp-item-thumb/acme-swap.png
git commit -m "feat: add Acme Swap to dApp hub"
git push origin add-dapp-acme-swap
```

Then open a PR against `main` and fill in the PR template. A maintainer will review, primarily checking that:

- The URL resolves to a working, on-Lightchain dApp (not a phishing clone)
- The images render at the right aspect ratio
- The tags are from the canonical taxonomy
- Required fields are present

Most well-formed PRs are merged within 1-3 business days.

### What happens after merge

Within a few minutes of merge:

- A Vercel preview build runs against the PR for the maintainer to review.
- On merge to `main`, the production site at [hub.lightchain.ai](https://hub.lightchain.ai) rebuilds automatically.
- Your dApp appears in the "showing all" section, sorted to the top (newest first) for the first few days.

If your dApp is later deprecated or you change domains, open another PR editing the same `dapp-*.json` file.

---

## What this repo is

`lcai-dApp-hub` is the source code for [hub.lightchain.ai](https://hub.lightchain.ai), the public catalogue of dApps in the Lightchain ecosystem. It is:

- A **Next.js 16 App Router** application (TypeScript, React 19, Tailwind 4)
- Static-by-default — every dApp page is statically rendered at build time
- Self-extending — community PRs that drop JSON files under `constants/additionalDapps/` cause the next build to pick them up with **no code changes**
- Open source under MIT

It is **not**:

- A wallet, a swap, a bridge, or any other dApp — those are listed *on* the hub, not built into it
- A directory of arbitrary websites — listings must run on Lightchain or be operator tools for builders on Lightchain
- A DeFi yield aggregator, a price tracker, or a token list

For a full list of what's currently in the hub, see [`constants/dapps.ts`](./constants/dapps.ts) (official entries maintained by the Lightchain team) and [`constants/additionalDapps/`](./constants/additionalDapps/) (community submissions).

## Tech stack

| Layer            | Choice                                    | Why                                                                  |
| ---------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router)                   | RSC + static export for fast, SEO-friendly catalogue pages.          |
| Language         | TypeScript 5 (strict)                     | Catches dApp schema mistakes at build, not runtime.                  |
| UI primitives    | shadcn + Base UI + Radix UI               | Accessible, themable, low-magic.                                     |
| Styling          | Tailwind CSS 4                            | Utility-first; matches the rest of the Lightchain frontend stack.    |
| Icons            | lucide-react                              | Tree-shakable, consistent visual language.                           |
| 3D background    | three.js + @react-three/fiber + postprocessing | The particle-field hero animation in `<Antigravity />`.         |
| Toasts           | sonner                                    | Used by the "report" + "share" dialogs.                              |
| Slugs            | slugify                                   | Generates `${name}-${id}` URL slugs.                                 |
| Package manager  | pnpm 9+ (workspace)                       | Single repo, scoped workspaces if needed in future.                  |
| Deployment       | Vercel                                    | Auto-deploys `main` to production, every PR to a preview URL.        |

## Project structure

```
.
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout. Fetches nav + footer config on every request (revalidate=3600).
│   ├── page.tsx                  # Home page. Loads built-in + community dApps and renders the catalogue.
│   ├── globals.css               # Tailwind 4 base + design tokens.
│   └── [slug]/page.tsx           # dApp detail page. (See BUGS.md - currently a hardcoded stub.)
│
├── components/
│   ├── dapp-card/                # Card variants + safety dialog gating external links
│   │   ├── DappCard.tsx
│   │   ├── DappCardMini.tsx
│   │   ├── DappSafetyDialog.tsx
│   │   └── NoDAppBox.tsx         # Empty-state illustration.
│   ├── dapp-details/             # Detail page sidebar + content (currently hardcoded - see BUGS.md)
│   ├── home/                     # Hero, search field, filters, sorting, trending, empty state
│   ├── header/, footer/          # Top nav + site footer, populated from docs.lightchain.ai JSON
│   ├── icons/                    # Social media SVG icon components
│   └── ui/                       # shadcn-style primitives (Button, Badge, etc.) + 3D bg
│
├── constants/
│   ├── dapps.ts                  # Built-in (Lightchain-team-maintained) dApps. Get the OFFICIAL badge.
│   └── additionalDapps/
│       └── *.json                # Community submissions. One file per dApp.
│
├── hooks/                        # useShare, useSwiperEdgeState
├── lib/
│   ├── footer/                   # Footer config fetcher + types + icon maps
│   ├── nav/                      # Nav config fetcher + types + icon maps + resolveTarget
│   ├── loadAdditionalDapps.ts    # Reads + validates community JSON at build time
│   └── utils.ts                  # cn() (tailwind merge), generateSlugWithId()
│
├── public/
│   ├── images/
│   │   ├── dapp-item-logo/       # 256×256 PNG per dApp
│   │   ├── dapp-item-thumb/      # 800×450 PNG/JPG per dApp
│   │   ├── details-content-image/, bg/, icons/, logo/   # Site chrome
│   └── *.png, *.svg, *.ico       # Favicons + OG assets
│
├── next.config.ts                # Image policy + headers + Turbopack config
├── tsconfig.json                 # @/* alias + strict mode
├── eslint.config.mjs             # Next core-web-vitals + TS rules
├── package.json
├── README.md                     # ← you are here
└── BUGS.md                       # Known issues + suggested fixes (see below)
```

## Local development

Prerequisites:

- [Node.js 20+](https://nodejs.org) (the Next.js 16 release line requires 20.x or newer)
- [pnpm 9+](https://pnpm.io/installation) — the lockfile is `pnpm-lock.yaml`, so `npm` / `yarn` will produce different installs and may break

```bash
git clone https://github.com/lightchain-protocol/lcai-dApp-hub.git
cd lcai-dApp-hub
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

Hot reload + RSC fast refresh are on. Edits to `constants/dapps.ts` or any `constants/additionalDapps/*.json` show up immediately. Edits to `app/layout.tsx` trigger a full reload (because it fetches nav/footer config at module load).

### Available scripts

| Command        | What it does                                                    |
| -------------- | --------------------------------------------------------------- |
| `pnpm dev`     | Start the Next.js dev server on :3000 (with Turbopack)          |
| `pnpm build`   | Production build into `.next/`                                  |
| `pnpm start`   | Start the production server (must `build` first)                |
| `pnpm lint`    | Run ESLint with Next's core-web-vitals + TypeScript rules       |

There is **no test runner configured** at the time of writing. See [BUGS.md](./BUGS.md) for the recommendation to add Vitest + Playwright.

### Common dev issues

- **`pnpm dev` fails at module load with "Failed to fetch nav config: 502"** — `app/layout.tsx` fetches nav + footer JSON from `docs.lightchain.ai` on every request. If those URLs are unreachable from your network, the layout throws. Workaround: run `pnpm dev` once with a stable connection so Next caches the fetch (revalidate=3600), or mock the fetches in a `lib/mock.ts` for offline work.
- **`pnpm build` fails because Tailwind 4 isn't finding the v4 plugin** — make sure you're using pnpm 9+ and that `@tailwindcss/postcss` resolved correctly. `rm -rf node_modules && pnpm install` usually fixes it.
- **`Module not found: @/...`** — the `@/*` alias is defined in `tsconfig.json`. If your editor isn't picking it up, restart the TS server.

## Production build

```bash
pnpm build
pnpm start
```

The build emits a fully static catalogue (all `constants/additionalDapps/*.json` files are read at build time). To regenerate after a new dApp PR merges, simply redeploy — there is no separate CMS or admin panel.

### Deploy to Vercel

The main branch auto-deploys to <https://hub.lightchain.ai>. PRs get preview URLs via the GitHub integration.

For a self-hosted alternative:

```bash
pnpm build
# Serve .next/ via any Next.js-compatible host (Vercel, Cloudflare Pages, Netlify, Fly.io, etc.)
```

The app has no runtime backend dependencies beyond:

- `docs.lightchain.ai/nav-config.json`
- `docs.lightchain.ai/footer-config.json`

both fetched at first request and cached for 1 hour. If you fork for a different network, point those URLs at your own static JSON.

## Adding the *official* badge to a dApp

The card UI shows a small "OFFICIAL" badge next to a dApp's name if either `added_by_team` or `powered_by_lightchain` is `true`. **This flag cannot be set via a community PR** — the loader (`lib/loadAdditionalDapps.ts`) strips it from any JSON submission and forces both fields to `false`.

To add an official entry, a maintainer adds it directly to `constants/dapps.ts` instead of `constants/additionalDapps/`. The full set of supported flags:

```ts
type DappCardProps = {
  id: string | number;
  name: string;
  description: string;
  tags: string[];
  iconSrc: string;
  imageSrc: string;
  externalUrl?: string;
  added_by_team?: boolean;          // snake_case (preferred for new entries)
  addedByTeam?: boolean;            // camelCase (legacy alias - still read)
  powered_by_lightchain?: boolean;
  poweredByLightchain?: boolean;
};
```

The two casings are read with `addedByTeam ?? added_by_team` so either works; new entries should pick one and stick with it.

## How nav and footer are populated

Both the top navigation and the footer columns are NOT defined in this repo — they're fetched from JSON at `https://docs.lightchain.ai/`:

| Surface | URL                                              | Fetched in                                  | Revalidate |
| ------- | ------------------------------------------------ | ------------------------------------------- | ---------- |
| Top nav | `https://docs.lightchain.ai/nav-config.json`     | [`lib/nav/fetchNavConfig.ts`](./lib/nav/fetchNavConfig.ts) | 1 hour |
| Footer  | `https://docs.lightchain.ai/footer-config.json`  | [`lib/footer/fetchFooterConfig.ts`](./lib/footer/fetchFooterConfig.ts) | 1 hour |

This is by design — the nav and footer are shared across multiple Lightchain frontends (the hub, the docs site, the explorer, etc.) and a single source of truth keeps them in sync. To change them, update the JSON at `docs.lightchain.ai` (separate repo); the change will roll out to the hub within an hour.

Failure modes:

- If either fetch throws (network error, 5xx), the entire layout throws and the request returns 500. Worth adding a fallback — see [BUGS.md](./BUGS.md).

## Image and asset guidelines

Two reasons to keep images repo-local rather than external:

1. **Security**: external image URLs would need to be allowlisted in `next.config.ts` per host. We don't want submitters to silently load images from random origins.
2. **Performance**: Next.js Image optimizes local images at build time. External images need to be re-fetched and re-optimized on each cold request.

### Card thumbnail (`imageSrc`)

- Aspect ratio: **16:9** (`aspect-video` in Tailwind)
- Recommended dimensions: **800×450 px** or larger (will be downscaled, never upscaled)
- Format: PNG with transparency *or* JPEG
- File size: **< 250 KB** — compress with [Squoosh](https://squoosh.app) or similar
- Subject: a screenshot, branded illustration, or feature collage. Avoid text-heavy thumbnails — at card size they're unreadable.

### Logo badge (`iconSrc`)

- Aspect ratio: **1:1**
- Recommended dimensions: **256×256 px**
- Format: PNG with transparent background
- File size: **< 100 KB**
- Safe area: leave ~20% padding around the logo so it doesn't touch the circle clip
- High contrast against both light and dark backgrounds (the card switches based on user theme)

### Detail page hero (only for official entries)

If a maintainer adds detail-page screenshots, drop them under `public/images/details-content-image/` at **1200×675 px** (16:9). Reference them from the (currently-being-built) detail page component.

## Tag taxonomy

Use 1-3 tags per dApp, all UPPERCASE. The canonical set:

| Category     | Tags                                                    |
| ------------ | ------------------------------------------------------- |
| DeFi         | `DEFI`, `SWAP`, `LENDING`, `STAKING`, `YIELD`           |
| Liquidity    | `DEX`, `AMM`, `LP`, `LIQUIDITY`                         |
| Bridges      | `BRIDGE`, `INTERCHAIN`, `LCAI`                          |
| AI           | `AI`, `WORKERS`, `MODELS`, `INFERENCE`, `AGENTS`        |
| NFTs         | `NFT`, `MARKETPLACE`, `MINTING`                         |
| Gaming       | `GAMING`, `GAMEFI`, `PLAY-TO-EARN`                      |
| Social       | `SOCIAL`, `IDENTITY`, `DAO`                             |
| Infra / Tools| `INFRA`, `EXPLORER`, `ANALYTICS`, `FAUCET`, `IDE`, `DEVTOOLS`, `CONTRACTS`, `TOOLS`, `BUILDER` |
| Networks     | `MAINNET`, `TESTNET`                                    |

If your dApp doesn't fit, propose a new tag in your PR description — we'd rather extend the taxonomy carefully than have it sprawl.

## Security model

We treat the dApp hub as a **trust-amplifying surface** — listings are validated and badges signal provenance. The full threat model is in [`docs/security.md`](./docs/security.md) once that file lands; the high-level invariants are:

1. **Community submissions can NEVER claim the OFFICIAL badge.** `loadAdditionalDapps.ts` unconditionally strips `added_by_team` and `powered_by_lightchain` from JSON submissions, regardless of casing. Only entries in `constants/dapps.ts` (which requires maintainer review) get the badge.
2. **External URLs are gated by a safety dialog** for non-official dApps. First-time clicks open the "Stay in Control" modal explaining wallet hygiene; users can opt out per-URL via `localStorage` (`lcai:dapp-safety-dismissed:${url}`).
3. **External links always use `target="_blank" rel="noopener noreferrer"`**, preventing reverse-tabnabbing.
4. **External URL scheme is validated** to be `http:` or `https:` only. `javascript:`, `data:`, etc. are rejected by the loader.
5. **Images are repo-local** — `next.config.ts` does not allowlist any external image hosts, so `iconSrc` / `imageSrc` cannot point off-domain.

If you find a way around any of these, please email **security@lightchain.ai** (private disclosure) rather than opening a public issue. See [`SECURITY.md`](./SECURITY.md) once it lands.

## Reporting bugs

For non-security bugs, open a GitHub issue using the [bug report template](./.github/ISSUE_TEMPLATE/bug_report.yml). Please include:

- What you expected vs what actually happened
- A reproduction (link to the failing URL, paste relevant logs)
- Your browser + OS + viewport size
- Whether the issue blocks dApp discovery or is purely cosmetic

For known issues + their suggested fixes, see [`BUGS.md`](./BUGS.md).

## Contributing code

Beyond dApp submissions, code-level contributions are very welcome — see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Quick start for code PRs:

```bash
git clone https://github.com/lightchain-protocol/lcai-dApp-hub.git
cd lcai-dApp-hub
pnpm install
pnpm dev

# Make your changes…
pnpm lint
git checkout -b feat/short-description
git commit -m "feat: short description"
git push -u origin feat/short-description
gh pr create --fill
```

See [`BUGS.md`](./BUGS.md) for a prioritized list of things that could use a PR.

## License

[MIT](./LICENSE). Use it however you like. No warranty.

---

Built by the [Lightchain](https://lightchain.ai) team and contributors. Special thanks to everyone who's submitted a dApp 🙏
