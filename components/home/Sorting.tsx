import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/base-ui/Checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/base-ui/DropdownMenu";
import { Field, FieldGroup, FieldLabel } from "../ui/base-ui/Field";
import { Label } from "../ui/base-ui/Label";
import { RadioGroup, RadioGroupItem } from "../ui/base-ui/RadioGroup";

interface StatusState {
  all: boolean;
  live: boolean;
  audited: boolean;
  beta: boolean;
}

interface SortingProps {
  network: string | null;
  sortBy: string | null;
  status: StatusState;
  onNetworkChange: (value: string | null) => void;
  onSortByChange: (value: string | null) => void;
  onStatusChange: (value: StatusState) => void;
}

const Sorting = ({
  network,
  sortBy,
  status,
  onNetworkChange,
  onSortByChange,
  onStatusChange,
}: SortingProps) => {

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size={"sm"}
              className={"aria-expanded:bg-surface-primary aria-expanded:text-content-ultra"}
            >
              <ArrowUpDown className="size-4" />
              Sort By
              <ChevronDown className="size-5 transition-transform duration-200 group-aria-expanded/button:rotate-180" />
            </Button>
          }
        />
        <DropdownMenuContent className={"px-0"}>
          <DropdownMenuGroup>
            <DropdownMenuLabel className={"mb-0 px-4 pt-2"}>NETWORK</DropdownMenuLabel>
            <RadioGroup
              value={network ?? ""}
              onValueChange={(value) => onNetworkChange(value || null)}
              className="gap-0 w-full px-4"
            >
              <div className="flex items-center gap-2.5 py-2">
                <RadioGroupItem value="mainnet" id="network-mainnet" />
                <Label htmlFor="network-mainnet" className="cursor-pointer">
                  Mainnet
                </Label>
              </div>
              <div className="flex items-center gap-2.5 py-2">
                <RadioGroupItem value="testnet-switch" id="network-testnet-switch" />
                <Label htmlFor="network-testnet-switch" className="cursor-pointer">
                  Testnet switch
                </Label>
              </div>
            </RadioGroup>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel className={"mb-0 px-4 pt-2"}>SORT BY</DropdownMenuLabel>
            <RadioGroup
              value={sortBy ?? ""}
              onValueChange={(value) => onSortByChange(value || null)}
              className="gap-0 w-full px-4"
            >
              <div className="flex items-center gap-2.5 py-2">
                <RadioGroupItem value="popular" id="sort-by-popular" />
                <Label htmlFor="sort-by-popular" className="cursor-pointer">
                  Popular
                </Label>
              </div>
              <div className="flex items-center gap-2.5 py-2">
                <RadioGroupItem value="newest" id="sort-by-newest" />
                <Label htmlFor="sort-by-newest" className="cursor-pointer">
                  Newest First
                </Label>
              </div>
              <div className="flex items-center gap-2.5 py-2">
                <RadioGroupItem value="oldest" id="sort-by-oldest" />
                <Label htmlFor="sort-by-oldest" className="cursor-pointer">
                  Oldest First
                </Label>
              </div>
            </RadioGroup>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel className={"mb-0 px-4 pt-2"}>STATUS</DropdownMenuLabel>
            <FieldGroup className="gap-0 w-fit px-4">
              <Field orientation="horizontal" className="gap-2.5 py-2">
                <Checkbox
                  id="status-all"
                  name="status-all"
                  checked={status.all}
                  onCheckedChange={(checked) =>
                    onStatusChange({ ...status, all: !!checked })
                  }
                />
                <FieldLabel
                  htmlFor="status-all"
                  className="cursor-pointer"
                >
                  All
                </FieldLabel>
              </Field>
              <Field orientation="horizontal" className="gap-2.5 py-2">
                <Checkbox
                  id="status-live"
                  name="status-live"
                  checked={status.live}
                  onCheckedChange={(checked) =>
                    onStatusChange({ ...status, live: !!checked })
                  }
                />
                <FieldLabel
                  htmlFor="status-live"
                  className="cursor-pointer"
                >
                  Live
                </FieldLabel>
              </Field>
              <Field orientation="horizontal" className="gap-2.5 py-2">
                <Checkbox
                  id="status-audited"
                  name="status-audited"
                  checked={status.audited}
                  onCheckedChange={(checked) =>
                    onStatusChange({ ...status, audited: !!checked })
                  }
                />
                <FieldLabel
                  htmlFor="status-audited"
                  className="cursor-pointer"
                >
                  Audited
                </FieldLabel>
              </Field>
              <Field orientation="horizontal" className="gap-2.5 py-2">
                <Checkbox
                  id="status-beta"
                  name="status-beta"
                  checked={status.beta}
                  onCheckedChange={(checked) =>
                    onStatusChange({ ...status, beta: !!checked })
                  }
                />
                <FieldLabel
                  htmlFor="status-beta"
                  className="cursor-pointer"
                >
                  Beta
                </FieldLabel>
              </Field>
            </FieldGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Sorting;