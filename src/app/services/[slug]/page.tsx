"use client";

import { notFound } from "next/navigation";
import { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";

const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;

const serviceImages: Record<string, string> = {
  "web-development": "/services/websites.jpeg",
  "ui-ux-design": "/services/ui-ux.jpeg",
  "ai-chatbots": "/services/chatbot.jpeg",
  "ai-agents": "/services/AIAgents.jpeg",
  "seo-optimization": "/services/SEO.jpeg",
  "cloud-solutions": "/services/Clouds.jpeg",
};

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
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const serviceImage = serviceImages[resolvedParams.slug] || "/services/websites.jpeg";

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
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-hidden">

      {/* === UNIQUE ANIMATED BACKGROUND — Circuit Board Pattern === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Hexagonal Grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpolygon points='30,2 56,15 56,37 30,50 4,37 4,15' fill='none' stroke='%2338bdf8' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 52px',
        }} />
        {/* Radial Fade */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(56,189,248,0.15) 0%, transparent 60%)',
        }} />
        {/* Floating Orbs */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-sky-800/30 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-800/25 blur-[130px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[60%] w-[300px] h-[300px] rounded-full bg-sky-900/20 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Sticky Navigation */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-[#02040a]/90 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#38bdf8]/10 text-white border-l-2 border-[#38bdf8]"
                    : "text-slate-400 hover:text-white hover:bg-[#38bdf8]/5"
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
        className="relative min-h-screen flex items-center px-6 py-32"
      >
        {/* Mobile layout: Badge+Title → Image → Subtitle+Desc+Button */}
        <div className="lg:hidden max-w-7xl mx-auto w-full flex flex-col">

          {/* Part 1: Badge + Title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 backdrop-blur-sm mb-8">
              <SparklesIcon />
              <span className="text-sm text-[#38bdf8] font-medium">{service.hero.badge}</span>
            </div>
            <p className="text-lg md:text-xl text-[#38bdf8] mb-3 font-medium">{service.hero.tagline}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.hero.title}</span>
            </h1>
          </div>

          {/* Part 2: Image */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#38bdf8]/10 via-transparent to-[#0ea5e9]/10 rounded-[2rem] blur-2xl" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#38bdf8]/20 bg-[#02040a]/50">
                {/* Top Bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#38bdf8]/10 bg-[#02040a]/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] text-[#38bdf8]/50 font-mono tracking-[0.2em] uppercase">{service.slug}</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={serviceImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={85}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/50 via-transparent to-[#02040a]/20" />

                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#38bdf8]/40 rounded-tl-md" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#38bdf8]/25 rounded-tr-md" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#38bdf8]/25 rounded-bl-md" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#38bdf8]/40 rounded-br-md" />

                  {/* Scan Line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent animate-scan-line" />
                  </div>

                  {/* Status */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[10px] text-[#38bdf8]/70 font-mono tracking-wider">LIVE</span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-[#38bdf8]/10 bg-[#02040a]/60">
                  <span className="text-[10px] text-slate-500 font-mono">{service.title}</span>
                  <span className="text-[10px] text-[#38bdf8]/50 font-mono">cortex.agents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Subtitle + Desc + Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-slate-200 via-[#38bdf8]/80 to-slate-300 bg-clip-text text-transparent mb-6 font-medium">{service.hero.subtitle}</p>
            <p className="text-base text-slate-400 leading-relaxed mb-10">{service.hero.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
              <Link
                href={service.cta.primaryLink}
                className="inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white font-semibold rounded-full shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{service.cta.primaryCTA}</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
              </Link>
            </div>
          </div>

        </div>

        {/* Desktop layout: two columns (content left, image right) */}
        <div className="hidden lg:max-w-7xl lg:mx-auto lg:w-full lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left — Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 backdrop-blur-sm mb-8">
              <SparklesIcon />
              <span className="text-sm text-[#38bdf8] font-medium">{service.hero.badge}</span>
            </div>
            <p className="text-lg md:text-xl text-[#38bdf8] mb-3 font-medium">{service.hero.tagline}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-slate-200 via-[#38bdf8]/80 to-slate-300 bg-clip-text text-transparent mb-6 font-medium">{service.hero.subtitle}</p>
            <p className="text-base text-slate-400 leading-relaxed mb-10">{service.hero.heroDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={service.cta.primaryLink}
                className="inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white font-semibold rounded-full shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{service.cta.primaryCTA}</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
              </Link>
            </div>
          </div>

          {/* Right — Service Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#38bdf8]/10 via-transparent to-[#0ea5e9]/10 rounded-[2rem] blur-2xl" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#38bdf8]/20 bg-[#02040a]/50">
                {/* Top Bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#38bdf8]/10 bg-[#02040a]/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] text-[#38bdf8]/50 font-mono tracking-[0.2em] uppercase">{service.slug}</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={serviceImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    quality={85}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/50 via-transparent to-[#02040a]/20" />

                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#38bdf8]/40 rounded-tl-md" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#38bdf8]/25 rounded-tr-md" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#38bdf8]/25 rounded-bl-md" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#38bdf8]/40 rounded-br-md" />

                  {/* Scan Line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent animate-scan-line" />
                  </div>

                  {/* Status */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[10px] text-[#38bdf8]/70 font-mono tracking-wider">LIVE</span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-[#38bdf8]/10 bg-[#02040a]/60">
                  <span className="text-[10px] text-slate-500 font-mono">{service.title}</span>
                  <span className="text-[10px] text-[#38bdf8]/50 font-mono">cortex.agents</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problems Section */}
      <section ref={(el) => { if (el) sectionsRef.current["problems"] = el; }} className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.problems.heading}</span>
            </h2>
            {service.problems.subheading && <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent">{service.problems.subheading}</p>}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.problems.problems.map((problem, index) => (
              <div
                key={index}
                className="relative group bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl p-6 transition-all duration-300 hover:border-[#38bdf8]/30 hover:bg-[#02040a]/90 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/10 to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
                <p className="relative z-10 text-slate-300 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && (
        <section ref={(el) => { if (el) sectionsRef.current["features"] = el; }} className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.features.heading}</span>
              </h2>
              <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent max-w-2xl mx-auto">{service.features.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.features.map((feature, index) => (
                <div
                  key={index}
                  className="relative group bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl p-6 transition-all duration-300 hover:border-[#38bdf8]/30 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent group-hover:from-[#38bdf8] group-hover:via-[#0ea5e9] group-hover:to-[#38bdf8] transition-all duration-300">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.process && (
        <section ref={(el) => { if (el) sectionsRef.current["process"] = el; }} className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.process.heading}</span>
              </h2>
              <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent">{service.process.description}</p>
            </div>
            <div className="space-y-6">
              {service.process.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group flex items-start gap-6 bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl p-6 transition-all duration-300 hover:border-[#38bdf8]/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
                  <div className="relative z-10 flex items-start gap-6 w-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-0.5">
                      <div className="w-full h-full bg-[#02040a] rounded-[10px] flex items-center justify-center">
                        <span className="text-xl font-black text-[#38bdf8]">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent group-hover:from-[#38bdf8] group-hover:via-[#0ea5e9] group-hover:to-[#38bdf8] transition-all duration-300">{step.title}</h3>
                        <span className="text-xs text-[#38bdf8]/60 font-mono bg-[#38bdf8]/5 px-3 py-1 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section ref={(el) => { if (el) sectionsRef.current["faq"] = el; }} className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">Frequently Asked Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section ref={(el) => { if (el) sectionsRef.current["cta"] = el; }} className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#02040a]/90 to-[#0a0f1d]/90 backdrop-blur-xl border border-[#38bdf8]/20 rounded-3xl p-12 text-center overflow-hidden animate-fade-in">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#38bdf8]/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">{service.cta.heading}</span>
              </h2>
              <p className="text-xl bg-gradient-to-r from-slate-200 via-[#38bdf8]/80 to-slate-300 bg-clip-text text-transparent mb-8 font-medium">{service.cta.subheading}</p>
              <Link
                href={service.cta.primaryLink}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white text-lg font-semibold rounded-full shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{service.cta.primaryCTA}</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#38bdf8]/30 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold pr-4 bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent">{question}</h3>
        <svg
          className={`w-5 h-5 text-[#38bdf8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="relative z-10 px-6 pb-6">
          <p className="text-slate-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
