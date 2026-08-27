import React from 'react';
import { Section } from './ui/Section';
import CollaborateForm from './CollaborateForm';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from './ui/Animations';
import TeamMemberCard from './TeamMemberCard';
import { teamData } from '@/lib/team-data';

export default function Team() {
  return (
    <Section spacing="standard" id="team" hasTopBorder>
      <FadeInUp className="mb-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Team</h2>
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
