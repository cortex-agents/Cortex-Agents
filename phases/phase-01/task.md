# Phase 01: Bold Typography Design System Integration

## Overview
The goal of this phase is to transition the Cortex Agents website from its current Cyberpunk/Glassmorphism theme to the "Bold Typography" editorial design system described in `Ui.md`. We will focus on extreme scale contrast, strict hierarchy, a restrained color palette (Black, White, Vermillion), sharp edges (0px radius), and eliminating all unnecessary visual noise (glows, glass effects, floating SVGs). We will also ensure strict component separation and minimal content per file.

## 1. Global Setup & Theming (`tailwind.config.ts`, `globals.css`)
- **Action:** Replace existing styling tokens.
- **Remove:** All custom gradients, blur tokens, rounded corner variations, and custom blue/cyan colors if they exist in config.
- **Add:**
  - Colors: background (`#0A0A0A`), foreground (`#FAFAFA`), muted (`#1A1A1A`), mutedForeground (`#737373`), accent (`#FF3D00`).
  - Fonts: `Inter Tight`, `Inter`, `Playfair Display`, `JetBrains Mono`.
  - Spacing/Radius: Force `0px` radius globally.
  - Easing: Add custom fast-out bezier `cubic-bezier(0.25, 0, 0, 1)`.

## 2. Layout & Global Cleansing (`src/app/layout.tsx`, `src/app/globals.css`)
- **Action:** Cleanse global files of unwanted effects.
- **Remove:** 
  - `LoadingSplash` component.
  - `MouseSpotlight` component.
  - `AuroraBackground` or any animated background divs (sky/cyan glowing orbs).
- **Add:** 
  - Implement a global 1.5% opacity noise grain SVG overlay.
  - Load the correct new Google Fonts.

## 3. UI Component Primitives (`src/components/ui/`)
- **Action:** Create strict, reusable building blocks to eliminate inline styling and bloat on pages.
- **Tasks:**
  - `Button.tsx`: Implement Primary (text + animated accent underline), Secondary (sharp 1px border, invert on hover), and Ghost variants.
  - `Section.tsx`: A wrapper component providing consistent `py-20`/`py-32`/`py-40` spacing and optional 1px border dividers.
  - `Grid.tsx`: A layout primitive for 7/5 or 8/4 asymmetric grids.
  - `Input.tsx`: Form input primitive with `#1A1A1A` background, `0px` radius, and sharp accent focus state.
- **Remove:** Unused flashy UI components (`FloatingShape.tsx`, `TextReveal.tsx`, `AuroraBackground.tsx`).

## 4. Perfection of Home Page (`src/app/page.tsx` & Home Components)
- **Action:** Convert to editorial style with separate, clean components.
- **Remove:** Extraneous copy, heavy hero images, glowing gradients.
- **Add/Refactor:**
  - `Hero.tsx`: Massive 8xl+ typography. "Type as Hero". No background images. 
  - `ServicesSnippet.tsx`: Horizontal lists with 1px dividers.
  - `Team.tsx`: Clean portraits, mono-spaced labels.
- **Goal:** Clean architecture, `<main>` just calls isolated section components.

## 5. Perfection of About Page (`src/app/about/page.tsx`)
- **Action:** Break down the massive `about/page.tsx` file into separate components inside `src/components/about/`.
- **Remove:** 
  - The animated diamond pattern background and floating orbs.
  - Carousel hero.
- **Add/Refactor:**
  - `AboutHero.tsx`: Large typography hero statement.
  - `Story.tsx`: Asymmetric grid (left text, right large quotes using `Playfair Display`).
  - `Values.tsx`: Strict layout with horizontal lines, no cards/boxes.
  - `Stats.tsx`: Monospace large numbers with tight letter spacing.

## 6. Perfection of Services Dynamic Page (`src/app/services/[slug]/page.tsx`)
- **Action:** Remove bloat and separate logic. Create components in `src/components/services/`.
- **Remove:** Hexagonal circuit board backgrounds, glowing image frames, gradient text.
- **Add/Refactor:**
  - `ServiceHero.tsx`: Extreme scale typography for the service name, minimal text.
  - `Features.tsx`: Simple lists with `lucide-react` icons (1.5px stroke).
  - `Process.tsx`: Numbered steps with sharp lines, no glass cards.
  - `FAQ.tsx`: Clean accordion, fast animation (200ms).

## 7. Perfection of Portfolio Page (`src/app/portfolio/page.tsx`)
- **Action:** Restructure the portfolio showcase.
- **Remove:** The 3D tilt effects (`preserve-3d`), floating shapes, gradient cards.
- **Add/Refactor:**
  - A clean, asymmetric masonry grid or strict list view.
  - Images should scale on hover (scale-105 over 500ms) but inside sharp `0px` radius containers with no borders/shadows.
  - Typography should overlay or sit below cleanly with strict hierarchy.

## 8. Perfection of Contact Page (`src/app/contact/page.tsx`)
- **Action:** Modernize the form and layout. Create separate form components if necessary.
- **Remove:** Glowing orbs, skewed gradient borders on the form container, grayscale Google map hack.
- **Add/Refactor:**
  - Clean `Input.tsx` and `Textarea.tsx` elements.
  - A large typographic header: "LET'S TALK" (or similar).
  - Sharp boundaries, large whitespace, and strict mono-spaced contact info (email/phone).
