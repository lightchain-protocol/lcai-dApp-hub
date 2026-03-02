import { Button } from "../ui/Button"
import FilterByCategory from "./FilterByCategory"
import Sorting from "./Sorting"

const HeroFilterArea = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      {/* Categories */}
      <FilterByCategory />

      {/* Divider */}
      <div className="w-px h-4 bg-border-medium"></div>

      {/* Sorting */}
      <Sorting />

      {/* Divider */}
      <div className="w-px h-4 bg-border-medium"></div>

      {/* Clear Filter Button */}
      <Button
        variant={"outline"}
      >
        Clear filters
      </Button>
    </div>
  )
}

export default HeroFilterArea