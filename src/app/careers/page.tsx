import React from 'react';
import fs from 'fs';
import path from 'path';
import { Section } from '@/components/ui/Section';
import CareersClient from '@/components/careers/CareersClient';
import { FadeInUp, AccentBar } from '@/components/ui/Animations';
import { OG_BASE } from '@/lib/site';

export const metadata = {
  title: 'Careers',
  description: 'Join Cortex Agents. We are always looking for elite engineers, designers, and AI specialists to build the future.',
  alternates: { canonical: '/careers' },
  openGraph: {
    ...OG_BASE,
    title: 'Careers | Cortex Agents',
    description: 'Join Cortex Agents. We are always looking for elite engineers, designers, and AI specialists to build the future.',
    url: '/careers',
  }
};

interface Job {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
}

function getJobs(): Job[] {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'jobs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading jobs:', error);
    return [];
  }
}

export default function CareersPage() {
  const jobs = getJobs();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Section spacing="loose" className="pt-32 pb-20">
        <div className="mb-20">
          <FadeInUp className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              The Engineering Unit
            </span>
          </FadeInUp>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            JOIN THE UNIT
          </h1>
          <FadeInUp delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We don&apos;t hire employees. We recruit operators. If you write fast code, build scalable systems, and despise bureaucracy, you belong here.
            </p>
          </FadeInUp>
          <AccentBar className="w-16 h-1 bg-accent mt-10" />
        </div>

        <CareersClient jobs={jobs} />
      </Section>
    </main>
  );
}
