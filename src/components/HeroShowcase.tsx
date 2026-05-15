"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// Inline SVGs for minimal hydration - updated to accept className
const CodeIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const MessageSquareIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const BotIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;

const services = [
  {
    id: 'websites',
    title: 'Custom Websites',
    desc: 'Holographic immersive UI interfaces',
    image: '/services/websites.webp',
    icon: CodeIcon,
    color: 'sky'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    desc: 'Intelligent autonomous neural networks',
    image: '/services/ai_agents.webp',
    icon: BotIcon,
    color: 'sky'
  },
  {
    id: 'chatbots',
    title: 'Smart Chatbots',
    desc: '24/7 intelligent conversational agents',
    image: '/services/chatbots.webp',
    icon: MessageSquareIcon,
    color: 'cyan'
  }
]

export default function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const current = services[currentIndex]

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-sky-500/20 shadow-[0_0_50px_rgba(56,189,248,0.15)] bg-[#02040a]">
      {/* Image layers - Simplified for performance */}
      {services.map((service, idx) => {
        return (
          <div
            key={service.id}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: idx === currentIndex ? 1 : 0 }}
          >
            <Image
              src={service.image}
              alt={service.image.split('/').pop()?.split('.')[0] || service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={idx === 0}
              quality={75}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#02040a]/60 via-transparent to-transparent" />
          </div>
        );
      })}

      {/* Floating UI Elements */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-10">
        {/* Top Indicators */}
        <div className="flex gap-2 w-full max-w-xs">
          {services.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full bg-sky-400 ${idx === currentIndex ? 'animate-progress' : idx < currentIndex ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Info Card - CSS transition instead of AnimatePresence */}
        <div
          key={currentIndex}
          className="self-start md:self-end max-w-xs w-full p-5 rounded-2xl bg-[#02040a]/80 backdrop-blur-xl border border-sky-400/30 shadow-2xl animate-fade-in-up"
          style={{ animationDuration: '0.5s' }}
        >
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/20 flex items-center justify-center">
              <current.icon className="text-sky-400 w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">Showcasing</div>
              <div className="text-white font-bold text-lg leading-none">{current.title}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {current.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
