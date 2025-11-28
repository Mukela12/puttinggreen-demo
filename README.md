# PuttingGreen.com Installer Directory

A modern, production-ready installer directory component built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates clean architecture, premium glass morphism design, and scalable component patterns following Fluxium's elite design standards.

**Live Demo:** [https://puttinggreen.netlify.app/](https://puttinggreen.netlify.app/)
**Installer Directory:** [https://puttinggreen.netlify.app/installers-test](https://puttinggreen.netlify.app/installers-test)

---

## Quick Start

Get the project running in 60 seconds:

```bash
# Clone the repository (or extract the ZIP file)
cd puttinggreen-installer-directory

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser and navigate to:
# http://localhost:3000              (Landing page)
# http://localhost:3000/installers-test   (Installer directory)
```

That's it! The project uses local images (no external API keys needed) and has zero configuration required.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
- [Design Decisions](#design-decisions)
- [Production Roadmap](#production-roadmap)
- [Architecture Highlights](#architecture-highlights)

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
| **Local Images** | 15 card images + 3 hero images + portfolio images | Stored in /public/images |

**Design Philosophy:** Minimal external dependencies. Native HTML selects and buttons styled with Tailwind. All images stored locally for 100% reliability (no external API dependencies).

---

## Getting Started

### Prerequisites
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A **code editor** (optional) - [VS Code](https://code.visualstudio.com/) recommended

### Installation & Running Locally

```bash
# Clone the repository (or extract ZIP file)
cd puttinggreen-installer-directory

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser and navigate to:
# http://localhost:3000                    (Landing page)
# http://localhost:3000/installers-test    (Installer directory)
```

The installer directory is available at `/installers-test` route.

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

### Other Commands

```bash
# Run TypeScript type checking
npx tsc --noEmit

# Run linting
npm run lint
```

### Common Issues & Troubleshooting

**"npm: command not found"**
- Install Node.js from [nodejs.org](https://nodejs.org/)

**"Port 3000 is already in use"**
- Stop other applications using port 3000, or
- Run `npm run dev -- -p 3001` to use a different port

**"Module not found" errors**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Images not showing**
- Verify `/public/images/golf/` folder exists with:
  - `/cards/` - 15 card images
  - `/hero/` - 3 hero images
  - `/portfolio/` - 15 installer directories

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
│   │       ├── page.tsx             # Main installer directory page
│   │       └── [id]/
│   │           └── page.tsx         # Individual installer detail page (dynamic route)
│   │
│   ├── components/
│   │   ├── installer-directory/     # Feature components
│   │   │   ├── InstallerCard.tsx            # Premium glass card with local images
│   │   │   ├── InstallerFilters.tsx         # Glass morphism filter bar (native select)
│   │   │   ├── InstallerSortMenu.tsx        # Sort menu (native select)
│   │   │   ├── InstallerDetailSheet.tsx     # Side drawer with sage styling
│   │   │   ├── QuoteRequestDialog.tsx       # Quote request form dialog
│   │   │   ├── EmptyState.tsx               # No results state
│   │   │   └── types.ts                     # TypeScript interfaces
│   │   │
│   │   └── ui/                      # Minimal UI primitives
│   │       ├── sheet.tsx                    # Slide-in drawer (Radix Dialog)
│   │       ├── dialog.tsx                   # Modal dialog (Radix Dialog)
│   │       ├── input.tsx                    # Text input component
│   │       ├── label.tsx                    # Form label component
│   │       ├── textarea.tsx                 # Textarea component
│   │       ├── Lightbox.tsx                 # Image lightbox for portfolio viewing
│   │       └── ProfileGallery.tsx           # Image gallery with carousel
│   │
│   └── lib/
│       ├── mockData.ts              # 15 realistic installer profiles with portfolio images
│       ├── localImageHelper.ts      # Local image path generator (no API dependencies!)
│       └── utils/
│           └── cn.ts                # className utility (clsx + tailwind-merge)
│
├── public/
│   └── images/
│       └── golf/
│           ├── cards/               # 15 installer card images (golf-1.jpg to golf-15.jpg)
│           ├── hero/                # 3 hero images for landing page
│           └── portfolio/           # Portfolio images for each installer
│               ├── installer-1/     # 12 images per installer
│               ├── installer-2/     # 10 images per installer
│               └── ... (15 total)   # Variable number of portfolio images
│
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.mjs              # PostCSS config (Tailwind v4)
└── README.md                        # This file (comprehensive documentation)
```

---

## Component Documentation

### Core Components

### 1. InstallerCard
**Location:** `src/components/installer-directory/InstallerCard.tsx`

Premium glass morphism card with local golf course images.

**Props:**
- `installer: Installer` - Installer data object
- `onViewDetails: (installer: Installer) => void` - Click handler

**Features:**
- Real golf course hero image from local storage (400x300px optimized)
- Glass morphism with backdrop blur and white/80 opacity
- Skill level badge with color coding (Master/Intermediate/Novice)
- Quick stats grid (years, projects, rating)
- About section (2-line clamp)
- Premium button with gradient and hover transform
- Hover glow effect with sage green gradient
- Consistent image per installer using hash-based selection

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

### 6. QuoteRequestDialog
**Location:** `src/components/installer-directory/QuoteRequestDialog.tsx`

Modal dialog for requesting quotes from installers.

**Props:**
- `open: boolean` - Dialog open state
- `onOpenChange: (open: boolean) => void` - Open state handler
- `installerName: string` - Name of installer to request quote from

**Features:**
- Form with name, email, phone, and message fields
- Input validation
- Sage green styling matching overall theme
- Smooth animations with Framer Motion
- Accessible modal (Radix UI Dialog)

### 7. Lightbox
**Location:** `src/components/ui/Lightbox.tsx`

Full-screen image viewer for portfolio images.

**Props:**
- `images: string[]` - Array of image URLs
- `currentIndex: number` - Currently displayed image index
- `onClose: () => void` - Close handler
- `onNavigate: (index: number) => void` - Navigation handler

**Features:**
- Full-screen overlay with backdrop blur
- Previous/Next navigation buttons
- Keyboard support (arrow keys, escape)
- Image counter display
- Smooth transitions
- Click outside to close

### 8. ProfileGallery
**Location:** `src/components/ui/ProfileGallery.tsx`

Image carousel gallery using Embla Carousel.

**Props:**
- `images: string[]` - Array of image URLs to display
- `onImageClick: (index: number) => void` - Image click handler (opens lightbox)

**Features:**
- Smooth carousel with autoplay
- Thumbnail navigation
- Click to open in lightbox
- Responsive grid layout
- Glass morphism container
- Automatic cycling every 5 seconds

---

## Design Decisions

### Local Image System (No External Dependencies!)

One of the key architectural decisions is using **locally stored images** instead of external APIs like Unsplash. This provides:

**Benefits:**
- ✅ **100% Reliability** - No network failures or API rate limits
- ✅ **Zero Configuration** - No API keys or environment variables needed
- ✅ **Faster Load Times** - Images served directly from CDN/server
- ✅ **Offline Development** - Work without internet connection
- ✅ **Consistent Quality** - Curated, optimized images

**Image Organization:**
```
public/images/golf/
├── cards/          # 15 installer card images (golf-1.jpg to golf-15.jpg)
├── hero/           # 3 hero background images for landing page
└── portfolio/      # 15 installer directories with 8-12 portfolio images each
```

**How It Works:**
- `localImageHelper.ts` uses a hash function to consistently assign the same image to each installer
- Each installer gets a unique card image based on their ID
- Portfolio images are stored in installer-specific directories
- Hero images rotate for the landing page

**For Production:**
If you later want to switch to a real image API or user-uploaded images:
1. Replace `getInstallerImage()` calls with your API endpoint
2. Update the `Installer` type to include an `imageUrl` field
3. The component structure remains the same - just swap the image source!

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
- **Real images** - Locally stored high-quality golf course photos
- **Side drawer** - Inline detail view following modern UX patterns
- **3-column grid** on desktop, 2 on tablet, 1 on mobile
- **Dynamic routing** - Individual installer pages at `/installers-test/[id]`
- **Portfolio galleries** - Carousel with lightbox for viewing installer work

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

## Deployment

The project is already deployed at **[https://puttinggreen.netlify.app/](https://puttinggreen.netlify.app/)**

### Deploy to Netlify (Current Setup)

The project is already configured for Netlify. To deploy your own copy:

1. **Push to GitHub** (if not already done):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/puttinggreen-installer-directory.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select the repository
   - Build settings (auto-detected):
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
     - **Framework:** Next.js
   - Click "Deploy site"

3. **Access your site**:
   - Netlify provides a URL like: `https://your-site-name.netlify.app`
   - The installer directory is at: `/installers-test`

### Deploy to Vercel (Alternative)

Vercel is the recommended platform for Next.js:

**Option 1: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Option 2: Vercel Dashboard**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js configuration
4. Click "Deploy"

### Environment Variables

This project requires **no environment variables** for the test task. All images are local and there are no external API dependencies.

For production, you might add:
```env
NEXT_PUBLIC_API_URL=https://api.puttinggreen.com
DATABASE_URL=postgresql://...
```

### Custom Domain (Optional)

To use a custom domain:
1. Go to your deployment dashboard (Netlify/Vercel)
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed

### Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get automatic preview deployments
- Each deployment gets a unique URL for testing

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
