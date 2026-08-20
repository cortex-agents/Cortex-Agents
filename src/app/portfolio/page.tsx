import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import products from '@/components/data/products';
import { Product } from '@/components/data/products_types';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore our complete portfolio featuring cutting-edge AI integrations, brutalist web designs, and high-performance applications.',
  openGraph: {
    title: 'Portfolio | Cortex Agents',
    description: 'Explore our complete portfolio featuring cutting-edge AI integrations, brutalist web designs, and high-performance applications.',
    url: 'https://cortexagents.com/portfolio',
  }
};

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Section spacing="loose" className="pt-32 pb-20">
        <div className="mb-20">
          <div className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              All Projects
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            OUR COMPLETE PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Explore all our projects featuring cutting-edge technologies and editorial design.
          </p>
        </div>

        {/* Perfect grid for portfolio items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8 lg:gap-x-12">
          {products.map((project: Product) => {
            return (
              <div 
                key={project.id}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted border border-border mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-150 ease-fast">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="shrink-0 w-12 h-12 flex items-center justify-center border border-border hover:bg-foreground hover:text-background transition-colors duration-150 ease-fast"
                  >
                    <span className="transform -rotate-45 text-xl">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Back to Home CTA */}
        <div className="mt-32 pt-16 border-t border-border flex justify-center">
          <Button variant="ghost" href="/">
            ← Back to Home
          </Button>
        </div>
      </Section>
    </main>
  );
}
