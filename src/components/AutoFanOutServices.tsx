"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Icon Components
const CodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const MessageSquareIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const BotIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>
);

const servicesData = [
  {
    title: "High-Performance Web Solutions",
    description: "Crafting digital experiences that command attention. We build high-conversion, visually immersive websites that turn visitors into loyal customers instantly.",
    icon: CodeIcon,
    gradient: "from-sky-900/30",
    image: "/hero_images/websites.webp",
    features: ["Conversion-Focused Design", "Seamless User Journeys", "Future-Proof Architecture"],
    tags: ["Strategy", "Design", "Development"]
  },
  {
    title: "AI-Powered Customer Engagement",
    description: "Never lose a lead again. Our intelligent automated systems provide instant, human-like responses to engage and convert your visitors at any hour.",
    icon: MessageSquareIcon,
    gradient: "from-teal-900/30",
    image: "/hero_images/chatbot.webp",
    features: ["Instant Lead Qualification", "24/7 Sales Support", "Personalized Interactions"],
    tags: ["Automation", "Engagement", "Efficiency"]
  },
  {
    title: "Autonomous Intelligence Agents",
    description: "Supercharge your operations with digital employees. Our AI agents handle complex workflows, analyze data, and execute tasks, freeing your team for high-level strategy.",
    icon: BotIcon,
    gradient: "from-indigo-900/30",
    image: "/hero_images/AIAgents.webp",
    features: ["Smart Workflow Automation", "Real-time Data Analysis", "Scalable Operations"],
    tags: ["Autonomous", "Intelligence", "Scalability"]
  },
];

const AutoFanOutServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Preload all images on mount
  useEffect(() => {
    const imagesToLoad = servicesData.map(s => s.image);
    const loaded = new Set<string>();

    imagesToLoad.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        loaded.add(src);
        setLoadedImages(new Set(loaded));
      };
      img.onerror = () => {
        loaded.add(src);
        setLoadedImages(new Set(loaded));
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center [perspective:1000px]">
      {/* Hidden preloaded images */}
      {servicesData.map((service) => (
        <Image
          key={`preload-${service.image}`}
          src={service.image}
          alt=""
          width={1}
          height={1}
          className="hidden"
          priority
          quality={90}
        />
      ))}

      <div className="relative w-full max-w-lg h-full">
        <AnimatePresence mode="wait">
          {servicesData.map((service, index) => {
            const isActive = index === activeIndex;
            const isImageLoaded = loadedImages.has(service.image);
            if (!isActive) return null;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, rotateY: -15, x: 50 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 15, x: -50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border-2 border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.2)] overflow-hidden bg-gradient-to-br ${service.gradient} to-[#02040a]/90`}
              >
                {/* Background Image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 400px"
                    quality={90}
                  />
                  {/* Multi-layer gradient overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/90 via-[#02040a]/50 to-[#02040a]/95" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-transparent to-[#02040a]/60" />
                </div>

                {/* Neural Particles */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-sky-400"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: [0, 1, 0], x: -30 }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                    />
                  ))}
                </div>

                {/* Scanning Line */}
                <motion.div
                  className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent z-20"
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />

                <div className="relative z-10">
                  <service.icon className="mb-6 text-[#38bdf8]" />
                  <h3 className="text-3xl font-bold mb-4 text-[#38bdf8]">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-sky-400/20">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold bg-sky-900/40 text-sky-200 px-3 py-1 rounded-full border border-sky-400/30 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AutoFanOutServices;
