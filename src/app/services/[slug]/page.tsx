"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import {
  Zap, Smartphone, Palette, Search, Code, Shield,
  Clock, Filter, Calendar, Globe, Database, Link as LinkIcon,
  Mail, FileText, BarChart, GitBranch, Plug,
  Layout, Pen, RefreshCw, Users, Sparkles,
  MapPin, Server, Activity, TrendingUp, Bot,
  LucideIcon
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

// Icon mapping
const iconMap: { [key: string]: LucideIcon } = {
  Zap, Smartphone, Palette, Search, Code, Shield,
  Clock, Filter, Calendar, Globe, Database, Link: LinkIcon,
  Mail, FileText, BarChart, GitBranch, Plug,
  Layout, Pen, RefreshCw, Users, Sparkles,
  MapPin, Server, Activity, TrendingUp
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

    window.addEventListener("scroll", handleScroll);
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

    window.addEventListener('mousemove', handleMouseMove);
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
    <div ref={pageRef} className="relative min-h-screen bg-[#02040a]">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `
      }} />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '1s', animation: 'pulse-glow 4s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" style={{ animationDelay: '2s', animation: 'pulse-glow 5s ease-in-out infinite' }} />

      {/* Sticky Navigation - Desktop Only */}
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

          {/* Progress Indicator */}
          <div className="mt-4 pt-4 border-t border-sky-400/20">
            <div className="h-32 w-1 bg-sky-400/20 rounded-full relative">
              <motion.div
                className="absolute top-0 left-0 w-full bg-sky-400 rounded-full"
                style={{
                  height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={(el) => { sectionsRef.current["hero"] = el; }}
        className="relative min-h-screen flex items-center justify-center px-6 py-32"
      >
        {/* Aurora Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-cyan-400/5 to-sky-400/10 animate-pulse" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 z-[-5]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Particle Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/60 rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-sm text-slate-200 font-medium">{service.hero.badge}</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-4"
            >
              {service.hero.tagline}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              {service.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-200 mb-8"
            >
              {service.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-slate-300 leading-relaxed mb-12"
            >
              {service.hero.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={service.cta.primaryLink}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{service.cta.primaryCTA}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ width: '200%' }}
                />
              </Link>
              <Link
                href={service.cta.secondaryLink}
                className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-sky-400/40 hover:border-sky-400 text-slate-300 hover:text-white text-lg font-semibold rounded-full transition-all duration-300"
              >
                {service.cta.secondaryCTA}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Floating AI Agent Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] hidden lg:block"
            style={{
              transform: `translateX(${mousePosition.x * -0.5}px) translateY(${mousePosition.y * -0.5}px)`,
            }}
          >
            {/* AI Processing Card */}
            <motion.div
              className="absolute top-10 left-10 w-48 h-48 bg-[#02040a]/90 rounded-2xl backdrop-blur-sm border border-sky-400/40 p-6 flex flex-col justify-between"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">AI Agent</div>
                  <div className="text-slate-300 text-sm">Processing</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-sky-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Data Analysis Card */}
            <motion.div
              className="absolute top-10 right-10 w-40 h-40 bg-[#02040a]/90 rounded-2xl backdrop-blur-sm border border-cyan-400/40 p-4 flex flex-col items-center justify-center"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BarChart className="w-16 h-16 text-cyan-400 mb-2" />
              <div className="text-white font-semibold text-center text-sm">Data Analysis</div>
              <div className="text-slate-300 text-xs text-center">Real-time</div>
            </motion.div>

            {/* Automation Card */}
            <motion.div
              className="absolute bottom-10 left-10 w-56 h-32 bg-[#02040a]/90 rounded-2xl backdrop-blur-sm border border-sky-400/40 p-4"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-sky-400" />
                <div className="text-white font-semibold text-sm">Automation Active</div>
              </div>
              <div className="space-y-2">
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-3 bg-sky-400/30 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              className="absolute bottom-10 right-10 w-44 h-44 bg-gradient-to-br from-[#02040a]/90 to-[#0a0f1d]/90 rounded-2xl backdrop-blur-sm border border-teal-400/40 p-4 flex flex-col items-center justify-center"
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 4.5,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <TrendingUp className="w-12 h-12 text-teal-400 mb-2" />
              <div className="text-white font-semibold text-center mb-2">Performance</div>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-4 w-1 h-8 bg-teal-400"
                  style={{ left: `${30 + i * 20}%` }}
                  animate={{
                    scaleY: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="30%" y1="30%" x2="70%" y2="30%"
                stroke="rgba(56, 189, 248, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section
        ref={(el) => { sectionsRef.current["problems"] = el; }}
        className="relative py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{
              transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.problems.heading}
            </h2>
            {service.problems.subheading && (
              <p className="text-xl text-slate-300">{service.problems.subheading}</p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.problems.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, z: 50 }}
                style={{
                  transform: `translateZ(${20 + index * 10}px) translateX(${mousePosition.x * (index % 2 === 0 ? 0.5 : -0.5)}px) translateY(${mousePosition.y * (index % 2 === 0 ? 0.5 : -0.5)}px)`,
                  transformStyle: 'preserve-3d',
                }}
                className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300 group"
              >
                <p className="text-slate-200 leading-relaxed">{problem}</p>
                {/* Decorative glow */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-sky-400/10 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={(el) => { sectionsRef.current["features"] = el; }}
        className="relative py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{
              transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.features.heading}
            </h2>
            {service.features.description && (
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {service.features.description}
              </p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Code;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, z: 50 }}
                  style={{
                    transform: `translateZ(${20 + index * 10}px) translateX(${mousePosition.x * (index % 2 === 0 ? 0.5 : -0.5)}px) translateY(${mousePosition.y * (index % 2 === 0 ? 0.5 : -0.5)}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300 group relative"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-0.5 mb-6"
                  >
                    <div className="w-full h-full bg-[#02040a] rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-sky-400" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>

                  {/* Decorative glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-sky-400 to-sky-600 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={(el) => { sectionsRef.current["process"] = el; }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{
              transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.process.heading}
            </h2>
            <p className="text-xl text-slate-300">{service.process.description}</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-400/30" />

            {service.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
                style={{
                  transform: `translateZ(${20 + index * 10}px) translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
                  transformStyle: 'preserve-3d',
                }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-sky-400/50"
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300 group relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <span className="text-sm text-slate-300 bg-sky-400/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>

                  {/* Decorative glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-sky-400 to-sky-600 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={(el) => { sectionsRef.current["faq"] = el; }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{
              transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">Everything you need to know</p>
          </motion.div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  transform: `translateZ(${20 + index * 5}px) translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
                  transformStyle: 'preserve-3d',
                }}
                className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300 group relative"
              >
                <summary className="text-xl font-bold text-white cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg
                    className="w-6 h-6 text-sky-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-300 leading-relaxed">{faq.a}</p>

                {/* Decorative glow */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-sky-400 to-sky-600 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => { sectionsRef.current["cta"] = el; }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            style={{
              transform: `translateZ(50px) translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
              transformStyle: 'preserve-3d',
            }}
            className="relative bg-gradient-to-br from-[#02040a]/90 to-[#0a0f1d]/90 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-cyan-400/5 to-sky-400/5 animate-pulse" />

            {/* Floating particles in CTA */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-sky-400/60 rounded-full pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.cta.heading}
              </h2>
              <p className="text-xl text-slate-200 mb-8">{service.cta.subheading}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href={service.cta.primaryLink}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">{service.cta.primaryCTA}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ width: '200%' }}
                  />
                </Link>
                <Link
                  href={service.cta.secondaryLink}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-sky-400/40 hover:border-sky-400 text-slate-300 hover:text-white text-lg font-semibold rounded-full transition-all duration-300"
                >
                  {service.cta.secondaryCTA}
                </Link>
              </div>

              <p className="text-sm text-slate-300">{service.cta.note}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
