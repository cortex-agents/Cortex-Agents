export interface ServiceReference {
  name: string;
  slug: string;
}

export interface SolutionComponent {
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  category: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: SolutionComponent[];
  architecture: string;
  services: ServiceReference[];
  technologies: string[];
  outcomes: string[];
  timeline: string;
  engagementType: string;
  featured: boolean;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Customer Operations Platform",
    slug: "ai-powered-customer-operations",
    category: "AI & Automation",
    industry: "FinTech",
    summary: "Automating repetitive customer operations with intelligent agents and human-in-the-loop workflows.",
    challenge: "The existing workflow required operations teams to manually process incoming requests across multiple systems, creating delays, inconsistent handling, and unnecessary operational overhead. The existing solution couldn't scale with increasing transaction volume.",
    solution: [
      {
        title: "Intelligent Intake",
        description: "AI interprets incoming requests, categorizes them, and determines user intent."
      },
      {
        title: "Agentic Processing",
        description: "Specialized agents perform defined tasks, retrieving and validating relevant information across legacy systems."
      },
      {
        title: "Human Escalation",
        description: "Complex or sensitive cases are intelligently routed to human operators with full context provided."
      },
      {
        title: "Admin Platform",
        description: "A centralized operational platform allows teams to monitor, review, override, and manage system activity."
      }
    ],
    architecture: "Frontend → API Layer → Application Services → AI/Agent Layer → Data Layer → External Integrations",
    services: [
      { name: "AI Agents", slug: "ai-agents" },
      { name: "Custom SaaS", slug: "custom-saas-enterprise" },
      { name: "Cloud Solutions", slug: "cloud-solutions" },
      { name: "UI/UX Design", slug: "ui-ux-design" }
    ],
    technologies: ["Python", "OpenAI", "Next.js", "PostgreSQL", "AWS"],
    outcomes: [
      "68% reduction in manual processing",
      "3× faster response time",
      "Centralized previously fragmented workflows"
    ],
    timeline: "6 months",
    engagementType: "Product Engineering",
    featured: true,
    image: "/placeholder-case-study.jpg"
  },
  {
    title: "Intelligent Customer Support System",
    slug: "intelligent-customer-support",
    category: "AI & Automation",
    industry: "E-Commerce",
    summary: "Deploying AI chatbots with RAG capabilities to instantly resolve tier-1 support queries.",
    challenge: "Customer support teams were overwhelmed with repetitive queries regarding order status, returns, and product specifications. This caused slow response times for critical issues and degraded the overall customer experience.",
    solution: [
      {
        title: "Knowledge Retrieval (RAG)",
        description: "Integrated product catalogs and policy documents into a vector database for semantic search."
      },
      {
        title: "Conversational AI",
        description: "Deployed context-aware chatbots capable of understanding natural language and resolving common issues."
      },
      {
        title: "Seamless Handoff",
        description: "Engineered a protocol for transferring unresolved queries to human agents alongside full conversation history."
      }
    ],
    architecture: "Web Client → Gateway → NLP Engine → Vector Store → Support API",
    services: [
      { name: "AI Chatbots", slug: "ai-chatbots" },
      { name: "Web Development", slug: "web-development" }
    ],
    technologies: ["TypeScript", "React", "Pinecone", "LangChain", "Node.js"],
    outcomes: [
      "80% reduction in tier-1 support tickets",
      "42% increase in customer satisfaction scores",
      "24/7 instant resolution capability"
    ],
    timeline: "3 months",
    engagementType: "AI Implementation",
    featured: true,
    image: "/placeholder-case-study.jpg"
  },
  {
    title: "Multi-Tenant Enterprise SaaS Platform",
    slug: "enterprise-saas-platform",
    category: "SaaS & Enterprise",
    industry: "Healthcare Logistics",
    summary: "Architecting a secure, scalable multi-tenant platform for managing medical supply chains.",
    challenge: "The client operated on disjointed legacy software that lacked role-based access control, real-time analytics, and API extensibility, preventing them from onboarding enterprise partners.",
    solution: [
      {
        title: "Multi-Tenant Architecture",
        description: "Engineered strict data isolation protocols and tenant management capabilities."
      },
      {
        title: "RBAC System",
        description: "Implemented granular role-based access control for organizations, administrators, and standard users."
      },
      {
        title: "Analytics Dashboard",
        description: "Developed real-time reporting interfaces using advanced data visualization."
      }
    ],
    architecture: "React SPA → GraphQL API → Microservices → Redis Cache → PostgreSQL Multi-Tenant DB",
    services: [
      { name: "Custom SaaS", slug: "custom-saas-enterprise" },
      { name: "Web Development", slug: "web-development" },
      { name: "Cloud Solutions", slug: "cloud-solutions" }
    ],
    technologies: ["Next.js", "GraphQL", "Go", "Docker", "AWS ECS"],
    outcomes: [
      "Successfully onboarded 12 new enterprise partners",
      "99.99% system availability",
      "50% faster reporting cycles"
    ],
    timeline: "9 months",
    engagementType: "Dedicated Product Team",
    featured: true,
    image: "/placeholder-case-study.jpg"
  },
  {
    title: "Search + AI Visibility Transformation",
    slug: "search-ai-visibility",
    category: "SEO & AI Visibility",
    industry: "B2B Software",
    summary: "Structuring enterprise content to dominate both traditional search and AI-generated answers.",
    challenge: "Despite having high-quality technical content, the client was losing visibility in search engines and failing to appear as a cited source in AI models like ChatGPT and Perplexity.",
    solution: [
      {
        title: "Technical SEO Overhaul",
        description: "Restructured site architecture, optimized core web vitals, and implemented comprehensive schema markup."
      },
      {
        title: "Information Architecture",
        description: "Reorganized content silos to establish topical authority and improve crawlability."
      },
      {
        title: "AI-Ready Content Structuring",
        description: "Formatted technical documentation specifically for extraction by LLMs and RAG systems."
      }
    ],
    architecture: "Headless CMS → Next.js Static Generation → Edge CDN",
    services: [
      { name: "SEO Optimization", slug: "seo-optimization" },
      { name: "Web Development", slug: "web-development" }
    ],
    technologies: ["Next.js", "Vercel", "Sanity CMS", "JSON-LD"],
    outcomes: [
      "150% increase in organic technical traffic",
      "Consistent citations in AI model answers",
      "Domain authority increased by 14 points"
    ],
    timeline: "4 months",
    engagementType: "Growth Engineering",
    featured: false,
    image: "/placeholder-case-study.jpg"
  }
];
