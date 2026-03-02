
import { Search } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const HeroSearchField = () => {
  return (
    <div className="mx-auto max-w-[483px] w-full">
      <form>
        <div className="relative flex items-center gap-2 md:gap-3 text-content-default">
          <span className="absolute left-3.5 flex items-center justify-center h-5 md:h-6 w-5 md:w-6">
            <Search className="size-5" />
          </span>
          <Input
            type="text"
            size={"lg"}
            className="pl-11 pr-26"
            placeholder="Search dApps, protocols, tools..."
          />
          <Button
            variant={"gradient"}
            size={"md"}
            className={"absolute right-1.5 top-1/2 -translate-y-1/2"}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeroSearchField;