/**
 * InstallerFilters Component
 * Premium glass morphism filter bar with native HTML selects
 * Following wellness-frontend-1 design standards
 */

"use client";

import * as React from "react";
import { Search, X, Filter } from "lucide-react";
import { FilterState } from "./types";

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
    // Don't trim here - let user type freely, trimming happens during filtering
    const newValue = e.target.value;
    onFilterChange({ ...filters, search: newValue });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, city: e.target.value });
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, skillLevel: e.target.value });
  };

  const removeFilter = (filterKey: keyof FilterState) => {
    onFilterChange({ ...filters, [filterKey]: filterKey === "search" ? "" : "all" });
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Filter Bar with Glass Morphism */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search installers by name, city, or description..."
              value={filters.search}
              onChange={handleSearchChange}
              className="input-primary pl-12 pr-12"
            />
            {filters.search && (
              <button
                onClick={() => removeFilter("search")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* City Filter */}
          <div className="w-full md:w-56">
            <select
              value={filters.city}
              onChange={handleCityChange}
              className="select-primary"
              aria-label="Filter by city"
            >
              <option value="all">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Skill Level Filter */}
          <div className="w-full md:w-56">
            <select
              value={filters.skillLevel}
              onChange={handleSkillChange}
              className="select-primary"
              aria-label="Filter by skill level"
            >
              <option value="all">All Skill Levels</option>
              <option value="Master">Master</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Novice">Novice</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {activeFilterCount > 0 && (
            <button
              onClick={onClearFilters}
              className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm whitespace-nowrap bg-white/50"
            >
              <X className="h-4 w-4 inline mr-2" />
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Active Filters & Result Count */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Result Count */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-sm">
            <Filter className="h-4 w-4 text-sage-500" />
            <span className="font-semibold text-gray-900">{resultCount}</span>
            <span className="text-gray-600">
              {resultCount === 1 ? "installer" : "installers"}
            </span>
          </div>
        </div>

        {/* Active Filter Chips */}
        {filters.search && (
          <button
            onClick={() => removeFilter("search")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 text-sage-900 rounded-full text-sm font-medium hover:bg-sage-200 transition-colors border border-sage-200"
          >
            <span className="truncate max-w-[200px]">Search: {filters.search}</span>
            <X className="h-3.5 w-3.5 flex-shrink-0" />
          </button>
        )}

        {filters.city && filters.city !== "all" && (
          <button
            onClick={() => removeFilter("city")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors border border-blue-200"
          >
            City: {filters.city}
            <X className="h-3.5 w-3.5 flex-shrink-0" />
          </button>
        )}

        {filters.skillLevel && filters.skillLevel !== "all" && (
          <button
            onClick={() => removeFilter("skillLevel")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors border border-amber-200"
          >
            Skill: {filters.skillLevel}
            <X className="h-3.5 w-3.5 flex-shrink-0" />
          </button>
        )}
      </div>
    </div>
  );
}
