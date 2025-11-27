/**
 * TypeScript interfaces and types for the Installer Directory
 * PuttingGreen.com - Installer Directory Component
 */

/**
 * Skill level enum for installers
 */
export type SkillLevel = "Master" | "Intermediate" | "Novice";

/**
 * Sort options for the installer list
 */
export type SortOption =
  | "name-asc"
  | "name-desc"
  | "experience-high"
  | "experience-low"
  | "skill-level";

/**
 * Main installer interface
 */
export interface Installer {
  id: string;
  name: string;
  city: string;
  skillLevel: SkillLevel;
  yearsExperience: number;
  about: string;

  // Optional extended fields for detail view
  phone?: string;
  email?: string;
  website?: string;
  imageUrl?: string;
  projectsCompleted?: number;
  rating?: number;
  specialties?: string[];
  certifications?: string[];
  serviceRadius?: number; // miles
  portfolioImages?: string[]; // Array of portfolio image paths
}

/**
 * Filter state interface
 */
export interface FilterState {
  search: string;
  city: string;
  skillLevel: string;
}

/**
 * Props for InstallerCard component
 */
export interface InstallerCardProps {
  installer: Installer;
  onViewDetails: (installer: Installer) => void;
}

/**
 * Props for InstallerFilters component
 */
export interface InstallerFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  cities: string[];
  resultCount: number;
}

/**
 * Props for InstallerDetailSheet component
 */
export interface InstallerDetailSheetProps {
  installer: Installer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Props for EmptyState component
 */
export interface EmptyStateProps {
  onClearFilters: () => void;
}

/**
 * Props for InstallerSortMenu component
 */
export interface InstallerSortMenuProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

/**
 * Quote request form data
 */
export interface QuoteRequest {
  installerId: string;
  installerName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projectType: "Residential" | "Commercial" | "Custom";
  projectDetails: string;
  preferredContact: "email" | "phone";
}

/**
 * Props for QuoteRequestDialog component
 */
export interface QuoteRequestDialogProps {
  installer: Installer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
