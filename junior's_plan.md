# 🚀 Cortex Agents — Performance Optimization Plan (Final v2)

> Manager's review incorporated. Score: 85% → 95%. Added Phase -1, rollback strategy, incremental testing, time estimates.

---

## 📊 Current State Summary

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Performance | **46** | **ERROR (NO_FCP)** |
| Accessibility | 96 | Error |
| Best Practices | 96 | Error |
| SEO | 100 | Error |
| TBT | **12,850ms** | N/A |
| Speed Index | **16.3s** | N/A |

---

## 🔄 Rollback Strategy

```bash
# Before starting:
git checkout -b perf-optimization

# After each step:
git add . && git commit -m "descriptive message"

# If something breaks:
git revert HEAD

# If everything breaks:
git checkout main
```

**Rule: Main branch is ALWAYS working. All changes on feature branch.**

---

## ⏱️ Time Estimates

| Phase | Estimated Time |
|-------|---------------|
| Phase -1: Debugging | 1-2 hours |
| Phase 0: Emergency | 2-3 hours |
| Phase 1: Critical Perf | 4-6 hours |
| Phase 2: Optimizations | 3-4 hours |
| Phase 3: Polish & Verify | 2-3 hours |
| **Total** | **12-18 hours (~2-3 days)** |

---

## 🔬 PHASE -1: DEBUGGING & DIAGNOSIS (MUST DO FIRST!)

> [!CAUTION]
> NO code changes in this phase. Only testing, observing, and documenting.

### Step -1.1: Test the 10-minute button click bug
- Open website in browser (`npm run dev`)
- Click each navigation button (Home, Services, Portfolio, About, Contact)
- Time how long each page takes to load
- Check browser console (F12) for RED errors
- Check Network tab for stuck/failed requests

### Step -1.2: Test mobile rendering
- F12 → Toggle device toolbar → Select Moto G Power
- Load homepage
- Check if page renders at all (NO_FCP diagnosis)
- Check console for mobile-specific errors

### Step -1.3: Check for hydration errors
- Look for "Hydration failed" in console
- Look for "Text content does not match" errors
- Check if duplicate Header in portfolio page causes mismatch

### Step -1.4: Check React 19 compatibility
- Look for deprecation warnings in console
- Check if framer-motion works with React 19
- Check three.js / @react-three/fiber compatibility warnings

### Step -1.5: Create baseline metrics
- Run `npm run build` — record build output (bundle sizes, errors)
- Run Lighthouse Desktop — save scores
- Run Lighthouse Mobile — save scores
- Document actual page load times
- Screenshot console errors

### Step -1.6: Document findings
- Create `DEBUGGING_FINDINGS.md` with all results
- Identify the "smoking gun" — exact root cause of 10-min delay

**After Phase -1 Testing:** `git commit -m "docs: baseline debugging findings"`

---

## 🔴 PHASE 0: EMERGENCY FIXES

### Step 0.1: Fix any JavaScript errors found in Phase -1
- Fix whatever console errors were discovered
- Test after each fix
- `git commit -m "fix: [specific error]"`

### Step 0.2: Fix duplicate Header in portfolio page
[MODIFY] [page.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/portfolio/page.tsx)
- Remove `<Header />` import and usage — already in root layout
- **Test:** Navigate to portfolio page, verify no double header
- `git commit -m "fix: remove duplicate Header from portfolio"`

