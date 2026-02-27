# Evolotek Website

A modern, full-stack company website built with Next.js, React, and TypeScript. The application serves as a digital presence for Evolotek, a technology consulting and product development firm, featuring service offerings, portfolio work, career opportunities, and company culture.

## Project Overview

**Type:** Static Site Generation (SSG) with Client-Side Rendering  
**Status:** Production  
**Architecture:** Feature-based with predominantly client components

This is a Next.js 16 application configured for static export (`output: 'export'`), generating pre-rendered HTML at build time with no server-side runtime required. All route pages are marked with `'use client'` for client-side interactivity. The site consists of multiple informational and interactive pages including a homepage with custom cursor effects, services showcase, portfolio/work details, careers hub with job applications, startup partnership forms, and company culture documentation.

## Tech Stack

### Core Framework & Language
- **Next.js:** 16.0.10 (React framework configured for static export/SSG)
- **React:** 18.2.0 (Client Component-heavy architecture)
- **TypeScript:** 5.2.2 (strict mode enabled)
- **Node.js:** Runtime for build and development only (not production)

### Styling & UI
- **Tailwind CSS:** 3.3.3 (utility-first CSS framework)
- **PostCSS:** 8.5.6 (CSS processing with Autoprefixer 10.4.15)
- **CSS Modules:** Extensively used for component-scoped styling (26 .module.css files)
- **Global CSS:** globals.css for animations and theme configuration
- **Tailwind Plugins:** 
  - tailwindcss-animate (1.0.7) - Animation utilities
  - class-variance-authority (0.7.0) - Component variant management
  - tailwind-merge (2.5.2) - Intelligent class merging

### UI Component Library
- **shadcn/ui components** - Pre-built accessible components using Radix UI
- **Radix UI:** Comprehensive headless UI component library
  - Accordion, Dialog, Dropdown Menu, Select, Tabs, Tooltip, Form inputs, etc.
- **Lucide React:** 0.446.0 (icon library)
- **cmdk:** 1.0.0 (Command menu component)

### Animation & Interactions
- **Framer Motion:** 12.23.24 (motion graphics library)
  - Used for fade-in, slide, and stagger animations across pages
  - Defined animation variants in `lib/animations.ts`
- **Embla Carousel React:** 8.3.0 (carousel/slider component)
- **react-resizable-panels:** 2.1.3 (resizable panel layouts)
- **vaul:** 0.9.9 (drawer component)

### Form Handling & Validation
- **react-hook-form:** 7.53.0 (performant form library)
- **@hookform/resolvers:** 3.9.0 (form validation adapters)
- **Zod:** 3.23.8 (TypeScript-first schema validation)
- **Formspree:** 3.0.0 (form submission service)

### Data & Utilities
- **date-fns:** 3.6.0 (date manipulation library)
- **react-day-picker:** 8.10.1 (date picker component)
- **recharts:** 2.12.7 (charting and data visualization library)
- **clsx:** 2.1.1 (conditional class name utility)

### Infrastructure & Services
- **Supabase:** 2.58.0 (backend-as-a-service; unused in current codebase)
- **next-themes:** 0.3.0 (dark mode theme management)

### Development & Quality
- **ESLint:** 8.49.0 (Next.js core-web-vitals config)
- **TypeScript:** Strict mode enabled with full DOM/ESNext typing
- **Autoprefixer:** CSS vendor prefix automation

