// src/lib/learn-data.ts
// Single source of truth for the /learn knowledge hub. Follows the same pattern
// as `services-data.ts`: content lives in typed data, the route renders it, and
// the sitemap derives its URLs from this array — so a new article can never be
// published without also being listed and linked.
//
// `slug` is the article's permanent URL (`/learn/<slug>`). Do not rename a slug
// once published — that breaks every inbound link and discards the ranking the
// URL has accumulated. Retire an article instead of renaming it.
//
// Required shape for every article (spec §7): `answerFirst` answers the title
// question directly in ≤60 words, then sections, then honest limitations, then
// FAQs, then a CTA to the money page named in `feedsService`. Answer engines
// quote the paragraph that answers the question first — burying the answer under
// an introduction is what stops a page from being cited.
//
// Hard rule: zero invented statistics. If a figure cannot be attributed to a
// named public source inline, the claim is omitted.

import type { FAQ } from "./services-data";
import { servicesData } from "./services-data";

/** Search intent this article targets. Drives the micro-label on the card. */
export type ArticleIntent =
  | "Definition"
  | "Comparison"
  | "Cost"
  | "How-To"
  | "Strategy";

/** Optional comparison table inside a section — the shape answer engines quote. */
export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  /** Paragraphs, rendered in order. */
  body: string[];
  bullets?: string[];
  table?: ArticleTable;
}

export interface Article {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag — may differ from the H1 to fit the SERP width. */
  seoTitle: string;
  /** 150–160 chars. SERP ad copy, not a ranking factor. */
  metaDescription: string;
  /** ≤60 words that directly answer the title question. Rendered first. */
  answerFirst: string;
  intent: ArticleIntent;
  /** Slug of the money page this article feeds. Must exist in `servicesData`. */
  feedsService: string;
  sections: ArticleSection[];
  faqs?: FAQ[];
  /** Sibling article slugs, for the in-page "Related" block. */
  relatedSlugs: string[];
  /** Must match a `name` in `team-data.ts` — resolved to a Person in schema. */
  author: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  /** Minutes. Shown in the card meta line. */
  readingTime: number;
}

