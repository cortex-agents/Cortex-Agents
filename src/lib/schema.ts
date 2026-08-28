// src/lib/schema.ts
// Builders for JSON-LD structured data. Each returns a plain object that
// <JsonLd> serializes into a <script type="application/ld+json"> tag.
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  CONTACT,
  SOCIAL_LINKS,
  absoluteUrl,
} from "./site";
import type { ServiceData, FAQ } from "./services-data";
import { servicesData } from "./services-data";
import type { Article } from "./learn-data";
import type { Product } from "../components/data/products_types";
import {
  teamData,
  memberProfiles,
  memberByName,
  type TeamMember,
} from "./team-data";

// Stable entity ids. Giving the Organization a fixed `@id` lets every other
// node (Person.worksFor, WebSite.publisher, Article.publisher) point at the
// SAME entity instead of re-declaring a look-alike company each time. That is
// what turns a pile of separate JSON-LD blocks into one connected graph.
const ORG_ID = `${SITE_URL}#organization`;

// A person's canonical entity id is their anchor on the About page.
function personId(member: TeamMember) {
  return absoluteUrl(`/about#${member.slug}`);
}

// A service's canonical entity id is its own money page. Fixing it here lets a
// project page say "this work is about THAT service" by `@id` reference instead
// of re-declaring a second, look-alike Service node.
function serviceId(slug: string) {
  return `${absoluteUrl(`/services/${slug}`)}#service`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description: SITE_DESCRIPTION,
    areaServed: "Worldwide",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.addressLocality,
      addressCountry: CONTACT.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.telephone,
      contactType: "customer service",
      availableLanguage: CONTACT.availableLanguage,
    },
    // Compact employee references — self-describing enough to stand alone on
    // pages where the full Person node is not present, and `@id`-linked to the
    // rich Person nodes emitted on /about.
    employee: teamData.map((member) => ({
      "@type": "Person",
      "@id": personId(member),
      name: member.name,
      jobTitle: member.role,
      sameAs: memberProfiles(member).map((profile) => profile.url),
    })),
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
  };
}

// Rich Person node — emitted once per member on /about, where the matching
// anchor (`id="<slug>"`), the visible bio, and the profile links all exist on
// the page. Every field below mirrors something the card actually renders.
export function personSchema(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(member),
    name: member.name,
    url: personId(member),
    jobTitle: member.role,
    description: member.bio,
    image: absoluteUrl(member.image),
    knowsAbout: member.expertise,
    // Every verified profile for this human. More corroborating profiles = more
    // confidence for a search engine that this name refers to THIS person.
    sameAs: memberProfiles(member).map((profile) => profile.url),
    worksFor: { "@id": ORG_ID },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl("/about")}#aboutpage`,
    name: `About ${SITE_NAME}`,
    url: absoluteUrl("/about"),
    isPartOf: { "@id": `${SITE_URL}#website` },
    mainEntity: { "@id": ORG_ID },
  };
}


export function serviceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId(service.slug),
    name: service.title,
    description: service.shortDescription,
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// Declares a hub page (e.g. /learn) as a collection, and — when `items` are
// passed — lists its children as an ordered ItemList. That gives a crawler the
// full set of child URLs from the hub's own markup, instead of relying on it to
// discover each card link.
export function collectionPageSchema({
  name,
  url,
  description,
  items = [],
}: {
  name: string;
  url: string;
  description: string;
  items?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name,
    url,
    description,
    isPartOf: { "@id": `${SITE_URL}#website` },
    publisher: { "@id": ORG_ID },
    ...(items.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    }),
  };
}

// Article node for a /learn spoke. `author` resolves to the team member's
// existing Person entity by `@id`, so the article inherits the credibility of a
// named human who is already declared as an employee of the Organization —
// that link IS the E-E-A-T signal, not the byline text on its own.
export function articleSchema(article: Article) {
  const url = absoluteUrl(`/learn/${article.slug}`);
  const author = memberByName(article.author);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: author
      ? {
          "@type": "Person",
          "@id": personId(author),
          name: author.name,
          url: personId(author),
          jobTitle: author.role,
        }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE_URL}#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en",
  };
}

// CreativeWork node for a /portfolio spoke. Two deliberate choices here:
//
//   `url`     → our own project page, never the demo. The demo lives on a
//               vercel.app domain we do not own the ranking for; declaring it
//               as the canonical would hand the signal to someone else's host.
//   `sameAs`  → the live deployment. Same work, different address — which is
//               exactly what sameAs means, and it corroborates that the project
//               is real rather than a screenshot.
//
// `about` references each Service by the SAME `@id` the service page declares,
// so the graph reads "this work is evidence for that service" instead of
// inventing a second Service node that happens to share a name.
export function creativeWorkSchema(project: Product) {
  const url = absoluteUrl(`/portfolio/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.metaDescription,
    url,
    sameAs: project.link,
    image: absoluteUrl(project.image),
    keywords: project.stack.join(", "),
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${SITE_URL}#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: project.servicesUsed
      .map((slug) => servicesData.find((service) => service.slug === slug))
      .filter((service): service is ServiceData => Boolean(service))
      .map((service) => ({
        "@type": "Service",
        "@id": serviceId(service.slug),
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
      })),
    inLanguage: "en",
  };
}