### Asset Optimization
- **Image optimization:** Next.js Inter for body, Libre Baskerville as serif fallb` (static export mode)
- **Font loading:** Google Fonts (Libre Baskerville, system sans-serif stack)

## Architecture & Folder Structure

```
evolotek-website/
├── app/                          # Next.js App Router (primary source)
│   ├── layout.tsx                # Root layout with Navigation & Footer
│   ├── page.tsx                  # Homepage with custom cursor effects
│   ├── globals.css               # Global styles, animations, gradients
│   ├── api/
│   │   └── partnerships/         # Empty API routes (no active endpoints)
│   ├── work/
│   │   ├── page.tsx              # Portfolio listing page
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic project detail pages
│   │   └── equalum/              # Specific project folder
│   ├── services/
│   │   └── page.tsx              # Services showcase page
│   ├── startup/
│   │   └── page.tsx              # Startup partnership page
│   ├── careers/
│   │   └── page.tsx              # Careers hub with job listings
│   ├── culture/
│   │   └── page.tsx              # Company culture documentation
│   ├── contact/
│   │   └── page.tsx              # Contact form with Formspree
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy page
│   ├── terms/
│   │   └── page.tsx              # Terms of service page
│   ├── insights/
│   │   └── page.tsx              # Insights/blog page (placeholder)
│   ├── components/               # Feature-based page components
│   │   ├── careers/
│   │   │   ├── CareersHero.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── JobListings.tsx   # Job listing with filtering
│   │   │   ├── ApplicationModal.tsx # Application form modal
│   │   │   └── CareersCTA.tsx
│   │   ├── services/
│   │   │   ├── ServicesHero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── ServiceCard.tsx   # Individual service card
│   │   │   ├── ServiceDetails.tsx
│   │   │   └── ServiceDetailsSection.tsx
│   │   ├── startup/
│   │   │   ├── StartupHero.tsx
│   │   │   ├── StartupServices.tsx
│   │   │   ├── HowWeWork.tsx
│   │   │   ├── Portfolio.tsx     # Scrolling logo carousel
│   │   │   ├── PartnershipForm.tsx # Multi-step startup form
│   │   │   └── CTASection.tsx
│   │   ├── work/
│   │   │   ├── WorkHero.tsx
│   │   │   ├── WorkDetailHero.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── ProjectMetadata.tsx
│   │   │   ├── ContentSection.tsx
│   │   │   ├── TechStack.tsx
│   │   │   └── ResultsSection.tsx
│   │   ├── contact/
│   │   │   └── ContactHero.tsx
│   │   └── careers/ [CSS-only styling modules]
│   ├── styles/                   # CSS Modules and global styles
│   │   ├── work-section.css      # Work page bento grid layout
│   │   ├── careers/
│   │   │   ├── JobListings.module.css
│   │   │   ├── ApplicationModal.module.css
│   │   │   ├── BenefitsSection.module.css
│   │   │   ├── CareersCTA.module.css
│   │   │   └── CareersHero.module.css
│   │   ├── startup/
│   │   │   ├── PartnershipForm.module.css
│   │   │   ├── HowWeWork.module.css
│   │   │   ├── Portfolio.module.css
│   │   │   └── CTASection.module.css
│   │   ├── services/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── culture/
│   │   └── work/
│   └── utils/
│       └── animations.ts         # Framer Motion animation variants
├── components/                   # Shared root-level components
│   ├── Navigation.tsx            # Header with responsive menu
│   ├── Footer.tsx                # Footer with social links
│   ├── HowWeWork.tsx
│   ├── LetsWorkTogether.tsx
│   ├── OurPrinciples.tsx
│   ├── OurWorkSection.tsx
│   ├── ServicesCarousel.tsx
│   └── ui/                       # shadcn/ui components (generated)
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx            # Recharts wrapper
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── select.tsx
│       ├── tabs.tsx
│       └── [20+ more UI components]
├── hooks/
│   └── use-toast.ts             # Toast notification hook
├── lib/
│   ├── projectsData.ts          # Portfolio projects data & types
│   ├── cultureData.ts           # Company values, culture data
│   └── utils.ts                 # Utility functions (clsx, cn)
├── public/
│   └── images/                  # Static images
│       ├── evolotek-logo.*
│       ├── service-detail-*.{jpg,png}
│       ├── sipstr-logo.png
│       ├── [other project logos]
│       └── [company images]
├── styles/                      # Root styles directory
├── .eslintrc.json               # ESLint config (Next.js core-web-vitals)
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS plugins
├── next.config.js               # Next.js config (static export)
├── components.json              # shadcn/ui configuration
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore rules
├── .env                         # Environment variables (empty)
└── [other config files]
```

### Architecture Style

**Feature-based architecture** with page-level organization:
- Organized by feature/page (careers, services, work, startup, contact)
- Shared components in `/components` for reuse
- Utility functions and data in `/lib`
- Styles colocated with features using CSS Modules

## Animations & UI Behavior

### Animation Libraries & Implementations

**Framer Motion (12.23.24)** is the primary animation library:
- **Fade-in animations:** Used on hero sections, headings, and content blocks
- **Slide animations:** Elements slide in from top/bottom with easing
- **Stagger animations:** Multiple child elements animate sequentially
- **View-triggered animations:** `whileInView` triggers animations as elements enter viewport
- **Variants defined in** `app/utils/animations.ts`:
  - `fadeInUpVariants` - Fade in with upward motion
  - `slideInTopVariants` - Slide from top
  - `slideInBottomVariants` - Slide from bottom
  - `cardLeftVariants`, `cardMiddleVariants`, `cardRightVariants` - Card stagger effects
  - `staggerContainerVariants` - Parent container for staggered children

**CSS Animations:**
- Gradient shift animation (`gradientShift` 8s) - Animated background on homepage
- Scroll animation - Portfolio logo carousel auto-scrolls
- Custom cursor glow effect - Homepage only with radial gradient
- Spin animation - Loading spinners in modals and forms
- FadeSlideUp animation - Smooth entrance animations

**Embla Carousel (8.3.0):**
- Used for responsive carousels/sliders
- Present in services carousel and portfolio sections

**Performance Considerations:**
- Animations respect `prefers-reduced-motion` media query for accessibility
- Use of `requestAnimationFrame` in custom cursor glow effect for smooth 60fps rendering
- CSS transforms and opacity preferred over layout-affecting properties
- Animations use `ease-out` for natural deceleration

### Interactive Components

- **Custom cursor:** Homepage-only glow effect that tracks mouse movement
- **Modal dialogs:** ApplicationModal for job applications, PartnershipForm for startup inquiries
- **Expandable job cards:** Click to expand/collapse job details
- **Form validation:** Real-time error messages with visual feedback
- **Carousel:** Scrolling logo carousel on startup page

## Implemented Features

### Pages & Routes

1. **Homepage** (`/`) - Landing page with custom cursor glow, service carousel, portfolio preview, principles, culture highlights
2. **Services** (`/services`) - Service offerings with detailed descriptions (AI Solutions, Engineering, Product Management, Cybersecurity, Business Process Optimization)
3. **Work / Portfolio** (`/work`) - Project listing page showing client portfolio with bento grid layout
4. **Work Detail** (`/work/[slug]`) - Dynamic project detail pages with metadata, challenge/solution, features, technologies, results, testimonials
5. **Startup** (`/startup`) - Startup partnership program with multi-step partnership form
6. **Careers** (`/careers`) - Job listings with department filtering, job details, and application modal
7. **Culture** (`/culture`) - Company values, principles, culture documentation with team metrics
8. **Contact** (`/contact`) - Contact form with email input, message fields, and Formspree integration
9. **Insights** (`/insights`) - Placeholder page
10. **Privacy** (`/privacy`) - Privacy policy
11. **Terms** (`/terms`) - Terms of service

### Interactive Features

#### Job Application System
- **JobListings component:** Department filtering, expandable job cards
- **ApplicationModal:** Modal form with fields:
  - Full name, email, phone (required)
  - LinkedIn profile URL (optional)
  - Resume link (required, URL validation)
  - Cover letter (optional)
  - File validation and error handling
  - Success/error states with retry logic
- **Formspree integration:** Form submissions to `https://formspree.io/f/xgvgzzyg`
- **Accessibility:** Focus management, keyboard navigation (Tab/Escape), ARIA labels, screen reader support

