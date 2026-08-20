import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceProblems from "@/components/services/ServiceProblems";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";


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
      <ServiceCTA ctaData={service.cta} />
    </main>
  );
}
