import React from 'react';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Cortex Agents. Start your project, ask about our AI services, or schedule a free consultation.',
  openGraph: {
    title: 'Contact | Cortex Agents',
    description: 'Get in touch with Cortex Agents. Start your project, ask about our AI services, or schedule a free consultation.',
    url: 'https://cortexagents.com/contact',
  }
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24 pb-20">
      <Contact />
    </main>
  );
}
