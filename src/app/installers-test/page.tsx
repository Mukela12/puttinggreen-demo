/**
 * Installer Directory Test Page
 * PuttingGreen.com - Main installer directory with filtering, sorting, and animations
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Installer, FilterState, SortOption } from "@/components/installer-directory/types";
import { mockInstallers, getUniqueCities } from "@/lib/mockData";
import { InstallerCard } from "@/components/installer-directory/InstallerCard";
import { InstallerFilters } from "@/components/installer-directory/InstallerFilters";
import { InstallerSortMenu } from "@/components/installer-directory/InstallerSortMenu";
import { InstallerDetailSheet } from "@/components/installer-directory/InstallerDetailSheet";
import { EmptyState } from "@/components/installer-directory/EmptyState";

export default function InstallersTestPage() {
  // State
  const [filters, setFilters] = React.useState<FilterState>({
    search: "",
    city: "all",
    skillLevel: "all",
  });
  const [sortOption, setSortOption] = React.useState<SortOption>("name-asc");
  const [selectedInstaller, setSelectedInstaller] = React.useState<Installer | null>(null);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  // Get unique cities for filter
  const cities = React.useMemo(() => getUniqueCities(), []);

  // Filter installers
  const filteredInstallers = React.useMemo(() => {
    return mockInstallers.filter((installer) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          installer.name.toLowerCase().includes(searchLower) ||
          installer.city.toLowerCase().includes(searchLower) ||
          installer.about.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // City filter
      if (filters.city && filters.city !== "all") {
        if (installer.city !== filters.city) return false;
      }

      // Skill level filter
      if (filters.skillLevel && filters.skillLevel !== "all") {
        if (installer.skillLevel !== filters.skillLevel) return false;
      }

      return true;
    });
  }, [filters]);

  // Sort installers
  const sortedInstallers = React.useMemo(() => {
    const sorted = [...filteredInstallers];

    switch (sortOption) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "experience-high":
        sorted.sort((a, b) => b.yearsExperience - a.yearsExperience);
        break;
      case "experience-low":
        sorted.sort((a, b) => a.yearsExperience - b.yearsExperience);
        break;
      case "skill-level":
        const skillOrder = { Master: 0, Intermediate: 1, Novice: 2 };
        sorted.sort(
          (a, b) => skillOrder[a.skillLevel] - skillOrder[b.skillLevel]
        );
        break;
    }

    return sorted;
  }, [filteredInstallers, sortOption]);

  // Handlers
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      city: "all",
      skillLevel: "all",
    });
  };

  const handleViewDetails = (installer: Installer) => {
    setSelectedInstaller(installer);
    setSheetOpen(true);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open) {
      // Delay clearing selected installer for smooth animation
      setTimeout(() => setSelectedInstaller(null), 300);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-light/10">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              PuttingGreen.com Installer Directory
            </h1>
            <p className="text-muted-foreground">
              Find expert putting green installers in your area
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InstallerFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              cities={cities}
              resultCount={sortedInstallers.length}
            />
          </motion.div>

          {/* Sort Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-end"
          >
            <InstallerSortMenu
              currentSort={sortOption}
              onSortChange={setSortOption}
            />
          </motion.div>

          {/* Results Grid or Empty State */}
          {sortedInstallers.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedInstallers.map((installer) => (
                <motion.div key={installer.id} variants={itemVariants}>
                  <InstallerCard
                    installer={installer}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <EmptyState onClearFilters={handleClearFilters} />
            </motion.div>
          )}
        </div>
      </main>

      {/* Detail Sheet */}
      <InstallerDetailSheet
        installer={selectedInstaller}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  );
}
