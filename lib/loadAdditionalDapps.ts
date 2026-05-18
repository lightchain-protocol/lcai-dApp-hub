import type { DappCardProps } from "@/components/dapp-card/DappCard";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ADDITIONAL_DAPPS_DIR = path.join(
  process.cwd(),
  "constants",
  "additionalDapps"
);

function hasRequiredDappFields(
  dappResultItem: DappCardProps | null | undefined
): dappResultItem is DappCardProps {
  return Boolean(
    dappResultItem &&
      dappResultItem.id &&
      dappResultItem.name &&
      dappResultItem.description &&
      Array.isArray(dappResultItem.tags) &&
      dappResultItem.iconSrc &&
      dappResultItem.imageSrc &&
      typeof dappResultItem.externalUrl === "string" &&
      dappResultItem.externalUrl.trim().length > 0
  );
}

export async function loadAdditionalDapps(): Promise<DappCardProps[]> {
  try {
    const files = await readdir(ADDITIONAL_DAPPS_DIR);
    const jsonFiles = files.filter((fileName) => fileName.endsWith(".json"));
    const sortedJsonFiles = (
      await Promise.all(
        jsonFiles.map(async (fileName) => {
          const filePath = path.join(ADDITIONAL_DAPPS_DIR, fileName);
          const fileStats = await stat(filePath);

          return { fileName, createdAtMs: fileStats.birthtimeMs };
        })
      )
    )
      .sort((a, b) => b.createdAtMs - a.createdAtMs)
      .map((entry) => entry.fileName);

    const loadedDapps = await Promise.all(
      sortedJsonFiles.map(async (fileName) => {
        const filePath = path.join(ADDITIONAL_DAPPS_DIR, fileName);
        const fileContent = await readFile(filePath, "utf-8");
        const parsedFile = JSON.parse(fileContent) as DappCardProps;

        if (!hasRequiredDappFields(parsedFile)) {
          console.warn(
            `[additionalDapps] Skipping ${fileName}: missing required dApp fields`
          );
          return null;
        }

        const {
          added_by_team: _ignoredAddedByTeam,
          addedByTeam: _ignoredAddedByTeamCamel,
          powered_by_lightchain: _ignoredPoweredByLightchain,
          poweredByLightchain: _ignoredPoweredByLightchainCamel,
          ...safeDappResultItem
        } = parsedFile;

        const merged: DappCardProps = {
          ...safeDappResultItem,
          added_by_team: false,
          powered_by_lightchain: false,
        };

        return merged;
      })
    );

    return loadedDapps.filter((item): item is DappCardProps => item !== null);
  } catch (error) {
    console.warn("[additionalDapps] Failed to load additional dApps", error);
    return [];
  }
}
