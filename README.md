# Lightchain Dapp Hub

## Submit a dApp

### How to submit your dApp

1. Fork this repository.
2. Create a new file in `constants/additionalDapps/` named `dapp-<unique-id>.json`.
3. Add your dApp payload directly in that file (example below).
4. Commit your change and open a pull request.

### File format

```json
{
  "id": "dapp-101",
  "name": "My dApp",
  "description": "Short description shown in the card.",
  "tags": ["TOOLS", "AI"],
  "iconSrc": "/images/dapp-item-logo/my-dapp.png",
  "imageSrc": "/images/dapp-item-thumb/my-dapp.png",
  "externalUrl": "https://my-dapp.example/"
}
```

### Required fields

- `id`
- `name`
- `description`
- `tags` (string array)
- `iconSrc`
- `imageSrc`
- `externalUrl` (non-empty string; use `https://` in production)
