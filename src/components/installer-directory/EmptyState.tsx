/**
 * EmptyState Component
 * Displayed when no installers match the current filters
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import { SearchX, Filter } from "lucide-react";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-sage-200/30 rounded-full blur-2xl" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-sage-100 to-sage-200/50 flex items-center justify-center">
          <SearchX className="w-10 h-10 text-sage-600" />
        </div>
      </div>

      {/* Message */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Installers Found
      </h3>
      <p className="text-sm text-gray-600 text-center max-w-md mb-6 leading-relaxed">
        We couldn't find any installers matching your current filters. Try
        adjusting your search criteria or clear all filters to see more
        results.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onClearFilters} className="btn-primary inline-flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Clear All Filters
        </button>
      </div>

      {/* Suggestions */}
      <div className="mt-8 p-5 glass-card max-w-md">
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          <strong className="text-gray-900 font-semibold">Tip:</strong> Try broadening your
          search by selecting "All Cities" or "All Skill Levels"
        </p>
      </div>
    </div>
  );
}
