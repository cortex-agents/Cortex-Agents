const fs = require('fs');

function replaceService(code, slug, newObjStr) {
  const marker = `slug: "${slug}"`;
  const slugIdx = code.indexOf(marker);
  if (slugIdx === -1) {
    console.log("Could not find slug:", slug);
    return code;
  }
  
  const startIdx = code.lastIndexOf('{', slugIdx);
  let braceCount = 0;
  let endIdx = -1;
  for (let i = startIdx; i < code.length; i++) {
    if (code[i] === '{') braceCount++;
    if (code[i] === '}') braceCount--;
    if (braceCount === 0) {
      endIdx = i + 1;
      break;
    }
  }
  
  return code.substring(0, startIdx) + newObjStr + code.substring(endIdx);
}

let code = fs.readFileSync('src/lib/services-data.ts', 'utf8');

const webDev = `{
    slug: "web-development",
    icon: "Globe",
    label: "Most Popular",
    title: "Web Development",
    shortDescription: "Next.js architecture engineered for sub-second load times, infinite scale, and ruthless conversion.",
    hero: {
      badge: "Enterprise Engineering",
      tagline: "Systems That Think. Pages That Convert.",
      title: "High-Performance Web Platforms",
      subtitle: "We don't build generic websites. We engineer autonomous, scalable Next.js platforms that command your market.",
      heroDescription: "Your website is either a revenue engine or a liability. We build blistering-fast, AI-ready platforms using the same tech stack as Netflix and TikTok. No templates. No bloat. Just pure performance.",
    },
    problems: {
      heading: "Is Your Current Website A Liability?",
      subheading: "If any of these sound familiar, you are losing market share:",
      problems: [
        "Your site loads slowly—costing you 53% of your traffic before they even read a word",
        "Your bounce rate is high because the design looks like a template from 2015",
        "You rely on bloated WordPress plugins that break every time there is an update",
        "Your competitors rank higher on Google because your codebase is unoptimized",
        "Your visitors leave without converting because there is no strategic user journey",
        "You are afraid to scale marketing because your server crashes under heavy traffic",
      ],
    },
    features: {
      heading: "The Engineering Standard",
      description: "We don't do simple websites here. This is hardcore software engineering. We build secure, compliant, and scalable platforms.",
      features: [
        {
          icon: "Zap",
          title: "Sub-Second Load Times",
          description: "We build exclusively in Next.js. Your pages load instantly, dominating Core Web Vitals and keeping users locked in.",
        },
        {
          icon: "Smartphone",
          title: "Flawless Responsive Architecture",
          description: "Tested across every device breakpoint. No broken layouts. No overflow errors. A perfect experience on iPhone, iPad, and 4K displays.",
        },
        {
          icon: "Palette",
          title: "Conversion-Driven UI",
          description: "Strategic interface design built to dictate user behavior. We design funnels that turn passive scrollers into booked calls.",
        },
        {
          icon: "Search",
          title: "AI-Search & SEO Dominance",
          description: "Semantic HTML, structured schema, and blazing speed. Built to rank on Google and be cited by ChatGPT and Perplexity.",
        },
        {
          icon: "Code",
          title: "Zero Code Bloat",
          description: "No messy page builders. Clean, modular React code that developers love and browsers parse instantly.",
        },
        {
          icon: "Shield",
          title: "Enterprise Security",
          description: "HTTPS, secure API routes, and environment variable protection. We lock down your data so you never worry about breaches.",
        },
      ],
    },
    process: {
      heading: "How We Deploy Your Platform",
      description: "We move fast. We communicate transparently. Deadlines are laws.",
      steps: [
        {
          number: "01",
          title: "Architecture Planning",
          description: "We map out the exact user journey, database schema, and conversion funnel before writing a single line of code.",
          duration: "Day 1-2",
        },
        {
          number: "02",
          title: "High-Fidelity Prototyping",
          description: "We design the entire interface in Figma. You see exactly what the final product looks like before development begins.",
          duration: "Day 3-5",
        },
        {
          number: "03",
          title: "Core Engineering",
          description: "Our engineers build the platform in Next.js. Clean code, fast performance, mobile-first from the ground up.",
          duration: "Day 6-12",
        },
        {
          number: "04",
          title: "QA & Load Testing",
          description: "We rigorously test the platform across devices, checking for bugs, security flaws, and performance bottlenecks.",
          duration: "Day 13-14",
        },
        {
          number: "05",
          title: "Deployment & Handover",
          description: "We deploy to Vercel or AWS, configure your analytics, and hand over the keys. You own 100% of the codebase.",
          duration: "Day 15",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Infrastructure that appreciates. Pricing based on complexity.",
      tiers: [
        {
          name: "MVP Engine",
          price: "PKR 45,000",
          description: "High-speed landing pages for rapid validation.",
          features: [
            "Up to 5 pages",
            "Next.js architecture",
            "Conversion-focused UI",
            "Basic technical SEO",
            "Contact form integration",
            "Delivered in 7 days",
          ],
        },
        {
          name: "Growth Platform",
          price: "PKR 85,000",
          badge: "Most Popular",
          description: "Full-scale corporate presence built to rank and convert.",
          features: [
            "Up to 10 pages",
            "Custom Framer Motion animations",
            "Dynamic Blog / CMS setup",
            "Advanced Schema Markup",
            "WhatsApp/CRM integration",
            "Delivered in 14 days",
          ],
        },
        {
          name: "Custom Application",
          price: "Custom",
          description: "Complex web apps, portals, and heavy integrations.",
          features: [
            "Custom Database (PostgreSQL)",
            "User Authentication",
            "Third-party API integrations",
            "Complex data visualization",
            "Load-tested for scale",
            "Dedicated project manager",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Who owns the codebase after launch?",
        a: "You do. 100%. We hand over the GitHub repository and all deployment credentials upon final payment.",
      },
      {
        q: "Do you use WordPress or Shopify?",
        a: "No. We are an engineering firm. We build custom platforms using Next.js and React to guarantee sub-second load times and infinite scalability.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Yes. We build with strict technical SEO standards—semantic HTML, perfect Core Web Vitals, and structured data to ensure maximum visibility.",
      },
      {
        q: "Can you integrate with my existing CRM?",
        a: "Absolutely. If your CRM (Salesforce, HubSpot, etc.) has an API, we can build a seamless integration into your new platform.",
      },
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes. We offer Managed IT retainers to monitor uptime, handle security patches, and push new features so you never have to worry about servers crashing.",
      },
    ],
    cta: {
      heading: "Stop Losing Clients to Slow Websites",
      subheading: "Upgrade to a high-performance Next.js platform today.",
      primaryCTA: "Get a Technical Audit",
      primaryLink: "/contact",
      secondaryCTA: "View Our Work",
      secondaryLink: "/portfolio",
      note: "Free architecture audit • Clear pricing • 100% code ownership",
    },
  }`;

