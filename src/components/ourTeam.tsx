import React from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';
import CollaborateForm from './CollaborateForm';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from './ui/Animations';
import { LinkedInIcon } from './ui/BrandIcons';
import Link from 'next/link';

const teamMembers = [
  { id: 1, name: "Okasha Nadeem", role: "Tech Lead / Full-Stack & AI Architect", ownership: "Architecture, technical decisions, backend + AI integration", image: "/okasha.webp", linkedin: "https://www.linkedin.com/in/okasha-nadeem/" },
  { id: 2, name: "Syed Hamza Ali", role: "Agentic AI Lead", ownership: "Claude-based agents, agent workflows, tool use, orchestration", image: "/hamza_ali.webp", linkedin: "https://www.linkedin.com/in/hamza-ali-b72b582ab" },
  { id: 3, name: "Muhammad Ubaid Raza", role: "Backend & Agentic AI Engineer", ownership: "APIs, databases, backend services, AI agents", image: "/ubaid.webp", linkedin: "https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/" },
  { id: 4, name: "Syed Muhammad Huzaifa", role: "Full-Stack & AI Engineer", ownership: "Product features end-to-end, integrations, AI-powered functionality", image: "/huzaifa.webp", linkedin: "https://www.linkedin.com/in/syed-muhammad-huzaifa-0ba721351" },
  { id: 5, name: "Syed Ahsan Raza Bukhari", role: "UI/Visual Design Lead", ownership: "Web & UI design, design systems, visual quality, brand-consistent digital experiences", image: "/ahsan.webp", linkedin: "https://www.linkedin.com/in/syedahsanrazabukhari/" }, 
  { id: 6, name: "Taha Qureshi", role: "AI & Frontend Engineer", ownership: "AI features + frontend integration, AI UX", image: "/taha.webp", linkedin: "https://www.linkedin.com/in/taha-qureshi-37a5792a6" },
];

export default function Team() {
  return (
    <Section spacing="standard" id="team" hasTopBorder>
      <FadeInUp className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Team</h2>
        <AccentBar />
      </FadeInUp>

      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {teamMembers.map((member) => (
          <StaggerItem key={member.id}>
            <div className="group relative flex flex-col">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted border border-border">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-black text-white p-3 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 flex items-center justify-center"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <LinkedInIcon size={24} />
                </Link>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-1 group-hover:text-accent transition-colors duration-150 ease-fast">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.ownership}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Collaboration Section */}
      <div className="mt-16 md:mt-32 pt-10 md:pt-16 border-t border-border grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
        <FadeInUp>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
            Partner With Us
          </h2>
          <AccentBar className="w-16 h-1 bg-accent mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We operate through a highly specialized collaborative model. Our core team consists of exceptional talent brought together through strategic partnerships with other leading software houses and agencies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you represent a software house, agency, or enterprise looking to augment your capabilities with cutting-edge AI engineering and high-end web development, we want to hear from you.
          </p>
        </FadeInUp>
        
        <FadeInUp delay={0.1} className="bg-muted/30 border border-border p-6 sm:p-8">
          <CollaborateForm />
        </FadeInUp>
      </div>
    </Section>
  );
}
