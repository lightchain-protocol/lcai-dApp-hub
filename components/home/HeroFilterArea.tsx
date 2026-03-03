"use client"

import { useState } from "react"

import { Button } from "../ui/Button"
import FilterByCategory, { CategoryId } from "./FilterByCategory"
import Sorting from "./Sorting"

const HeroFilterArea = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all")
  const [network, setNetwork] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string | null>(null)
  const [status, setStatus] = useState({
    all: false,
    live: false,
    audited: false,
    beta: false,
  })

  const handleClearFilters = () => {
    setSelectedCategory("all")
    setNetwork(null)
    setSortBy(null)
    setStatus({
      all: false,
      live: false,
      audited: false,
      beta: false,
    })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 flex-wrap items-center justify-center">
      {/* Categories */}
      <FilterByCategory
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Divider */}
      <div className="w-full lg:w-px h-px lg:h-4 bg-border-medium opacity-25 lg:opacity-100"></div>

      <div className="flex gap-3 flex-wrap items-center justify-center pt-2 lg:pt-0">
        {/* Sorting */}
        <Sorting
          network={network}
          sortBy={sortBy}
          status={status}
          onNetworkChange={setNetwork}
          onSortByChange={setSortBy}
          onStatusChange={setStatus}
        />

        {/* Divider */}
        <div className="w-px h-4 bg-border-medium"></div>

        {/* Clear Filter Button */}
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={handleClearFilters}
        >
          Clear filters
        </Button>
      </div>
    </div>
  )
}

export default HeroFilterArea