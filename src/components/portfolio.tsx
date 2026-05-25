"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from './data/products';
import { Product } from './data/products_types';
import FloatingShape from './ui/FloatingShape';

// Inline SVG for minimal hydration
const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 9"/><line x1="10" y1="14" x2="22" y2="3"/></svg>;

const displayedProjects = products.slice(0, 6);

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full text-white py-24 px-4 overflow-hidden" id="portfolio">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[15%] animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
           <FloatingShape width={600} height={140} rotate={12} />
        </div>
        <div className="absolute right-[-5%] top-[70%] animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
           <FloatingShape width={500} height={120} rotate={-15} />
        </div>
        <div className="absolute left-[5%] bottom-[10%] animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
           <FloatingShape width={300} height={80} rotate={-8} />
        </div>
        <div className="absolute right-[15%] top-[10%] animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
           <FloatingShape width={200} height={60} rotate={20} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDuration: '0.8s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
            <span className="text-sm text-[#38bdf8] font-medium tracking-wide">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">
              Our Portfolio
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our latest projects featuring cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: Product, index: number) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                className="group relative animate-fade-in-up h-full"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative z-10 h-full transition-transform duration-300 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isHovered
                      ? `rotateX(${(mousePosition.y - 50) * -0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`
                      : 'none',
                  }}
                >
                  {/* Card container */}
                  <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">

                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:w-full" style={{ transformOrigin: "left" }} />

                    {/* Image section */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
                        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/50 to-transparent" />
                    </div>

                    {/* Content section */}
                    <div className="relative p-6 space-y-4 flex flex-col flex-1" style={{ transform: "translateZ(30px)" }}>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-all duration-300">{project.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                          <span key={tag} className="text-xs px-3 py-1.5 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 rounded-full hover:bg-[#38bdf8]/20 transition-colors">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View Project: ${project.title}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#02040a] font-semibold rounded-lg shadow-lg transition-all duration-300">
                          <ExternalLinkIcon /> View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link href="/portfolio">
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">View All Projects</span>
              <span className="relative z-10">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} />
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </section>
  );
}