#### Startup Partnership Form
- **Multi-step form:** Progressive disclosure of fields
- **Dynamic sector selection:** Predefined options or custom input
- **Form validation:** Real-time feedback
- **State management:** Complex form state with step navigation
- **Success tracking:** Post-submission confirmation

#### Services Showcase
- **ServiceDetailsSection:6 services
  1. AI & Advanced Analytics - AI agents, GenAI, and predictive intelligence
  2. Engineering - System architecture, API design, DevOps, modernization
  3. Product Management - Strategy, design, go-to-market
  4. Cloud & Infrastructure - FinOps, automation, multi-cloud
  5. Cybersecurity & Risk - Security, compliance, risk management
  6. Talent Solutions - Staff augmentation, managed teams, RPO, recruitment
- **Service categories:** AI Solutions, Engineering, Product Management, Cybersecurity, Business Process Optimization

#### Portfolio/Work Details
- **Dynamic routing:** `/work/[slug]` for individual projects
- **Rich project data:** Challenge, solution, features, technologies, results, gallery, testimonials
- **Bento grid layout:** Responsive grid for project preview cards
- **Static generation:** Pre-rendered pages from `projectsData`

### Forms & Validation

- **Contact form:** Name, email, company, message with Formspree backend
- **Application modal:** Email validation (RFC pattern), URL validation for resume links
- **Partnership form:** Multi-field validation with custom error messages
- **Zod integration:** Schema validation available in codebase (imported but not heavily used yet)