const uiUx = `{
    slug: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    shortDescription: "Strategic interface design that dictates user behavior and drives conversion.",
    hero: {
      badge: "Conversion Strategy",
      tagline: "Design That Drives Revenue.",
      title: "Strategic UI/UX Design",
      subtitle: "We don't just make things look pretty. We engineer interfaces that command attention and force users to take action.",
      heroDescription: "First impressions happen in 0.05 seconds. If your software looks outdated or confusing, you are burning cash. We design brutalist, clean, and highly converting interfaces that build instant trust with enterprise clients.",
    },
    problems: {
      heading: "Is Your Interface Leaking Money?",
      problems: [
        "Users complain that your software or website is hard to navigate",
        "Your bounce rate is high because the design looks unprofessional",
        "You are building features, but users aren't actually using them",
        "Your competitors look like premium brands, while you look like a startup",
        "The conversion rate from visitor to lead is stuck below 1%",
        "Your engineering team wastes time guessing how features should look",
      ],
    },
    features: {
      heading: "The Design Standard",
      description: "We strip away the unnecessary. Pure performance. Pure typography. Pure conversion.",
      features: [
        {
          icon: "Eye",
          title: "Conversion-Driven Layouts",
          description: "Every button, spacing, and font choice is engineered to guide the user's eye exactly where we want it to go.",
        },
        {
          icon: "Smartphone",
          title: "Mobile-First Architecture",
          description: "Over 60% of traffic is mobile. We design mobile interfaces that feel like native apps, not squished websites.",
        },
        {
          icon: "Layers",
          title: "Scalable Design Systems",
          description: "We don't just design pages; we build reusable component libraries so your engineers can build new features 10x faster.",
        },
        {
          icon: "Activity",
          title: "Framer Motion Prototyping",
          description: "Static designs are dead. We prototype complex micro-interactions and animations so the final product feels alive.",
        },
        {
          icon: "Users",
          title: "User Journey Mapping",
          description: "We map out every single click a user takes from discovery to purchase, eliminating any friction in the funnel.",
        },
        {
          icon: "Code",
          title: "Developer-Ready Handoff",
          description: "Our Figma files are meticulously organized with variables, auto-layout, and tokens. Your devs will love us.",
        },
      ],
    },
    process: {
      heading: "How We Engineer Your Interface",
      description: "Data-driven design. No guesswork. Just strategic execution.",
      steps: [
        {
          number: "01",
          title: "UX Audit & Wireframing",
          description: "We map the user flows and create low-fidelity wireframes to establish the core architecture.",
          duration: "Day 1-3",
        },
        {
          number: "02",
          title: "Visual Identity & System",
          description: "We define the typography, color palette, and spacing rules, creating the foundational design system.",
          duration: "Day 4-6",
        },
        {
          number: "03",
          title: "High-Fidelity UI Design",
          description: "We apply the visual system to the wireframes, crafting pixel-perfect, brutalist screens.",
          duration: "Day 7-10",
        },
        {
          number: "04",
          title: "Interactive Prototyping",
          description: "We link the screens together in Figma, simulating exactly how the final software will feel.",
          duration: "Day 11-12",
        },
        {
          number: "05",
          title: "Developer Handoff",
          description: "We export all assets, tokens, and documentation, ensuring a seamless transition to the engineering team.",
          duration: "Day 13-14",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "World-class design is an asset. Pricing based on scope.",
      tiers: [
        {
          name: "Landing Page UI",
          price: "PKR 35,000",
          description: "A high-converting single page designed to capture leads.",
          features: [
            "1 High-Fidelity Page",
            "Mobile & Desktop views",
            "Hero section optimization",
            "Custom iconography",
            "Figma source file",
            "Delivered in 5 days",
          ],
        },
        {
          name: "Full Website UI",
          price: "PKR 75,000",
          badge: "Most Popular",
          description: "Complete digital presence designed for scale.",
          features: [
            "Up to 8 Pages",
            "Complete Design System",
            "Interactive Prototype",
            "Micro-interaction guidelines",
            "Developer-ready handoff",
            "Delivered in 14 days",
          ],
        },
        {
          name: "SaaS / Web App UI",
          price: "Custom",
          description: "Complex dashboards and multi-tenant platforms.",
          features: [
            "Unlimited Screens",
            "Complex User Flows",
            "Data visualization UI",
            "Advanced Component Library",
            "Dark/Light mode support",
            "Dedicated UI Strategist",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Do you also build the website?",
        a: "Yes. While this service is purely for the UI/UX design (Figma), our engineering team can build it in Next.js as part of a full-stack engagement.",
      },
      {
        q: "Will I get the source files?",
        a: "Absolutely. You own 100% of the IP. We provide full access to the organized Figma files upon completion.",
      },
      {
        q: "How many revisions do I get?",
        a: "We operate on a milestone basis. You approve the wireframes before we move to UI, and you approve the UI before handoff, ensuring zero surprises.",
      },
      {
        q: "What if I already have a brand guideline?",
        a: "Perfect. We will adapt our UI design to strictly adhere to your existing typography, colors, and brand voice.",
      },
      {
        q: "Why shouldn't I just use a template?",
        a: "Templates are rigid, bloated, and identical to thousands of other sites. Custom UI/UX is engineered specifically for your user journey and business goals.",
      },
    ],
    cta: {
      heading: "Stop Losing Users to Bad Design",
      subheading: "Upgrade your interface and watch your conversion rates soar.",
      primaryCTA: "Book UX Audit",
      primaryLink: "/contact",
      secondaryCTA: "View Designs",
      secondaryLink: "/portfolio",
      note: "Free UX tear-down • Figma handoff • 100% IP ownership",
    },
  }`;

