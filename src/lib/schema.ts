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
import { teamData, memberProfiles, type TeamMember } from "./team-data";

// Stable entity ids. Giving the Organization a fixed `@id` lets every other
// node (Person.worksFor, WebSite.publisher, Article.publisher) point at the
// SAME entity instead of re-declaring a look-alike company each time. That is
// what turns a pile of separate JSON-LD blocks into one connected graph.
const ORG_ID = `${SITE_URL}#organization`;

// A person's canonical entity id is their anchor on the About page.
function personId(member: TeamMember) {
  return absoluteUrl(`/about#${member.slug}`);
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

export function breadcrumbSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  };
}
