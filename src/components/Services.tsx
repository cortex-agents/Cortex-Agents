"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Code, Layers, MessageSquare, Bot, TrendingUp, Cloud } from "lucide-react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

function AuroraBackground({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col h-full items-center justify-center transition-bg ${className}`}
      style={{ background: '#02040a' }}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            [--silver-gradient:repeating-linear-gradient(100deg,#38bdf8_0%,#38bdf8_7%,transparent_10%,transparent_12%,#38bdf8_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#02040a_0%,#02040a_7%,transparent_10%,transparent_12%,#02040a_16%)]
            [--aurora:repeating-linear-gradient(100deg,#38bdf8_10%,#0ea5e9_15%,#06b6d4_20%,#14b8a6_25%,#38bdf8_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
            ${showRadialGradient ? '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]' : ''}
          `}
        ></div>
      </div>
      {children}
    </div>
  );
}

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Custom, fast, and stunning websites built with Next.js — designed to convert visitors into clients.",
      icon: Code,
      iconColor: "text-sky-400", // Sky Blue - Development
      gradient: "from-sky-400 to-sky-600",
      depth: 20,
      label: "Most Popular",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Beautiful, intuitive designs that users love and businesses profit from — built in Figma.",
      icon: Layers,
      iconColor: "text-cyan-400", // Cyan - Creative/Design
      gradient: "from-cyan-400 to-cyan-600",
      depth: 40,
      label: null,
    },
    {
      title: "AI Chatbots",
      slug: "ai-chatbots",
      description: "Intelligent chatbots that answer, qualify, and convert your customers — 24/7, automatically.",
      icon: MessageSquare,
      iconColor: "text-sky-400", // Electric Cyan - AI Chatbots
      gradient: "from-sky-400 to-cyan-400",
      depth: 30,
      label: "AI Powered",
    },
    {
      title: "AI Agents & Automation",
      slug: "ai-agents",
      description: "Intelligent AI agents that think, decide, and act — automating complex business workflows end to end.",
      icon: Bot,
      iconColor: "text-sky-400", // Electric Cyan - AI Agents
      gradient: "from-sky-400 to-sky-600",
      depth: 50,
      label: "Cutting Edge",
    },
    {
      title: "SEO Optimization",
      slug: "seo-optimization",
      description: "Rank higher on Google, get found by the right people, and turn organic traffic into real revenue.",
      icon: TrendingUp,
      iconColor: "text-teal-400", // Teal - Data/Analytics
      gradient: "from-teal-400 to-teal-600",
      depth: 25,
      label: null,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Scalable, secure cloud infrastructure that grows with your business — deployed and managed by experts.",
      icon: Cloud,
      iconColor: "text-sky-400", // Sky Blue - Technical/Cloud
      gradient: "from-sky-400 to-cyan-400",
      depth: 35,
      label: null,
    },
  ];

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden" id="services">
      <AuroraBackground showRadialGradient={true}>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 z-[-10]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at center, #020008, transparent)',
          }}
        />

        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 20 + 50}% ${mousePosition.y * 20 + 50}%, rgba(56, 189, 248, 0.15), transparent 40%)`,
          }}
        />

        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-slate-300">
                Comprehensive AI-powered solutions to transform your business
              </p>
            </motion.div>

            {/* Floating Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  style={{
                    transform: `translateZ(${service.depth}px) translateX(${mousePosition.x * (index % 2 === 0 ? 1 : -1)}px) translateY(${mousePosition.y * (index % 2 === 0 ? 1 : -1)}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative group"
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="relative bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 hover:scale-105 cursor-pointer">
                      {/* Badge Label */}
                      {service.label && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 backdrop-blur-sm">
                          <span className="text-xs font-semibold text-white">{service.label}</span>
                        </div>
                      )}

                      {/* Icon with 360° rotation on hover */}
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full bg-[#02040a] rounded-xl flex items-center justify-center">
                          <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                      {/* Description */}
                      <p className="leading-relaxed mb-6 text-slate-400">{service.description}</p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className={`bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                          Learn More →
                        </span>
                      </div>

                      {/* Decorative glow */}
                      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-20"
            >
              <p className="mb-6 text-lg text-slate-400">
                {"Don't see what you're looking for?"}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Custom Solution</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ width: '200%' }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Services;
