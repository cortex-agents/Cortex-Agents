import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/lib/services-data";
import { SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";
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
import { FadeInUp, AccentBar } from "@/components/ui/Animations";

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

  return (
    <main className="bg-background text-foreground pb-20">
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema(service)} />
      <ServiceHero service={service} />
      <ServiceProblems problemsData={service.problems} />
      <ServiceFeatures featuresData={service.features} />
      <ServiceProcess processData={service.process} />
      <ServiceFAQ faqs={service.faqs} />
      
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
