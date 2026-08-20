import React from "react";
import ContactForm from "./ContactForm";
import { Section } from "./ui/Section";

export default function Contact() {
  return (
    <Section spacing="loose" id="contact" hasTopBorder>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            LET&apos;S<br />TALK.
          </h2>
          <div className="w-24 h-1 bg-accent mb-12" />
          
          <p className="text-xl text-muted-foreground mb-16 max-w-md">
            Whether you need a cutting-edge web application, an autonomous AI agent, or a full system overhaul, we&apos;re ready to engineer the solution.
          </p>

          <div className="space-y-8 font-mono text-sm uppercase tracking-wider">
            <div>
              <span className="block text-muted-foreground mb-1">Email</span>
              <a href="mailto:cortexagents@gmail.com" className="text-foreground hover:text-accent transition-colors duration-150">cortexagents@gmail.com</a>
            </div>
            <div>
              <span className="block text-muted-foreground mb-1">WhatsApp</span>
              <a href="https://wa.me/923212322687" className="text-foreground hover:text-accent transition-colors duration-150">+92 321 232 2687</a>
            </div>
            <div>
              <span className="block text-muted-foreground mb-1">Location</span>
              <span className="text-foreground">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 md:p-12 border border-border">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
