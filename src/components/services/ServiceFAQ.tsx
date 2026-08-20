"use client";
import React, { useState } from 'react';
import { Section } from '../ui/Section';

export default function ServiceFAQ({ faqs }: { faqs: {q: string; a: string}[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Section spacing="standard" hasTopBorder>
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">
          FAQ
        </h2>
      </div>

      <div className="max-w-3xl border-t border-border">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
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
        <div className="pb-6 pr-8 animate-fade-in-down" style={{ animationDuration: '0.2s' }}>
          <p className="text-muted-foreground text-lg leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
