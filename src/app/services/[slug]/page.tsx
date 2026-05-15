"use client";

import { notFound } from "next/navigation";
import { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

// Inline SVGs for minimal hydration
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = use(params);
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ["hero", "problems", "features", "process", "faq", "cta"];

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Overview" },
    { id: "problems", label: "Problems" },
    { id: "features", label: "Features" },
    { id: "process", label: "Process" },
    { id: "faq", label: "FAQ" },
    { id: "cta", label: "Get Started" },
  ];

  return (
    <div ref={pageRef} className="relative min-h-screen bg-[#02040a] text-white overflow-hidden">
      {/* Floating Orbs - CSS Pulse */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Sticky Navigation */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-sky-400/10 text-white border-l-2 border-sky-400"
                    : "text-slate-300 hover:text-white hover:bg-sky-400/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={(el) => { if (el) sectionsRef.current["hero"] = el; }}
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="absolute inset-0 z-[-5]" style={{ backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="animate-fade-in-up"
            style={{
              transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 backdrop-blur-sm mb-8">
              <SparklesIcon />
              <span className="text-sm text-slate-200 font-medium">{service.hero.badge}</span>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">{service.hero.tagline}</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">{service.hero.title}</h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">{service.hero.subtitle}</p>
            <p className="text-lg text-slate-300 leading-relaxed mb-12">{service.hero.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={service.cta.primaryLink} className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                {service.cta.primaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section ref={(el) => { if (el) sectionsRef.current["problems"] = el; }} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.problems.heading}</h2>
            <p className="text-xl text-slate-300">{service.problems.subheading}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.problems.problems.map((problem, index) => (
              <div key={index} className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 transition-all duration-300 hover:border-sky-400/40 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-slate-200 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={(el) => { if (el) sectionsRef.current["cta"] = el; }} className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#02040a]/90 to-[#0a0f1d]/90 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-12 text-center overflow-hidden animate-fade-in">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.cta.heading}</h2>
              <p className="text-xl text-slate-200 mb-8">{service.cta.subheading}</p>
              <Link href={service.cta.primaryLink} className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
                {service.cta.primaryCTA}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
