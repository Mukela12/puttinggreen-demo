/**
 * InstallerSortMenu Component
 * Dropdown menu for sorting installers
 * Following Fluxium's design standards
 */

"use client";

import * as React from "react";
import { ArrowUpDown } from "lucide-react";
import { SortOption } from "./types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        Sort by:
      </span>
      <Select
        value={currentSort}
        onValueChange={(value) => onSortChange(value as SortOption)}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select sorting" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