### Data Management

**Static data stored in:**
- `lib/projectsData.ts` - Portfolio projects with full details, metrics, technologies
- `lib/cultureData.ts` - Company values, principles, growth categories, team metrics
- Hardcoded job listings in `app/components/careers/JobListings.tsx`

### SEO & Meta Tags

- **Root metadata:** Title "Evolotek", description about reinvention and experience partnership
- **Dynamic metadata:** Generated for project detail pages using `generateMetadata`
- **Open Graph tags:** Project title, description, and cover image included
- **Viewport configuration:** Responsive design with proper viewport scaling

### Other Features

- **Responsive design:** Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl)
- **Dark mode support:** next-themes integration available
- **Image optimization:** Next.js Image component configured for static export
- **Font loading:** Google Fonts (Libre Baskerville) with system font fallbacks
- **Social links:** Footer with LinkedIn, for all pages (no Node.js server runtime after build)
- `images: { unoptimized: true }` - Disable Next.js image optimization (required for static export)
- `trailingSlash: true` - Add trailing slashes to all URLs

**tsconfig.json:**
- `strict: true` - Strict type checking enabled across entire codebase
- `jsx: "react-jsx"` - React 17+ JSX transform (no need for React import in jsx files)
- Path aliases: `@/*` resolves to root directory for cleaner importsde.js runtime required)
- `images: { unoptimized: true }` - Disable Next.js image optimization for static export
- `trailingSlash: true` - Add trailing slashes to URLs

**tsconfig.json:**
- `strict: true` - Strict type checking enabled
- `jsx: "react-jsx"` - React 17+ JSX transform
- Path aliases: `@/*` resolves to root directory

**.env File:**
- Currently empty
- Prepared for environment variables but none in use yet
- `.env.local` should be used for local development secrets

**components.json (shadcn/ui):**
- Configured for React Server Components (RSC mode)
- Tailwind CSS integration with CSS variable theme
- TypeScript components (.tsx)
- Aliases for `@/components`, `@/hooks`, `@/lib`, `@/ui`

### Styling Configuration

**tailwind.config.ts:**
- Dark mode via class strategy
- CSS variable-based color system
- Extended theme with custom colors, border radius, keyframes
- Plugins: tailwindcss-animate

**postcss.config.js:**
- Autoprefixer for vendor prefixes
- Tailwind CSS processing

## Scripts & Commands

```bash
# Development
npm run dev          # Start development server (next dev) on http://localhost:3000

# Production
npm run build        # Build for static export (next build)
npm run start        # Start production server (next start)

# Code Quality
npm run lint         # Run ESLint (next lint)
npm run typecheck    # Run TypeScript type checking (tsc --noEmit)
```

**Build output:**
- Confirmed:** Static hosting platform required (Vercel, Netlify, AWS S3+CloudFront, GitHub Pages, or similar)
- Built with `output: 'export'` for pure static generation
- **No Node.js runtime required** after build - deploy `/out` folder only
- No server API routes in use (partnerships endpoint exists but is empty)

### Build Process

1. **Development:** `npm run dev` - Next.js dev server with hot reload on `http://localhost:3000`
2. **Production Build:** `npm run build` - Generates static HTML in `/out` directory
3. **Deployment:** Upload `/out` directory to static hosting (no build step needed)
4. No CI/CD pipelines detected in repository

### Hosting Considerations

