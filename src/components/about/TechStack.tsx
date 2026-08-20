import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, AccentBar } from '../ui/Animations';

const row1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Prisma", "Supabase", "Vercel", "AWS", "Docker", "Figma", "Three.js", "WebGL"];
const row2 = ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Hugging Face", "AgentKit", "Python", "FastAPI", "PyTorch", "LangGraph", "RAG Systems"];

// Duplicate items to ensure smooth infinite scrolling
const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

export default function TechStack() {
  return (
    <Section spacing="standard" hasTopBorder hasBottomBorder className="overflow-hidden">
      <FadeInUp className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          Tech Stack
        </h2>
        <AccentBar className="w-16 h-1 bg-accent mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl">
          We build with modern, industry-proven technologies—the same tools trusted by the world&apos;s top companies.
        </p>
      </FadeInUp>


      <div 
        className="relative flex flex-col gap-6 md:gap-8 w-full opacity-85 hover:opacity-100 transition-opacity duration-500"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        
        {/* Row 1: Moving Left */}
        <div className="flex w-max animate-marquee">
          {marqueeRow1.map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-transparent stroke-text uppercase tracking-tighter hover:text-foreground transition-colors duration-300 cursor-default">
                {tech}
              </span>
              <span className="text-accent text-3xl md:text-4xl mx-6 md:mx-8">*</span>
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex w-max animate-marquee-reverse">
          {marqueeRow2.map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-transparent stroke-text uppercase tracking-tighter hover:text-foreground transition-colors duration-300 cursor-default">
                {tech}
              </span>
              <span className="text-accent text-3xl md:text-4xl mx-6 md:mx-8">*</span>
            </div>
          ))}
        </div>
        
      </div>
    </Section>
  );
}
