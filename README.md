# Portfolio — Santiago Hijazo Tejada

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CF649B?style=for-the-badge&logo=sass&logoColor=white)
![SSG](https://img.shields.io/badge/SSG-Prerendered-00C853?style=for-the-badge&logo=digitalocean&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

Personal developer portfolio — a fully prerendered single-page application built with Angular 19, featuring bilingual support (ES/EN), dark/light theme toggle, scroll animations, and a functional contact form.

**[Live Demo →](https://santihijazo.netlify.app)**

## Tech Stack

- **Angular 19.2.21** — standalone components, signals, `inject()` DI, `@angular/ssr` for static site generation
- **TypeScript 5.7** — strict mode enabled
- **SCSS** — CSS custom properties, responsive mixins, theme-aware tokens
- **EmailJS** — contact form email delivery (free tier)
- **Karma + Jasmine** — unit testing with headless Chrome

## Features

- **Static Site Generation (SSG)** — fully prerendered at build time via `@angular/ssr`, no server runtime needed
- **Dark/Light theme** — toggle with `localStorage` persistence, FOUC-safe inline script, SSR-compatible
- **Bilingual i18n (ES/EN)** — signal-based translations with reactive rendering on language switch
- **Scroll reveal animations** — IntersectionObserver-based with `prefers-reduced-motion` support
- **SEO optimized** — dynamic `<title>`, meta description, Open Graph + Twitter Card tags, canonical URL, JSON-LD structured data (`Person`)
- **Project screenshots** — webp images in dark full-bleed style with cover overlays
- **Animated stat counters** — requestAnimationFrame-driven with `IntersectionObserver` triggers
- **Skills by category** — 26 skills grouped into 6 categories (frontend, backend, databases, tools, architectures, practices)
- **3-timeline experience section** — work history, education, and certifications in stacked timelines
- **Contact form** — template-driven forms with EmailJS integration and auto-dismiss feedback
- **CV download** — PDF download button in the about section
- **Mobile-first responsive** — fluid layout with breakpoints at `sm`, `md`, `lg`, `xl`
- **Accessibility** — skip link, ARIA labels, `aria-current` nav, `focus-visible` outlines, landmark regions

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI 19 (`npm install -g @angular/cli`)

### Installation

```bash
git clone https://github.com/sahite89/portfolio.git
cd portfolio
npm install
```

### Development

```bash
ng serve
```

Open `http://localhost:4200/`. The app reloads automatically on file changes.

### Production Build

```bash
ng build
```

Output is generated in `dist/portfolio/browser/` as a fully prerendered static site. The build uses `outputMode: "static"` — there is **no server bundle** in the output. Deploy the `dist/portfolio/browser/` directory to any static host.

> **Note:** Angular is pinned to **19.2.21** because versions 19.2.22–19.2.25 have a prerendering regression ([angular-cli#33184](https://github.com/angular/angular-cli/issues/33184)) where `allowedHosts` validation rejects prerender requests.

### Tests

```bash
ng test
```

Runs unit tests with Karma + Jasmine in headless Chrome.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Fixed navbar with logo, nav links, theme + language toggles
│   │   ├── hero/            # Landing section with name, title, and CTA
│   │   ├── about/           # Bio, animated stat counters, and CV download
│   │   ├── projects/        # Project cards with screenshots, type badges, and tech tags
│   │   ├── skills/          # Skills grid grouped by 6 categories with DevIcons
│   │   ├── experience/      # Stacked timelines: work, education, certifications
│   │   ├── contact/         # Contact form and social links
│   │   └── footer/          # Footer with dynamic copyright year
│   ├── services/
│   │   ├── translation.service.ts  # Signal-based i18n (ES/EN toggle)
│   │   ├── email.service.ts        # EmailJS wrapper (lazy browser-only init)
│   │   ├── seo.service.ts          # Dynamic meta tags, OG, Twitter Card, JSON-LD
│   │   └── theme.service.ts        # Dark/light toggle with localStorage persistence
│   ├── directives/
│   │   └── scroll-reveal.directive.ts  # IntersectionObserver reveal animations
│   ├── data/
│   │   └── skills.data.ts       # Skill definitions (26 items with categories)
│   ├── i18n/
│   │   ├── translations-es.ts   # Spanish translations (full UI text + data)
│   │   └── translations-en.ts   # English translations (full UI text + data)
│   ├── models/
│   │   └── portfolio.model.ts   # Interfaces: Project, Skill, TimelineItem, StatItem, Translation
│   ├── app.component.ts         # Root component (imports all sections)
│   ├── app.config.ts            # Client config (router, zone, hydration)
│   ├── app.config.server.ts     # Server config (SSR rendering)
│   └── app.routes.ts            # Empty routes (single-page, no routing)
├── main.ts                       # Client bootstrap
├── main.server.ts                # Server bootstrap
├── server.ts                     # Express + CommonEngine SSR server
├── environments/
│   ├── environment.ts            # Dev environment (EmailJS config, siteUrl)
│   └── environment.prod.ts       # Prod environment (file-replaced at build)
├── _variables.scss               # CSS custom properties (color palette, shadows)
├── _mixins.scss                  # SCSS mixins (breakpoints, containers, buttons)
├── styles.scss                   # Global styles, keyframes, utilities
└── index.html                    # Entry HTML with inline theme script, meta tags
public/
├── favicon.ico, favicon-*.png    # Multi-resolution favicons (16–512px)
├── logo-sh.svg                   # SH monogram logo
├── og-image.png                  # Open Graph image (1200×630)
├── CV_SantiagoHijazo.pdf         # Downloadable CV
├── robots.txt                    # SEO robots file
├── sitemap.xml                   # SEO sitemap
└── projects/
    ├── portfolio.webp            # Portfolio project screenshot
    └── MangaTrackerAPI.webp      # Manga Tracker API screenshot
```

## Architecture

- **Standalone components** — all components are standalone, no NgModules
- **DI via `inject()`** — modern dependency injection without constructors
- **OnPush change detection** — all components use `ChangeDetectionStrategy.OnPush`
- **Signals + computed** — mutable UI state in `signal()`, derived data in `computed()` (skills categories, project lists, translation-derived collections)
- **SSR-safe lifecycle guards** — browser-only APIs (`window`, `IntersectionObserver`, `requestAnimationFrame`, `matchMedia`) guarded with `isPlatformBrowser(PLATFORM_ID)`
- **ThemeService** — signal-based, SSR-safe, persists to `localStorage`, toggles `light` class on `<html>`
- **SeoService** — dynamically updates `<title>`, meta, OG tags, Twitter Card, `lang` attribute, and injects JSON-LD `Person` schema on language switch
- **TranslationService** — signal-based i18n toggling between `translations-es.ts` (default) and `translations-en.ts`
- **Environment files** — EmailJS credentials and `siteUrl` centralized in `src/environments/`, swapped automatically via `fileReplacements` in production builds

## Styling

- **CSS Custom Properties** — color tokens defined in `_variables.scss`: Indigo primary palette, Fuchsia accent, gray scale with alpha variants, theme-aware overrides for light mode
- **SCSS Mixins** — responsive breakpoints (`sm`, `md`, `lg`, `xl`), containers, gradient text, buttons, filter pills, cards
- **Dark/Light Theme** — dark is default (`<html class="dark">`); light mode remaps gray tokens via `html.light` overrides while brand colors stay identical
- **Keyframe Animations** — `fadeInUp`, `fadeInLeft`, `fadeInRight`, `fadeInScale`, `fadeIn`, `gradient`, `float`, `glow`, `bounce`, `spin`
- **Fonts** — Inter (300–800) for UI, Fira Code (400–500) for code, loaded from Google Fonts CDN
- **DevIcons** — skill icons via jsDelivr CDN

## Deployment

The project is deployed on **[Netlify](https://santihijazo.netlify.app)**.

1. Run `ng build` to produce the prerendered static output
2. Deploy the `dist/portfolio/browser/` directory to Netlify (or any static host)
3. No server runtime or SSR process needed — all pages are pre-rendered HTML

## Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Dev server at localhost:4200 (SSR dev mode) |
| `ng build` | Production build — prerenders to `dist/portfolio/browser/` |
| `ng test` | Unit tests with Karma + Jasmine (headless Chrome) |
| `ng generate component <name>` | Scaffold a new standalone component |
