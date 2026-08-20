import React from "react";
import Link from "next/link";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from "./ui/Animations";

const servicesData = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Next.js architecture engineered for sub-second load times and massive scale.",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Strategic interface design that dictates user behavior and drives conversion.",
  },
  {
    title: "AI Chatbots",
    slug: "ai-chatbots",
    description: "Automated support layers that capture leads, qualify intent, and close deals at 3 AM.",
  },
  {
    title: "AI Agents",
    slug: "ai-agents",
    description: "Autonomous systems that handle data, routing, and logic without human intervention.",
  }
];

export default function Services() {
  return (
    <Section spacing="standard" id="services">
      <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">CAPABILITIES</h2>
          <AccentBar />
        </div>
        <Button variant="ghost" href="/services">
          View all services
        </Button>
      </FadeInUp>

      <StaggerGroup className="flex flex-col border-t border-border">
        {servicesData.map((service, index) => (
          <StaggerItem key={service.slug}>
            <div 
              className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-border py-8 hover:bg-muted/50 transition-colors duration-150 ease-fast"
            >
              {/* Number */}
              <div className="hidden md:block w-12 text-sm font-mono text-muted-foreground">
                0{index + 1}
              </div>
              
              {/* Title */}
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors duration-150 ease-fast">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <p className="text-muted-foreground text-base">
                  {service.description}
                </p>
              </div>
              
              {/* Action */}
              <div className="md:w-auto flex justify-start md:justify-end">
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center min-h-[44px] group-hover:text-accent transition-colors duration-150 ease-fast"
                >
                  Explore <span className="ml-2 inline-block transition-transform duration-150 ease-fast group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

