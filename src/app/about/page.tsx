import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import Story from '@/components/about/Story';
import Values from '@/components/about/Values';
import Stats from '@/components/about/Stats';
import Process from '@/components/about/Process';
import TechStack from '@/components/about/TechStack';
import Team from '@/components/ourTeam';

export const metadata = {
  title: 'About',
  description: 'Learn about the specialized team of engineers behind Cortex Agents. We build high-performance software, AI agents, and brutalist web experiences.',
  openGraph: {
    title: 'About | Cortex Agents',
    description: 'Learn about the specialized team of engineers behind Cortex Agents. We build high-performance software, AI agents, and brutalist web experiences.',
    url: 'https://cortexagents.com/about',
  }
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
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
