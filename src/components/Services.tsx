import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuroraBackground from './ui/AuroraBackground';

const CodeIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const LayersIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const MessageSquareIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const BotIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const TrendingUpIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const CloudIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.5 19A5.5 5.5 0 0 1 12 24a5.5 5.5 0 0 1-5.5-5.5c0-.46.06-.9.17-1.31A7 7 0 0 1 13 3a7 7 0 0 1 6.33 10.69c.11.41.17.85.17 1.31a5.5 5.5 0 0 1-2 4Z"/></svg>;

const servicesData = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Custom, fast, and stunning websites built with Next.js — designed to convert visitors into clients.",
    icon: CodeIcon,
    iconColor: "text-sky-400",
    gradient: "from-sky-400 to-sky-600",
    image: "/services/websites.jpeg",
    label: "Most Popular",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Beautiful, intuitive designs that users love and businesses profit from — built in Figma.",
    icon: LayersIcon,
    iconColor: "text-cyan-400",
    gradient: "from-cyan-400 to-cyan-600",
    image: "/services/ui-ux.jpeg",
    label: null,
  },
  {
    title: "AI Chatbots",
    slug: "ai-chatbots",
    description: "Intelligent chatbots that answer, qualify, and convert your customers — 24/7, automatically.",
    icon: MessageSquareIcon,
    iconColor: "text-sky-400",
    gradient: "from-sky-400 to-cyan-400",
    image: "/services/chatbot.jpeg",
    label: "AI Powered",
  },
  {
    title: "AI Agents & Automation",
    slug: "ai-agents",
    description: "Intelligent AI agents that think, decide, and act — automating complex business workflows end to end.",
    icon: BotIcon,
    iconColor: "text-sky-400",
    gradient: "from-sky-400 to-sky-600",
    image: "/services/AIAgents.jpeg",
    label: "Cutting Edge",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Rank higher on Google, get found by the right people, and turn organic traffic into real revenue.",
    icon: TrendingUpIcon,
    iconColor: "text-teal-400",
    gradient: "from-teal-400 to-teal-600",
    image: "/services/SEO.jpeg",
    label: null,
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable, secure cloud infrastructure that grows with your business — deployed and managed by experts.",
    icon: CloudIcon,
    iconColor: "text-sky-400",
    gradient: "from-sky-400 to-cyan-400",
    image: "/services/Clouds.jpeg",
    label: null,
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" id="services">
      <AuroraBackground showRadialGradient={true}>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 z-[-10]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at center, #020008, transparent)',
          }}
        />

        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-7xl mx-auto w-full">
            {/* Mouse glow effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.08), transparent 40%)`,
              }}
            />

            {/* Section Title */}
            <div
              className="text-center mb-20 animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
                <span className="text-sm text-[#38bdf8] font-medium tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-5">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                Comprehensive AI-powered solutions to transform your business
              </p>
            </div>

            {/* Services Grid — Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card group relative block animate-fade-in-up"
                  style={{
                    animationDelay: `${0.2 + index * 0.08}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden border border-[#38bdf8]/15 bg-[#02040a]/80 backdrop-blur-xl transition-all duration-500 hover:border-[#38bdf8]/40 hover:shadow-2xl hover:shadow-[#38bdf8]/10 hover:-translate-y-1">

                    {/* Service Image — Reveals on Hover */}
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        quality={70}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/70 to-[#02040a]/30 group-hover:from-[#02040a]/80 group-hover:via-[#02040a]/40 group-hover:to-transparent transition-all duration-700" />

                    {/* Top Bar — Terminal Style */}
                    <div className="relative z-10 flex items-center gap-2 px-5 py-3 border-b border-[#38bdf8]/10">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#38bdf8]/40" />
                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]/30" />
                        <div className="w-2 h-2 rounded-full bg-cyan-500/20" />
                      </div>
                      <span className="text-[10px] text-[#38bdf8]/40 font-mono tracking-wider ml-1">{service.slug}</span>
                      {service.label && (
                        <div className="ml-auto px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30">
                          <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider">{service.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} aria-hidden="true">
                        <div className="w-full h-full bg-[#02040a] rounded-[10px] flex items-center justify-center">
                          <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-5 group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Learn More */}
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className={`bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text group-hover:gap-3 transition-all duration-300`}>
                          Learn More
                        </span>
                        <svg className={`w-4 h-4 text-[#38bdf8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Glow */}
                    <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                    {/* Scan Line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent translate-y-[-100%] group-hover:animate-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div
              className="text-center mt-20 animate-fade-in-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
            >
              <p className="text-slate-500 text-base mb-6 font-medium">
                {"Don't see what you're looking for?"}
              </p>
              <Link
                href="/contact"
                aria-label="Get a custom solution"
                className="inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white font-semibold rounded-full shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden group text-[15px]"
              >
                <span className="relative z-10">Get Custom Solution</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
              </Link>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Services;
