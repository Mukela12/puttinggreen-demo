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
      // Search filter - trim to handle whitespace
      const searchTerm = filters.search?.trim();
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
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
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-100 relative overflow-hidden">
      {/* Premium Grid Background Pattern */}
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-sage-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="installer-grid-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
            <circle cx="100" cy="100" r="50" fill="none" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="50" r="25" fill="none" strokeWidth="0.3" opacity="0.2" />
            <circle cx="150" cy="150" r="25" fill="none" strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#installer-grid-pattern)" />
      </svg>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sage-200/30 to-sage-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium Circle - Bottom Left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-sage-300/20 to-sage-200/30 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Circle - Center Right */}
        <motion.div
          className="absolute top-1/2 -right-20 w-40 h-40 bg-gradient-to-bl from-sage-400/20 to-sage-300/10 rounded-full blur-2xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Header with Glass Morphism */}
      <header className="relative glass-card border-b-0 rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="gradient-text">PuttingGreen.com</span>
            </h1>
            <p className="text-lg text-gray-600">
              Find expert putting green installers in your area
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 custom-scrollbar">
        <div className="space-y-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.2 }}
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
              key={`results-${sortedInstallers.length}-${filters.search}-${filters.city}-${filters.skillLevel}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

          {/* Bottom Spacing */}
          <div className="h-12" />
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
