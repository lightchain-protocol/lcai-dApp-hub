<!-- Thanks for opening a PR! -->

## Type of change

- [ ] 🎉 New dApp submission (you only need to fill in the "dApp submission" section below)
- [ ] 🐛 Bug fix
- [ ] ✨ New feature / enhancement
- [ ] 📝 Documentation
- [ ] 🧹 Refactor / chore
- [ ] 🔒 Security fix

## Summary

<!-- 1-3 bullet points describing what this PR does and why. -->

-
-

---

## For dApp submissions

If you ticked "New dApp submission" above, please fill in:

- [ ] My dApp runs on Lightchain mainnet (or is an operator tool for Lightchain builders)
- [ ] My dApp's `id` is unique within `constants/additionalDapps/`
- [ ] My `iconSrc` is a 256×256 PNG under `public/images/dapp-item-logo/`, < 100 KB
- [ ] My `imageSrc` is a 800×450 PNG/JPG under `public/images/dapp-item-thumb/`, < 250 KB
- [ ] My `externalUrl` is a valid `https://` URL
- [ ] My `tags` are from the [tag taxonomy](../README.md#tag-taxonomy) (or my PR description proposes a new tag)
- [ ] My `description` is under 160 characters
- [ ] I am not setting `added_by_team` / `powered_by_lightchain` (those are maintainer-only)

**dApp website:** <!-- https://example.com -->

**Brief pitch (2-3 sentences for the maintainer reviewing):**

<!--
What does your dApp do? What category of Lightchain user is it for?
Anything special about how it integrates with the protocol?
-->

---

## For code / docs / refactor PRs

### Test plan

<!-- How did you verify this works? -->

- [ ] `pnpm lint` passes
- [ ] `pnpm build` completes
- [ ] Tested in both light and dark themes
- [ ] Tested at mobile (375px), tablet (768px), and desktop (1280px+) widths
- [ ] N/A — this is a dApp submission

### Related issues

<!-- Closes #N, fixes #N, related to #N -->

### If this fixes something in `BUGS.md`

- [ ] I marked the corresponding `BUGS.md` entry as ✅ fixed
