# Contributing

Two paths for contributing to the Lightchain dApp Hub:

1. **You want to list your dApp** → see [README § Submit a dApp](./README.md#submit-a-dapp). No code changes required, just a JSON file + two images in a PR.
2. **You want to improve the hub itself** → keep reading.

## What's the highest-leverage thing to work on?

See [`BUGS.md`](./BUGS.md). The most impactful unaddressed issue is `B1` (the detail page is a stub) — most others are 5-50 line PRs.

## Local setup

```bash
git clone https://github.com/lightchain-protocol/lcai-dApp-hub.git
cd lcai-dApp-hub
pnpm install
pnpm dev
```

Open <http://localhost:3000>. See [README § Local development](./README.md#local-development) for prerequisite versions and common dev issues.

## Code style

- **TypeScript strict mode** is on. No `any`, no `@ts-ignore` without a comment explaining why.
- **PascalCase for components**, camelCase for everything else. File names match the default export.
- **`@/*` alias** is set up — prefer `@/components/X` over `../../../components/X`.
- **Tailwind 4** is the styling layer. No CSS modules, no `styled-components`. Use design tokens (`bg-surface-base-light`, `text-content-strong`, etc.) over raw colors when possible.
- **Server components by default.** Add `"use client"` only when you need state, effects, or browser-only APIs.
- **Accessibility:** use semantic HTML, add `aria-label` to icon-only buttons, run Lighthouse before submitting a PR with new UI.

## Branch + commit convention

```bash
git checkout -b feat/short-description
git checkout -b fix/short-description
git checkout -b docs/short-description
git checkout -b chore/short-description
```

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add long-description markdown rendering to detail page
fix: validate externalUrl scheme in loadAdditionalDapps
docs: clarify image size requirements for dApp submissions
chore: rename NodAppBox to NoDAppBox
```

If your PR has multiple commits, squash them on merge. If your PR is one focused change, leave the history alone.

## Testing changes

There's no formal test runner yet (see [`BUGS.md`](./BUGS.md) B16). For now:

| Change touches              | Manual verification                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `constants/dapps.ts` or `additionalDapps/` | `pnpm dev` → confirm the new card appears with correct image, name, tags, badge |
| `lib/loadAdditionalDapps.ts`               | Drop a malformed JSON + a valid JSON in `constants/additionalDapps/` and confirm only the valid one renders, with a console warning for the malformed one |
| `components/dapp-card/*`                   | Hover, click, theme toggle, and (for non-official entries) verify the safety dialog opens |
| `app/[slug]/page.tsx`                      | Visit `/lightchain-bridge-dapp-001`, `/lcai-faucet-dapp-002`, and `/no-such-thing-404` |
| Layout / nav / footer                      | Disconnect from network, hard-refresh, verify graceful failure (or fix if it doesn't fail gracefully — see [`BUGS.md`](./BUGS.md) B11) |

## Linting

```bash
pnpm lint
```

CI runs the same on every PR via GitHub Actions. Fix all errors and warnings; if a rule is genuinely incorrect for our codebase, propose a config change rather than blanket-disabling it.

## PR checklist (also in the PR template)

- [ ] My branch is rebased on the latest `main`
- [ ] `pnpm lint` passes locally
- [ ] `pnpm build` completes locally
- [ ] I've tested the change in both light and dark themes
- [ ] If I added a new env var or external dependency, I documented it in the README
- [ ] If I touched the dApp data schema, I updated both the TypeScript type AND the README submission template
- [ ] If I fixed an issue from `BUGS.md`, I marked it as fixed there (or removed the entry)

## Code of conduct

Be excellent to each other. Disagree on technical merits, not personally. Maintainers reserve the right to lock or remove threads that degenerate.

## License

By contributing, you agree your work is MIT-licensed (see [`LICENSE`](./LICENSE)) and that you have the right to license it.
