/**
 * InstallerFilters Component
 * Top horizontal filter bar with search, city, and skill level filters
 * Following Fluxium's design standards
 */

"use client";

import * as React from "react";
import { Search, X, Filter } from "lucide-react";
import { FilterState } from "./types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

interface InstallerFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  cities: string[];
  resultCount: number;
}

export function InstallerFilters({
  filters,
  onFilterChange,
  onClearFilters,
  cities,
  resultCount,
}: InstallerFiltersProps) {
  const activeFilterCount = React.useMemo(() => {
    let count = 0;
    if (filters.search) count++;
    if (filters.city && filters.city !== "all") count++;
    if (filters.skillLevel && filters.skillLevel !== "all") count++;
    return count;
  }, [filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleCityChange = (value: string) => {
    onFilterChange({ ...filters, city: value });
  };

  const handleSkillChange = (value: string) => {
    onFilterChange({ ...filters, skillLevel: value });
  };

  const removeFilter = (filterKey: keyof FilterState) => {
    onFilterChange({ ...filters, [filterKey]: filterKey === "search" ? "" : "all" });
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Filter Bar */}
      <div className={cn(
        "flex flex-col md:flex-row gap-3 p-4",
        "bg-white rounded-lg border border-border shadow-sm"
      )}>
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search installers..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10 pr-10"
          />
          {filters.search && (
            <button
              onClick={() => removeFilter("search")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* City Filter */}
        <div className="w-full md:w-48">
          <Select value={filters.city} onValueChange={handleCityChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Skill Level Filter */}
        <div className="w-full md:w-48">
          <Select value={filters.skillLevel} onValueChange={handleSkillChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Skill Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Skill Levels</SelectItem>
              <SelectItem value="Master">Master</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Novice">Novice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <Button
            onClick={onClearFilters}
            variant="ghost"
            size="default"
            className="whitespace-nowrap"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters & Result Count */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Result Count */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>
            <span className="font-semibold text-foreground">{resultCount}</span>{" "}
            {resultCount === 1 ? "installer" : "installers"} found
          </span>
        </div>

        {/* Active Filter Chips */}
        {filters.search && (
          <Badge
            variant="secondary"
            className="gap-1 cursor-pointer hover:bg-gray-200"
            onClick={() => removeFilter("search")}
          >
            Search: {filters.search}
            <X className="h-3 w-3" />
          </Badge>
        )}

        {filters.city && filters.city !== "all" && (
          <Badge
            variant="secondary"
            className="gap-1 cursor-pointer hover:bg-gray-200"
            onClick={() => removeFilter("city")}
          >
            City: {filters.city}
            <X className="h-3 w-3" />
          </Badge>
        )}

        {filters.skillLevel && filters.skillLevel !== "all" && (
          <Badge
            variant="secondary"
            className="gap-1 cursor-pointer hover:bg-gray-200"
            onClick={() => removeFilter("skillLevel")}
          >
            Skill: {filters.skillLevel}
            <X className="h-3 w-3" />
          </Badge>
        )}
      </div>
    </div>
  );
}
