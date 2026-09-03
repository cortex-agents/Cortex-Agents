import React from 'react';
import { Section } from './ui/Section';
import CollaborateForm from './CollaborateForm';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from './ui/Animations';
import TeamMemberCard from './TeamMemberCard';
import { teamData, extendedTeamData } from '@/lib/team-data';

export default function Team() {
  return (
    <Section spacing="standard" id="team" hasTopBorder>
      <FadeInUp className="mb-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Leadership & Co-Founders</h2>
        <AccentBar />
      </FadeInUp>

      <FadeInUp delay={0.1} className="mb-16">
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
          Select a portrait to read the full profile
        </p>
      </FadeInUp>

      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {teamData.map((member) => (
          <StaggerItem key={member.id}>
            <TeamMemberCard member={member} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Global Network Section */}
      <div className="mt-24 pt-16 border-t border-border">
        <FadeInUp className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">Global Engineering Network</h2>
          <AccentBar className="w-12 h-1 bg-accent mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Beyond our core leadership, Cortex Agents is powered by a globally distributed network of elite engineers, designers, and AI researchers. Here are just a few of the brilliant minds driving our projects.
          </p>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {extendedTeamData.map((member) => (
            <StaggerItem key={member.id} className="p-6 bg-muted/20 border border-border">
              <h3 className="font-display text-xl font-bold tracking-tight mb-2 uppercase">{member.name}</h3>
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

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