export const articles: Article[] = [
  // ── A1 ────────────────────────────────────────────────────────────────────
  {
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent? Definition, Types, and Real Business Use Cases",
    seoTitle: "What Is an AI Agent? Definition, Types and Business Use Cases",
    metaDescription:
      "An AI agent chooses its own next step and uses tools to finish a goal. Learn the four working patterns, real business use cases, and when not to build one.",
    answerFirst:
      "An AI agent is a software system that uses a language model to decide what to do next, then uses tools — APIs, databases, browsers — to actually do it. Unlike a chatbot, it does not just reply. It pursues a goal across multiple steps, checks its own results, and stops when the task is finished.",
    intent: "Definition",
    feedsService: "ai-agents",
    author: "Syed Hamza Ali",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 7,
    relatedSlugs: ["ai-agent-vs-ai-chatbot-vs-automation", "what-are-aeo-and-geo"],
    sections: [
      {
        heading: "The Definition, Unpacked",
        body: [
          "Strip away the marketing and an AI agent has exactly three parts. A model that reasons about what to do next. A set of tools it is allowed to call — an API, a database query, a file, a browser. And a loop that keeps running until the goal is met or a stopping condition fires.",
          "The loop is the part that matters. A normal program follows a path a developer wrote in advance. An agent is handed an objective and works out the path at runtime, one step at a time, using the result of each step to choose the next one. That is why the same agent can handle an invoice with two line items and an invoice with two hundred without anyone editing the code.",
          "It is also why agents are harder to build than they look. The moment software chooses its own steps, you inherit a new class of problem: the wrong step, the repeated step, the step that costs money. Almost everything difficult about [building agents that survive production](/services/ai-agents) is a consequence of that single design choice.",
        ],
      },
      {
        heading: "What Separates an Agent From Everything Else",
        body: [
          "Four kinds of system get called AI in the same sentence, and they behave nothing alike. The useful question is never how advanced something is — it is who decides the next step.",
        ],
        table: {
          headers: ["System", "Who decides the next step", "Best at", "Breaks when"],
          rows: [
            [
              "Single model call",
              "Nobody — one input, one output",
              "Rewriting, summarising, classifying",
              "The task needs more than one step",
            ],
            [
              "Chatbot",
              "The user, by asking again",
              "Answering questions in conversation",
              "The user expects it to act, not reply",
            ],
            [
              "Workflow automation",
              "A developer, in advance",
              "High-volume, identical, predictable steps",
              "The input varies more than the rules allow",
            ],
            [
              "AI agent",
              "The model, at runtime",
              "Goals whose steps depend on what it finds",
              "The goal is vague or the tools are missing",
            ],
          ],
        },
      },
      {
        heading: "The Four Patterns Worth Knowing",
        body: [
          "Almost every agent in production is one of four shapes. Knowing which one you need saves more time than any model comparison.",
        ],
        bullets: [
          "Tool-using single agent. One model, a small and well-described set of tools, a clear goal. This covers the majority of real business cases and is always the right place to start.",
          "Retrieval agent. The agent searches your own documents or database first, then answers from what it found. This is what people usually mean when they say they want to ask questions of their own data.",
          "Multi-agent orchestration. A coordinator delegates sub-tasks to specialised agents and assembles the result. Genuinely powerful for long jobs, and roughly double the debugging work — worth it only once a single agent has provably hit its ceiling.",
          "Human-in-the-loop agent. The agent prepares the work and a person approves the consequential step. This is the correct pattern for anything that moves money, sends external email, or writes to a system of record.",
        ],
      },
      {
        heading: "Where Agents Earn Their Keep",
        body: [
          "The use cases that work are unglamorous. They share a shape: a clear finishing condition, a bounded set of tools, and a person who cares whether the output is right.",
        ],
        bullets: [
          "Support triage. Read the incoming ticket, pull the customer history, classify it, draft a reply, and route the ones it should not answer. The routing is the value, not the drafting.",
          "Document intake. Take a PDF, invoice, or form, extract structured fields, validate them against your records, and flag mismatches instead of guessing at them.",
          "Research and enrichment. Given a company or a lead, gather information from a defined set of sources and return a filled-in brief in a fixed format.",
          "Internal operations. Reconcile two systems that disagree, chase incomplete records, assemble the recurring report that currently eats someone's Monday morning.",
          "Engineering support. Reproduce a bug report, run the suite, summarise what failed. Mechanical work that quietly consumes senior time.",
        ],
      },
      {
        heading: "Why Agent Projects Fail",
        body: [
          "In our experience the failures are rarely about model capability. They are about scope, evaluation, and permissions.",
        ],
        bullets: [
          "The goal is vague. Improve customer experience is not a goal an agent can finish. Reply to password-reset tickets within five minutes and escalate anything mentioning billing is.",
          "There is no evaluation. If you cannot separate a good run from a bad one automatically, you cannot improve the agent — you can only have opinions about it.",
          "Loops are unbounded. Without step limits and a cost ceiling, a confused agent will retry cheerfully and indefinitely. That is a budget problem before it is a quality problem.",
          "Tool permissions are half-granted. An agent that can read but not write, or query but not filter, will invent a workaround. The workaround is usually wrong.",
          "Failure is silent. An agent that returns something plausible when it should have stopped is more dangerous than one that crashes loudly.",
        ],
      },
      {
        heading: "When an AI Agent Is the Wrong Choice",
        body: [
          "Some of the most useful advice we give in a scoping call is not to build one.",
          "If the steps never change, write the automation — it will be faster, cheaper, and testable. If the task is a single transformation of text, one model call is enough and the agent loop adds cost and latency for nothing. If a wrong answer is unacceptable and cannot be caught in review, keep the decision with a person and use the model only to prepare the evidence. And if the data the agent would need does not yet exist in a queryable form, that groundwork is the project — the agent comes after it.",
          "Deciding between [an agent, a chatbot, and plain automation](/learn/ai-agent-vs-ai-chatbot-vs-automation) comes down to one measurement: how much the steps vary with the input. Very little variation is an automation. A lot of variation is an agent. No variation at all is a script you already know how to write.",
        ],
      },
      {
        heading: "A Five-Question Test",
        body: [
          "Before commissioning anything, answer these honestly. They predict the outcome of an agent project better than the choice of model does.",
        ],
        bullets: [
          "Can you describe the finished state in one sentence a new hire would understand?",
          "Do the steps genuinely change depending on what the system finds?",
          "Do the tools it would need already exist as APIs or queries you control?",
          "Can you tell automatically whether a given run succeeded?",
          "Is there a person who will notice, and care, if the output is wrong?",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an AI agent the same thing as ChatGPT?",
        a: "No. ChatGPT is a chat interface over a model. An agent is a system built around a model that can call tools and run multiple steps toward a goal without being prompted at each one. You can build an agent on the same underlying models that power a chat product — the difference is the loop and the tools around it, not the model.",
      },
      {
        q: "Do AI agents need to be trained on my data?",
        a: "Usually not. Most production agents fine-tune nothing. They retrieve your data at runtime through a search index or a database query, which is cheaper, reflects changes to your records instantly, and keeps those records out of a training set.",
      },
      {
        q: "How long does it take to build a useful agent?",
        a: "It depends far more on your data and tooling than on the agent. If the APIs and permissions already exist, a narrow first version comes together quickly. If the agent needs information currently locked in PDFs or in one person's head, that groundwork is the real timeline.",
      },
      {
        q: "Are AI agents reliable enough for customer-facing work?",
        a: "For bounded tasks with a human approving the consequential step, yes — that is the human-in-the-loop pattern. For unsupervised decisions that are hard to reverse, no. The reliability question is about which step you let it complete alone, not about agents as a category.",
      },
      {
        q: "What does an agent cost to run?",
        a: "Every step is a model call, so running cost scales with steps per task rather than with users. This is exactly why step limits, caching, and tight tool descriptions matter: a well-scoped agent and a chatty one can differ by an order of magnitude in cost for the same result.",
      },
    ],
  },

  // ── A2 ────────────────────────────────────────────────────────────────────
  {
    slug: "ai-agent-vs-ai-chatbot-vs-automation",
    title: "AI Agent vs AI Chatbot vs Automation: What Is Actually Different?",
    seoTitle: "AI Agent vs Chatbot vs Automation: The Real Difference",
    metaDescription:
      "A chatbot answers, automation executes fixed steps, an agent decides its own. Compare cost, failure modes, and which one your workflow actually needs.",
    answerFirst:
      "A chatbot answers. An automation executes a fixed sequence you defined in advance. An AI agent decides the sequence itself, then carries it out with tools. Chatbots suit questions, automations suit predictable repeating steps, and agents suit goals whose steps change with the input. Most real systems end up combining all three.",
    intent: "Comparison",
    feedsService: "ai-chatbots",
    author: "Muhammad Ubaid Raza",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 6,
    relatedSlugs: ["what-is-an-ai-agent", "what-are-aeo-and-geo"],
    sections: [
      {
        heading: "Three Different Jobs, Constantly Confused",
        body: [
          "These three words get used interchangeably in sales conversations, which is how companies end up buying the wrong thing. They are not tiers of sophistication. They are answers to different questions.",
          "A chatbot exists to respond. Someone asks, it replies, and the conversation is the product. An automation exists to execute — a developer wrote the steps, and the value is that those steps now happen without a human. An agent exists to reach an outcome, and the steps are its problem to work out.",
          "Pick by the shape of the work, not by which sounds most advanced. A well-built [chatbot](/services/ai-chatbots) that deflects a third of your repeat questions is worth considerably more than an agent that nobody trusts.",
        ],
      },
      {
        heading: "Side by Side",
        body: [
          "The dimensions below are the ones that decide the outcome of a project. Model choice is not on the list, because it rarely is the deciding factor.",
        ],
        table: {
          headers: ["Dimension", "Chatbot", "Automation", "AI agent"],
          rows: [
            [
              "Core job",
              "Answer a question in conversation",
              "Execute a fixed sequence",
              "Reach a goal by choosing its own steps",
            ],
            [
              "Who defines the steps",
              "Not applicable — it replies",
              "A developer, before it runs",
              "The model, while it runs",
            ],
            [
              "Handles a new kind of input",
              "Only if the answer already exists",
              "Only within the rules written",
              "Yes — that is the entire point",
            ],
            ["Cost driver", "Messages", "Executions", "Steps per run"],
            [
              "Typical failure",
              "A confidently wrong answer",
              "Silent breakage when the input shifts",
              "A wrong step, or an expensive loop",
            ],
            [
              "Sensible first project",
              "Deflect the top ten repeat questions",
              "Remove one manual copy-and-paste",
              "One narrow, bounded workflow",
            ],
          ],
        },
      },
      {
        heading: "How to Tell Which One You Need",
        body: [
          "One question separates them: given the same objective, how much do the steps change depending on what the system finds along the way?",
        ],
        bullets: [
          "The steps never change, and the input is structured. Write the automation. It is cheaper, faster, and you can test it properly.",
          "The user just needs an answer that exists somewhere in your documentation. Build a chatbot over that documentation and measure deflection, not delight.",
          "The steps depend on what the system discovers — this customer has an open invoice, that document is missing a field, this lead is already in the CRM. That variability is the case for an agent.",
          "A wrong outcome is expensive and cannot be reviewed. Keep the decision with a person, and use the model to assemble the evidence they decide on.",
        ],
      },
      {
        heading: "The Combination Most Real Systems Use",
        body: [
          "In practice the interesting systems are not one of the three. They are layered, and the layering is deliberate.",
          "A support system might use a chatbot as the front door, an automation to create and route the ticket, and an agent only for the awkward cases the first two cannot close. Each layer handles what it is cheapest at, and the expensive layer sees the smallest volume.",
          "That ordering is a cost decision as much as an architectural one. Every request that a deterministic rule can answer is a request you are not paying model tokens for, and every step an [agent](/services/ai-agents) does not have to reason about is a step that cannot go wrong.",
        ],
      },
      {
        heading: "Cost and Failure Profiles Are Not Comparable",
        body: [
          "Comparing these three on price per month is meaningless, because the meters measure different things. A chatbot bills roughly by conversation. An automation bills by execution and is close to free at low volume. An agent bills by step, and steps multiply with the difficulty of the individual task rather than with the number of users.",
          "The failure profiles differ just as much. An automation that breaks usually breaks loudly and stops. A chatbot fails by answering confidently from the wrong source. An agent fails by taking a reasonable-looking wrong action, or by looping. Those need different safeguards: monitoring for the automation, source grounding and evaluation for the chatbot, step limits and approval gates for the agent.",
        ],
      },
      {
        heading: "One Inbox, Three Approaches",
        body: [
          "Take a shared inbox receiving a few hundred messages a week, and hold the objective constant: answer faster without dropping anything.",
          "The chatbot approach puts an assistant on the website that answers the twenty questions the inbox receives most often, so those messages never arrive. Cheap, quick to evaluate, no effect on the messages that do come in.",
          "The automation approach reads each message, matches keywords, assigns it to a queue, and applies a template. Reliable and near-free at this volume — until the day someone phrases a refund request in a way the keyword list never anticipated.",
          "The agent approach reads the message, looks up the sender in your systems, decides whether it can be answered from what it found, drafts a reply, and escalates the rest with the context attached. It handles the phrasing nobody anticipated, costs the most per message, and needs a review step before it is allowed to send anything on your behalf.",
          "Most teams should build these in that order. Each one narrows what the next has to handle, and you learn the shape of your own inbox before paying an agent to reason about it.",
        ],
      },
      {
        heading: "When Each One Is the Wrong Answer",
        body: [
          "A chatbot is wrong when your users do not have questions, they have tasks. Answering someone politely while they still cannot do the thing they came to do is a worse experience than no bot at all.",
          "An automation is wrong when the rule list has quietly grown past a few dozen branches. At that point the rules encode a decision nobody can review, and every new case makes it more fragile.",
          "An agent is wrong when the task is genuinely deterministic, when the finishing condition cannot be described, or when you have no way to measure whether it did the job. All three of those show up as an agent that demos beautifully and is quietly switched off two months later. If you are still weighing it up, [the definition and failure modes of agents](/learn/what-is-an-ai-agent) are worth reading before you commission anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a chatbot become an agent?",
        a: "Yes, and it is a common path. You give the chatbot tools and the ability to run more than one step, and it stops being a chatbot. Do it deliberately: the moment it can act rather than answer, it needs permissions, step limits, and a review gate on anything consequential.",
      },
      {
        q: "Is an AI agent always more expensive than an automation?",
        a: "Per task, almost always. An automation runs fixed code; an agent pays for reasoning at every step. The agent earns its cost only where the variability is real — where a rule-based version would need a branch for every case and still miss some.",
      },
      {
        q: "Do I need an agent to use AI in my business at all?",
        a: "No. Plenty of valuable AI work is one model call inside an existing automation — classify this, extract that, summarise this thread. Reach for the agent loop only when the next step genuinely cannot be known in advance.",
      },
      {
        q: "Which should we build first?",
        a: "Whichever removes the largest amount of repeated human work for the least new risk. In most companies that is an automation or a documentation chatbot, not an agent — and building it teaches you the process well enough to scope the agent properly later.",
      },
    ],
  },

  // ── A3 ────────────────────────────────────────────────────────────────────
  {
    slug: "what-are-aeo-and-geo",
    title: "What Are AEO and GEO? How to Get Cited by ChatGPT, Claude, and Perplexity",
    seoTitle: "AEO and GEO Explained: Getting Cited by AI Answer Engines",
    metaDescription:
      "AEO and GEO explained without jargon: how answer engines pick sources, what makes a page quotable, and how to measure visibility you cannot see in analytics.",
    answerFirst:
      "AEO (Answer Engine Optimization) is making your content easy for an answer engine to quote. GEO (Generative Engine Optimization) is the broader practice of earning visibility inside AI-generated answers. Both come down to the same thing: answer the question directly, structure the page so a machine can parse it, and be a source worth citing.",
    intent: "Definition",
    feedsService: "seo-optimization",
    author: "Okasha Nadeem",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 8,
    relatedSlugs: ["what-is-an-ai-agent", "nextjs-vs-wordpress-for-business-websites"],
    sections: [
      {
        heading: "Defined Without the Jargon",
        body: [
          "Two acronyms have arrived to describe the same shift. AEO is Answer Engine Optimization: making a page easy to lift a correct, self-contained answer out of. GEO is Generative Engine Optimization: the wider job of making your organisation a source that generated answers draw on at all.",
          "The distinction is narrow enough that most people can treat them as one practice. AEO is about the passage. GEO is about the entity — whether a model has enough corroborating evidence to describe your company confidently in the first place.",
          "Neither replaces search engine optimisation. A page that cannot be crawled cannot be cited either, and the technical groundwork is identical. What changes is the unit of competition: classic SEO competes for a position in a list, AEO competes to be the sentence that gets quoted.",
        ],
      },
      {
        heading: "SEO vs AEO vs GEO",
        body: [
          "Held side by side, the three differ less in tactics than in what success looks like and how long it takes to see it.",
        ],
        table: {
          headers: ["Dimension", "SEO", "AEO", "GEO"],
          rows: [
            [
              "Goal",
              "Rank a page in a list of results",
              "Be the quoted answer to a question",
              "Appear inside generated answers about your field",
            ],
            [
              "Unit of competition",
              "The page",
              "The passage",
              "The entity and its corroboration",
            ],
            [
              "Main lever",
              "Relevance, links, technical health",
              "Direct answers, structure, clarity",
              "Consistent presence across independent sources",
            ],
            [
              "How you measure it",
              "Positions, clicks, impressions",
              "Whether an answer surface quotes you",
              "Manual prompt sampling, referrals, brand search",
            ],
            ["Feedback speed", "Weeks", "Weeks", "Slow and indirect"],
          ],
        },
      },
      {
        heading: "How an Answer Engine Picks Its Sources",
        body: [
          "Nobody outside these companies can see the ranking logic, and anyone who claims otherwise is guessing. What is observable is the shape of the pipeline, and that is enough to work with.",
          "An answer engine retrieves a set of candidate documents, selects passages from them, synthesises an answer, and attributes some of it. Every stage rewards different things. Retrieval rewards the same relevance and crawlability that search always has. Passage selection rewards self-contained writing — a paragraph that still makes sense with the page removed. Synthesis rewards clarity and internal consistency, because contradictory sources get dropped rather than reconciled. Attribution tends to favour sources that state something specific and checkable.",
          "The practical consequence is that page-level optimisation is no longer enough. A page can rank well and never be quoted, because every useful sentence in it depends on the three paragraphs above it.",
        ],
      },
      {
        heading: "The Six Properties of a Quotable Page",
        body: [
          "These are the properties we look for when auditing a page for answer visibility. None of them require new technology.",
        ],
        bullets: [
          "The answer comes first. Sixty words at the top that answer the title question completely, before any context or history. If the first paragraph is a warm-up, the quotable passage is on page two and someone else will be quoted instead.",
          "One question per page. Pages that answer twelve questions adequately lose to six pages that answer one question properly, because retrieval matches a question to a document.",
          "Passages stand alone. Each section should survive being read in isolation. Repeat the subject instead of relying on it — this instead of it — because the engine may only take the paragraph.",
          "Entities are named explicitly. Say the product, the standard, the version, the company. A model cannot resolve the thing you have carefully avoided naming.",
          "Structured data mirrors what is visible. Google's structured-data guidelines require markup to describe content actually present on the page, and marking up an answer a reader cannot see works against you rather than for you.",
          "Specifics are checkable and dated. A named source, a documented threshold, a stated last-reviewed date. Vague confidence is the easiest thing for a synthesis step to discard.",
        ],
      },
      {
        heading: "What Structured Data Actually Does",
        body: [
          "Structured data does not make you rank, and it does not guarantee a rich result. What it does is remove ambiguity. It states in machine-readable form what a page is, who wrote it, which organisation published it, and how the entities on it relate to one another.",
          "That matters most for questions about your organisation and your people. A name in a paragraph is text; the same name declared as a Person who works for a named Organization, with links to the profiles that corroborate it, is a claim a knowledge graph can hold. That is the difference between a model knowing your company exists and a model being able to describe who does what there.",
          "The building blocks are unremarkable and well documented: Organization, WebSite, Article with a real author, BreadcrumbList, FAQPage where the questions genuinely appear on the page, and Service for what you sell. Getting these right is the least glamorous and most reliable part of [technical SEO and answer optimisation](/services/seo-optimization).",
        ],
      },
      {
        heading: "How to Measure Something Analytics Cannot See",
        body: [
          "This is where the field is honest or it is nothing. There is no rank tracker for AI answers. Answers vary between users, between sessions, and between model versions, and most of them are read without anyone clicking through to you.",
          "What you can do is sample deliberately and consistently. None of the following is a ranking; all of them are directional, and that is still useful when you re-run them the same way each month.",
        ],
        bullets: [
          "Keep a fixed list of twenty prompts a real buyer would type, and run them monthly across the assistants your market uses. Record which sources get cited, including when you are absent.",
          "Watch the referrer report in your analytics for traffic from AI products. It undercounts badly, because the answer is often the end of the journey, but the trend line is real.",
          "Track branded search in Search Console. When people start searching your company name after encountering it in an answer, that shows up here — and it is the signal that survives a model update.",
          "Use Search Console query data to check that the questions you have answered are questions people actually ask, rather than the ones you assumed they would.",
        ],
      },
      {
        heading: "What Does Not Work",
        body: [
          "The tactics that show up in AEO checklists are mostly recycled from the worst decade of SEO.",
        ],
        bullets: [
          "Bolting an FAQ block onto every page. Marking up questions nobody asked adds nothing, and marking up answers that are not visible on the page contradicts the guidelines you are trying to satisfy.",
          "Writing to a word count. Length is not a signal. A complete, self-contained answer is, and it is often shorter than the guide it replaces.",
          "Burying the answer under an introduction to protect time-on-page. This trades the citation for a metric that does not pay you.",
          "Publishing an ultimate guide that answers twelve questions badly. Retrieval matches one question to one document, so the guide competes with itself.",
          "Claiming numbers you cannot source. A synthesis step compares sources against each other, and an unsupported figure is a reason to prefer someone else.",
        ],
      },
      {
        heading: "When AEO Should Not Be Your Priority",
        body: [
          "If your money pages have thin content, if the site is not reliably crawlable, or if your own name does not return your own site, answer optimisation is the wrong work for this quarter. Fix the foundation first — it is the same foundation either way, and none of the AEO advice above functions without it.",
          "It is also the wrong priority when you have no informational content at all. Answer engines quote explanations, and a site consisting entirely of sales pages gives them nothing to lift. That is the honest reason to build a guide section before worrying about how AI systems read it.",
          "And if your buyers do not research before they buy — pure local urgency, pure referral, pure repeat business — then the entire category matters less to you than reviews and response time do. Deciding that deliberately is a strategy. Discovering it after a year of publishing is not.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is AEO different from SEO in practice?",
        a: "The technical groundwork is the same: crawlable, fast, well-structured pages with accurate markup. The writing differs. SEO tolerates an answer arriving in paragraph four; AEO does not, because the passage is what gets quoted and the passage has to stand on its own.",
      },
      {
        q: "Can I pay to appear in AI answers?",
        a: "Not in the organic citations. Some assistants are introducing separate advertising formats, and those are labelled placements rather than citations. Anyone offering to insert your brand into organic AI answers is selling something they do not control.",
      },
      {
        q: "Does structured data guarantee I will be cited?",
        a: "No. It removes ambiguity about what your page and your organisation are, which helps you become eligible and helps a model describe you correctly. It cannot make an answer engine prefer you over a clearer, better-corroborated source.",
      },
      {
        q: "How long before AEO work shows results?",
        a: "Expect a slower and blurrier signal than classic SEO. The page has to be crawled, indexed, and then retrieved for the specific question — and because there is no position to watch, you are reading a sampled trend rather than a rank. Plan in months, and measure with a fixed prompt set you re-run.",
      },
      {
        q: "Should I block AI crawlers instead?",
        a: "That is a legitimate business decision, and it is a trade. Blocking protects your content from being summarised without a click, and it also removes you from the answers your buyers are reading. Publishers with paid content often block; businesses that need to be found generally should not.",
      },
    ],
  },

  // ── A4 ────────────────────────────────────────────────────────────────────
  {
    slug: "custom-web-application-cost",
    title: "How Much Does a Custom Web Application Cost? A Realistic Breakdown",
    seoTitle: "Custom Web Application Cost: What Actually Drives the Price",
    metaDescription:
      "What really drives the cost of a custom web application: user roles, integrations, data complexity, and compliance. Plus the line items most quotes forget.",
    answerFirst:
      "There is no honest single number. The cost of a custom web application is set by four things: how many distinct user roles it serves, how many external systems it must talk to, how much of the data model is genuinely custom, and the compliance bar it has to clear. Anyone quoting before scoping those is guessing.",
    intent: "Cost",
    feedsService: "custom-saas-enterprise",
    author: "Syed Muhammad Huzaifa",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 7,
    relatedSlugs: [
      "nextjs-vs-wordpress-for-business-websites",
      "dedicated-developers-vs-freelancers-vs-in-house",
    ],
    sections: [
      {
        heading: "Why Nobody Can Quote You Honestly in One Email",
        body: [
          "Custom web application describes a booking tool one person uses and a multi-tenant platform a thousand companies log into. Those differ by an order of magnitude, so a number given before scoping is either padded to cover the worst case or optimistic enough to guarantee a difficult conversation later.",
          "This is why serious quotes come after a scoping conversation rather than instead of one. The number is not the deliverable — the shared understanding of scope is, and the number falls out of it.",
          "What follows is the structure we actually use to arrive at a figure. Reading it will not tell you your price, but it will tell you what to prepare, and it will let you judge whether a quote you have already received was thought about or generated.",
        ],
      },
      {
        heading: "The Four Variables That Move the Number Most",
        body: [
          "In our experience, four things explain most of the variance between two projects that sound identical in a first conversation.",
        ],
        bullets: [
          "Distinct user roles. Each role brings its own screens, its own permission rules, and its own edge cases. Going from one role to three rarely triples the work, but it is closer to tripling than most people expect, because permissions multiply rather than add.",
          "External systems. Every integration is someone else's API, someone else's downtime, and someone else's idea of a data model. The second integration usually costs more than the first, because that is where you discover the two systems disagree about the same customer.",
          "How custom the data model really is. If your process maps onto familiar shapes — customers, orders, invoices — much of the work is known. If it genuinely does not, that unfamiliarity is where the estimate widens.",
          "The compliance and reliability bar. An internal tool used by six colleagues and a system holding regulated data are different engineering problems, even with identical screens. Audit trails, retention rules, and access reviews are real work.",
        ],
      },
      {
        heading: "Three Scope Tiers, and What Separates Them",
        body: [
          "Most projects land in one of three tiers. The label matters less than the middle column — that is what you should be able to recognise your own project in.",
        ],
        table: {
          headers: ["Scope", "What it looks like", "What actually drives the cost"],
          rows: [
            [
              "Single-purpose tool",
              "One user role, one job done properly, few or no integrations",
              "The interface, and the one workflow it replaces",
            ],
            [
              "Internal platform",
              "Several roles with different permissions, real reporting, two or three integrations",
              "Permission logic, and keeping two systems in agreement",
            ],
            [
              "Multi-tenant product",
              "Isolated customer data, billing, onboarding, an audit trail",
              "Tenant isolation, billing edge cases, and everything that must be right on day one",
            ],
          ],
        },
      },
      {
        heading: "The Line Items People Forget",
        body: [
          "Budgets rarely break on the feature everyone discussed. They break on the work nobody put on the list.",
        ],
        bullets: [
          "Discovery and scoping. Deciding what to build is work, and doing it properly is what makes the rest of the estimate mean anything.",
          "Migrating existing data. Whatever you have now is messier than you think — duplicates, missing fields, three spellings of the same client. This is one of the two most common budget killers.",
          "Authentication, roles, and permissions. Ordinary, unavoidable, and never as small as it sounds once the second role appears.",
          "Admin tooling. Nobody specifies the internal screens for fixing bad data or resending a failed job, and everybody needs them by week two. This is the other common budget killer.",
          "Error handling and observability. Logging, alerting, and a way to answer why did it do that. Skipping this makes every later month more expensive.",
          "Testing across real devices and browsers, including whatever your finance team insists on using.",
          "Hosting and third-party running costs, which are monthly forever rather than one-off.",
          "The first three months after launch. Real users find real problems, and that period is part of the project whether or not it is in the quote.",
        ],
      },
      {
        heading: "Fixed Price vs Time and Materials",
        body: [
          "A fixed price moves risk onto the vendor, and any competent vendor prices that risk in. You get certainty, and you pay a premium for it — plus a change-request process, because the fixed scope has to be defended for the arrangement to work at all.",
          "Time and materials moves risk onto you and removes the premium. It works well when the scope will genuinely evolve and badly when nobody is holding the line on priorities, because there is no natural point at which someone says that is out of scope.",
          "The arrangement we recommend most often is neither: a small fixed-price discovery that produces a written scope, an architecture, and a real estimate, followed by a build priced against that scope. You pay a bounded amount to remove the uncertainty before committing to the large number, and if the estimate that comes out is wrong for your budget, you have lost very little finding out.",
        ],
      },
      {
        heading: "How to Cut Cost Without Cutting Quality",
        body: [
          "Every one of these reduces cost without reducing how well the thing works. Most cost-cutting that fails does the opposite.",
        ],
        bullets: [
          "Reduce roles before you reduce features. One role using the system fully beats three roles half-served.",
          "Ship one workflow end to end rather than three workflows to eighty percent. Eighty percent of a workflow is zero percent of a workflow — someone still has to do it by hand.",
          "Use managed services for auth, payments, email, and file storage. Building these yourself is expensive twice: once now, and again every time they need maintaining.",
          "Postpone the second integration until the first has run in production for a month. You will scope the second one far better afterwards.",
          "Reuse a design system instead of commissioning a bespoke visual language for an internal tool nobody outside the company will see.",
          "Insist on a genuinely small first release. Scope grows during a build; it almost never shrinks, so start below what you think you need.",
        ],
      },
      {
        heading: "When Custom Is the Wrong Answer",
        body: [
          "Off-the-shelf software plus configuration wins whenever your process is not actually unusual. If a product exists that does eighty percent of this and your remaining twenty percent is preference rather than requirement, adapting the process is cheaper than building the software — including the cost of the compromise.",
          "Custom earns its place when the process is your competitive advantage, when the integration between your systems is the whole point, or when off-the-shelf pricing scales worse than a build as you grow. Those are real and common reasons. Not liking someone else's interface is not one of them.",
          "For a public-facing site rather than an application, the decision is a different one entirely — [platform choice, not build cost](/learn/nextjs-vs-wordpress-for-business-websites), is what determines the number there.",
        ],
      },
      {
        heading: "How to Get a Number You Can Trust",
        body: [
          "Bring three things to a scoping conversation and the estimate stops being a guess. First, the list of people who will use it and what each of them needs to do. Second, the list of systems it must talk to. Third, one sentence describing the job it must do from start to finish.",
          "With those, a vendor can tell you which tier you are in, what the unknowns are, and what it would cost to remove them. Without them, any number you receive is a placeholder — and if a vendor gives you one anyway, that tells you something useful about how the rest of the project will go.",
          "That is exactly what our scoping call produces, and it is where [a custom platform build](/services/custom-saas-enterprise) starts: a written scope you own, whether or not you build it with us.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do agencies not publish prices for custom applications?",
        a: "Because the same three words describe systems that differ by an order of magnitude, so a published number is only meaningful next to a fixed scope. A figure without a scope has to be padded to be safe, which helps nobody. Scoping first and quoting second is slower to start and far more accurate.",
      },
      {
        q: "Is a fixed price safer for me?",
        a: "It is more certain, which is not the same thing. The vendor prices the risk in, and the scope has to be defended for the arrangement to work. It suits well-understood projects. For anything genuinely new, a fixed-price discovery followed by a scoped build gives you certainty where it matters without paying a premium on the unknowns.",
      },
      {
        q: "Does using AI make development cheaper?",
        a: "It changes where the time goes rather than removing it. Generating a first version of something is faster; understanding the domain, integrating with real systems, reviewing what was produced, and being accountable for correctness are not. Expect a shift in the mix, not a discount on the total.",
      },
      {
        q: "What does it cost to run after launch?",
        a: "Three recurring lines: hosting, third-party services you depend on, and change. The first two are predictable and usually modest. The third is the one people forget — a system that is being used will need changes, and budgeting nothing for that is how a good application quietly becomes a legacy one.",
      },
      {
        q: "Can we start smaller and expand later?",
        a: "Yes, and it is almost always the right call — provided the small version does one workflow completely rather than several partially. Build the architecture so the next workflow fits, then add it once real users have shown you what they actually need next.",
      },
    ],
  },

  // ── A5 ────────────────────────────────────────────────────────────────────
  {
    slug: "dedicated-developers-vs-freelancers-vs-in-house",
    title: "Dedicated Developers vs Freelancers vs In-House: Cost, Risk, and Fit",
    seoTitle: "Dedicated Developers vs Freelancers vs In-House: How to Choose",
    metaDescription:
      "Compare freelancers, a dedicated team, and in-house hiring on speed, continuity, and true cost — and see which model fits how long your work will last.",
    answerFirst:
      "Freelancers suit bounded, short work you can specify precisely. An in-house hire suits a system you will keep changing for years. A dedicated team sits in between — capacity and continuity now, without permanent headcount. The deciding factor is how long the work lasts, not the day rate.",
    intent: "Comparison",
    feedsService: "dedicated-teams",
    author: "Okasha Nadeem",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 7,
    relatedSlugs: ["custom-web-application-cost", "what-is-an-ai-agent"],
    sections: [
      {
        heading: "The Day Rate Is the Least Important Number",
        body: [
          "Almost every comparison of these three models starts with hourly cost, which is the one dimension where they look most alike and matter least. The differences that decide the outcome are duration, continuity, and who carries the management load.",
          "Ask a different question: how long will this work last, and what happens to it when the person doing it leaves? A three-week piece of work and a three-year system have almost nothing in common, even when the code looks similar on day one.",
          "Get the duration question right and the cost question mostly answers itself. Get it wrong and you will pay for it twice — once in the wrong engagement, and again in the handover.",
        ],
      },
      {
        heading: "Side by Side on the Dimensions That Bite",
        body: [
          "These are the comparisons that show up in retrospectives, in the order they tend to cause problems.",
        ],
        table: {
          headers: ["Dimension", "Freelancer", "Dedicated team", "In-house hire"],
          rows: [
            ["Time to start", "Days", "Weeks", "Months, including notice periods"],
            [
              "What you manage",
              "Tasks",
              "Outcomes, through a lead",
              "People, careers, and performance",
            ],
            [
              "Continuity risk",
              "High — one person, one calendar",
              "Absorbed by the team around them",
              "Low, until they resign",
            ],
            [
              "Where knowledge lives",
              "With them, and it leaves with them",
              "In the team and its documentation",
              "In your company, while they stay",
            ],
            [
              "Cost shape",
              "Variable, per piece of work",
              "Predictable monthly",
              "Salary plus everything around it",
            ],
            ["Scaling down", "Immediate", "Contractual notice", "Slow and expensive"],
            [
              "Best fit",
              "A defined, bounded piece of work",
              "An ongoing build with changing scope",
              "A core system with a permanent roadmap",
            ],
          ],
        },
      },
      {
        heading: "The Costs That Never Appear on the Invoice",
        body: [
          "Comparing rates ignores most of what you actually spend. Every model carries some of these; they are just billed differently, or not billed at all.",
        ],
        bullets: [
          "Recruiting time. Writing the role, screening, interviewing, and deciding is real senior time, spent before anyone writes a line of code.",
          "Ramp-up. The first weeks are paid learning whichever model you choose. The question is who absorbs that cost and whether you pay it again in six months.",
          "Your own management overhead. Freelancers need task-level direction. A dedicated team needs outcome-level direction through a lead. An employee needs management as a profession, not a side task.",
          "Context loss at handover. The most expensive unbilled item in software. Everything the person understood and never wrote down leaves with them.",
          "Rework from code nobody reviewed. A single unreviewed contributor is the most common source of the rewrite you pay for a year later.",
          "The cost of a stalled quarter. A role open for four months is four months of roadmap not moving — usually larger than any rate difference under discussion.",
        ],
      },
      {
        heading: "Where Freelancers Genuinely Win",
        body: [
          "For bounded, specifiable work, a good freelancer is the most efficient option available and it is not close. A defined integration, a design system, a migration script, a performance pass — work with a clear finish line and a clear definition of done.",
          "They also win when you need a specialist for a short stretch. Hiring a full-time expert in something you will touch twice a year makes no sense, and a dedicated team is more structure than the task deserves.",
          "The failure mode is predictable: an open-ended engagement with no reviewer. It starts as a two-week task, becomes the system nobody else understands, and ends with a handover document that does not exist. Freelance work needs a defined end, or someone on your side reviewing it.",
        ],
      },
      {
        heading: "Where In-House Genuinely Wins",
        body: [
          "When the system is your product and the roadmap has no end date, employees are the right answer. Accumulated context compounds, and nobody accumulates it like someone who has been living with the same codebase for three years.",
          "In-house also wins where the work is inseparable from the business — pricing logic, underwriting rules, anything where the domain knowledge and the code are the same asset. That knowledge should not sit outside the company.",
          "The trade-offs are structural rather than fixable. Hiring is slow, good engineers are hard to attract without a compelling technical story, and the cost is fixed whether this quarter is busy or quiet. None of that is an argument against hiring — it is an argument against hiring as your only mode.",
        ],
      },
      {
        heading: "What a Dedicated Team Actually Buys",
        body: [
          "The honest description of this model is rented continuity. You get people assigned to your work rather than shared across a queue, a lead who owns delivery, and a team structure that survives one person being unavailable.",
          "The specific things you are buying are worth naming, because they are what a freelancer cannot offer and an unfilled role cannot either: code review by default, knowledge held by more than one person, capacity you can adjust with notice instead of redundancy, and someone whose job is delivery rather than task assignment.",
          "It is the right shape when the work is ongoing but the headcount decision is not yet obvious — a build phase, an expansion, a system that needs sustained attention for a year without committing to a permanent team you would have to unwind. That is precisely what [our dedicated teams engagement](/services/dedicated-teams) is structured for.",
        ],
      },
      {
        heading: "The Failure Modes of Each",
        body: [
          "Knowing how each model fails is more useful than knowing how it is sold.",
          "Freelance engagements fail through drift: no end date, no reviewer, and a single point of failure that becomes load-bearing. In-house hiring fails through delay and through the single-senior-engineer trap, where one person becomes irreplaceable and the whole roadmap runs at their speed. Dedicated teams fail through vagueness — if nobody defines the outcomes, you are paying monthly for activity, and the arrangement quietly turns into an expensive staffing agency.",
          "All three failure modes have the same cure: a written definition of what done looks like, and someone accountable for it. That is worth more than any rate negotiation.",
        ],
      },
      {
        heading: "A Three-Question Test",
        body: [
          "Answer these before talking to anyone about rates.",
        ],
        bullets: [
          "How long will this work realistically last — weeks, months, or years with no end in sight?",
          "If the person doing it disappeared next month, what would happen to the project?",
          "Who on your side will define what done means, and do they have the time to do it?",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a dedicated team just outsourcing with a nicer name?",
        a: "The difference is assignment and accountability. Traditional outsourcing gives you output from a shared pool against a specification. A dedicated team means named people working on your product continuously, with a lead accountable for outcomes. If a vendor cannot tell you who is on your team and what they own, it is the former.",
      },
      {
        q: "Can I start with freelancers and move to a team later?",
        a: "Often, and it is a sensible path. Make it survivable in advance: insist on code review, documentation, and access you control from the first week. The migrations that go badly are the ones where a year of undocumented decisions has to be reverse-engineered before anyone can add a feature.",
      },
      {
        q: "How many people do we actually need?",
        a: "Fewer than most proposals suggest. Small teams with clear ownership consistently outperform larger ones with divided attention, because coordination cost rises faster than capacity. Start with the smallest team that can ship one workflow end to end, then add only when a specific bottleneck is visible.",
      },
      {
        q: "What about time zones?",
        a: "Overlap matters more than location. A few hours of shared working time per day is usually enough for a team with clear written communication; almost no overlap turns every question into a day of delay. Ask about overlap hours and how decisions get recorded — those two answers predict how the engagement will feel.",
      },
    ],
  },

  // ── A6 ────────────────────────────────────────────────────────────────────
  {
    slug: "nextjs-vs-wordpress-for-business-websites",
    title: "Next.js vs WordPress for Business Websites: Performance, SEO, and Cost",
    seoTitle: "Next.js vs WordPress: Which Is Right for Your Business Site?",
    metaDescription:
      "Next.js or WordPress for your business website? Compare performance ceilings, SEO parity, security surface, and the real cost of changing anything later.",
    answerFirst:
      "Choose WordPress when the site is mostly content and a non-technical team must publish daily without a developer. Choose Next.js when performance, custom application logic, or a bespoke interface matters more than editing convenience. Both can rank well. The real difference is who has to be involved to change something.",
    intent: "Comparison",
    feedsService: "web-development",
    author: "Taha Qureshi",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    readingTime: 7,
    relatedSlugs: ["custom-web-application-cost", "what-are-aeo-and-geo"],
    sections: [
      {
        heading: "The Comparison That Actually Matters",
        body: [
          "This decision is usually argued on performance and SEO, and those are the two dimensions where a competent build on either platform can win. Meanwhile the difference that will define the next three years gets skipped: who has to be involved when you want to change something.",
          "On WordPress, a marketer edits a page. On Next.js, a page change is usually a code change, unless a content management system has been deliberately connected. That single fact drives your publishing speed, your ongoing cost, and how often your site goes stale.",
          "Everything else follows from what kind of thing you are building. A site whose job is publishing has different needs from a site whose job is a logged-in interface, and the platform argument is mostly people describing different projects with the same words.",
        ],
      },
      {
        heading: "Side by Side",
        body: [
          "Assume a competent build of each. Comparing a professional Next.js application against a neglected WordPress install proves nothing.",
        ],
        table: {
          headers: ["Dimension", "WordPress", "Next.js"],
          rows: [
            [
              "Publishing without a developer",
              "Built in, and genuinely good at it",
              "Needs a CMS deliberately connected",
            ],
            [
              "Performance ceiling",
              "Good with discipline, capped by theme and plugins",
              "High — static rendering and per-route control",
            ],
            [
              "Custom application logic",
              "Fights the platform past a point",
              "Native — it is a React application",
            ],
            [
              "Security surface",
              "Core plus every plugin, and their update cadence",
              "Your code plus your dependencies",
            ],
            [
              "Initial cost",
              "Lower, especially with an existing theme",
              "Higher — more is built than configured",
            ],
            [
              "Cost of change later",
              "Cheap for content, rising steeply for behaviour",
              "Predictable, but developer-mediated",
            ],
            [
              "Who can maintain it",
              "A large pool of WordPress specialists",
              "React developers, which is also a large pool",
            ],
          ],
        },
      },
      {
        heading: "Performance: What the Numbers Are Measured Against",
        body: [
          "Both platforms are measured against the same public thresholds. Google's Core Web Vitals define good as Largest Contentful Paint at or under 2.5 seconds, Interaction to Next Paint at or under 200 milliseconds, and Cumulative Layout Shift at or under 0.1, as documented on web.dev.",
          "Neither platform passes automatically. A lean WordPress build on good hosting, with a small theme and few plugins, can comfortably clear those thresholds. A careless Next.js application that ships a megabyte of JavaScript to render three paragraphs will fail them, and the framework will not save it.",
          "What differs is the ceiling and where the effort goes. On WordPress you are optimising within a theme and plugin stack you partly control — usually by removing things. On Next.js you control rendering per route, so you can pre-render the marketing pages entirely and load interactivity only where it is used. The high end is higher, and reaching it is engineering work rather than configuration.",
        ],
      },
      {
        heading: "SEO: Where They Are Even, and Where They Are Not",
        body: [
          "On the fundamentals they are even, and any claim otherwise is marketing. Titles, meta descriptions, canonical tags, sitemaps, robots directives, and structured data are all available on both. WordPress gets them through a plugin; Next.js gets them through code. Both work.",
          "The differences appear at the edges. Rendering control is one: Next.js lets you decide per route what is static, what is cached, and what is dynamic, which is the direct lever on the speed part of page experience. Structured data is another — when your schema is generated from the same data that renders the page, it cannot drift out of sync, which is harder to guarantee when markup comes from a plugin configured separately from the content.",
          "The larger point is that platform choice is a small part of search performance. Content that answers the question, a site that is crawlable, and pages that load quickly matter far more, and [none of that is decided by your framework](/services/seo-optimization). If your site is being read by answer engines as well as search engines, [how you structure the answers](/learn/what-are-aeo-and-geo) matters more than what generates the HTML.",
        ],
      },
      {
        heading: "The Plugin Question",
        body: [
          "Plugins are the strongest argument for WordPress and its most common failure mode, and both are true at once. Whatever you need, someone has probably built it, and you can have it working this afternoon.",
          "The cost arrives later. Every plugin is code you did not write, running on your site, updated on someone else's schedule. Each one adds requests, database queries, and a surface to keep patched. Sites that get slow do not usually get slow all at once — they accumulate.",
          "The discipline that works is unglamorous: keep the count low, prefer well-maintained plugins with a real update history, and remove anything you are not actively using. A WordPress site with a dozen carefully chosen plugins can perform excellently. One with fifty is a maintenance liability regardless of hosting.",
        ],
      },
      {
        heading: "When WordPress Is the Right Answer",
        body: [
          "If the site is fundamentally a publishing operation — a blog, a news section, a content library, a marketing site that changes weekly — and a non-technical team owns it, WordPress is very likely correct. Fighting that with a custom build is how organisations end up with a beautiful site nobody can update.",
          "It is also the right answer when the budget is genuinely constrained and the requirements are conventional. A well-chosen theme on good hosting, kept lean, will serve a small business better than a half-finished custom application. Shipping something solid beats shipping something ambitious and unmaintained.",
          "And it wins when the ecosystem is doing real work for you: memberships, learning platforms, straightforward commerce. Rebuilding a mature plugin from scratch is rarely a good use of a first budget.",
        ],
      },
      {
        heading: "When Next.js Is the Right Answer",
        body: [
          "When the site contains an application — logged-in areas, dashboards, calculators, configurators, real-time anything — you are building software, and a framework built for software is the right tool. WordPress can be pushed there, and past a certain point every feature costs more than it should.",
          "It is also right when performance is a competitive requirement rather than a target, when the interface is bespoke enough that no theme fits, or when the site must integrate deeply with your own systems. And it is right when the front end is one part of a product your engineers already own, because the same team maintains everything.",
          "The trade-off is honest and worth stating: you are choosing a higher ceiling and paying with developer involvement in changes. That is a good trade when you have engineering capacity and a bad one when you do not. Deciding that is the first thing we work through in a [web development](/services/web-development) conversation, and if the answer is WordPress we will say so.",
        ],
      },
      {
        heading: "The Hybrid Nobody Mentions",
        body: [
          "There is a third option: keep WordPress as the editing interface, and render the public site with Next.js reading content through the WordPress API. Editors keep the tool they know, and visitors get a fast, fully controlled front end.",
          "It genuinely works, and it is not free. You now have two systems, two deployments, and a caching relationship between them to think about. Preview becomes something you have to build rather than something you have.",
          "It earns its keep for content-heavy sites with a real editorial team and real performance requirements — enough publishing volume to need a proper CMS, enough traffic to care about the last second of load time. Below that threshold, the extra moving parts cost more than they return, and one platform chosen well is the better answer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Next.js better for SEO than WordPress?",
        a: "Not inherently. Both can produce crawlable HTML with correct titles, canonicals, sitemaps, and structured data. Next.js gives finer control over rendering and caching, which helps the speed component of page experience. Content quality and site health decide far more than the platform does.",
      },
      {
        q: "Can non-technical staff update a Next.js site?",
        a: "Only if you build that in. Connect a headless CMS and editors work much as they would on WordPress; skip it and every content change is a code change. Decide this before the build starts, because retrofitting a CMS is significantly more work than including one.",
      },
      {
        q: "Is WordPress insecure?",
        a: "WordPress core is actively maintained. The risk concentrates in outdated plugins, weak credentials, and neglected hosting. A maintained WordPress site with few plugins and enforced updates is fine. An unmaintained one is a liability — and so is an unmaintained Next.js application with years-old dependencies.",
      },
      {
        q: "We already have WordPress. Is migrating worth it?",
        a: "Only if the current platform is blocking something specific — application features you cannot build, performance you cannot reach after real optimisation, or maintenance cost that has become unreasonable. A migration is a project with no new features to show for it. Optimise the existing site first, and migrate when you can name what it unblocks.",
      },
      {
        q: "Which is cheaper overall?",
        a: "WordPress is cheaper to start and cheaper to change content. Next.js costs more up front and makes behaviour changes more predictable to price. Over three years the deciding factor is what you change most often: if it is words, WordPress wins on cost; if it is functionality, the gap closes and often reverses.",
      },
    ],
  },
];

/** Look up one article by slug. */
export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * Articles that feed a given service page. Powers the "Learn more" block on
 * `/services/[slug]`, so the money page → spoke direction of the internal
 * cluster stays in sync automatically.
 */
export function articlesForService(serviceSlug: string): Article[] {
  return articles.filter((article) => article.feedsService === serviceSlug);
}

/** Resolve `relatedSlugs` to real articles, silently dropping unknown slugs. */
export function relatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((related): related is Article => Boolean(related));
}

/** The service this article points at, for the CTA block. */
export function serviceForArticle(article: Article) {
  return servicesData.find((service) => service.slug === article.feedsService);
}

/**
 * "2026-08-28" → "28 Aug 2026". Fixed locale + UTC so the string is identical
 * at build time and at request time (no hydration mismatch, no drift between
 * the visible date and the ISO date in `Article.datePublished`).
 */
export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
