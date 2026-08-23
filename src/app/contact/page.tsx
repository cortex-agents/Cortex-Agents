import React from 'react';
import Contact from '@/components/Contact';
import { OG_BASE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Cortex Agents. Start your project, ask about our AI services, or schedule a free consultation.',
  alternates: { canonical: '/contact' },
  openGraph: {
    ...OG_BASE,
    title: 'Contact | Cortex Agents',
    description: 'Get in touch with Cortex Agents. Start your project, ask about our AI services, or schedule a free consultation.',
    url: '/contact',
  }
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24 pb-20">
      <Contact />
    </main>
  );
}
