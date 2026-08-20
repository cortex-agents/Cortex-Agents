import React from 'react';
import { Section } from '../ui/Section';

const processSteps = [
  { num: "01", title: "Free Consultation", desc: "We start with a no-pressure call to understand your business, your goals, and what you actually need. We ask the right questions — and we listen." },
  { num: "02", title: "Clear Proposal", desc: "You receive a detailed proposal — scope of work, timeline, cost, and deliverables. Everything in writing. No vague promises, no surprises later." },
  { num: "03", title: "Design First", desc: "Before writing a single line of code, we design and show you exactly how the final product will look. You request changes freely — nothing is built until you approve." },
  { num: "04", title: "Build & Update", desc: "We build your project and share progress updates regularly. You always know where things stand — no radio silence, no mystery." },
  { num: "05", title: "Review & Launch", desc: "You review the final product. We revise until you are 100% satisfied. Then we launch, hand over everything, and make sure you are set up for success." },
  { num: "06", title: "Ongoing Support", desc: "We do not disappear after launch. We offer post-launch support, answer your questions, and are available when you need us." }
];

export default function Process() {
  return (
    <Section spacing="standard" hasTopBorder>
      <div className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          How We Work
        </h2>
        <div className="w-16 h-1 bg-accent mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl">
          A simple, transparent process — so you always know what is happening and what comes next.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {processSteps.map((step, i) => (
          <div key={i} className="flex flex-col group">
            <div className="mb-6 pb-6 border-b border-border">
              <span className="text-4xl font-mono tracking-tighter text-muted-foreground group-hover:text-accent transition-colors duration-150 ease-fast">
                {step.num}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-4">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
