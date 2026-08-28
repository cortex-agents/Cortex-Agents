import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/lib/services-data";
import { articlesForService } from "@/lib/learn-data";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/site";
import { serviceSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Button } from "@/components/ui/Button";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProblems from "@/components/services/ServiceProblems";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import AuditForm from "@/components/AuditForm";
import { Section } from "@/components/ui/Section";
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from "@/components/ui/Animations";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: "Service Not Found" };

  const title = service.seoTitle ?? `${service.title} Services`;
  const description = service.metaDescription ?? service.shortDescription;
  const path = `/services/${service.slug}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      type: "website",
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    alternates: {
      canonical: path,
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Derived from learn-data, so publishing an article that feeds this service
  // links itself in here — the cluster cannot drift out of sync by hand.
  const guides = articlesForService(service.slug);

  return (
    <main className="bg-background text-foreground pb-20">
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Services", url: absoluteUrl("/services") },
        { name: service.title, url: absoluteUrl(`/services/${service.slug}`) },
      ])} />
      <ServiceHero service={service} />
      <ServiceProblems problemsData={service.problems} />
      <ServiceFeatures featuresData={service.features} />
      <ServiceProcess processData={service.process} />
      <ServiceFAQ faqs={service.faqs} />

      {/* Related guides — completes the cluster: the spoke links up to this
          money page, and this money page links back down to the spoke. */}
      {guides.length > 0 && (
        <Section spacing="standard" className="border-t border-border">
          <FadeInUp className="mb-12">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              Related Reading
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mt-8 mb-8">
              BEFORE YOU<br />DECIDE.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Plain-English guides that go deeper on {service.title} — what it involves, what drives the cost, and when it is the wrong choice.
            </p>
            <AccentBar className="w-16 h-1 bg-accent" />
          </FadeInUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {guides.map((guide) => (
              <StaggerItem key={guide.slug} className="bg-background">
                <Link
                  href={`/learn/${guide.slug}`}
                  className="group flex h-full flex-col p-8 md:p-10 transition-colors duration-150 ease-fast hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest mb-6">
                    <span className="text-accent">{guide.intent}</span>
                    <span className="text-muted-foreground">{guide.readingTime} Min Read</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-snug mb-4 group-hover:text-accent transition-colors duration-150 ease-fast">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {guide.answerFirst}
                  </p>
                  <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-widest text-accent">
                    Read →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      )}
      
      {/* Free Tech Audit Section (Auto-selects current service) */}
      <Section spacing="standard" className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeInUp className="mb-8">
              <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
                Free Consultation
              </span>
            </FadeInUp>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              GET A FREE<br />TECH AUDIT.
            </h2>
            
            <FadeInUp delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Let&apos;s discuss how {service.title} can specifically solve your business bottlenecks. We&apos;ll outline a clear strategy and actionable roadmap.
              </p>
              
              <ul className="space-y-4 mb-10 font-mono text-sm text-muted-foreground uppercase tracking-widest">
                <li className="flex items-center gap-4">
                  <span className="text-accent">01</span> 45-Minute Strategy Call
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-accent">02</span> Technical Feasibility
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-accent">03</span> Actionable Roadmap
                </li>
              </ul>
            </FadeInUp>
            
            <AccentBar className="w-16 h-1 bg-accent" />
          </div>
          
          <FadeInUp delay={0.2} className="bg-muted/30 border border-border p-8 md:p-10">
            {/* We pass the current service's title so the dropdown auto-selects it! */}
            <AuditForm defaultService={service.title} />
          </FadeInUp>
        </div>
      </Section>

      <ServiceCTA ctaData={service.cta} />

      {/* Back to Home CTA */}
      <Section spacing="standard" className="border-t border-border flex justify-center pb-20">
        <Button variant="ghost" href="/">
          ← Back to Home
        </Button>
      </Section>
    </main>
  );
}
