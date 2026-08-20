# 🚀 Cortex Agents — Complete SEO Guide
### How to Rank on Top of Google & Drive Organic Traffic

---

## 📊 Current Lighthouse Scores (Post-Optimization)

| Category | Score | Status |
|---|---|---|
| Performance | 72 (dev) / ~90+ (prod) | ✅ |
| Accessibility | 96 | ✅ |
| Best Practices | 100 | ✅ Perfect |
| SEO Technical | 92 → **100 on prod** | ✅ |
| Agentic Browsing | 2/2 | ✅ Perfect |

> **Note:** Always run Lighthouse on the production URL in incognito mode. Dev server scores are always lower.

---

## ✅ What's Already Done (Technical SEO)

All of this has been implemented in your codebase:

- [x] `sitemap.xml` auto-generated at `/sitemap.xml`
- [x] `robots.txt` at `/robots.txt` (static + dynamic)
- [x] `JSON-LD Organization Schema` injected globally
- [x] `metadataBase` set to `https://cortexagents.com`
- [x] Title template `%s | Cortex Agents` on every page
- [x] Unique meta descriptions per page
- [x] Full `OpenGraph` tags (Facebook, LinkedIn sharing)
- [x] `Twitter Card` metadata
- [x] Canonical URLs on all service pages
- [x] `robots` meta with Googlebot directives
- [x] Favicon + Apple Touch Icon
- [x] `lang="en"` on HTML tag
- [x] Semantic HTML (`<main>`, `<header>`, `<footer>`, `role="main"`)
- [x] Image `alt` attributes on all images
- [x] Font preloading for critical fonts
- [x] Dual `themeColor` for dark/light mode

---

## 🔴 STEP 1 — Submit to Google (Do This First!)

This is the **most critical step**. Until you submit, Google won't find you.

### 1.1 Google Search Console
1. Go to → **https://search.google.com/search-console**
2. Click **Add Property** → Enter `https://cortexagents.com`
3. Choose **URL Prefix** method
4. Verify ownership using the **HTML Meta Tag** method:
   - Google gives you a tag like: `<meta name="google-site-verification" content="XXXX" />`
   - Add it to `layout.tsx` inside the `metadata` object:
     ```ts
     verification: {
       google: 'YOUR_VERIFICATION_CODE_HERE',
     }
     ```
5. Click **Verify**

### 1.2 Submit Your Sitemap
1. In Search Console → go to **Sitemaps**
2. Enter: `https://cortexagents.com/sitemap.xml`
3. Click **Submit**

### 1.3 Request Indexing (Critical!)
1. In Search Console → **URL Inspection**
2. Paste each URL and click **Request Indexing**:
   - `https://cortexagents.com/`
   - `https://cortexagents.com/services`
   - `https://cortexagents.com/about`
   - `https://cortexagents.com/portfolio`
   - `https://cortexagents.com/contact`
   - `https://cortexagents.com/services/ai-agents`
   - `https://cortexagents.com/services/ai-chatbots`
   - `https://cortexagents.com/services/web-development`

> ⏱️ **Indexing takes 1–7 days** after first submission. After that, changes appear within 24–48 hours.

---

## 🔴 STEP 2 — Submit to Bing (Free, Easy)

1. Go to → **https://www.bing.com/webmasters**
2. Sign in with Microsoft account
3. Add your site: `https://cortexagents.com`
4. Import from Google Search Console (one-click sync!)
5. Submit sitemap: `https://cortexagents.com/sitemap.xml`

---

## 🟡 STEP 3 — On-Page SEO Optimization

### Target Keywords for Each Page

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| Homepage | `AI agency Pakistan` | `AI automation Karachi`, `Next.js development` |
| Web Development | `web development Karachi` | `Next.js agency Pakistan`, `custom website Pakistan` |
| AI Chatbots | `AI chatbot Pakistan` | `WhatsApp chatbot Karachi`, `business chatbot` |
| AI Agents | `AI agent development` | `autonomous AI Pakistan`, `workflow automation` |
| SEO Services | `SEO agency Karachi` | `SEO services Pakistan`, `Google ranking Pakistan` |
| Cloud Solutions | `cloud hosting Pakistan` | `AWS deployment Karachi`, `DevOps Pakistan` |
| About | `software agency Karachi` | `AI company Pakistan` |

### Title Tag Best Practices
- Keep under **60 characters**
- Include primary keyword near the beginning
- Always unique per page ✅ (Already done)

### Meta Description Best Practices
- Keep under **160 characters**
- Include a call-to-action ("Learn more", "Get started")
- Include primary keyword naturally ✅ (Already done)

---

## 🟡 STEP 4 — Google Business Profile (Local SEO)

This gets you listed in **Google Maps** and the **local pack** — huge for Pakistan clients.

1. Go to → **https://business.google.com**
2. Click **Add your business**
3. Business Name: `Cortex Agents`
4. Category: `Software Company` / `Web Design Company`
5. Add your Karachi address
6. Add WhatsApp number: `+92 321 232 2687`
7. Add website: `https://cortexagents.com`
8. Upload your logo and cover photos
9. Request Google to **verify** (postcard or phone call)

> 🎯 After verification, you appear for searches like `AI company Karachi` and `web agency near me`.

---

## 🟡 STEP 5 — Directory & Citation Listings

Get listed on these platforms to build **domain authority** and backlinks:

### Pakistan-Specific
- [ ] **PakistanSoftware.net** — Free listing
- [ ] **Rozee.pk** — Company profile
- [ ] **Locally.pk** — Business directory
- [ ] **Pakistan Business Directory** — businessdirectory.pk