### Step 0.3: Remove unused dependencies
[MODIFY] [package.json](file:///d:/cortex_agents_projects/Cortex-Agents/package.json)
- Remove: `react-parallax-tilt`, `howler`, `react-simple-typewriter`, `emailjs-com`
- Run `npm install`
- Run `npm run build` — verify build passes
- `git commit -m "chore: remove unused dependencies"`

### Step 0.4: Verify button clicks work
- Test all navigation buttons
- Each page should load within 2 seconds
- If still broken, investigate further before Phase 1

**After Phase 0:** Run Lighthouse, compare with baseline

---

## 🔴 PHASE 1: CRITICAL PERFORMANCE

### Step 1.1: Convert About page to Server Component
[MODIFY] [page.tsx (about)](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/about/page.tsx)
- Remove `"use client"`
- Use `dynamic()` for `ThreeBackground` (ssr: false) and `Team`
- Extract inline `AnimatedCounter` to separate client file
- Move `motion.*` wrappers into small client components
- **Test:** Verify about page renders correctly
- `git commit -m "perf: convert about page to Server Component"`

### Step 1.2: Convert Services page to Server Component
[MODIFY] [page.tsx (services)](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/services/page.tsx)
- Remove `"use client"`
- Wrap motion elements in client wrapper
- `servicesData` (50KB) now renders server-side = zero client JS for data
- **Test:** Verify services page renders correctly
- `git commit -m "perf: convert services page to Server Component"`

### Step 1.3: Convert Portfolio page to Server Component
[MODIFY] [page.tsx (portfolio)](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/portfolio/page.tsx)
- Remove `"use client"`
- Keep `ProjectCard` as client component
- **Test:** Verify portfolio page renders correctly
- `git commit -m "perf: convert portfolio page to Server Component"`

### Step 1.4: Add Suspense boundaries to Home page
[MODIFY] [page.tsx (home)](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/page.tsx)
- Use `next/dynamic` for below-fold components:
  - About, Services, Portfolio, Contact, Team
- Create loading skeletons
- **Test:** Verify homepage loads fast, components lazy-load on scroll
- `git commit -m "perf: add Suspense/dynamic imports on homepage"`

### Step 1.5: Kill infinite animations
[MODIFY] Hero.tsx, About.tsx, Services.tsx, Portfolio.tsx, ourTeam.tsx, Footer.tsx, Header.tsx, Contact.tsx
- Remove `repeat: Infinity` from decorative elements (floating blobs, gradient shifts, orbs)
- Keep meaningful animations (button hovers, entrance animations with `once: true`)
- Remove mouse spotlight from below-fold sections
- **Test:** Verify site looks good, animations play once
- `git commit -m "perf: remove infinite decorative animations"`

### Step 1.6: Fix font loading
[MODIFY] [layout.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/layout.tsx)
- Add `fallback` arrays to fonts
- Remove JetBrains Mono if not used prominently
- Already has `display: 'swap'` ✅
- **Test:** Verify fonts load without FOUT
- `git commit -m "perf: optimize font loading"`

**After Phase 1:** Run Lighthouse, expect 20+ point improvement

---

## 🟡 PHASE 2: IMPORTANT OPTIMIZATIONS

### Step 2.1: Image optimization
[MODIFY] Multiple files (Hero, About, Portfolio, Team components)
- Add `sizes` prop to all `<Image>` components
- Add `loading="lazy"` to below-fold images
- Remove `priority` from team photos (only hero/above-fold gets priority)
- Compress large images in `/public` (hero1.jpg 2.2MB, hira.png 2.7MB → WebP)
- **Test:** Verify images load correctly
- `git commit -m "perf: optimize image loading"`

### Step 2.2: Replace react-icons with lucide-react
[MODIFY] [Footer.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/components/Footer.tsx)
[MODIFY] [Contact.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/components/Contact.tsx)
[MODIFY] [contact/page.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/contact/page.tsx)
- Replace `react-icons` imports with lucide-react equivalents (already installed)
- Remove `react-icons` from package.json if fully replaced
- **Test:** Verify icons display correctly
- `git commit -m "perf: replace react-icons with lucide-react"`

### Step 2.3: Extract shared components (DRY)
[NEW] `src/components/ui/AuroraBackground.tsx` — extract from 4 components
[NEW] `src/components/ui/FloatingShape.tsx` — extract from 3 components
[NEW] `src/components/ui/SectionSkeleton.tsx` — loading fallback
- **Test:** Verify all sections using shared components look identical
- `git commit -m "refactor: extract shared UI components"`

### Step 2.4: Dynamic import Three.js
[MODIFY] [page.tsx (about)](file:///d:/cortex_agents_projects/Cortex-Agents/src/app/about/page.tsx)
- `const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false })`
- Saves ~500KB from initial bundle
- **Test:** Verify about page particle background still works
- `git commit -m "perf: lazy load Three.js"`

### Step 2.5: Optimize next.config.ts
[MODIFY] [next.config.ts](file:///d:/cortex_agents_projects/Cortex-Agents/next.config.ts)
- Add image formats (AVIF, WebP)
- Add Cache-Control headers for static assets
- **Test:** `npm run build` passes
- `git commit -m "perf: optimize next.config"`

**After Phase 2:** Run Lighthouse, expect another 10-15 point improvement

---

## 🟢 PHASE 3: POLISH & VERIFY

### Step 3.1: Remove mouse tracking from below-fold sections
[MODIFY] About.tsx, Services.tsx, ourTeam.tsx
- Remove `mousemove` event listeners + `setMousePosition` state
- Replace parallax transforms with static or CSS-only hover effects
- **Test:** Verify sections look good without parallax
- `git commit -m "perf: remove mouse tracking from below-fold"`

### Step 3.2: Optimize Contact page animations
[MODIFY] [Contact.tsx](file:///d:/cortex_agents_projects/Cortex-Agents/src/components/Contact.tsx)
- Replace orbiting cards infinite rotation with CSS animation or static layout
- **Test:** Verify contact section looks good
- `git commit -m "perf: simplify contact section animations"`

### Step 3.3: Final Lighthouse run & documentation
- Run Lighthouse Desktop — target: **90+ Performance**
- Run Lighthouse Mobile — target: **85+ Performance**, NO_FCP fixed
- Run `npm run build` — record final bundle sizes
- Document before/after comparison
- `git commit -m "docs: final performance metrics"`

### Step 3.4: Merge to main
```bash
git checkout main
git merge perf-optimization
```

---

## ✅ After-Each-Step Testing Protocol

```
1. Run `npm run dev` (or `npm run build` for config changes)
2. Open browser → test the changed page
3. Check console for NEW errors
4. Verify nothing visually broke
5. Git commit with clear message
6. THEN move to next step

If something breaks:
1. git revert HEAD
2. Analyze what went wrong
3. Try smaller change
4. Test again
```

---

## 📋 Open Questions for User

> [!IMPORTANT]
> **Q1: Three.js** — Replace with CSS particle effect? (saves ~500KB)

> [!IMPORTANT]
> **Q2: Mouse parallax** — Remove from below-fold sections? (saves constant re-renders)

> [!IMPORTANT]
> **Q3: Image compression** — Compress hero1.jpg (2.2MB), hira.png (2.7MB) to WebP?

> [!WARNING]
> **Q4: Tailwind v4** — Keep v4 or downgrade to stable v3?

---

## ✅ Final Checklist

```
Debugging:
[ ] Tested 10-minute button click bug
[ ] Checked browser console for errors
[ ] Tested mobile rendering
[ ] Checked React 19 compatibility
[ ] Documented baseline metrics

Emergency Fixes:
[ ] Fixed duplicate Header
[ ] Removed unused dependencies
[ ] Fixed JS errors from Phase -1
[ ] Button clicks work within 2 seconds

Critical Performance:
[ ] Converted 3 pages to Server Components
[ ] Added Suspense boundaries
[ ] Killed infinite animations
[ ] Fixed font loading
[ ] Lighthouse improved by 20+ points

Important Optimizations:
[ ] Images optimized
[ ] react-icons replaced with lucide-react
[ ] Shared components extracted
[ ] Three.js lazy loaded
[ ] next.config.ts optimized

Polish:
[ ] Mouse tracking removed from below-fold
[ ] Contact page optimized
[ ] Desktop: 90+ Performance
[ ] Mobile: 85+ Performance, NO_FCP fixed
[ ] Before/after metrics documented
[ ] Merged to main
```
