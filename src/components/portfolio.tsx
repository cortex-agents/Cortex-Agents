import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import products from './data/products';
import { Product } from './data/products_types';

const displayedProjects = products.slice(0, 4); // Show an even number for grid

export default function Portfolio() {
  return (
    <Section spacing="standard" id="portfolio" hasTopBorder>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Selected Work</h2>
          <div className="w-16 h-1 bg-accent" />
        </div>
        <Button variant="ghost" href="/portfolio">
          View full archive
        </Button>
      </div>

      {/* Perfect grid for portfolio items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
        {displayedProjects.map((project: Product) => (
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
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors duration-150 ease-fast">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={project.link}
                  target="_blank"
                  className="shrink-0 w-10 h-10 flex items-center justify-center border border-border hover:bg-foreground hover:text-background transition-colors duration-150 ease-fast"
                >
                  <span className="transform -rotate-45">→</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
