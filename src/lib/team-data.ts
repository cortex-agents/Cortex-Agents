// src/lib/team-data.ts
// Single source of truth for the team roster. Consumed by the `/about` team
// section (UI) and by `personSchema()` in `./schema` (structured data), so the
// people rendered on the page and the people declared to search engines can
// never drift apart.
//
// `slug` is the stable anchor id for a member's card on `/about` — it becomes
// that person's canonical entity URL (`/about#<slug>`). Do not rename a slug
// once published; search engines treat it as the identity of that entity.
//
// `bio` and `expertise` are rendered on the back face of the member's card, so
// the `description` / `knowsAbout` we declare in schema always matches visible
// page content — which is what Google's structured-data guidelines require.
//
// `socials` holds ADDITIONAL verified profiles beyond LinkedIn (GitHub, X,
// Instagram, personal site…). Every entry is rendered on the card back AND
// emitted in that person's `sameAs`. Only add profiles that genuinely belong to
// the person — `sameAs` is an identity claim, so a wrong URL merges two
// different humans into one entity in the knowledge graph.

export interface TeamSocial {
  /** Display name of the network. Drives which icon renders. */
  label: string;
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  role: string;
  ownership: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedin: string;
  socials: TeamSocial[];
}

/**
 * Every profile URL that identifies this person, LinkedIn first.
 * Feeds `Person.sameAs` and the "Connect" row on the card back.
 */
export function memberProfiles(member: TeamMember): TeamSocial[] {
  return [{ label: "LinkedIn", url: member.linkedin }, ...member.socials];
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Okasha Nadeem",
    slug: "okasha-nadeem",
    role: "Tech Lead / Full-Stack & AI Architect",
    ownership:
      "Architecture, technical decisions, backend + AI integration",
    image: "/okasha.webp",
    bio: "Okasha sets the technical direction at Cortex Agents. He owns system architecture and the engineering decisions behind every build, and his work spans backend services and the AI integration layer that connects models to real product logic.",
    expertise: [
      "System Architecture",
      "Full-Stack Engineering",
      "AI Integration",
      "Backend Services",
      "Technical Strategy",
    ],
    linkedin: "https://www.linkedin.com/in/okasha-nadeem/",
    socials: [],
  },
  {
    id: 2,
    name: "Syed Hamza Ali",
    slug: "syed-hamza-ali",
    role: "Agentic AI Lead",
    ownership:
      "Claude-based agents, agent workflows, tool use, orchestration",
    image: "/hamza_ali.webp",
    bio: "Hamza leads agentic AI at Cortex Agents. He designs Claude-based agents that use tools, follow multi-step workflows, and hand off to each other — the orchestration layer that turns a language model into a system which actually completes work.",
    expertise: [
      "Agentic AI",
      "Claude Agents",
      "Tool Use",
      "Agent Orchestration",
      "Workflow Design",
    ],
    linkedin: "https://www.linkedin.com/in/hamza-ali-b72b582ab",
    socials: [],
  },
  {
    id: 3,
    name: "Muhammad Ubaid Raza",
    slug: "muhammad-ubaid-raza",
    role: "Backend & Agentic AI Engineer",
    ownership: "APIs, databases, backend services, AI agents",
    image: "/ubaid.webp",
    bio: "Ubaid builds the backend that Cortex Agents products run on — APIs, databases, and services — along with the AI agents that sit on top of them. His focus is making agent behaviour dependable in production, not just in a demo.",
    expertise: [
      "Backend Engineering",
      "API Design",
      "Databases",
      "AI Agents",
      "Production Systems",
    ],
    linkedin: "https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/",
    socials: [],
  },
  {
    id: 4,
    name: "Syed Muhammad Huzaifa",
    slug: "syed-muhammad-huzaifa",
    role: "Full-Stack & AI Engineer",
    ownership:
      "Product features end-to-end, integrations, AI-powered functionality",
    image: "/huzaifa.webp",
    bio: "Huzaifa ships product features end to end — interface, backend, and every integration in between. He builds the AI-powered functionality users actually touch, and carries a feature from first commit through to production.",
    expertise: [
      "Full-Stack Development",
      "Feature Delivery",
      "API Integrations",
      "AI Features",
      "Product Engineering",
    ],
    linkedin: "https://www.linkedin.com/in/syed-muhammad-huzaifa-0ba721351",
    socials: [],
  },
  {
    id: 5,
    name: "Syed Ahsan Raza Bukhari",
    slug: "syed-ahsan-raza-bukhari",
    role: "UI/Visual Design Lead",
    ownership:
      "Web & UI design, design systems, visual quality, brand-consistent digital experiences",
    image: "/ahsan.webp",
    bio: "Ahsan leads UI and visual design at Cortex Agents. He builds the design systems that keep every screen consistent and holds the line on visual quality, so the brand reads the same across the entire product surface.",
    expertise: [
      "UI Design",
      "Visual Design",
      "Design Systems",
      "Brand Identity",
      "Web Design",
    ],
    linkedin: "https://www.linkedin.com/in/syedahsanrazabukhari/",
    socials: [],
  },
  {
    id: 6,
    name: "Taha Qureshi",
    slug: "taha-qureshi",
    role: "AI & Frontend Engineer",
    ownership: "AI features + frontend integration, AI UX",
    image: "/taha.webp",
    bio: "Taha works where AI meets the interface. He integrates model-driven features into the frontend and designs the AI UX around them — the streaming, the loading states, and the feedback that make an AI feature feel trustworthy.",
    expertise: [
      "Frontend Engineering",
      "AI UX",
      "AI Feature Integration",
      "React & Next.js",
      "Interface Engineering",
    ],
    linkedin: "https://www.linkedin.com/in/taha-qureshi-37a5792a6",
    socials: [],
  },
];
