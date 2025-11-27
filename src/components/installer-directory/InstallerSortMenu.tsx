/**
 * InstallerSortMenu Component
 * Native select for sorting installers
 * Following wellness-frontend-1 design standards
 */

"use client";

import * as React from "react";
import { ArrowUpDown } from "lucide-react";
import { SortOption } from "./types";

interface InstallerSortMenuProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function InstallerSortMenu({
  currentSort,
  onSortChange,
}: InstallerSortMenuProps) {
  const sortOptions = [
    { value: "name-asc" as const, label: "Name (A-Z)" },
    { value: "name-desc" as const, label: "Name (Z-A)" },
    { value: "experience-high" as const, label: "Experience (High to Low)" },
    { value: "experience-low" as const, label: "Experience (Low to High)" },
    { value: "skill-level" as const, label: "Skill Level" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as SortOption);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <ArrowUpDown className="h-4 w-4" />
        <span className="whitespace-nowrap font-medium">Sort by:</span>
      </div>
      <select
        value={currentSort}
        onChange={handleChange}
        className="select-primary w-auto min-w-[220px]"
        aria-label="Sort installers"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
