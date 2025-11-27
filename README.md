# PuttingGreen.com Installer Directory

A modern, production-ready installer directory component built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates clean architecture, professional UI/UX design, and scalable component patterns.

**Live Demo:** [Coming Soon - Deploy Link]

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
- [Design Decisions](#design-decisions)
- [Production Roadmap](#production-roadmap)
- [Architecture Highlights](#architecture-highlights)

---

## Features

### Core Functionality
✅ **Client-side filtering** by city and skill level
✅ **Real-time search** across installer names, cities, and descriptions
✅ **Multi-criteria sorting** (name, experience, skill level)
✅ **Detailed installer profiles** with side drawer (Sheet component)
✅ **Responsive design** - works beautifully on mobile, tablet, and desktop
✅ **Empty state** with helpful messaging when no results match
✅ **Active filter chips** - easily remove individual filters
✅ **Result count** - always know how many installers match your criteria

### UX/UI Highlights
✨ **Smooth animations** using Framer Motion (stagger effects, fade-ins)
✨ **Balanced card design** - medium images with organized information hierarchy
✨ **Professional iconography** - Lucide React icons throughout
✨ **Golf/turf green theme** - custom color palette matching PuttingGreen.com brand
✨ **Hover effects** - interactive feedback on cards and buttons
✨ **Inline interactions** - minimal modals, following modern UX patterns

---

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 16.0.5 |
| **TypeScript** | Type safety and developer experience | Latest |
| **Tailwind CSS** | Utility-first styling | 4.0 (v4 with new @theme) |
| **Radix UI** | Accessible, unstyled UI primitives | Latest |
| **Framer Motion** | Animation library | Latest |
| **Lucide React** | Icon library | Latest |
| **class-variance-authority** | Component variant management | Latest |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation & Running Locally

```bash
# Navigate to project directory
cd puttinggreen-installer-directory

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser and navigate to:
# http://localhost:3000/installers-test
```

The installer directory is available at `/installers-test` route.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run TypeScript type checking
npx tsc --noEmit

# Run linting
npm run lint
```

---

## Project Structure

```
puttinggreen-installer-directory/
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind config, custom colors/theme
│   │   ├── layout.tsx               # Root layout
│   │   └── installers-test/
│   │       └── page.tsx             # Main installer directory page
│   │
│   ├── components/
│   │   ├── installer-directory/     # Feature components
│   │   │   ├── InstallerCard.tsx          # Individual card component
│   │   │   ├── InstallerFilters.tsx       # Search + filter bar
│   │   │   ├── InstallerSortMenu.tsx      # Sort dropdown
│   │   │   ├── InstallerDetailSheet.tsx   # Side drawer details
│   │   │   ├── EmptyState.tsx             # No results component
│   │   │   └── types.ts                   # TypeScript interfaces
│   │   │
│   │   └── ui/                      # Reusable UI primitives
│   │       ├── button.tsx                 # Button with variants
│   │       ├── sheet.tsx                  # Slide-in drawer (Radix Dialog)
│   │       ├── select.tsx                 # Dropdown select (Radix Select)
│   │       ├── input.tsx                  # Text input
│   │       └── badge.tsx                  # Badge/tag component
│   │
│   └── lib/
│       ├── mockData.ts              # 15 realistic installer profiles
│       └── utils/
│           └── cn.ts                # className utility (clsx + tailwind-merge)
│
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.mjs              # PostCSS config (Tailwind v4)
└── README.md                        # This file
```

---

## Component Documentation

### 1. InstallerCard
**Location:** `src/components/installer-directory/InstallerCard.tsx`

Displays individual installer with balanced design.

**Props:**
- `installer: Installer` - Installer data object
- `onViewDetails: (installer: Installer) => void` - Click handler

**Features:**
- Medium-sized logo placeholder (80x80px)
- Skill level badge (Master/Intermediate/Novice)
- City and years of experience
- About section (2-line clamp)
- Stats row (projects completed, rating)
- "View Details" button with hover effect

### 2. InstallerFilters
**Location:** `src/components/installer-directory/InstallerFilters.tsx`

Top horizontal filter bar with search and dropdowns.

**Props:**
- `filters: FilterState` - Current filter values
- `onFilterChange: (filters: FilterState) => void` - Filter change handler
- `onClearFilters: () => void` - Clear all filters handler
- `cities: string[]` - List of cities for dropdown
- `resultCount: number` - Number of matching installers

**Features:**
- Search input with icon and clear button
- City dropdown (Radix Select)
- Skill level dropdown
- Active filter chips (removable)
- Result count display

### 3. InstallerSortMenu
**Location:** `src/components/installer-directory/InstallerSortMenu.tsx`

Dropdown menu for sorting options.

**Props:**
- `currentSort: SortOption` - Currently active sort
- `onSortChange: (sort: SortOption) => void` - Sort change handler

**Options:**
- Name (A-Z / Z-A)
- Experience (High to Low / Low to High)
- Skill Level (Master > Intermediate > Novice)

### 4. InstallerDetailSheet
**Location:** `src/components/installer-directory/InstallerDetailSheet.tsx`

Side drawer with full installer details.

**Props:**
- `installer: Installer | null` - Selected installer
- `open: boolean` - Sheet open state
- `onOpenChange: (open: boolean) => void` - Open state handler

**Features:**
- Slides in from right (520px width on desktop, 92vw on mobile)
- Quick stats grid (years, projects, rating)
- Full about section
- Specialties tags
- Certifications list
- Service area information
- Contact details (phone, email, website)
- Sticky "Request Quote" CTA button

### 5. EmptyState
**Location:** `src/components/installer-directory/EmptyState.tsx`

Displayed when no installers match filters.

**Props:**
- `onClearFilters: () => void` - Clear filters handler

**Features:**
- Visual icon with gradient background
- Helpful messaging
- "Clear All Filters" button
- Tips for broadening search

---

## Design Decisions

### Color Palette (Golf/Turf Theme)
```css
Primary Green:    #10b981 (emerald)
Dark Green:       #059669
Light Green:      #d1fae5
Accent Blue:      #3b82f6

Skill Badges:
  Master:         #f59e0b (gold)
  Intermediate:   #3b82f6 (blue)
  Novice:         #6b7280 (gray)
```

### Layout Choices
- **Top filter bar** - Clean, modern, mobile-friendly (vs. sidebar)
- **Balanced cards** - Medium images + organized info (vs. image-heavy or text-heavy)
- **Side drawer** - Inline detail view following modern UX patterns
- **3-column grid** on desktop, 2 on tablet, 1 on mobile

### Animation Strategy
- **Staggered card entrance** - 0.1s delay between cards
- **Fade-in from bottom** - Cards animate in with subtle upward motion
- **Smooth transitions** - 300-400ms for all interactions
- **Hover scale** - Cards scale to 102% on hover for feedback

### Component Architecture
- **Reusable UI primitives** - Button, Sheet, Select, Input, Badge can be used across app
- **Feature-specific components** - InstallerCard, InstallerFilters live in feature folder
- **TypeScript strict mode** - All props and data structures fully typed
- **Composition over inheritance** - Components composed from primitives

---

## Production Roadmap

If this were part of a real production application, here's what I would add:

### Backend Integration
- [ ] Replace `mockData.ts` with API calls (REST or GraphQL)
- [ ] Add pagination or infinite scroll for large datasets
- [ ] Implement server-side filtering/sorting for performance
- [ ] Add caching strategy (React Query, SWR, or Next.js caching)

### Enhanced Features
- [ ] **Map view** - Show installers on Google Maps with markers
- [ ] **Advanced filters** - Price range, availability, certifications, service radius
- [ ] **Comparison mode** - Select multiple installers to compare side-by-side
- [ ] **Reviews & ratings** - Display customer reviews, sort by rating
- [ ] **Image galleries** - Show installer portfolio photos in detail view
- [ ] **Contact forms** - In-drawer quote request form with validation
- [ ] **Favorites** - Save favorite installers (localStorage or user account)

### Performance Optimizations
- [ ] Image optimization with Next.js Image component
- [ ] Code splitting and lazy loading for detail sheet
- [ ] Debounced search input (300ms delay)
- [ ] Memoization of expensive filter/sort operations (already partially implemented)
- [ ] Virtual scrolling for very large lists (react-window or similar)

### Accessibility Enhancements
- [ ] ARIA labels and roles for all interactive elements
- [ ] Keyboard navigation for filters and cards
- [ ] Focus management in Sheet component
- [ ] Screen reader announcements for filter changes
- [ ] High contrast mode support

### Testing
- [ ] Unit tests for utility functions (cn, filter logic, sort logic)
- [ ] Component tests with React Testing Library
- [ ] E2E tests with Playwright or Cypress
- [ ] Visual regression testing (Percy, Chromatic)

### Analytics & Monitoring
- [ ] Track filter usage to understand user preferences
- [ ] Monitor which installers get the most views
- [ ] Track "Request Quote" conversion rate
- [ ] Error boundary and error tracking (Sentry)

### SEO & Marketing
- [ ] Server-side rendering for installer profiles (SEO)
- [ ] Open Graph metadata for social sharing
- [ ] Structured data markup (Schema.org)
- [ ] Sitemap generation

---

## Architecture Highlights

### 1. Component Reusability
All UI primitives (Button, Sheet, Select, etc.) are built on Radix UI and can be reused anywhere in the application. They follow a consistent API and styling pattern.

### 2. Type Safety
Every component has fully typed props, and all data structures are defined in `types.ts`. TypeScript strict mode catches errors at compile time.

### 3. Scalability
The folder structure (`components/ui` vs `components/installer-directory`) makes it easy to add new features. Want to add a "Compare Installers" feature? Create `components/installer-directory/CompareView.tsx` and reuse existing primitives.

### 4. Performance
- Memoized filter/sort logic with `React.useMemo`
- Optimized re-renders by splitting filter state
- Framer Motion's smooth animations

### 5. Maintainability
- Clear separation of concerns (UI primitives vs. feature components)
- Consistent naming conventions (PascalCase for components, camelCase for functions)
- Commented code explaining complex logic
- README documentation for future developers

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This is a test project for PuttingGreen.com. Not licensed for public use.

---

## Contact

**Built by:** Fluxium (Mukela & Rahul)
**GitHub:** [Mukela12](https://github.com/Mukela12) | [Rahulkumarhavit](https://github.com/Rahulkumarhavit)
**Project:** PuttingGreen.com Installer Directory Test Task

---

## Acknowledgments

- **Radix UI** for accessible, unstyled component primitives
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth, declarative animations
- **Lucide React** for beautiful, consistent icons
