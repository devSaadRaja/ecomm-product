"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FilterSummaryProps {
  activeFilters: string[];
  searchQuery: string;
  onRemoveFilter: (filter: string) => void;
  onClearSearch: () => void;
}

export function FilterSummary({
  activeFilters,
  searchQuery,
  onRemoveFilter,
  onClearSearch,
}: FilterSummaryProps) {
  if (activeFilters.length === 0 && !searchQuery) {
    return null;
  }

  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm">Active filters:</span>

        {activeFilters.map((filter) => (
          <Badge
            key={filter}
            className="bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 px-2 py-1"
          >
            {filter}
            <button
              className="ml-1 hover:text-[#FFF8E7]"
              onClick={() => onRemoveFilter(filter)}
              aria-label={`Remove ${filter} filter`}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        {searchQuery && (
          <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 px-2 py-1">
            Search: {searchQuery}
            <button
              className="ml-1 hover:text-[#FFF8E7]"
              onClick={onClearSearch}
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        )}
      </div>
    </div>
  );
}
