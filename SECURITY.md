# Security Policy

## Scope

This policy covers vulnerabilities in **this repository** — the dApp hub web application, the catalogue loader, and the safety-dialog gating logic. It does NOT cover:

- The Lightchain protocol itself, smart contracts, or chain infrastructure — disclose those to **security@lightchain.ai** directly.
- Vulnerabilities in third-party dApps listed in the catalogue — those should be reported to the dApp's own security contact, not us.
- Vulnerabilities in our upstream dependencies (Next.js, React, Tailwind, etc.) — please report to the respective project.

## In-scope examples

- A community-submitted dApp JSON that bypasses our scheme/path validation and lands an XSS, phishing redirect, or arbitrary script execution.
- A way for a community PR to set `added_by_team: true` or `powered_by_lightchain: true` and have it persist past the loader's stripping logic.
- A way to bypass the safety-dialog gate for non-official external dApps.
- Server-side request forgery via the nav/footer config fetchers.
- Stored XSS in any dApp metadata field that gets rendered.

## Reporting a vulnerability

**Do not open a public GitHub issue.**

Email **security@lightchain.ai** with:

1. A clear description of the issue and its impact.
2. Steps to reproduce. Include a minimal payload if applicable.
3. Suggested mitigation if you have one.
4. Your handle (Twitter/GitHub) if you'd like public credit in the changelog.

You'll get an acknowledgement within 72 hours. We aim to land a fix within 7 days for critical issues, 30 days for medium severity.

## Disclosure expectations

- We won't take legal action against good-faith security researchers.
- We'll credit you publicly unless you ask to remain anonymous.
- Please give us reasonable time to ship a fix before public disclosure (usually 14-30 days, depending on severity).

## Trust model

See [README § Security model](./README.md#security-model) for the trust invariants we maintain. The short version:

1. Community submissions cannot claim the OFFICIAL badge.
2. External URL schemes are validated (`https:` or `http:` only).
3. Image paths must be repo-local.
4. External links are gated by a safety dialog for non-official dApps.
5. External links use `target="_blank" rel="noopener noreferrer"`.

Any vulnerability that weakens these invariants is in scope.
