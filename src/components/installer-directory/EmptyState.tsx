/**
 * EmptyState Component
 * Displayed when no installers match the current filters
 * Following Fluxium's design standards
 */

"use client";

import * as React from "react";
import { SearchX, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
          <SearchX className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Message */}
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No Installers Found
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
        We couldn't find any installers matching your current filters. Try
        adjusting your search criteria or clear all filters to see more
        results.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onClearFilters} variant="default">
          <Filter className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      </div>

      {/* Suggestions */}
      <div className="mt-8 p-4 bg-muted rounded-lg max-w-md">
        <p className="text-xs text-muted-foreground text-center">
          <strong className="text-foreground">Tip:</strong> Try broadening your
          search by selecting "All Cities" or "All Skill Levels"
        </p>
      </div>
    </div>
  );
}