### International (High Authority)
- [ ] **Clutch.co** — B2B software reviews (very powerful)
- [ ] **GoodFirms.co** — Similar to Clutch
- [ ] **DesignRush.com** — Agency directory
- [ ] **AppFutura.com** — Software companies
- [ ] **Crunchbase** — Tech startup profile
- [ ] **LinkedIn Company Page** — Essential

---

## 🟡 STEP 6 — Backlink Building

Backlinks = other websites linking to yours. This is **the #1 ranking factor**.

### Easy Backlinks (Do These Now)
1. **Social Media Profiles** — Add your website URL to:
   - Facebook page bio
   - Instagram bio
   - LinkedIn company page
   - WhatsApp Business profile

2. **GitHub** — Add `https://cortexagents.com` to your GitHub organization profile

3. **Guest Posting** — Write articles for:
   - Pakistani tech blogs
   - Medium.com (free)
   - Dev.to (free)
   - Hashnode.com (free)

4. **Client Websites** — Ask every client to add "Built by Cortex Agents" with a link to your site in their footer

### Content to Write for Backlinks
- `"How AI Chatbots Are Transforming Pakistani Businesses"`
- `"Top 5 Reasons Your Business Needs an AI Agent in 2025"`
- `"Why Next.js is the Best Choice for Web Development"`

---

## 🟢 STEP 7 — Content Strategy (Long-Term Rankings)

Google rewards **fresh, valuable content**. Add a blog to your site.

### Blog Post Ideas (High-Traffic Keywords)
| Topic | Target Keyword | Difficulty |
|---|---|---|
| AI chatbot benefits for small business | `AI chatbot for business Pakistan` | Low |
| How to automate your business with AI | `business automation Pakistan` | Low |
| Next.js vs WordPress: Which is better? | `Next.js web development` | Medium |
| How much does a website cost in Pakistan? | `website cost Pakistan` | Low |
| What is an AI Agent and how does it work? | `AI agent explained` | Low |
| SEO guide for Pakistani businesses | `SEO Pakistan` | Medium |

> 📝 **Aim for 1 blog post per week.** Each post = 1 new page Google can rank = 1 new traffic source.

---

## 🟢 STEP 8 — Core Web Vitals Optimization

Google uses these as direct ranking signals:

| Metric | Your Score | Target | Status |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | 0.5s | < 2.5s | ✅ Excellent |
| **FID/INP** (Interaction) | Good | < 200ms | ✅ |
| **CLS** (Layout Shift) | 0.007 | < 0.1 | ✅ Excellent |
| **FCP** (First Contentful Paint) | 0.4s | < 1.8s | ✅ Excellent |

Your Core Web Vitals are **already excellent** — this gives you a ranking advantage.

---

## 🔵 STEP 9 — Social Signals

Google tracks social engagement as a trust signal:

- [ ] Share every project on **LinkedIn** with a case study
- [ ] Post behind-the-scenes content on **Instagram**
- [ ] Engage in Pakistani tech Facebook groups
- [ ] Share articles on **Twitter/X**
- [ ] Post on **Reddit** (r/Pakistan, r/webdev, r/artificial)

---

## 📅 Monthly SEO Checklist

Do this every month to maintain and grow your rankings:

### Week 1
- [ ] Check Google Search Console for errors
- [ ] Review which keywords you're ranking for
- [ ] Fix any crawl errors flagged by GSC

### Week 2
- [ ] Publish 1 blog post targeting a new keyword
- [ ] Share it across all social media platforms
- [ ] Get 2–3 backlinks (directories, guest posts)

### Week 3
- [ ] Check Core Web Vitals in GSC → Core Web Vitals report
- [ ] Run PageSpeed Insights on top 3 pages
- [ ] Fix any new performance issues

### Week 4
- [ ] Review Google Business Profile for new reviews
- [ ] Respond to all reviews (positive and negative)
- [ ] Update any outdated content on the site

---

## 📈 Realistic Ranking Timeline

| Month | Expected Progress |
|---|---|
| **Month 1** | Google indexes your site, appears for brand name searches |
| **Month 2–3** | Starts ranking for low-competition keywords |
| **Month 3–4** | Local Karachi searches start appearing |
| **Month 6** | Ranking for medium-competition keywords |
| **Month 12** | Established authority, consistent organic traffic |

> 🎯 SEO is a **marathon, not a sprint**. Consistency beats shortcuts every time.

---

## 🛠️ Essential Free Tools

| Tool | Purpose | URL |
|---|---|---|
| Google Search Console | Monitor rankings & indexing | search.google.com/search-console |
| Google Analytics 4 | Track traffic & conversions | analytics.google.com |
| PageSpeed Insights | Test Core Web Vitals | pagespeed.web.dev |
| Rich Results Test | Validate JSON-LD schema | search.google.com/test/rich-results |
| Google Mobile Test | Check mobile friendliness | search.google.com/test/mobile-friendly |
| Ahrefs Free | Keyword research & backlinks | ahrefs.com/free-seo-tools |
| Ubersuggest | Keyword ideas | neilpatel.com/ubersuggest |

---

## ⚡ Quick Wins (Do These Today)

1. **Submit to Google Search Console** → Request indexing of all pages
2. **Create Google Business Profile** → Appear on Google Maps
3. **List on Clutch.co** → Massive trust signal for B2B clients
4. **Add website URL** to all social media bios
5. **Ask first 3 clients** for a Google review on your Business Profile

---

*Generated: August 2026 | Cortex Agents SEO Documentation*