const chatbots = `{
    slug: "ai-chatbots",
    icon: "MessageSquare",
    label: "High ROI",
    title: "AI Chatbots",
    shortDescription: "Automated support layers that capture leads, qualify intent, and close deals at 3 AM.",
    hero: {
      badge: "Automated Conversion",
      tagline: "Never Miss A Lead Again.",
      title: "Intelligent AI Chatbots",
      subtitle: "Stop losing customers because your sales team was asleep. We build AI chatbots that instantly answer questions, qualify leads, and book meetings.",
      heroDescription: "If a potential client visits your site at 2 AM and has a question, they won't wait until morning. They will go to your competitor. We engineer Custom AI Chatbots trained exclusively on your business data to provide instant, human-like support 24/7/365.",
    },
    problems: {
      heading: "Is Your Sales Pipeline Leaking?",
      problems: [
        "Your team spends hours answering the exact same repetitive questions",
        "Leads get cold because no one replies to them on weekends or after hours",
        "Website visitors drop off because they can't find pricing or service details quickly",
        "You are paying thousands for human customer support agents to do basic triage",
        "Your current 'chatbot' is just a dumb menu that frustrates users",
        "You have no automated way to capture emails or book calendar meetings",
      ],
    },
    features: {
      heading: "The AI Support Standard",
      description: "We don't build dumb decision trees. We engineer intelligent RAG systems using OpenAI and Claude.",
      features: [
        {
          icon: "Brain",
          title: "Trained On Your Exact Data",
          description: "We feed the AI your PDFs, website text, past emails, and FAQs. It only answers using your verified information. No hallucinations.",
        },
        {
          icon: "Calendar",
          title: "Automated Meeting Booking",
          description: "The AI qualifies the lead based on your custom criteria and directly books them into your Calendly or Google Calendar.",
        },
        {
          icon: "MessageCircle",
          title: "Multi-Channel Deployment",
          description: "We deploy the exact same AI brain to your Website, WhatsApp Business, and Instagram DMs.",
        },
        {
          icon: "Globe",
          title: "Native Multilingual",
          description: "Your bot automatically detects the user's language and replies flawlessly in over 50+ languages, expanding your market globally.",
        },
        {
          icon: "Zap",
          title: "Human Handoff Protocol",
          description: "If the AI detects an angry customer or a highly complex enterprise deal, it seamlessly pauses and alerts your human sales team.",
        },
        {
          icon: "Database",
          title: "Lead Capture & CRM Sync",
          description: "Every email, phone number, and chat summary is automatically synced to your HubSpot, Salesforce, or Google Sheets.",
        },
      ],
    },
    process: {
      heading: "How We Deploy Your AI",
      description: "From data ingestion to live deployment in days, not months.",
      steps: [
        {
          number: "01",
          title: "Knowledge Gathering",
          description: "You provide us with your company docs, URLs, and FAQs. We process and clean this data for the AI.",
          duration: "Day 1-2",
        },
        {
          number: "02",
          title: "AI Training & Prompting",
          description: "We build the RAG pipeline and write strict system prompts so the bot perfectly matches your brand's tone of voice.",
          duration: "Day 3-5",
        },
        {
          number: "03",
          title: "Internal Sandbox Testing",
          description: "We give you a private link to chat with the bot. You try to break it, and we refine the prompt based on your feedback.",
          duration: "Day 6-8",
        },
        {
          number: "04",
          title: "CRM & Logic Integration",
          description: "We connect the bot to your Calendly, Stripe, and CRM for seamless lead capturing.",
          duration: "Day 9-10",
        },
        {
          number: "05",
          title: "Go-Live & Analytics",
          description: "We embed the chat widget on your site. You get access to a dashboard to read every conversation and track ROI.",
          duration: "Day 11",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Automated sales reps that never sleep. Pricing based on complexity.",
      tiers: [
        {
          name: "Support Bot",
          price: "PKR 55,000",
          description: "Perfect for answering FAQs and basic customer support.",
          features: [
            "Trained on Website + FAQs",
            "Website Widget Integration",
            "Basic Lead Capture (Email)",
            "Standard GPT-4o Mini Engine",
            "1 Month free tweaking",
          ],
        },
        {
          name: "Sales Agent",
          price: "PKR 95,000",
          badge: "Highest ROI",
          description: "An AI designed specifically to qualify leads and book calls.",
          features: [
            "Trained on Full Knowledge Base",
            "Calendly / Booking Integration",
            "CRM Sync (HubSpot / Sheets)",
            "WhatsApp or Web deployment",
            "Human Handoff capabilities",
          ],
        },
        {
          name: "Enterprise Fleet",
          price: "Custom",
          description: "Multi-channel AI architecture for large organizations.",
          features: [
            "Web, WhatsApp, and IG deployment",
            "Complex API actions (e.g. check order status)",
            "Advanced RAG with Vector DB",
            "Dedicated Slack alert channels",
            "Custom Analytics Dashboard",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "What if the AI makes something up?",
        a: "We use strict Retrieval-Augmented Generation (RAG) and low-temperature prompting. The bot is explicitly instructed to say 'I don't know, let me connect you to a human' if the answer isn't in your data.",
      },
      {
        q: "Will this slow down my website?",
        a: "No. The chatbot script is deferred and loads asynchronously. It has zero impact on your Core Web Vitals.",
      },
      {
        q: "What happens when my company data changes?",
        a: "You simply upload the new PDF or update the URL in your dashboard, and the AI instantly learns the new information.",
      },
      {
        q: "Can it speak Urdu or Arabic?",
        a: "Yes. Our AI engines (GPT-4o / Claude) natively understand and reply perfectly in Urdu, Arabic, and 50+ other languages automatically.",
      },
      {
        q: "Do I have to pay monthly for the AI?",
        a: "You will need to cover your own API usage costs (OpenAI/Anthropic), which typically run $10-$30/month depending on traffic. We charge a one-time setup fee, with optional monthly maintenance retainers.",
      },
    ],
    cta: {
      heading: "Hire Your First AI Employee",
      subheading: "Never miss a 3 AM customer inquiry again.",
      primaryCTA: "Calculate ROI",
      primaryLink: "/contact",
      secondaryCTA: "View Case Studies",
      secondaryLink: "/portfolio",
      note: "Live in 14 days • Custom trained • Integrates with your CRM",
    },
  }`;

