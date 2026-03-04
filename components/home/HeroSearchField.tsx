
'use client';

import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const HeroSearchField = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("search");
    console.log('search value', value)
  }

  return (
    <div className="mx-auto max-w-[483px] w-full">
      <form onSubmit={handleSearch}>
        <div className="relative flex items-center gap-2 md:gap-3 text-content-default">
          <span className="absolute left-3.5 flex items-center justify-center h-5 md:h-6 w-5 md:w-6">
            <Search className="size-5" />
          </span>
          <Input
            type="text"
            name="search"
            size={"lg"}
            className="pl-11 pr-26 h-12 md:h-14"
            placeholder="Search dApps, protocols, tools..."
          />
          <Button
            variant={"gradient"}
            size={"md"}
            type="submit"
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