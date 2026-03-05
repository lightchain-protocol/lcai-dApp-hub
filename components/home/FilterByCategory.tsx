
import { ChevronDown } from "lucide-react"

import { Button } from "../ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/base-ui/DropdownMenu"

export type CategoryId =
  | "all"
  | "defi"
  | "gaming"
  | "dex"
  | "bridges"
  | "wallets"
  | "social"
  | "derivatives-perps"
  | "yield-vaults"
  | "stablecoins"
  | "nft-marketplace"
  | "metaverse"
  | "dex-swap"
  | "launchpad-ido"
  | "dao-governance"
  | "infrastructure-dev-tools"
  | "explorers-analytics"
  | "oracles" | "payments" | "identity" | "security" | "education" | "ai-agents" | "ai-compute";

const primaryCategories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "defi", label: "DeFi" },
  { id: "gaming", label: "Gaming" },
  { id: "dex", label: "DEX" },
  { id: "bridges", label: "Bridges" },
  { id: "wallets", label: "Wallets" },
  { id: "social", label: "Social" },
]

const moreCategories: { id: CategoryId; label: string }[] = [
  { id: "derivatives-perps", label: "Derivatives / Perps" },
  { id: "yield-vaults", label: "Yield / Vaults" },
  { id: "stablecoins", label: "Stablecoins" },
  { id: "nft-marketplace", label: "NFT Marketplace" },
  { id: "metaverse", label: "Metaverse" },
  { id: "dex-swap", label: "DEX / Swap" },
  { id: "launchpad-ido", label: "Launchpad / IDO" },
  { id: "dao-governance", label: "DAO / Governance" },
  { id: "infrastructure-dev-tools", label: "Infrastructure / Dev Tools" },
  { id: "explorers-analytics", label: "Explorers & Analytics" },
  { id: "oracles", label: "Oracles" },
  { id: "payments", label: "Payments" },
  { id: "identity", label: "Identity" },
  { id: "security", label: "Security" },
  { id: "education", label: "Education" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "ai-compute", label: "AI / Compute" },
]

interface FilterByCategoryProps {
  selectedCategory: CategoryId
  onCategoryChange: (categoryId: CategoryId) => void
}

const FilterByCategory = ({
  selectedCategory,
  onCategoryChange,
}: FilterByCategoryProps) => {

  const isMoreActive = moreCategories.some(
    (category) => category.id === selectedCategory,
  )

  return (
    <div className="max-w-full relative after:content-[''] md:after:content-none after:h-full after:w-12 after:bg-[linear-gradient(90deg,rgba(6,6,14,0.00)_0%,rgba(6,6,14,0.45)_35.02%,#06060E_88.7%)] after:absolute after:right-0 after:top-0">
      <div className="flex gap-2 items-center overflow-x-auto max-w-full pb-2 lg:pb-0 ">
        {primaryCategories.map((category) => (
          <Button
            key={category.id}
            variant={"ghost"}
            className={`${selectedCategory === category.id ? "bg-surface-primary text-content-ultra hover:bg-surface-brand-default hover:text-content-white-fixed" : ""}`}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant={"ghost"}
                size="sm"
                className={`aria-expanded:bg-surface-primary aria-expanded:text-content-ultra ${isMoreActive ? "bg-surface-primary text-content-ultra hover:bg-surface-brand-default hover:text-content-white-fixed" : ""}`}
              >
                More
                <ChevronDown className="size-5 transition-transform duration-200 group-aria-expanded/button:rotate-180" />
              </Button>
            }
          />
          <DropdownMenuContent className={"p-0"}>
            <DropdownMenuGroup>
              {moreCategories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-4 py-2.5 cursor-pointer hover:text-content-ultra rounded-none ${selectedCategory === category.id ? "bg-surface-base-soft" : ""}`}
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default FilterByCategory