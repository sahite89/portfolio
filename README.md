# Portfolio — Santiago Hijazo Tejada

Portfolio personal SPA construido con Angular 19. Single-page scrolling sin routing, con soporte bilingüe (ES/EN), animaciones de scroll y formulario de contacto funcional.

## Tech Stack

- **Angular 19** — componentes standalone, signals, `inject()` para DI
- **TypeScript 5.7** — modo strict habilitado
- **SCSS** — CSS custom properties, mixins de responsive y utilidades
- **EmailJS** — envío de emails desde el formulario de contacto (free tier)
- **Karma + Jasmine** — testing unitario

## Características

- Single-page scrolling con navegación por fragments
- i18n bilingüe (Español / Inglés) basado en signals
- Animaciones de scroll reveal (IntersectionObserver)
- Diseño responsive mobile-first
- Dark theme
- Formulario de contacto funcional con EmailJS
- Descarga de CV en PDF

## Arranque rápido

### Prerequisitos

- Node.js 18+
- Angular CLI 19 (`npm install -g @angular/cli`)

### Instalación

```bash
git clone https://github.com/sahite89/portfolio.git
cd portfolio
npm install
```

### Desarrollo

```bash
ng serve
```

Abrí `http://localhost:4200/`. La app se recarga automáticamente al modificar archivos.

### Build de producción

```bash
ng build
```

Los artifacts se generan en `dist/portfolio`. Incluye file replacement automático de environment files.

### Tests

```bash
ng test
```

Ejecuta tests unitarios con Karma y Jasmine en Chrome headless.

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/        # Barra de navegación fija con logo, links y toggle de idioma
│   │   ├── hero/          # Sección principal con nombre, título y CTAs
│   │   ├── about/         # Bio personal y descarga de CV
│   │   ├── projects/      # Grid de proyectos con filtros por categoría
│   │   ├── skills/        # Grid de habilidades con nivel de proficiencia
│   │   ├── experience/    # Timeline de experiencia laboral y educación
│   │   ├── contact/       # Formulario de contacto y links sociales
│   │   └── footer/        # Footer con copyright dinámico
│   ├── services/
│   │   ├── translation.service.ts  # i18n basado en signals
│   │   └── email.service.ts        # Servicio de envío de emails (EmailJS)
│   ├── directives/
│   │   └── scroll-reveal.directive.ts  # Animaciones IntersectionObserver
│   ├── i18n/
│   │   ├── translations-es.ts  # Traducciones en español
│   │   └── translations-en.ts  # Traducciones en inglés
│   ├── models/
│   │   └── portfolio.model.ts  # Interfaces: Project, Skill, TimelineItem, Translation
│   ├── app.component.ts        # Root component (importa todas las secciones)
│   ├── app.config.ts           # Configuración de la app (router, zone)
│   └── app.routes.ts           # Routes vacías (SPA sin routing)
├── environments/
│   ├── environment.ts          # Variables de entorno (dev)
│   └── environment.prod.ts     # Variables de entorno (producción)
├── _variables.scss             # CSS custom properties (colores, sombras)
├── _mixins.scss                # Mixins SCSS (breakpoints, containers, botones)
└── styles.scss                 # Estilos globales, keyframe animations, utilidades
public/
├── favicon.ico, favicon-*.png  # Favicons multi-resolución
├── logo-sh.svg                 # Logo SVG (monograma SH)
└── cv-santiago-Hijazo.pdf      # CV descargable
```

## Arquitectura

- **Standalone components** — todos los componentes son standalone, sin NgModules
- **DI vía `inject()`** — inyección de dependencias moderna, sin constructores
- **i18n basado en signals** — `TranslationService` usa signals de Angular para traducciones reactivas. Toggle ES/EN desde el header
- **Environment files** — credenciales de EmailJS centralizadas en `src/environments/`, con file replacement automático para builds de producción
- **ScrollRevealDirective** — directiva reutilizable `[appScrollReveal]` que acepta nombre de animación y delay

## Estilo

- **CSS custom properties** — 128 tokens de color definidos en `_variables.scss`: paleta Indigo (primaria) y Fuchsia (acento), con variantes alpha para transparencias
- **Mixins SCSS** — breakpoints responsive (`sm`, `md`, `lg`, `xl`), containers, gradient text, botones, pills de filtro, cards
- **Keyframe animations** — 8 animaciones globales: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `fadeInScale`, `fadeIn`, `gradient`, `float`, `glow`, `bounce`, `spin`
- **Fuentes** — Inter (300-800) para UI, Fira Code (400-500) para código
- **DevIcons** — iconos de habilidades vía CDN

## Scripts

| Comando | Descripción |
|---------|-------------|
| `ng serve` | Servidor de desarrollo en localhost:4200 |
| `ng build` | Build de producción a `dist/portfolio` |
| `ng test` | Tests unitarios con Karma + Jasmine |
| `ng generate component <nombre>` | Generar nuevo componente |
