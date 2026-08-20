import React from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';
import CollaborateForm from './CollaborateForm';

const teamMembers = [
  { id: 1, name: "Okasha Nadeem", role: "Tech Lead / Full-Stack & AI Architect", ownership: "Architecture, technical decisions, backend + AI integration", image: "/okasha.webp" },
  { id: 2, name: "Syed Hamza Ali", role: "Agentic AI Lead", ownership: "Claude-based agents, agent workflows, tool use, orchestration", image: "/hamza_ali.webp" },
  { id: 3, name: "Muhammad Ubaid Raza", role: "Backend & Agentic AI Engineer", ownership: "APIs, databases, backend services, AI agents", image: "/ubaid.webp" },
  { id: 4, name: "Syed Muhammad Huzaifa", role: "Full-Stack & AI Engineer", ownership: "Product features end-to-end, integrations, AI-powered functionality", image: "/huzaifa.webp" },
  { id: 5, name: "Syed Ahsan Raza Bukhari", role: "Frontend Lead", ownership: "UI architecture, frontend quality, design implementation", image: "/ahsan.webp" }, 
  { id: 6, name: "Taha Qureshi", role: "AI & Frontend Engineer", ownership: "AI features + frontend integration, AI UX", image: "/taha.webp" },
];

export default function Team() {
  return (
    <Section spacing="standard" id="team" hasTopBorder>
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Team</h2>
        <div className="w-16 h-1 bg-accent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {teamMembers.map((member) => (
          <div key={member.id} className="group relative flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted border border-border">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
                sizes="(max-width: 768px) 100vw, 33vw" 
              />
            </div>
            
            {/* Details */}
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
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="mt-32 pt-16 border-t border-border grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
            Partner With Us
          </h2>
          <div className="w-16 h-1 bg-accent mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We operate through a highly specialized collaborative model. Our core team consists of exceptional talent brought together through strategic partnerships with other leading software houses and agencies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you represent a software house, agency, or enterprise looking to augment your capabilities with cutting-edge AI engineering and high-end web development, we want to hear from you.
          </p>
        </div>
        
        <div className="bg-muted/30 border border-border p-6 sm:p-8">
          <CollaborateForm />
        </div>
      </div>
    </Section>
  );
}
