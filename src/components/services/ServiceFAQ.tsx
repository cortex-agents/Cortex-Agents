"use client";
import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, StaggerGroup, StaggerItem } from '../ui/Animations';

export default function ServiceFAQ({ faqs }: { faqs: {q: string; a: string}[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Section spacing="standard" hasTopBorder>
      <FadeInUp className="mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">
          FAQ
        </h2>
      </FadeInUp>

      <StaggerGroup className="max-w-3xl border-t border-border">
        {faqs.map((faq, index) => (
          <StaggerItem key={index}>
            <FAQItem question={faq.q} answer={faq.a} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-accent transition-colors duration-150 ease-fast focus:outline-none"
      >
        <h3 className="font-display text-xl font-bold tracking-tight pr-8">{question}</h3>
        <span className="text-2xl font-mono shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-8" style={{ animation: 'fadeInDown 0.2s ease-out' }}>
          <p className="text-muted-foreground text-lg leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
