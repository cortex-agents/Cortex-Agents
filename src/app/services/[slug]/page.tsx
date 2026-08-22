import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
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

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: service.hero.title,
    description: service.hero.heroDescription?.slice(0, 160),
    openGraph: {
      title: `${service.hero.title} | Cortex Agents`,
      description: service.hero.heroDescription?.slice(0, 160),
      url: `https://cortexagents.com/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://cortexagents.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground pb-20">
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

      {/* Back to Home button */}
      <div className="flex items-center justify-center mt-16 mb-20">
        <Link href="/" className="inline-flex items-center space-x-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors duration-150">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
