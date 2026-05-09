# CLAUDE.md — Cortex Agents Website

> **Current Status:** Cyber Chrome & Neural Azure Theme Implementation
> **Last Updated:** 2026-05-07
> **Progress:** All Core Sections Complete ✅ | Portfolio & About Pages Remaining ⏳

---

## 🎨 DESIGN SYSTEM: "Cyber Chrome & Neural Azure"

**Reference:** See `DESIGN_SYSTEM_UPDATE.md` for full design specifications.

### Color Palette
- **Background:** Deep Obsidian (#02040a)
- **Accent:** Electric Cyan (#38bdf8) - AI Intelligence
- **Secondary Accents:**
  - Sky Blue (#0ea5e9) - Development/Technical
  - Cyan (#06b6d4) - Creative/Communication
  - Teal (#14b8a6) - Data/Analytics
- **Text Hierarchy:**
  - Primary: #f8fafc (Slate-50)
  - Secondary: #e2e8f0 (Slate-200)
  - Muted: #94a3b8 (Slate-400)
- **Borders:** Blue-tinted (rgba(56, 189, 248, 0.1))

### Key Principles
1. **Metallic Chrome Gradients** for main headings
2. **Electric Blue** for icons and interactive glows
3. **Glassmorphism** (blur + thin borders) for all cards
4. **Color-Coded Icons** by category (not all same color)
5. Logo's silver/white aesthetic is centerpiece, blue is supporting "AI Energy"

---

## ✅ COMPLETED WORK (2026-05-07)

### 1. globals.css - Full Theme Update ✅
**File:** `src/app/globals.css`
**Changes:**
- ✅ CSS Variables updated to Cyber Chrome & Neural Azure
- ✅ Background colors: Deep Obsidian (#02040a)
- ✅ Accent colors: Electric Cyan + variations
- ✅ Text hierarchy: Slate colors
- ✅ Button styles: Electric Blue gradients
- ✅ Borders: Blue-tinted

### 2. Header Component - Complete Theme ✅
**File:** `src/components/Header.tsx`
**Changes:**
- ✅ Background: Deep Obsidian with blue-tinted borders
- ✅ Active link indicator: Electric Cyan glow
- ✅ CTA button: Electric Blue gradient with shadow
- ✅ Floating orbs: Blue/Cyan animations
- ✅ Mobile menu: Full blue theme
- ✅ Hover states: Blue glow effects

### 3. Hero Component - Complete Theme ✅
**File:** `src/components/Hero.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Aurora gradient: Blue/Cyan animated gradient
- ✅ Main heading: Metallic Chrome gradient
- ✅ Text hierarchy: Slate-200 (subheadings), Slate-400 (body)
- ✅ Badge: Blue theme with Electric Cyan icon
- ✅ Service icons: Electric Cyan color
- ✅ Floating icons: Color-coded by type
- ✅ Floating Cards - Color-coded by category
- ✅ Mouse spotlight: Blue/Cyan glow
- ✅ Particle dots: Cyan color
- ✅ Stats dividers: Blue-tinted

### 4. About Section - Complete Theme ✅
**File:** `src/components/About.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Aurora gradient: Blue/Cyan animated gradient
- ✅ Section heading: Metallic Chrome gradient
- ✅ Service cards: Color-coded icons (Code: Sky Blue, MessageSquare: Cyan, Bot: Cyan)
- ✅ Stats: AnimatedCounter with blue dividers
- ✅ "Why Choose Us" cards: Color-coded icons (Sparkles: Cyan, Shield: Sky Blue, Bot: Cyan, Clock: Teal)
- ✅ CTA button: Electric Blue gradient with shine effect
- ✅ Grid pattern and mouse spotlight: Blue-tinted

### 5. Services Section - Complete Theme ✅
**File:** `src/components/Services.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Aurora gradient: Blue/Cyan animated gradient
- ✅ Section heading: Metallic Chrome gradient
- ✅ Service cards: Blue-tinted borders (border-sky-400/20)
- ✅ Color-coded service icons:
  - Web Development: Sky Blue (#38bdf8)
  - UI/UX Design: Cyan (#06b6d4)
  - AI Chatbots: Electric Cyan (#38bdf8)
  - AI Agents: Electric Cyan (#38bdf8)
  - SEO: Teal (#14b8a6)
  - Cloud: Sky Blue (#38bdf8)
- ✅ CTA button: Electric Blue gradient with shine effect
- ✅ Grid pattern and mouse spotlight: Blue-tinted

### 6. Team Section - Complete Theme ✅
**File:** `src/components/ourTeam.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Aurora gradient: Blue/Cyan animated gradient
- ✅ Section heading: Metallic Chrome gradient
- ✅ Team member cards: Blue-tinted borders (border-sky-400/20)
- ✅ Member gradients: Color-coded by role
  - Okasha (AI): Sky Blue (from-sky-400 to-sky-600)
  - Taha (Design): Cyan (from-cyan-400 to-cyan-600)
  - Ubaid (AI): Electric Cyan (from-sky-400 to-cyan-400)
  - Ahsan (Dev): Sky Blue (from-sky-400 to-sky-600)
  - Hamza (AI): Electric Cyan (from-sky-400 to-sky-600)
- ✅ Social icons: Blue theme (border-sky-400/20)
- ✅ Grid pattern and mouse spotlight: Blue-tinted

### 7. Testimonials Section - Complete Theme ✅
**File:** `src/components/Testimonial.tsx`
**Changes:**
- ✅ Section heading: Metallic Chrome gradient
- ✅ Testimonial cards: Blue-tinted borders (border-sky-400/20)
- ✅ Testimonial gradients: Color-coded
  - Ali Ahmed: Sky Blue (from-sky-400 to-sky-600)
  - Sarah Khan: Cyan (from-cyan-400 to-cyan-600)
  - Zain Malik: Electric Cyan (from-sky-400 to-cyan-400)
  - Hira Fatima: Teal (from-teal-400 to-teal-600)
- ✅ Stats section: AnimatedCounter with color-coded gradients
- ✅ CTA button: Electric Blue gradient with shine effect

### 8. Contact Section - Complete Theme ✅
**File:** `src/components/Contact.tsx`
**Changes:**
- ✅ Section heading: Metallic Chrome gradient
- ✅ Contact info cards: Blue-tinted borders (border-sky-400/20)
- ✅ Contact info gradients: Color-coded
  - Email: Sky Blue (from-sky-400 to-sky-600)
  - WhatsApp: Cyan (from-cyan-400 to-cyan-600)
  - Address: Teal (from-teal-400 to-teal-600)
- ✅ Form inputs: Blue focus states (focus:ring-sky-400)
- ✅ Submit button: Electric Blue gradient with shine effect

### 9. Footer - Complete Theme ✅
**File:** `src/components/Footer.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Brand heading: Metallic Chrome gradient
- ✅ Social icons: Blue-tinted borders (border-sky-400/20)
- ✅ Quick links: Blue hover states (hover:text-sky-400)
- ✅ Contact info: Blue hover states (hover:text-sky-400)
- ✅ Divider: Blue-tinted (border-sky-400/20)

### 10. Dynamic Service Page - Complete Theme ✅
**File:** `src/app/services/[slug]/page.tsx`
**Changes:**
- ✅ Background: Deep Obsidian (#02040a)
- ✅ Floating orbs: Blue/Cyan colors
- ✅ Sticky navigation: Blue theme (border-sky-400/20)
- ✅ Hero section: Blue aurora gradient, blue grid pattern, cyan particle dots
- ✅ Badge: Blue theme (bg-sky-400/10 border-sky-400/30)
- ✅ Text hierarchy: Slate colors (slate-200, slate-300)
- ✅ CTA buttons: Electric Blue gradient with shine effect
- ✅ Floating AI cards: Color-coded borders
  - AI Agent: Sky Blue (border-sky-400/40)
  - Data Analysis: Cyan (border-cyan-400/40)
  - Automation: Sky Blue (border-sky-400/40)
  - Performance: Teal (border-teal-400/40)
- ✅ Problems section: Blue-tinted cards (border-sky-400/20)
- ✅ Features section: Blue-tinted cards with sky-400 icon gradients
- ✅ Process section: Blue timeline and badges (from-sky-400 to-sky-600)
- ✅ FAQ section: Blue-tinted cards (border-sky-400/20)
- ✅ CTA section: Blue gradient background with Electric Blue button

**Build Status:** ✅ Zero errors, Zero warnings

---

## 🚧 REMAINING WORK

### Priority 1: Other Pages
Apply "Cyber Chrome & Neural Azure" theme to remaining pages:

1. **Portfolio Page** (`src/app/portfolio/page.tsx`)
   - Update background to Deep Obsidian
   - Update aurora gradient to Blue/Cyan
   - Update section headings with Metallic Chrome gradient
   - Update project cards with blue-tinted borders
   - Update filter buttons with blue theme
   - Update hover states with blue glow effects

2. **About Page** (`src/app/about/page.tsx`)
   - Update background to Deep Obsidian
   - Update aurora gradient to Blue/Cyan
   - Update section headings with Metallic Chrome gradient
   - Update content cards with blue-tinted borders
   - Update CTA buttons with Electric Blue gradient

**Note:** All core homepage sections and dynamic service pages are complete ✅

---

## 📋 WORKFLOW FOR NEXT SESSION

### Step 1: Portfolio Page
```
1. Read src/app/portfolio/page.tsx
2. Apply Cyber Chrome & Neural Azure theme:
   - Background: Deep Obsidian (#02040a)
   - Aurora gradient: Blue/Cyan
   - Section headings: Metallic Chrome gradient
   - Project cards: Blue-tinted borders (border-sky-400/20)
   - Filter buttons: Blue theme
   - Hover states: Blue glow effects
3. Test build
4. Report: "✅ Portfolio Page Complete"
```

### Step 2: About Page
```
1. Read src/app/about/page.tsx
2. Apply Cyber Chrome & Neural Azure theme
3. Test build
4. Report: "✅ About Page Complete"
```

### Step 3: Final Verification
```
1. Run full build: npm run build
2. Verify zero errors and warnings
3. Update CLAUDE.md with final status
4. Report: "✅ All Cyber Chrome & Neural Azure Theme Implementation Complete"
```

---

## 🎯 DESIGN CONSISTENCY RULES

### Icon Color Coding (IMPORTANT)
**DO NOT make all icons the same color.** Use this mapping:

| Category | Color | Hex | Usage |
|----------|-------|-----|-------|
| AI/Bot | Electric Cyan | #38bdf8 | AI Agents, Chatbots, AI Intelligence |
| Development | Sky Blue | #0ea5e9 | Web Dev, Code, Technical |
| Creative | Cyan | #06b6d4 | UI/UX, Design, Creative |
| Data/Analytics | Teal | #14b8a6 | SEO, Data Processing, Analytics |

### Text Hierarchy (IMPORTANT)
- **Headings:** White (#ffffff) with optional metallic gradient
- **Subheadings:** Slate-200 (#e2e8f0)
- **Body text:** Slate-400 (#94a3b8)
- **Muted text:** Slate-500 (#64748b)

### Button Hierarchy (IMPORTANT)
- **Primary:** Electric Blue gradient (`from-sky-400 to-sky-600`)
- **Secondary:** Transparent with blue border (`border-sky-400/30`)

---

## 🚀 QUICK START FOR NEW SESSION

1. Read this file completely
2. Check current progress above
3. Start from "About Section" (Priority 1, Item 1)
4. Apply Cyber Chrome & Neural Azure theme
5. Test build after each section
6. Update this file with progress

---

## 📞 CONTACT INFO (For Reference)

**Email:** cortexagents@gmail.com
**WhatsApp:** +92 321 2322687
**Address:** Karachi, Pakistan
**Instagram:** https://www.instagram.com/cortex_agents
**Facebook:** https://www.facebook.com/profile.php?id=61582835397946

---

## 🔗 TEAM MEMBERS (For Reference)

1. **Okasha Nadeem** - Full Stack & AI Developer
2. **Taha Qureshi** - AI Expert | Frontend Developer
3. **Muhammad Ubaid Raza** - Agentic AI Developer
4. **Syed Ahsan Raza Bukhari** - Full Stack Developer
5. **Syed Hamza Ali** - Claude Native Agentic AI Developer

---

**End of CLAUDE.md**