- **All pages pre-rendered at build time** - No dynamic server rendering in production
- **Static-only:** Form submissions routed to external services (Formspree for contact/jobs)
- **Static assets** in `/public` directory bundled with export
- **Build time increases** with project count - Each dynamic route pre-rendered
- **No server-side** environment variables or secrets possible (static-only deployment

### Hosting Considerations

- All pages pre-rendered at build time (no dynamic SSR)
- Static assets in `/public` directory
- Image assets (logos, project images, service details) included in static export
- Form submissions routed through extfunction signatures
- Type-safe data structures in `projectsData.ts` and `cultureData.ts`
- All route pages and components properly typed

### Linting

- **ESLint 8.49.0** with Next.js `core-web-vitals` configuration
- Enforces React and Next.js best practices
- No additional custom ESLint rules configured
- ESLint config minimal: extends `next/core-web-vitals` only

### Formatting

- **No Prettier configuration** - Code formatting not explicitly enforced
- No pre-commit hooks (Husky) detected
- Inconsistent formatting possible across team

### Testing

**No testing framework detected** - Critical Missing:
- No Jest/Vitest configuration
- No unit tests for components
- No integration tests for forms or interactive features
- No E2E tests (Cypress/Playwright)
- No test files or directories in codebase
### Testing

**No testing framework detected** - Missing:
- Jest/Vitest configuration
- Unit tests for components
- Integration tests for forms
- E2E tests for user flows
- Test files or directories

## Browser & Device Support

### Responsive Design

Implemented via Tailwind CSS breakpoints:
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Component-specific media queries for custom layouts (e.g., bento grid transforms at 768px)

### Browser Features Used

- **CSS Grid & Flexbox** - Layout foundation
- **CSS Custom Properties (Variables)** - Color theming system
- **CSS Animations & Transitions** - Keyframe animations
- **Media Queries** - Responsive breakpoints and prefers-reduced-motion
- **Modern JavaScript (ES2020+)** - Optional chaining, nullish coalescing
- **Fetch API** - Form submissions to external services

### Known Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required
- Reduced motion support for accessibility

## Security Considerations

### Form Submissions

- **Formspree backend:** External service handles email delivery
- **CORS headers:** Configured in Formspree for cross-origin requests
- **No sensitive data in code:** API endpoints use external form service
- **Environment variables:** Prepared but not currently in use

### Content Security

- **No hardcoded credentials** in code
- **Client-side validation only** - Server-side validation should be added
- **Supabase dependency included** (^2.58.0) but not utilized

### Potential Vulnerabilities

- **Client-side form validation only** - No server-side validation for job applications
- **URL validation** relies on `URL()` constructor
- **Email validation** uses regex pattern (RFC-like but not RFC 5322 compliant)
- **Form data sent to external service** - Ensure Formspree GDPR/privacy compliance

### Recommendations

- Implement server-side form validation
- Use a more robust email validation library
- Consider implement - BLOCKER
   - No Jest/Vitest configuration
   - No unit tests for any components
   - No integration tests for critical forms (job applications, contact, partnerships)
   - No E2E tests for user workflows
   - Cannot verify code changes with confidence

2. **Server-Side Validation & Processing** - SECURITY RISK
   - Form submissions rely on client-side validation only
   - Email regex validation is not RFC 5322 compliant
   - No server to validate/sanitize data before external services
   - Cannot implement rate limiting or spam protection
   - User input trust boundary at browser level only

3. **Error Boundaries & Error Pages** - UX ISSUE
   - No React Error Boundary components
   - Custom error.tsx not implemented (uses Next.js default)
   - Custom 404.tsx not implemented
   - Runtime errors in components not caught gracefully

4. **Logging & Monitoring** - OPS BLINDNESS
   - No analytics (Google Analytics, Mixpanel, Amplitude missing)
   - No error tracking (Sentry, LogRocket, Rollbar missing)
   - No application performance monitoring (APM)
   - No request/response logging
   - Cannot diagnose production issues

5. **Deployment Guide** - Missing instructions for:
   - Vercel deployment steps
   - Netlify deployment steps  
   - AWS S3+CloudFront setup
   - GitHub Pages deployment
   - Redeploying after content changes

7. **Developer Onboarding** - Missing:
   - Setup guide for new developers
   - Project structure explanation for newcomers
   - Component development patterns
   - Style guide for CSS Modules vs Tailwind

8. **Component Library** - Missing:
 0. **Prettier configuration** - No code formatter:
    - Team code style inconsistency possible
    - No automated formatting in CI/CD
    
11. **Pre-commit hooks** - No Husky/lint-staged:
    - Lintin & SEO

13. **Accessibility** - WCAG 2.1 compliance unknown:
    - No accessibility audit performed
    - Limited ARIA labels in custom components
    - Modal focus management partially implemented
    
14. **Performance** - No optimization documentation:
    - PageSpeed Insights optimization missing
    - No Lighthouse CI setup
    - Image lazy-loading not verified
17. **CI/CD Pipeline** - Missing:
    - No GitHub Actions workflow
    - No GitLab CI configuration
    - No automated builds or deployments
    - No pre-push checks
    Data Handling

21. **Real-time form validation** - Not implemented:
    - Validation only on form submit
    - No live error feedback as user types
    - Poor UX for form discovery
    
22. **File uploads** - Limited:
    - Resume link only (URL paste)
    Additional Missing Items

25. **Build optimization** - No bundle analysis:
    - webpack-bundle-analyzer not configured
    - Unused dependencies unknown
    
26. **Internationalization (i18n)** - Not supported:
    - Single language (English) only
    - No multi-language setup
    
27. **Progressive Web App (PWA)** - Not implemented:
    - No service worker
    - No offline support
    - No manifest.json
    
28. **Dependency updates** - No automation:
    - No Dependabot
    - No automated security scanning
    - Manual dependency maintenance required
    - No CAPTCHA/reCAPTCHA
    - No honeypot fields
    - Vulnerable to bot submissions
    
24. **User confirmations** - Missing:
    - No confirmation emails to applicants
    - No job application status tracking
    - No partnership inquiry follow-up mechanism
19. **Backend Services** - Unused:
    - Supabase installed (v2.58.0) but never used
    - No database integration
    
20. **Caching Strategy** - Not documented:
    - No cache headers for static assets
    - No CDN caching configuration
    - No service worker (PWA) support
    - Meta descriptions only on homepage
    - No Open Graph images for social sharing
    - No JSON-LD structured data (Schema.org)
    
16. **Dark mode** - Partially implemented:
    - next-themes installed (v0.3.0)
    - No dark mode color scheme implemented
    - CSS variables prepared but unus
   - Formspree configuration guide
   - Adding new forms instructions
   - Form field validation rules documented

4. **Logging & Monitoring**
   - No analytics integration
   - No error tracking (Sentry, LogRocket)
   - No application performance monitoring (APM)

5. **API Routes Implementation**
   - `/api/partnerships` folder exists but is empty
   - Should implement backend endpoints for form submissions
   - Currently relies entirely on Formspree for form handling

### Documentation

6. **README (this file)** - Newly created
7. **Deployment documentation** - Instructions for deployment to specific platforms
8. **Environment setup documentation** - Guide for new developers
9. **Component storybook** - No component documentation
10. **API documentation** - No API docs (minimal API surface)

### Code Quality

11. **Prettier configuration** - No code formatter setup
12. **Pre-commit hooks** - No Husky/lint-staged setup
13. **TypeScript strict checks** - Already enabled, but some any types may exist
14. **Component documentation** - JSDoc comments missing on public components

### Features

15. **Accessibility audits** - WCAG 2.1 compliance verification missing
16. **Performance optimization** - No PageSpeed Insights optimization documented
17. **SEO sitemap** - No sitemap.xml
18. **robots.txt** - Not included
19. **Analytics** - Google Analytics or alternative not configured
20. **Dark mode implementation** - next-themes installed but not fully implemented

### Infrastructure

21. **CI/CD pipeline** - No GitHub Actions, GitLab CI, or similar
22. **Environment file template** - No `.env.example`
23. **Database integration** - Supabase installed but unused
24. **Caching strategy** - No cache headers or CDN configuration documented

### Forms & Validation

25. **Real-time form validation** - Validation happens on submit, not real-time
26. **File upload support** - Resume link only, no direct file upload
27. **Rate limiting** - No protection against form spam
28. **Confirmation emails** - User doesn't receive confirmation of submission

### SEO & Marketing

29. **Meta descriptions** - Only on root page
30. **Structured data (Schema.org)** - No JSON-LD markup for company, jobs, or projects
31. **OG image generation** - Static OG images only
32. **Canonical tags** - Not explicitly set

