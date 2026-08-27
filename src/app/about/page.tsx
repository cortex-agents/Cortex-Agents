import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import Story from '@/components/about/Story';
import Values from '@/components/about/Values';
import Stats from '@/components/about/Stats';
import Process from '@/components/about/Process';
import TechStack from '@/components/about/TechStack';
import Team from '@/components/ourTeam';
import { JsonLd } from '@/components/ui/JsonLd';
import { aboutPageSchema, personSchema } from '@/lib/schema';
import { teamData } from '@/lib/team-data';
import { OG_BASE } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: 'Learn about the specialized team of engineers behind Cortex Agents. We build high-performance software, AI agents, and brutalist web experiences.',
  alternates: { canonical: '/about' },
  openGraph: {
    ...OG_BASE,
    title: 'About | Cortex Agents',
    description: 'Learn about the specialized team of engineers behind Cortex Agents. We build high-performance software, AI agents, and brutalist web experiences.',
    url: '/about',
  }
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Declares this page as the company's About page, and each team member as
          a Person entity employed by the Organization. The anchor each Person.url
          points at (`/about#<slug>`) is rendered by the team card itself. */}
      <JsonLd data={aboutPageSchema()} />
      {teamData.map((member) => (
        <JsonLd key={member.slug} data={personSchema(member)} />
      ))}
      <AboutHero />
      <Story />
      <Values />
      <Stats />
      <Process />
      <Team />
      <TechStack />
    </main>
  );
}
