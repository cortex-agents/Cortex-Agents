# Phase: Elite Copywriting Overhaul

## 🎯 Objective
Rewrite the entire Cortex Agents website to match the "Editorial Tech" B2B copywriting style used by elite SaaS companies and agencies (e.g., FlyRank). The goal is to sound expensive, highly confident, and focused strictly on business outcomes rather than just technical features.

---

## 📖 The Core Style Rules (To be applied to every page)
1. **The Staccato Rhythm:** Short, punchy sentences. Hard stops. (e.g., *"One platform. Six modules. Infinite scale."*)
2. **Outcome > Feature:** Never list a tech stack without the business result. (e.g., *"We build in Next.js—so your pages load in under 1 second and customers never bounce."*)
3. **Zero Fluff:** Remove words like *strive, passionate, innovative, synergy, cutting-edge*. Replace with concrete facts.
4. **Frame the Enemy:** Always contrast the "broken old way" (slow freelancers, messy code, generic templates) against "our way" (engineered systems, zero onboarding, autonomous scale).

---

## 📋 Page-by-Page Execution Checklist

### 1. Homepage (`src/components/Hero.tsx`, `About.tsx`, `Services.tsx`)
- [x] **Hero Section:** Rewrite the H1 and sub-copy to be ruthlessly direct. Remove any generic agency language.
- [x] **About/Stats Section:** Update the numerical stats copy to sound like undeniable engineering facts.
- [x] **Homepage Services List:** Sharpen the short descriptions to focus entirely on client ROI.

### 2. About Page (`src/components/about/`)
- [x] **AboutHero:** Rewrite the intro. It shouldn't sound like a standard agency "hello," but rather a manifesto of engineering excellence.
- [x] **Story:** Refine the "How It Started" section. Frame Cortex Agents as the cure to broken, slow digital experiences.
- [x] **Values:** Make the core values punchy and unapologetic (e.g., from "We respect your time" to "Deadlines are laws, not suggestions.").
- [x] **TechStack:** Update the sub-copy to emphasize that we use the same tools as billion-dollar companies.

### 3. Services Data (`src/lib/services-data.ts`)
*This file powers all individual service pages. We will audit every single string inside it.*
- [x] **Web Development:** Focus heavily on speed, conversion rates, and SEO indexing.
- [x] **UI/UX Design:** Frame design as a business strategy and conversion mechanism, not just "making it look pretty."
- [x] **AI Chatbots:** Shift focus from "cool AI" to "never missing a customer at 3 AM."
- [x] **AI Agents & Automation:** Emphasize saving hundreds of human hours and automating manual data entry.
- [x] **SEO Optimization:** Rewrite to focus on dominating AI Search (AEO) and traditional Google simultaneously.
- [x] **Custom SaaS & Enterprise:** Ensure the tone appeals directly to CTOs and enterprise founders (scale, security, multi-tenant).
- [x] **Dedicated Teams:** Make it the undeniable alternative to the painful, slow process of hiring in-house.
- [x] **Managed IT:** Frame it as "CTO as a Service" — ultimate peace of mind.

### 4. Portfolio / Work Page (`src/components/portfolio.tsx`, `app/portfolio/page.tsx`)
- [x] Rewrite the page intro from "Look at our work" to "Look at the business outcomes we engineered."
- [x] Ensure project descriptions highlight the *problem solved*, not just the tech used.

### 5. Careers & Collaboration (`src/app/careers/page.tsx`)
- [x] Rewrite to sound like an elite engineering unit recruiting top 1% talent, rather than a standard job board.

### 6. Micro-Copy & Global Components (Header, Footer, CTA, Forms)
- [x] **AuditForm:** Review the labels and placeholder texts to ensure they sound professional and direct.
- [x] **Footer:** Sharpen the brand description in the footer.
- [x] **Buttons:** Change passive buttons (e.g., "Submit", "Learn More") to active outcome buttons (e.g., "Start My Project", "Get Free Audit", "Explore Capabilities").

---

## 🚀 Execution Strategy
We will move through this checklist one page/section at a time. For each file, we will:
1. Review the existing code.
2. Rewrite the text content strictly adhering to the 4 Style Rules.
3. Inject the updated text back into the components/data files.
4. Check off the task here.
