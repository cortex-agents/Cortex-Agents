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
    <main className="bg-background text-foreground min-h-screen pt-32 pb-20">
      <Contact />
      
      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="relative aspect-video lg:aspect-[21/9] w-full bg-muted border border-border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7100103!2d66.59499374999999!3d24.8614622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="grayscale hover:grayscale-0 transition-all duration-500" 
          />
        </div>
      </section>
    </main>
  );
}
