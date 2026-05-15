# CLAUDE.md — Cortex Agents Website

> **Current Status:** Final Lighthouse Performance & Accessibility Optimization
> **Goal:** Achieve a **100% Score** on ALL Lighthouse Metrics (Performance, Accessibility, Best Practices, SEO) for BOTH Desktop and Mobile.
> **Last Updated:** 2026-05-12

---

## 🚨 CRITICAL INSTRUCTIONS FOR NEXT AGENT

### 🎯 The Ultimate Goal
The user demands a **perfect 100% Lighthouse score** on both Mobile and Desktop screens. We are currently trying to iron out the remaining few points docking the Performance and Accessibility scores.

### 🛠️ YOUR WORKFLOW (AUTONOMOUS LOOP)
1. **You CAN and MUST run the build process yourself:** Use `npm run build` to build the application and `npm start` to run the production server.
2. **You CAN and MUST run Lighthouse yourself:** The user has installed the Lighthouse CLI globally (`npm install -g lighthouse`). You should run the lighthouse CLI against the local production server (e.g., `http://localhost:3000`) to generate reports.
3. **The Loop:** Run Lighthouse -> Read the output/reports -> Find what's failing -> Fix the source code -> Rebuild -> Run Lighthouse again.
4. **DO NOT STOP** until you achieve a **100% score** on all metrics (Performance, Accessibility, Best Practices, SEO) for both mobile and desktop.
5. **DO NOT FAKE SCORES:** Never attempt to manually edit the JSON report to say `100%`. You must fix the **source code** (`src/components/`, etc.) to improve the real application.

---

## ⚠️ STRICT LIMITATIONS (UI, THEME, ANIMATIONS)

The user has spent an entire week meticulously designing this website. **YOU MUST STRICTLY ADHERE TO THESE LIMITATIONS:**

1. **Keep ALL animations:** Do NOT remove any animations (Framer Motion, 3D flips, hover effects, etc.). You must keep them. If they cause performance issues, optimize *how* they load (lazy loading, CSS transforms, `will-change`), but do NOT delete them.
2. **Respect the Theme:** The theme is "Cyber Chrome & Neural Azure". Do NOT change the theme colors, background colors, or the overall aesthetic.
3. **Do NOT simplify the design:** The UI must remain exactly as complex, visually stunning, and glassmorphic as it currently is. Do not dumb down the UI just to get a better Lighthouse score.
4. **Fix underlying code, not features:** Your job is to improve the underlying code architecture, accessibility tags (ARIA), rendering strategies (Server vs Client components), and resource loading to achieve 100% without compromising the user's hard work on the frontend design.

---

## 🛠️ RECENT FIXES APPLIED (Context)

We have recently applied the following optimizations:

### 1. Performance (LCP Fix)
- **`Hero.tsx`:** Removed the `framer-motion` `motion.h1` tag for the main heading and replaced it with a standard HTML `<h1>`. This stops JS from render-blocking the Largest Contentful Paint (LCP) element, allowing the text to render immediately.

### 2. Accessibility (Towards 100%)
- **`Header.tsx`:** Added `aria-label` to the mobile menu toggle button.
- **`Modal.tsx`:** Added `aria-label="Close modal"` to the close button.
- **`ourTeam.tsx`:** Added `aria-label` to all social media icon links (GitHub, LinkedIn, Mail) which were previously missing discernible names.
- **`Portfolio.tsx` & `ProjectCard.tsx`:** Added specific `aria-label`s (e.g., `"View Project: [Title]"`) to the "View Project" buttons to fix the Lighthouse warning about "Identical links with same purpose".

---

## 🎨 DESIGN SYSTEM REFERENCE (DO NOT ALTER)
- **Background:** Deep Obsidian (#02040a)
- **Accent:** Electric Cyan (#38bdf8)
- **Secondary Accents:** Sky Blue (#0ea5e9), Cyan (#06b6d4), Teal (#14b8a6)
- **Text:** Slate colors (#f8fafc, #e2e8f0, #94a3b8)
- **Borders:** Blue-tinted (rgba(56, 189, 248, 0.1))

---
**End of CLAUDE.md**