const agents = `{
    slug: "ai-agents",
    icon: "Cpu",
    title: "AI Agents & Automation",
    shortDescription: "Autonomous systems that handle data, routing, and logic without human intervention.",
    hero: {
      badge: "Hyper-Automation",
      tagline: "Software That Does The Work For You.",
      title: "Autonomous AI Agents",
      subtitle: "We build custom AI Agents that don't just chat—they act. They read emails, scrape data, execute workflows, and trigger APIs.",
      heroDescription: "Chatbots wait for a human to speak. AI Agents work in the background. We engineer autonomous digital workers that replace thousands of hours of manual data entry, lead research, and operational bloat.",
    },
    problems: {
      heading: "Are You Wasting Human Capital?",
      problems: [
        "Your team spends hours copying and pasting data from emails into spreadsheets",
        "You pay expensive employees to do repetitive, robotic administrative tasks",
        "Important leads fall through the cracks because human follow-ups are too slow",
        "Scaling your business currently means hiring more operations staff",
        "Data is siloed across 5 different apps and someone has to manually sync them",
        "You are losing out to competitors who have automated their backend operations",
      ],
    },
    features: {
      heading: "The Automation Standard",
      description: "We don't do basic Zapier zaps. We build intelligent, multi-step agentic workflows using LangChain and Python.",
      features: [
        {
          icon: "Mail",
          title: "Inbox Triaging Agents",
          description: "An AI agent reads every incoming support email, categorizes it, extracts the data, and drafts a reply for your approval.",
        },
        {
          icon: "Search",
          title: "Lead Enrichment Agents",
          description: "When a new lead enters your CRM, an agent automatically scrapes their LinkedIn and company website, updating your CRM with full context.",
        },
        {
          icon: "FileText",
          title: "Document Parsing",
          description: "Agents that read massive PDFs, contracts, or invoices, extract the exact data you need, and dump it into your database flawlessly.",
        },
        {
          icon: "Share2",
          title: "Social Media Automation",
          description: "An agent that reads industry news, writes a contextual LinkedIn post in your brand voice, and schedules it automatically.",
        },
        {
          icon: "Activity",
          title: "24/7 Background Execution",
          description: "These agents don't take weekends off. They run on CRON jobs on your server, executing tasks continuously while you sleep.",
        },
        {
          icon: "Code",
          title: "Multi-Agent Systems",
          description: "We build systems where a 'Researcher Agent' passes data to a 'Writer Agent', who passes it to a 'QA Agent'. Entire departments, automated.",
        },
      ],
    },
    process: {
      heading: "How We Engineer Automation",
      description: "We map the logic, build the engine, and deploy it securely.",
      steps: [
        {
          number: "01",
          title: "Process Mining",
          description: "We sit with your team to record exactly how you do a manual task today, documenting every click and decision.",
          duration: "Week 1",
        },
        {
          number: "02",
          title: "Architecture & Logic",
          description: "We design the agentic flow, deciding which LLMs to use and which APIs (Make.com, LangChain, OpenAI) are required.",
          duration: "Week 2",
        },
        {
          number: "03",
          title: "Agent Engineering",
          description: "We write the Python/Node.js code that allows the agent to execute actions, adding fail-safes for edge cases.",
          duration: "Week 3-4",
        },
        {
          number: "04",
          title: "Shadow Mode Testing",
          description: "The agent runs in the background. It generates the actions but doesn't send them yet. We review its accuracy.",
          duration: "Week 5",
        },
        {
          number: "05",
          title: "Production Deployment",
          description: "Once accuracy hits 99%, we turn the agent live. It takes over the workflow permanently.",
          duration: "Week 6",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Buy back thousands of human hours. Pricing based on complexity.",
      tiers: [
        {
          name: "Single Agent",
          price: "PKR 75,000",
          description: "Automate one specific, painful manual task.",
          features: [
            "1 Dedicated AI Agent",
            "Up to 3 App Integrations",
            "Email or Webhook Triggers",
            "Basic Error Handling",
            "Make.com / Python based",
          ],
        },
        {
          name: "Agent Workflow",
          price: "PKR 150,000",
          badge: "High Impact",
          description: "A multi-step process involving decisions and data routing.",
          features: [
            "Multi-Agent passing",
            "Document parsing (PDF/CSV)",
            "Advanced API Integrations",
            "CRM Data Enrichment",
            "Robust logging & fail-safes",
          ],
        },
        {
          name: "Autonomous Department",
          price: "Custom",
          description: "Full-scale agentic networks for enterprise ops.",
          features: [
            "LangChain / LangGraph setup",
            "Custom Vector Databases",
            "Human-in-the-loop dashboards",
            "High-scale concurrency",
            "SLA & Dedicated Maintenance",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "What is the difference between a Chatbot and an Agent?",
        a: "Chatbots just talk. Agents DO things. A chatbot tells you the weather; an agent sees it's going to rain, cancels your outdoor meeting, and emails the attendees to reschedule.",
      },
      {
        q: "Is it secure to give AI access to my apps?",
        a: "Yes. We use strict OAuth permissions and API keys scoped only to the exact actions the agent needs. We never give AI 'god mode' access.",
      },
      {
        q: "What happens if the AI makes a mistake?",
        a: "We engineer 'Human-in-the-loop' systems for critical tasks. The AI will do 99% of the work (drafting, researching) but wait for you to click 'Approve' before executing.",
      },
      {
        q: "Will this replace my employees?",
        a: "No. It will replace the robotic, boring parts of their job. It allows your human employees to focus on strategy, sales, and high-level creative work instead of data entry.",
      },
      {
        q: "Do I need technical knowledge to use it?",
        a: "Zero. We build the engine in the backend. To you, it just looks like magic happening automatically in your inbox or CRM.",
      },
    ],
    cta: {
      heading: "Scale Your Output, Not Your Payroll",
      subheading: "Let's find out exactly how many hours an AI Agent can save you.",
      primaryCTA: "Audit My Workflows",
      primaryLink: "/contact",
      secondaryCTA: "WhatsApp Us",
      secondaryLink: "https://wa.me/923212322687",
      note: "Custom Python & LangChain • Secure API handling",
    },
  }`;

