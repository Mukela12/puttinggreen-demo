# PuttingGreen.com Installer Directory

A modern, production-ready installer directory component built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates clean architecture, premium glass morphism design, and scalable component patterns following Fluxium's elite design standards.

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
✅ **Client-side filtering** by city and skill level with native HTML selects
✅ **Real-time search** across installer names, cities, and descriptions
✅ **Multi-criteria sorting** (name, experience, skill level)
✅ **Detailed installer profiles** with side drawer (Sheet component)
✅ **Responsive design** - works beautifully on mobile, tablet, and desktop
✅ **Empty state** with helpful messaging when no results match
✅ **Active filter chips** - easily remove individual filters
✅ **Result count** - always know how many installers match your criteria

### UX/UI Highlights
✨ **Premium glass morphism design** - frosted glass effects and backdrop blur
✨ **Smooth animations** using Framer Motion (stagger effects, floating elements, fade-ins)
✨ **Real golf course images** - Dynamic images from Unsplash API
✨ **Professional sage green palette** - Premium color system matching wellness/golf aesthetics
✨ **Premium hover effects** - Transform, scale, and shadow transitions on cards and buttons
✨ **Floating animated backgrounds** - Subtle animated circles creating depth
✨ **Native HTML controls** - No external UI libraries for selects/dropdowns (clean, accessible)

---

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 16.0.5 |
| **TypeScript** | Type safety and developer experience | Latest |
| **Tailwind CSS** | Utility-first styling with glass morphism | 4.0 (v4 with @theme inline) |
| **Radix UI Dialog** | Accessible sheet/drawer component only | Latest |
| **Framer Motion** | Animation library for premium interactions | Latest |
| **Lucide React** | Icon library | Latest |
| **Unsplash API** | Dynamic golf course images | source.unsplash.com |

**Design Philosophy:** Minimal external dependencies. Native HTML selects and buttons styled with Tailwind for maximum performance and accessibility.

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
│   │   ├── globals.css              # Tailwind v4 config with sage palette & glass morphism
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Landing page with hero section
│   │   └── installers-test/
│   │       └── page.tsx             # Main installer directory page
│   │
│   ├── components/
│   │   ├── installer-directory/     # Feature components
│   │   │   ├── InstallerCard.tsx          # Premium glass card with real images
│   │   │   ├── InstallerFilters.tsx       # Glass morphism filter bar (native select)
│   │   │   ├── InstallerSortMenu.tsx      # Sort menu (native select)
│   │   │   ├── InstallerDetailSheet.tsx   # Side drawer with sage styling
│   │   │   ├── EmptyState.tsx             # No results state
│   │   │   └── types.ts                   # TypeScript interfaces
│   │   │
│   │   └── ui/                      # Minimal UI primitives
│   │       ├── sheet.tsx                  # Slide-in drawer (Radix Dialog only)
│   │       └── input.tsx                  # Text input component
│   │
│   └── lib/
│       ├── mockData.ts              # 15 realistic installer profiles
│       ├── unsplashHelper.ts        # Golf course image URL generator
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

Premium glass morphism card with real golf course images.

**Props:**
- `installer: Installer` - Installer data object
- `onViewDetails: (installer: Installer) => void` - Click handler

**Features:**
- Real golf course hero image from Unsplash (400x300px)
- Glass morphism with backdrop blur and white/80 opacity
- Skill level badge with color coding (Master/Intermediate/Novice)
- Quick stats grid (years, projects, rating)
- About section (2-line clamp)
- Premium button with gradient and hover transform
- Hover glow effect with sage green gradient

### 2. InstallerFilters
**Location:** `src/components/installer-directory/InstallerFilters.tsx`

Glass morphism filter bar with native HTML selects.

**Props:**
- `filters: FilterState` - Current filter values
- `onFilterChange: (filters: FilterState) => void` - Filter change handler
- `onClearFilters: () => void` - Clear all filters handler
- `cities: string[]` - List of cities for dropdown
- `resultCount: number` - Number of matching installers

**Features:**
- Search input with icon and clear button
- Native HTML select for city (styled with Tailwind)
- Native HTML select for skill level
- Active filter chips (removable with different colors per type)
- Result count display with icon
- Glass card background with backdrop blur

### 3. InstallerSortMenu
**Location:** `src/components/installer-directory/InstallerSortMenu.tsx`

Native HTML select menu for sorting options.

**Props:**
- `currentSort: SortOption` - Currently active sort
- `onSortChange: (sort: SortOption) => void` - Sort change handler

**Options:**
- Name (A-Z / Z-A)
- Experience (High to Low / Low to High)
- Skill Level (Master > Intermediate > Novice)

**Styling:**
- Custom dropdown arrow via background-image SVG
- Glass morphism effect
- Sage green focus ring

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

### Color Palette (Premium Sage/Wellness Theme)
```css
/* Sage Green Palette - Following wellness-frontend-1 standards */
Sage 50:          #f5f8f5 (backgrounds)
Sage 100:         #e8f1e8 (light accents)
Sage 200:         #d1e3d1
Sage 300:         #add0b3 (primary - gradients)
Sage 400:         #8fbc8f
Sage 500:         #6b8e6b (buttons, primary text)
Sage 600:         #567256 (hover states)
Sage 700:         #455b45 (dark accents)

/* Skill Badges */
Master:           #f59e0b (amber/gold)
Intermediate:     #3b82f6 (blue)
Novice:           #6b7280 (gray)

/* Glass Morphism */
Glass Background: rgba(255, 255, 255, 0.8)
Backdrop Blur:    blur(10px - 20px)
Border:           rgba(255, 255, 255, 0.2)
```

### Layout Choices
- **Glass morphism cards** - Frosted glass effect with backdrop blur
- **Floating animated backgrounds** - Subtle moving circles for depth
- **Top filter bar** - Clean, modern, mobile-friendly (vs. sidebar)
- **Real images** - Unsplash API for golf course photos
- **Side drawer** - Inline detail view following modern UX patterns
- **3-column grid** on desktop, 2 on tablet, 1 on mobile

### Animation Strategy
- **Staggered card entrance** - 0.1s delay between cards
- **Fade-in from bottom** - Cards animate in with subtle upward motion (y: 20 -> 0)
- **Floating circles** - Infinite looping animations with easeInOut (8-10s duration)
- **Smooth transitions** - 300-400ms for all interactions
- **Hover effects** - Cards scale to 102% with -translate-y-2 and enhanced shadows
- **Button transforms** - Scale and translate on hover with shadow transitions

### Component Architecture
- **Minimal dependencies** - Native HTML controls styled with Tailwind (no Radix Select/Button)
- **Only Radix Dialog** - Used for Sheet component (complex accessibility needs)
- **Feature-specific components** - InstallerCard, InstallerFilters live in feature folder
- **TypeScript strict mode** - All props and data structures fully typed
- **Glass morphism utilities** - Reusable .glass-card, .btn-primary, .select-primary classes

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

- **Radix UI Dialog** for the accessible Sheet/Drawer component
- **Tailwind CSS** for the utility-first styling approach and glass morphism capabilities
- **Framer Motion** for smooth, declarative animations and floating elements
- **Lucide React** for beautiful, consistent icons
- **Unsplash** for high-quality golf course imagery
- **wellness-frontend-1** project for design system inspiration (sage palette, glass morphism)
