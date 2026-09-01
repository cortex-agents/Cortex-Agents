export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface PricingTier {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  icon: string;
  label?: string;
  title: string;
  shortDescription: string;
  seoTitle?: string;
  metaDescription?: string;
  /** The honest entry point for worldwide clients, in USD. `unit` is
   *  "one-time" for project services and "monthly" for retainer services.
   *  Rendered on the service page AND emitted into the Service JSON-LD as an
   *  `offers` priceSpecification — the two must agree, so there is one field. */
  priceFrom: {
    amount: number;
    unit: "one-time" | "monthly";
  };
  hero: {
    badge: string;
    tagline: string;
    title: string;
    subtitle: string;
    heroDescription: string;
  };
  problems: {
    heading: string;
    subheading?: string;
    problems: string[];
  };
  features: {
    heading: string;
    description: string;
    features: ServiceFeature[];
  };
  process: {
    heading: string;
    description: string;
    steps: ProcessStep[];
  };
  pricing: {
    heading: string;
    subheading: string;
    tiers: PricingTier[];
  };
  faqs: FAQ[];
  cta: {
    heading: string;
    subheading: string;
    primaryCTA: string;
    primaryLink: string;
    secondaryCTA: string;
    secondaryLink: string;
    note: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    icon: "Globe",
    priceFrom: { amount: 800, unit: "one-time" },
    label: "Most Popular",
    title: "Web Development",
    shortDescription: "Next.js architecture engineered for sub-second load times, infinite scale, and ruthless conversion.",
    seoTitle: "Web Development Services",
    metaDescription:
      "Custom web development with Next.js — sub-second load times, built to scale and convert. We build production-grade sites for clients worldwide. Get a quote.",
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
  },
  {
    slug: "ui-ux-design",
    icon: "Palette",
    priceFrom: { amount: 500, unit: "one-time" },
    title: "UI/UX Design",
    shortDescription: "Strategic interface design that dictates user behavior and drives conversion.",
    seoTitle: "UI/UX Design Services",
    metaDescription:
      "UI/UX design that guides user behaviour and lifts conversion. Research, wireframes, design systems, and polished interfaces for products worldwide. Talk to us.",
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
  },
  {
    slug: "ai-chatbots",
    icon: "MessageSquare",
    priceFrom: { amount: 1200, unit: "one-time" },
    label: "High ROI",
    title: "AI Chatbots",
    shortDescription: "Automated support layers that capture leads, qualify intent, and close deals at 3 AM.",
    seoTitle: "AI Chatbot Development Services",
    metaDescription:
      "AI chatbot development that captures leads, qualifies intent, and answers customers 24/7. Trained on your business, deployed on your stack. Book a free demo.",
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
  },
  {
    slug: "ai-agents",
    icon: "Cpu",
    priceFrom: { amount: 2000, unit: "one-time" },
    title: "AI Agents & Automation",
    shortDescription: "Autonomous systems that handle data, routing, and logic without human intervention.",
    seoTitle: "AI Agents & Automation Services",
    metaDescription:
      "AI agents that run real workflows — data, routing, and decisions handled without humans in the loop. Custom-built and production-ready. See what we automate.",
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
  },
  {
    slug: "seo-optimization",
    icon: "TrendingUp",
    priceFrom: { amount: 500, unit: "monthly" },
    title: "SEO & AI Visibility",
    shortDescription: "Dominate Google and become the default answer across ChatGPT, Claude, and Perplexity.",
    seoTitle: "SEO & AI Visibility Services",
    metaDescription:
      "SEO plus AI visibility: rank on Google and become the answer in ChatGPT, Claude, and Perplexity. Technical SEO, content, and schema done right. Get an audit.",
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
  },
  {
    slug: "cloud-solutions",
    icon: "Cloud",
    priceFrom: { amount: 800, unit: "one-time" },
    title: "Cloud Solutions",
    shortDescription: "Scalable, secure cloud infrastructure that grows with your business — deployed and managed by experts.",
    seoTitle: "Cloud Solutions & DevOps Services",
    metaDescription:
      "Cloud infrastructure and DevOps that scale with you — deployment, CI/CD, monitoring, and cost control on AWS, Vercel, and more. Talk to our cloud engineers.",
    hero: {
      badge: "Scale Without Limits",
      tagline: "Your Infrastructure Should Never Hold You Back.",
      title: "Cloud Solutions",
      subtitle: "Modern cloud infrastructure that's fast, secure, scalable, and always online — so your business never goes down.",
      heroDescription: "Whether you're launching a new product, experiencing rapid growth, or struggling with slow, unreliable hosting — we architect and deploy cloud solutions that handle whatever your business throws at them. Built on AWS, Vercel, and modern DevOps practices.",
    },
    problems: {
      heading: "Is Your Infrastructure Slowing You Down?",
      problems: [
        "Your website or app goes down during traffic spikes — you lose customers and credibility",
        "Shared hosting is slow, unreliable, and you've outgrown it",
        "Deployments are manual and stressful — one mistake breaks everything",
        "No backups, no monitoring — you only find out something broke when a client calls",
        "Your app is slow in production even though it works fine locally",
        "You're paying for servers you don't understand and can't manage efficiently",
      ],
    },
    features: {
      heading: "Our Cloud Services",
      description: "We architect, deploy, and manage cloud infrastructure on AWS, Vercel, and other leading platforms — so your team can focus on building products, not fighting servers.",
      features: [
        {
          icon: "Server",
          title: "Cloud Deployment & Hosting",
          description: "We deploy your application on the right platform — Vercel for Next.js, AWS EC2 for custom backends, S3 for storage, RDS for databases. Optimized for performance and cost.",
        },
        {
          icon: "GitBranch",
          title: "CI/CD Pipeline Setup",
          description: "Automated deployment pipelines using GitHub Actions or Vercel. Every code push is automatically tested, built, and deployed — safely, reliably, and without manual steps.",
        },
        {
          icon: "Shield",
          title: "Security & SSL Configuration",
          description: "HTTPS everywhere, environment variable management, IAM roles, firewall rules, and security best practices — your infrastructure is locked down from day one.",
        },
        {
          icon: "Activity",
          title: "Monitoring & Alerting",
          description: "Real-time monitoring of uptime, performance, errors, and resource usage. You get alerts before users notice problems — and we fix issues before they affect your business.",
        },
        {
          icon: "Database",
          title: "Database Setup & Management",
          description: "Managed databases (PostgreSQL, MongoDB, MySQL) with automated backups, read replicas for performance, and proper indexing. Your data is always safe and fast.",
        },
        {
          icon: "TrendingUp",
          title: "Auto-Scaling Infrastructure",
          description: "Your app handles 10 users or 10,000 users without breaking a sweat. We configure auto-scaling so your infrastructure grows automatically with your traffic.",
        },
      ],
    },
    process: {
      heading: "How We Set Up Your Cloud",
      description: "A clear, collaborative process — so you always know what's happening.",
      steps: [
        {
          number: "01",
          title: "Infrastructure Audit",
          description: "We review your current setup — hosting, deployments, databases, security, performance. We identify what's working, what's not, and the fastest path to improvement.",
          duration: "Day 1–2",
        },
        {
          number: "02",
          title: "Architecture Planning",
          description: "We design your target infrastructure — which cloud services to use, how they connect, security setup, and cost estimate. You approve before we touch anything.",
          duration: "Day 3–4",
        },
        {
          number: "03",
          title: "Setup & Migration",
          description: "We set up all cloud services, migrate your application and data (with zero downtime when possible), and configure everything properly.",
          duration: "Day 5–10",
        },
        {
          number: "04",
          title: "CI/CD & Automation",
          description: "We set up automated deployment pipelines, testing, and monitoring. From now on, deploying your app is one click — or fully automatic.",
          duration: "Day 11–13",
        },
        {
          number: "05",
          title: "Handover & Documentation",
          description: "We hand over full access, document everything clearly, and train your team. You're never dependent on us — but we're always available when needed.",
          duration: "Day 14",
        },
      ],
    },
    pricing: {
      heading: "Simple, Transparent Pricing",
      subheading: "No hidden fees. No surprises. Just great work.",
      tiers: [
        {
          name: "Starter Setup",
          price: "PKR 25,000",
          description: "Get your project properly deployed on modern cloud infrastructure.",
          features: [
            "Vercel or AWS deployment",
            "Domain & SSL configuration",
            "Environment variables setup",
            "Basic monitoring setup",
            "GitHub deployment pipeline",
            "2 weeks post-launch support",
          ],
        },
        {
          name: "Full Infrastructure",
          price: "PKR 60,000",
          badge: "Most Popular",
          description: "Complete cloud setup with CI/CD, monitoring, and databases.",
          features: [
            "All Starter features",
            "Database setup & optimization",
            "Full CI/CD pipeline",
            "Uptime & error monitoring",
            "Auto-scaling configuration",
            "Security hardening",
            "1 month managed support",
          ],
        },
        {
          name: "Managed Cloud",
          price: "PKR 15,000 / month",
          description: "Ongoing management — we handle your cloud so you don't have to.",
          features: [
            "All infrastructure managed by us",
            "24/7 uptime monitoring",
            "Incident response & fixes",
            "Monthly performance reports",
            "Regular security updates",
            "Backup verification",
            "On-call support",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Which cloud platforms do you work with?",
        a: "Primarily AWS and Vercel — the two most powerful and widely-used platforms. We also work with DigitalOcean, Railway, and Render depending on your specific needs and budget.",
      },
      {
        q: "Will I own my cloud accounts and infrastructure?",
        a: "Yes, always. We work inside your own AWS or cloud accounts — you own everything. We never lock you into our accounts or make you dependent on us.",
      },
      {
        q: "Can you migrate my existing site without downtime?",
        a: "In most cases, yes. We plan migrations carefully — setting up the new environment first, testing thoroughly, then switching over with minimal or zero downtime.",
      },
      {
        q: "How much does cloud hosting cost monthly?",
        a: "For a standard Next.js website, Vercel's free or Pro plan (PKR 5,000–6,000/month) handles most traffic. AWS costs vary by usage — we always give you a clear cost estimate before starting.",
      },
      {
        q: "Do you provide ongoing management after setup?",
        a: "Yes — our Managed Cloud plan covers ongoing monitoring, updates, security patches, and incident response. Most clients prefer this so they never have to think about infrastructure.",
      },
    ],
    cta: {
      heading: "Build Infrastructure That Never Lets You Down",
      subheading: "Stop worrying about servers. Focus on growing your business.",
      primaryCTA: "Set Up My Cloud",
      primaryLink: "/contact",
      secondaryCTA: "WhatsApp Us",
      secondaryLink: "https://wa.me/923212322687",
      note: "Free infrastructure audit • Clear cost estimate upfront • You own everything",
    },
  },
  {
    slug: "custom-saas-enterprise",
    icon: "Blocks",
    priceFrom: { amount: 5000, unit: "one-time" },
    label: "High Scale",
    title: "Custom SaaS & Enterprise",
    shortDescription: "Scalable, secure, and complex web applications—from multi-tenant SaaS products to custom ERPs and internal portals.",
    seoTitle: "Custom SaaS & Enterprise Software Development",
    metaDescription:
      "Custom SaaS and enterprise software development — multi-tenant platforms, ERPs, and internal portals built secure, scalable, and maintainable. Start scoping.",
    hero: {
      badge: "Enterprise Grade",
      tagline: "Build Systems, Not Just Websites.",
      title: "Custom SaaS & Enterprise Software",
      subtitle: "Off-the-shelf software doesn't fit your business. We engineer custom, scalable platforms that run your entire operation.",
      heroDescription: "When your business outgrows Excel, WordPress, and generic software, you need custom architecture. We build massive, scalable, multi-tenant web applications, CRMs, and internal portals using Node.js, PostgreSQL, and Next.js—designed to handle millions of rows of data without breaking a sweat.",
    },
    problems: {
      heading: "Is Generic Software Holding You Back?",
      problems: [
        "You are using 5 different tools that don't talk to each other",
        "Your team spends hours doing manual data entry between systems",
        "Off-the-shelf software lacks the specific features your business actually needs",
        "You're paying massive monthly subscription fees for enterprise tools you only use 10% of",
        "Your current software crashes or slows down when dealing with large datasets",
        "You want to launch a SaaS product but don't have the technical team to build it",
      ],
    },
    features: {
      heading: "What We Build",
      description: "We don't do simple websites here. This is hardcore software engineering. We build secure, compliant, and scalable platforms.",
      features: [
        {
          icon: "Database",
          title: "Complex Database Architecture",
          description: "We design robust relational databases (PostgreSQL) that can handle complex queries, massive datasets, and real-time updates without slowing down.",
        },
        {
          icon: "Users",
          title: "Multi-Tenant SaaS Platforms",
          description: "Building a software product to sell to other businesses? We build multi-tenant architectures where every client gets their own secure workspace and data isolation.",
        },
        {
          icon: "Lock",
          title: "Enterprise-Grade Security",
          description: "Role-based access control (RBAC), end-to-end encryption, JWT authentication, and automated backups. Your business data is locked down.",
        },
        {
          icon: "Activity",
          title: "Custom CRMs & Dashboards",
          description: "Stop using spreadsheets. We build internal tools that visualize your data, track KPIs, and manage your workforce exactly the way you operate.",
        },
        {
          icon: "Link",
          title: "3rd-Party API Integrations",
          description: "We connect your custom software to Stripe for payments, Twilio for SMS, SendGrid for emails, and any other API your business relies on.",
        },
        {
          icon: "Cpu",
          title: "Serverless & Microservices",
          description: "We architect your software so it automatically scales up during traffic spikes and scales down to save costs when traffic is low.",
        },
      ],
    },
    process: {
      heading: "How We Engineer Your Platform",
      description: "Building enterprise software requires extreme precision. We follow strict Agile methodologies.",
      steps: [
        {
          number: "01",
          title: "Requirements Gathering",
          description: "We map out every single feature, user role, and database relationship required. We leave zero room for assumptions.",
          duration: "Week 1",
        },
        {
          number: "02",
          title: "Architecture & UI Design",
          description: "We design the database schema and create high-fidelity Figma prototypes of the entire application.",
          duration: "Week 2-3",
        },
        {
          number: "03",
          title: "Core Development",
          description: "We build the backend logic, APIs, and front-end interface in iterative sprints, showing you progress every week.",
          duration: "Week 4-10",
        },
        {
          number: "04",
          title: "QA & Penetration Testing",
          description: "We rigorously test the platform for bugs, security vulnerabilities, and load capacity before it ever sees production.",
          duration: "Week 11-12",
        },
        {
          number: "05",
          title: "Deployment & Scaling",
          description: "We deploy the application to AWS or GCP, set up automated backups, and officially launch your platform.",
          duration: "Week 13+",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Custom software is an asset that appreciates. Pricing depends on complexity.",
      tiers: [
        {
          name: "SaaS MVP",
          price: "PKR 150,000+",
          description: "A functional, core-feature version of your idea to test the market.",
          features: [
            "User Authentication",
            "Core database setup",
            "1-2 main features",
            "Stripe payment integration",
            "Next.js frontend",
            "Delivered in 4-6 weeks",
          ],
        },
        {
          name: "Full Platform",
          price: "PKR 350,000+",
          badge: "Most Common",
          description: "A complete, production-ready internal tool or SaaS product.",
          features: [
            "Multi-tenant architecture",
            "Complex role-based access",
            "Admin dashboard panel",
            "3rd party API integrations",
            "Automated email flows",
            "Delivered in 8-12 weeks",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "For large organizations replacing legacy systems.",
          features: [
            "Microservices architecture",
            "Legacy data migration",
            "Custom AI integration",
            "Advanced security compliance",
            "SLA-backed support",
            "Dedicated project manager",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Who owns the code?",
        a: "You do. 100%. Once the project is paid for and delivered, the entire codebase, intellectual property, and infrastructure belong to your company.",
      },
      {
        q: "What tech stack do you use?",
        a: "We use the modern enterprise stack: Next.js (React) for the frontend, Node.js or Python for the backend, and PostgreSQL for the database, usually hosted on AWS or Vercel.",
      },
      {
        q: "Can you rescue an existing project?",
        a: "Yes. If your previous developers left a messy codebase, we offer a 'Code Audit & Rescue' service to stabilize, refactor, and finish your software.",
      },
      {
        q: "Will this integrate with my existing tools?",
        a: "Absolutely. As long as your existing tools (like Salesforce, QuickBooks, etc.) have an API, we can seamlessly pull and push data to them.",
      },
      {
        q: "Do you offer post-launch support?",
        a: "Yes. Custom software requires maintenance. We offer SLA-backed retainers to handle updates, bug fixes, and server scaling after launch.",
      },
    ],
    cta: {
      heading: "Stop Forcing Generic Software to Fit Your Business",
      subheading: "Let's build a platform that works exactly the way you do.",
      primaryCTA: "Book Strategy Call",
      primaryLink: "/contact",
      secondaryCTA: "WhatsApp Us",
      secondaryLink: "https://wa.me/923212322687",
      note: "NDA available • Free architecture planning • Scalable from day one",
    },
  },
  {
    slug: "dedicated-teams",
    icon: "Users",
    priceFrom: { amount: 1000, unit: "monthly" },
    title: "Dedicated Teams",
    shortDescription: "Scale your engineering capacity instantly. Hire our pre-vetted Next.js and AI developers on a monthly retainer.",
    seoTitle: "Hire Dedicated Development Teams",
    metaDescription:
      "Hire dedicated developers on a monthly retainer — pre-vetted Next.js, backend, and AI engineers who join your team and ship from week one. Check availability.",
    hero: {
      badge: "Staff Augmentation",
      tagline: "Your Tech Team, Ready on Day One.",
      title: "Dedicated Teams & Staff Augmentation",
      subtitle: "Skip the painful hiring process. Inject top-tier software engineers directly into your workflow on a monthly basis.",
      heroDescription: "Hiring good developers is incredibly difficult, expensive, and risky. Firing bad ones is even worse. With Cortex Agents, you can instantly augment your existing IT team with our senior Next.js, AI, and backend engineers. We work in your Slack, push to your GitHub, and attend your daily standups.",
    },
    problems: {
      heading: "The Nightmare of Hiring In-House",
      problems: [
        "Recruiting takes months, and you still aren't sure if the developer is good",
        "Local senior talent is too expensive for your current budget",
        "Freelancers are unreliable and disappear when you need them most",
        "You have a massive backlog of features but not enough hands to code them",
        "You need specific expertise (like AI or Next.js) for only a few months",
        "Onboarding takes weeks before a new hire actually contributes code",
      ],
    },
    features: {
      heading: "Why Hire Our Engineers?",
      description: "We don't just provide 'coders'. We provide product-minded engineers who understand architecture, write clean code, and communicate flawlessly.",
      features: [
        {
          icon: "Zap",
          title: "Zero Onboarding Time",
          description: "Our engineers are experienced professionals. They clone your repo, read the docs, and start pushing production-ready code in their first week.",
        },
        {
          icon: "Shield",
          title: "Pre-Vetted Talent",
          description: "You don't need to conduct technical interviews. Every engineer on our team has built complex, scalable applications and passed rigorous internal testing.",
        },
        {
          icon: "MessageSquare",
          title: "Seamless Integration",
          description: "We adapt to your culture. We use your Slack, your Jira, your GitHub, and follow your Agile/Scrum ceremonies just like a full-time employee.",
        },
        {
          icon: "Briefcase",
          title: "No HR Overhead",
          description: "No benefits, no taxes, no office space, no severance packages. Just a simple monthly invoice for the exact engineering capacity you need.",
        },
        {
          icon: "RefreshCw",
          title: "Flexibility to Scale",
          description: "Need to push hard for a launch? Add two more developers next week. Project slowing down? Scale back. You have total flexibility.",
        },
        {
          icon: "Award",
          title: "Guaranteed Quality",
          description: "If an engineer isn't a perfect fit for your team culture or tech stack, we replace them immediately at no cost to you.",
        },
      ],
    },
    process: {
      heading: "How to Hire Your Team",
      description: "We move fast. You can have an engineer writing code for you in less than 7 days.",
      steps: [
        {
          number: "01",
          title: "Needs Assessment",
          description: "Tell us what you're building, the tech stack you use, and whether you need backend, frontend, AI, or full-stack expertise.",
          duration: "Day 1",
        },
        {
          number: "02",
          title: "Profile Selection",
          description: "We present 1-2 profiles of our engineers who perfectly match your technical requirements and time zone preferences.",
          duration: "Day 2",
        },
        {
          number: "03",
          title: "Introductory Interview",
          description: "You have a 30-minute chat with the engineer to ensure cultural fit and technical alignment. No hard commitments yet.",
          duration: "Day 3-4",
        },
        {
          number: "04",
          title: "Contract & Setup",
          description: "We sign a simple month-to-month agreement, sign NDAs, and get the engineer access to your Slack and code repositories.",
          duration: "Day 5",
        },
        {
          number: "05",
          title: "First Commit",
          description: "The engineer begins work, attends your standups, and pushes their first PR to your codebase.",
          duration: "Day 7",
        },
      ],
    },
    pricing: {
      heading: "Transparent Monthly Retainers",
      subheading: "Flat monthly fees. Cancel with 30 days notice.",
      tiers: [
        {
          name: "Part-Time Dev",
          price: "PKR 120,000 / mo",
          description: "20 hours per week. Perfect for maintenance or slow-burn features.",
          features: [
            "20 hours per week dedicated",
            "Direct Slack communication",
            "Weekly progress reports",
            "Frontend or Backend specialist",
            "1-month rolling contract",
          ],
        },
        {
          name: "Full-Time Dev",
          price: "PKR 220,000 / mo",
          badge: "Most Popular",
          description: "40 hours per week. A dedicated extension of your team.",
          features: [
            "40 hours per week dedicated",
            "Attends your daily standups",
            "Full-stack Next.js / Node.js",
            "Direct Jira/Linear integration",
            "Immediate replacement guarantee",
          ],
        },
        {
          name: "Dedicated Squad",
          price: "Custom",
          description: "An entire pre-assembled team to build your product.",
          features: [
            "1 Tech Lead / Architect",
            "2-3 Full-Stack Developers",
            "1 UI/UX Designer",
            "1 QA Tester",
            "Fully managed agile process",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "Where are your developers located?",
        a: "Our core engineering team operates out of Karachi, Pakistan. We are highly proficient in English and overlap with UK, EU, and Middle East time zones, with partial overlap for US time zones.",
      },
      {
        q: "What if I'm not happy with the developer?",
        a: "We offer a 2-week risk-free trial. If you feel the developer isn't up to your standards, you pay nothing, and we can either replace them or part ways.",
      },
      {
        q: "Who manages the developer?",
        a: "In a staff augmentation model, the developer reports directly to your CTO, Tech Lead, or Project Manager. They function exactly like your in-house employees.",
      },
      {
        q: "Are there any long-term contracts?",
        a: "No. All of our retainers are month-to-month. We only require a 30-day notice period if you wish to scale down or cancel the engagement.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes. We sign strict Non-Disclosure Agreements (NDAs) and IP assignment contracts. All code written belongs 100% to your company.",
      },
    ],
    cta: {
      heading: "Need to Ship Features Faster?",
      subheading: "Stop waiting months to hire. Get top-tier developers on your team next week.",
      primaryCTA: "Hire Developers",
      primaryLink: "/contact",
      secondaryCTA: "View Tech Stack",
      secondaryLink: "/about",
      note: "Pre-vetted talent • 2-week risk-free trial • Cancel anytime",
    },
  },
  {
    slug: "managed-it-services",
    icon: "ShieldCheck",
    priceFrom: { amount: 200, unit: "monthly" },
    title: "Managed IT & Software",
    shortDescription: "Your virtual Tech Department. We maintain, secure, and scale your existing software so you can focus on business.",
    seoTitle: "Managed IT & Software Services",
    metaDescription:
      "Managed IT and software services — we maintain, secure, monitor, and scale the systems you already run, so your team can focus on the business. See our plans.",
    hero: {
      badge: "CTO As A Service",
      tagline: "We Manage the Tech. You Manage the Business.",
      title: "Managed IT & Software Maintenance",
      subtitle: "Software requires constant care. We act as your dedicated tech team, handling bugs, server crashes, security updates, and new feature rollouts.",
      heroDescription: "The worst thing for a business is when the system goes down and nobody knows how to fix it. If you have an existing web application but no dedicated IT team to manage it, you are at risk. Cortex Agents takes full ownership of your software infrastructure—ensuring 99.9% uptime, patching security holes, and building new features when you need them.",
    },
    problems: {
      heading: "The Danger of Unmanaged Software",
      problems: [
        "Your website or app randomly crashes and you don't know who to call",
        "Your original developers disappeared, leaving you with code you don't understand",
        "Your software is incredibly slow but you don't know how to optimize the servers",
        "You are worried about being hacked because no one has updated your dependencies in years",
        "You need a small feature added, but agencies refuse to take 'small' jobs",
        "You are paying for expensive cloud servers (AWS/GCP) without knowing if it's optimized",
      ],
    },
    features: {
      heading: "How We Protect Your Tech",
      description: "We don't just fix things when they break. We proactively monitor and improve your software so it never breaks in the first place.",
      features: [
        {
          icon: "Activity",
          title: "24/7 Server Monitoring",
          description: "We set up automated alerts. If your server CPU spikes or your site goes offline at 3 AM, our team gets pinged and fixes it immediately.",
        },
        {
          icon: "Bug",
          title: "Bug Fixing & Maintenance",
          description: "Users reporting weird glitches? Forward them to us. We debug the code, test the solution, and deploy the fix without you lifting a finger.",
        },
        {
          icon: "Shield",
          title: "Security & Dependency Updates",
          description: "Outdated NPM packages are the #1 cause of hacks. We run monthly security audits and keep all your frameworks and libraries up to date.",
        },
        {
          icon: "Database",
          title: "Database Backups & Disaster Recovery",
          description: "We ensure your PostgreSQL or MongoDB databases are backed up daily, with a clear disaster recovery plan in case of catastrophic failure.",
        },
        {
          icon: "TrendingDown",
          title: "Cloud Cost Optimization",
          description: "Most businesses overpay for AWS. We audit your cloud infrastructure and optimize your architecture, often saving clients thousands of dollars.",
        },
        {
          icon: "Code",
          title: "Legacy Code Modernization",
          description: "Stuck on an old version of React or PHP? We slowly refactor your codebase into modern Next.js without disrupting your live users.",
        },
      ],
    },
    process: {
      heading: "The Onboarding Process",
      description: "Taking over a codebase is complex. We do it safely and methodically.",
      steps: [
        {
          number: "01",
          title: "Codebase Audit",
          description: "We sign NDAs, get access to your GitHub and servers, and run a deep technical audit to see exactly what state the software is in.",
          duration: "Day 1-3",
        },
        {
          number: "02",
          title: "Security & Backup Lock-down",
          description: "Before making any changes, we secure the perimeter. We ensure automated backups are working and patch any critical zero-day vulnerabilities.",
          duration: "Day 4-5",
        },
        {
          number: "03",
          title: "Monitoring Setup",
          description: "We install tracking tools (Sentry, Datadog, Vercel Analytics) to monitor real-time errors, server loads, and uptime.",
          duration: "Day 6-7",
        },
        {
          number: "04",
          title: "Bug Triage",
          description: "We look at your backlog of user complaints and bugs, prioritize them by impact, and start knocking them out one by one.",
          duration: "Month 1",
        },
        {
          number: "05",
          title: "Ongoing Partner",
          description: "We shift into maintenance mode. You have a direct Slack channel with us to request new features, report issues, or ask for technical advice.",
          duration: "Ongoing",
        },
      ],
    },
    pricing: {
      heading: "Managed Retainer Plans",
      subheading: "Peace of mind for a flat monthly fee.",
      tiers: [
        {
          name: "Basic Maintenance",
          price: "PKR 50,000 / mo",
          description: "For simple apps that just need to stay online securely.",
          features: [
            "24/7 Uptime Monitoring",
            "Weekly database backups",
            "Monthly dependency updates",
            "10 hours of bug fixing / mo",
            "Email support (24hr SLA)",
          ],
        },
        {
          name: "Pro Managed IT",
          price: "PKR 100,000 / mo",
          badge: "Most Popular",
          description: "Active development and tech management for growing businesses.",
          features: [
            "Advanced Error Tracking (Sentry)",
            "AWS/Cloud Cost Optimization",
            "Bi-weekly security patches",
            "25 hours of dev/fixes / mo",
            "Direct Slack Support (8hr SLA)",
          ],
        },
        {
          name: "CTO As A Service",
          price: "Custom",
          description: "We act as your entire technical department and strategy team.",
          features: [
            "Full infrastructure ownership",
            "Unlimited bug fixes",
            "Strategic roadmap planning",
            "Tech interviews for your hires",
            "1-hour Emergency SLA",
            "Weekly strategy calls",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "What if my current code is a mess?",
        a: "We are used to inheriting messy code. Our first step is a 'Code Audit'. If the code is too broken to maintain securely, we will advise you on a rewrite strategy.",
      },
      {
        q: "How do I request a new feature or fix?",
        a: "Depending on your plan, you simply drop a message in our shared Slack channel or send an email. We log it in Jira, give you an ETA, and handle it.",
      },
      {
        q: "What happens if hours roll over?",
        a: "Maintenance hours are 'use it or lose it' per month, as they reserve our engineers' capacity. However, if you consistently don't use them, we will suggest downgrading your plan to save you money.",
      },
      {
        q: "What does 'SLA' mean?",
        a: "Service Level Agreement. It means we legally guarantee how fast we will respond to and fix critical issues (e.g., if your site goes completely offline).",
      },
      {
        q: "Can you manage AWS and Google Cloud?",
        a: "Yes. Our team is highly experienced in DevOps and managing complex cloud architectures, ensuring they are both secure and cost-efficient.",
      },
    ],
    cta: {
      heading: "Don't Wait Until the Server Crashes",
      subheading: "Secure your software today with a dedicated tech partner.",
      primaryCTA: "Get an IT Audit",
      primaryLink: "/consultancy",
      secondaryCTA: "WhatsApp Us",
      secondaryLink: "https://wa.me/923212322687",
      note: "Free initial code audit • Fast onboarding • Complete peace of mind",
    },
  },
  {
    slug: "graphic-designing",
    icon: "Image",
    priceFrom: { amount: 150, unit: "one-time" },
    title: "Graphic Designing",
    shortDescription: "Visual communication that builds brand identity and creates memorable experiences.",
    seoTitle: "Graphic Design Services",
    metaDescription:
      "Graphic design that builds brand recognition — logos, brand identity, marketing assets, and social creative with a consistent visual system. See our work.",
    hero: {
      badge: "Brand Identity",
      tagline: "Design That Speaks Louder Than Words.",
      title: "Professional Graphic Designing",
      subtitle: "We craft visual identities that resonate with your audience and elevate your brand presence across all mediums.",
      heroDescription: "In a world saturated with content, great design is your competitive advantage. From logos and brand systems to marketing materials and social media assets, we create cohesive visual systems that communicate your values, attract your ideal customers, and leave lasting impressions.",
    },
    problems: {
      heading: "Is Your Brand Visually Invisible?",
      subheading: "If these sound familiar, your design is holding you back:",
      problems: [
        "Your logo looks generic and doesn't represent your unique value proposition",
        "Your marketing materials lack consistency and professional polish",
        "You struggle to stand out in a crowded marketplace",
        "Your social media graphics look amateurish and fail to engage",
        "Your print materials don't align with your digital presence",
        "You don't have a cohesive brand system to guide all visual communications",
      ],
    },
    features: {
      heading: "The Design Excellence Standard",
      description: "We don't just make things look good - we create strategic visual systems that drive brand recognition and business growth.",
      features: [
        {
          icon: "Target",
          title: "Strategic Brand Identity",
          description: "We develop comprehensive brand systems including logos, color palettes, typography, and usage guidelines that ensure consistency across all touchpoints.",
        },
        {
          icon: "Layers",
          title: "Multi-Channel Design Systems",
          description: "We create adaptable designs that work seamlessly across print, digital, social media, and environmental applications.",
        },
        {
          icon: "CheckCircle",
          title: "Print & Digital Production Ready",
          description: "All designs are delivered in appropriate formats for both print (CMYK, Pantone) and digital (RGB, web-optimized) applications.",
        },
        {
          icon: "TrendingUp",
          title: "Conversion-Focused Visuals",
          description: "We design marketing materials that don't just look beautiful - they drive action and measurable business results.",
        },
        {
          icon: "Shield",
          title: "Copyright & Ownership Assurance",
          description: "You own 100% of the intellectual property rights to all designs created for your business.",
        },
        {
          icon: "Zap",
          title: "Rapid Turnaround Without Compromise",
          description: "We deliver high-quality designs on schedule without sacrificing creativity or attention to detail.",
        },
      ],
    },
    process: {
      heading: "How We Craft Your Visual Identity",
      description: "Our collaborative design process ensures your vision is translated into exceptional visual communications.",
      steps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          description: "We dive deep into your brand, audience, competitors, and goals to establish a clear design direction.",
          duration: "Day 1-2",
        },
        {
          number: "02",
          title: "Concept Development",
          description: "We explore multiple creative directions and present you with strategic design concepts that align with your brand objectives.",
          duration: "Day 3-4",
        },
        {
          number: "03",
          title: "Design Refinement",
          description: "Based on your feedback, we refine the chosen concept into polished designs ready for presentation.",
          duration: "Day 5-7",
        },
        {
          number: "04",
          title: "Client Review & Feedback",
          description: "We present the refined designs, gather your input, and make revisions to ensure the final product exceeds your expectations.",
          duration: "Day 8-9",
        },
        {
          number: "05",
          title: "Final Delivery & Guidelines",
          description: "We deliver all final assets in appropriate formats along with brand guidelines for consistent future use.",
          duration: "Day 10",
        },
      ],
    },
    pricing: {
      heading: "Investment Tiers",
      subheading: "Professional design that delivers value. Pricing based on scope and complexity.",
      tiers: [
        {
          name: "Brand Identity Essentials",
          price: "PKR 30,000",
          description: "Perfect for startups and small businesses needing a professional visual foundation.",
          features: [
            "Custom Logo Design",
            "Brand Color Palette",
            "Typography Selection",
            "Basic Brand Guidelines",
            "Business Card Design",
            "Delivered in 7 days",
          ],
        },
        {
          name: "Complete Brand System",
          price: "PKR 65,000",
          badge: "Most Popular",
          description: "Comprehensive visual identity system for established businesses ready to scale.",
          features: [
            "Custom Logo Design (Primary & Secondary)",
            "Complete Brand Color System",
            "Typography Hierarchy",
            "Comprehensive Brand Guidelines",
            "Stationery Suite (Letterhead, Envelope, Invoice)",
            "Social Media Templates",
            "Delivered in 14 days",
          ],
        },
        {
          name: "Enterprise Brand Suite",
          price: "Custom",
          description: "Complete brand system for large organizations with complex multi-brand architectures.",
          features: [
            "Complete Brand System",
            "Sub-brand Development",
            "Environmental & Wayfinding Design",
            "Packaging Design Templates",
            "Animated Logo Variants",
            "Dedicated Brand Manager",
          ],
        },
      ],
    },
    faqs: [
      {
        q: "What file formats will I receive?",
        a: "You'll receive vector files (AI, EPS, SVG) for scalability, plus raster files (PNG, JPG) for immediate use, all in both print-ready and web-optimized formats.",
      },
      {
        q: "How many design concepts do you present?",
        a: "We typically present 3-4 distinct design concepts for logos and brand identities, giving you meaningful choices while maintaining strategic focus.",
      },
      {
        q: "Can you redesign our existing logo?",
        a: "Absolutely. We specialize in both creating new brand identities and evolving existing ones to better represent your current business direction.",
      },
      {
        q: "Do you offer packaging design services?",
        a: "Yes, we can design packaging solutions that align with your brand identity and meet industry requirements for your specific products.",
      },
      {
        q: "What if I need ongoing design support?",
        a: "We offer retainer-based design support for businesses that need regular marketing materials, social media graphics, or ongoing brand management.",
      },
    ],
    cta: {
      heading: "Make Your Brand Unforgettable",
      subheading: "Let's create a visual identity that commands attention and builds recognition.",
      primaryCTA: "Start Design Project",
      primaryLink: "/contact",
      secondaryCTA: "View Portfolio",
      secondaryLink: "/portfolio",
      note: "Free design consultation • 100% ownership • Print & digital ready",
    },
  }
];