const seo = `{
    slug: "seo-optimization",
    icon: "TrendingUp",
    title: "SEO & AI Visibility",
    shortDescription: "Dominate Google and become the default answer across ChatGPT, Claude, and Perplexity.",
    hero: {
      badge: "Organic Growth",
      tagline: "Win The Search, Win The Market.",
      title: "SEO & AI Visibility Optimization",
      subtitle: "Search has fundamentally changed. We optimize your brand to dominate traditional Google rankings and become the trusted citation in AI engines.",
      heroDescription: "Traditional SEO is no longer enough. Millions of users now bypass Google entirely, asking ChatGPT or Perplexity instead. We engineer your digital presence to rank #1 on traditional search engines while deploying AEO (Answer Engine Optimization) so AI platforms recommend your brand first.",
    },
    problems: {
      heading: "Are You Invisible to Your Best Clients?",
      problems: [
        "You have a beautiful website, but zero organic traffic coming to it",
        "Your competitors outrank you for the most profitable keywords in your industry",
        "When users ask ChatGPT about services in your niche, it recommends your competitor",
        "You are burning cash on paid ads because you have no organic lead flow",
        "Your website architecture is slow and confusing, causing Google to penalize you",
        "You have no strategy to adapt to Google's new AI Overviews (SGE)",
      ],
    },
    features: {
      heading: "The Visibility Standard",
      description: "We don't do shady link-building or keyword stuffing. We do highly technical, semantic engineering.",
      features: [
        {
          icon: "Code",
          title: "Technical SEO Foundation",
          description: "We rebuild your meta tags, fix broken links, optimize Core Web Vitals, and ensure perfect mobile responsiveness so Google loves crawling your site.",
        },
        {
          icon: "Database",
          title: "Advanced Schema Markup",
          description: "We inject structured JSON-LD data into your code. This speaks directly to search engine bots, telling them exactly what your business does.",
        },
        {
          icon: "Bot",
          title: "AEO (Answer Engine Optimization)",
          description: "We structure your content in Q&A formats and semantic clusters specifically designed to be cited by LLMs like ChatGPT and Perplexity.",
        },
        {
          icon: "TrendingUp",
          title: "Topical Authority Silos",
          description: "We don't just target single keywords. We build massive, interconnected content architectures that prove to Google you are the industry expert.",
        },
        {
          icon: "FileText",
          title: "Programmatic SEO (pSEO)",
          description: "Need to rank in 50 different cities? We engineer automated page generation systems to scale your local reach without manual data entry.",
        },
        {
          icon: "Activity",
          title: "Performance Analytics",
          description: "We deploy Google Search Console and custom tracking so you can literally watch your impressions, clicks, and rankings compound over time.",
        },
      ],
    },
    process: {
      heading: "How We Engineer Your Rankings",
      description: "SEO takes time, but it compounds massively. Here is our exact playbook.",
      steps: [
        {
          number: "01",
          title: "Technical Audit & Cleanup",
          description: "We scan your entire site for 404s, slow loading times, and indexation errors. We fix the foundation first.",
          duration: "Month 1",
        },
        {
          number: "02",
          title: "Keyword & AI Intent Mapping",
          description: "We map out exactly what your customers are typing into Google and what they are asking ChatGPT.",
          duration: "Month 1",
        },
        {
          number: "03",
          title: "On-Page Semantic Optimization",
          description: "We rewrite your H1s, meta tags, and body copy to perfectly align with search intent and inject Schema Markup.",
          duration: "Month 2",
        },
        {
          number: "04",
          title: "Content Silo Deployment",
          description: "We begin rolling out authoritative, long-form content that targets long-tail keywords and builds your topical map.",
          duration: "Month 3+",
        },
        {
          number: "05",
          title: "Continuous AEO Iteration",
          description: "We monitor how AI overviews and chatbots cite your brand, tweaking the semantic phrasing until you are the default recommendation.",
          duration: "Ongoing",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Organic traffic is an asset you own. Paid ads are just rent.",
      tiers: [
        {
          name: "SEO Setup & Audit",
          price: "PKR 45,000",
          description: "A one-time technical overhaul to fix your foundation.",
          features: [
            "Full Technical Site Audit",
            "Fix Core Web Vitals",
            "On-Page Meta Optimization",
            "Basic Schema Implementation",
            "Google Search Console Setup",
          ],
        },
        {
          name: "Local SEO Growth",
          price: "PKR 65,000 / mo",
          badge: "Most Popular",
          description: "Dominate local searches and Google Maps in your city.",
          features: [
            "Google Business Profile Optimization",
            "Local citation building",
            "2 Authoritative Articles / mo",
            "Competitor rank tracking",
            "Monthly ROI reporting",
          ],
        },
        {
          name: "National & AI Dominance",
          price: "Custom",
          description: "For brands that need to own the entire industry conversation.",
          features: [
            "Full AEO (AI Visibility) Strategy",
            "Programmatic SEO deployment",
            "Advanced Topical Authority Mapping",
            "Deep technical speed engineering",
            "Dedicated Slack channel",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "How long does SEO take to see results?",
        a: "If your technical foundation is broken, fixing it will show a bump in 30 days. However, true compounding organic growth takes 3 to 6 months to mature.",
      },
      {
        q: "What is AEO and why does it matter?",
        a: "Answer Engine Optimization. People are stopping Googling things and starting to ask ChatGPT. AEO ensures that when they ask ChatGPT 'Who is the best B2B software agency?', it says your name.",
      },
      {
        q: "Do you guarantee page 1 rankings?",
        a: "Any agency that guarantees Page 1 is lying to you. We guarantee that we will execute the highest standard of technical and semantic engineering, which historically drives immense organic growth.",
      },
      {
        q: "Is SEO better than Facebook/Google Ads?",
        a: "Ads stop working the second you stop paying. SEO is like buying real estate—it takes time to build, but once you rank, you get free traffic 24/7/365.",
      },
      {
        q: "Do I have to sign a 12-month contract?",
        a: "No. Our retainers are month-to-month. We keep you by delivering results, not by locking you into a legal document.",
      },
    ],
    cta: {
      heading: "Stop Paying Rent for Traffic",
      subheading: "Build a digital asset that compounds and brings you free leads forever.",
      primaryCTA: "Get Free SEO Audit",
      primaryLink: "/contact",
      secondaryCTA: "Read The Playbook",
      secondaryLink: "/about",
      note: "Zero black-hat tactics • Month-to-month • Full technical overhaul",
    },
  }`;

code = replaceService(code, 'web-development', webDev);
code = replaceService(code, 'ui-ux-design', uiUx);
code = replaceService(code, 'ai-chatbots', chatbots);
code = replaceService(code, 'ai-agents', agents);
code = replaceService(code, 'seo-optimization', seo);

fs.writeFileSync('src/lib/services-data.ts', code);
console.log('Successfully rewrote all 5 services in FlyRank style.');
