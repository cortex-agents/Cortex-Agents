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

/**
 * Resolve an author credit (a plain name string in `learn-data.ts`) back to the
 * roster entry, so an article's `author` becomes a reference to the SAME Person
 * entity that `/about` declares — not a second, look-alike author.
 */
export function memberByName(name: string): TeamMember | undefined {
  return teamData.find((member) => member.name === name);
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Okasha Nadeem",
    slug: "okasha-nadeem",
    role: "Head of Engineering & Architecture",
    ownership: "Custom SaaS & Enterprise, Dedicated Teams, Technical Strategy",
    image: "/okasha.webp",
    bio: "Okasha sets the technical direction at Cortex Agents. As the high-level technical partner, he oversees massive enterprise builds, system architecture, and our dedicated team augmentation services.",
    expertise: [
      "Enterprise Architecture",
      "Custom SaaS Engineering",
      "Team Augmentation",
      "Technical Strategy",
      "System Scalability",
    ],
    linkedin: "https://www.linkedin.com/in/okasha-nadeem/",
    socials: [],
  },
  {
    id: 2,
    name: "Syed Hamza Ali",
    slug: "syed-hamza-ali",
    role: "Head of AI & Automation",
    ownership: "AI Agents & Automation, AI Chatbots, Multi-Agent Systems",
    image: "/hamza_ali.webp",
    bio: "Hamza leads the AI initiatives at Cortex Agents. He designs and orchestrates intelligent agents that parse data, execute complex workflows, and automate repetitive tasks for our enterprise clients.",
    expertise: [
      "AI Agents & Automation",
      "Intelligent Chatbots",
      "Agent Orchestration",
      "Workflow Design",
      "LLM Integration",
    ],
    linkedin: "https://www.linkedin.com/in/hamza-ali-b72b582ab",
    socials: [],
  },
  {
    id: 3,
    name: "Muhammad Ubaid Raza",
    slug: "muhammad-ubaid-raza",
    role: "Cloud & Backend Engineer",
    ownership: "Cloud Solutions, Managed IT & Software, Backend Architecture",
    image: "/ubaid.webp",
    bio: "Ubaid builds the backbone of our applications. He manages our cloud deployments, ensures 24/7 server monitoring, and engineers the robust backend services that power our enterprise SaaS products.",
    expertise: [
      "Cloud Solutions",
      "Managed IT & DevOps",
      "Backend Engineering",
      "Database Architecture",
      "Server Monitoring",
    ],
    linkedin: "https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/",
    socials: [],
  },
  {
    id: 4,
    name: "Syed Muhammad Huzaifa",
    slug: "syed-muhammad-huzaifa",
    role: "Full-Stack Product Engineer",
    ownership: "Web Development, Custom SaaS, Product Features",
    image: "/huzaifa.webp",
    bio: "Huzaifa ships product features end-to-end. He bridges the gap between scalable backends and intuitive frontends, delivering core software engineering for our high-performance web platforms and custom SaaS builds.",
    expertise: [
      "Full-Stack Development",
      "Product Engineering",
      "Web Platforms",
      "API Integrations",
      "Feature Delivery",
    ],
    linkedin: "https://www.linkedin.com/in/syed-muhammad-huzaifa-0ba721351",
    socials: [],
  },
  {
    id: 5,
    name: "Syed Ahsan Raza Bukhari",
    slug: "syed-ahsan-raza-bukhari",
    role: "Head of UI/UX & Brand Design",
    ownership: "UI/UX Design, Graphic Designing, Brand Identity",
    image: "/ahsan.webp",
    bio: "Ahsan leads all visual output at Cortex Agents. He builds conversion-driven product design systems and crafts strategic brand identities, ensuring extreme visual quality across both software interfaces and graphic design projects.",
    expertise: [
      "Strategic UI/UX Design",
      "Brand Identity Systems",
      "Graphic Designing",
      "Visual Quality Assurance",
      "Interactive Prototyping",
    ],
    linkedin: "https://www.linkedin.com/in/syedahsanrazabukhari/",
    socials: [],
  },
  {
    id: 6,
    name: "Taha Qureshi",
    slug: "taha-qureshi",
    role: "Frontend Engineer & Technical SEO",
    ownership: "Web Development Frontend, SEO & AI Visibility",
    image: "/taha.webp",
    bio: "Taha merges frontend engineering with search growth. He builds blazing-fast React/Next.js interfaces while strictly implementing technical SEO architectures and schema markups to ensure our clients dominate both Google and AI search engines.",
    expertise: [
      "Frontend Engineering",
      "Technical SEO",
      "AI Search Visibility",
      "Next.js Architecture",
      "Schema & Structured Data",
    ],
    linkedin: "https://www.linkedin.com/in/taha-qureshi-37a5792a6",
    socials: [],
  },
];

export interface ExtendedTeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export const extendedTeamData: ExtendedTeamMember[] = [
  {
    id: 1,
    name: "Alex Mercer",
    role: "Senior Data Scientist",
    bio: "Alex builds the predictive models and NLP pipelines that empower our autonomous agents."
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "DevOps Engineer",
    bio: "Jordan ensures our cloud infrastructure scales seamlessly during high traffic periods."
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    role: "QA Automation Specialist",
    bio: "Maria writes the rigorous test suites that guarantee our enterprise software remains bug-free."
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    role: "Full-Stack Developer",
    bio: "Bilal integrates complex third-party APIs into our custom SaaS solutions."
  }
];

