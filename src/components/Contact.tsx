import React from "react";
import ContactForm from "./ContactForm";
import { Section } from "./ui/Section";
import { FadeInUp, AccentBar } from "./ui/Animations";

export default function Contact() {
  return (
    <Section spacing="loose" id="contact">
      <div className="mb-16 md:mb-24">
        <FadeInUp className="mb-6">
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            Contact Us
          </span>
        </FadeInUp>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
          LET&apos;S TALK.
        </h1>
        <AccentBar className="w-16 md:w-24 h-1 bg-accent" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: The Form */}
        <FadeInUp delay={0.1} className="lg:col-span-7 bg-muted/30 border border-border p-6 md:p-12 shadow-xl">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight">Send a Message</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </FadeInUp>
        
        {/* Right Side: Map & Info */}
        <FadeInUp delay={0.2} className="lg:col-span-5 flex flex-col gap-12">
          
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you need a high-scale Next.js platform, an autonomous AI workforce, or a complete digital overhaul, we are ready to engineer the outcome.
            </p>
            
            <div className="space-y-6 font-mono text-sm uppercase tracking-wider pt-6 border-t border-border">
              <div className="flex flex-col border-l-2 border-accent pl-4">
                <span className="text-muted-foreground mb-1 text-xs">Email</span>
                <a href="mailto:cortexagents@gmail.com" className="text-foreground font-bold hover:text-accent transition-colors duration-150 break-all">CORTEXAGENTS@GMAIL.COM</a>
              </div>
              <div className="flex flex-col border-l-2 border-accent pl-4">
                <span className="text-muted-foreground mb-1 text-xs">WhatsApp</span>
                <a href="https://wa.me/923212322687" className="text-foreground font-bold hover:text-accent transition-colors duration-150">+92 321 232 2687</a>
              </div>
              <div className="flex flex-col border-l-2 border-accent pl-4">
                <span className="text-muted-foreground mb-1 text-xs">Location</span>
                <span className="text-foreground font-bold">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="relative w-full aspect-square md:aspect-[4/3] border border-border bg-muted overflow-hidden group shadow-2xl">
            {/* Map Status Overlay */}
            <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-md border border-border px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Karachi, PK
            </div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7100103!2d66.59499374999999!3d24.8614622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="opacity-70 grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0,0,1)] absolute inset-0 z-0" 
            />
          </div>

        </FadeInUp>
        
      </div>
    </Section>
  );
}
