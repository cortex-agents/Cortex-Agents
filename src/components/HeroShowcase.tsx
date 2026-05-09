"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Code, Bot, MessageSquare } from 'lucide-react'

const services = [
  {
    id: 'websites',
    title: 'Custom Websites',
    desc: 'Holographic immersive UI interfaces',
    image: '/services/websites.png',
    icon: Code,
    color: 'sky'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    desc: 'Intelligent autonomous neural networks',
    image: '/services/ai_agents.png',
    icon: Bot,
    color: 'purple'
  },
  {
    id: 'chatbots',
    title: 'Smart Chatbots',
    desc: '24/7 intelligent conversational agents',
    image: '/services/chatbots.png',
    icon: MessageSquare,
    color: 'cyan'
  }
]

export default function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-sky-500/20 shadow-[0_0_50px_rgba(56,189,248,0.15)] bg-[#02040a]">
      {/* Cinematic Image Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          {/* Vignette overlay for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#02040a]/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-10">
        
        {/* Top Indicators */}
        <div className="flex gap-2 w-full max-w-xs">
          {services.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              {idx === currentIndex && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-sky-400" 
                />
              )}
              {idx < currentIndex && (
                <div className="h-full w-full bg-sky-400" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="self-start md:self-end max-w-xs w-full p-5 rounded-2xl bg-[#02040a]/80 backdrop-blur-xl border border-sky-400/30 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-400/20 flex items-center justify-center">
                {React.createElement(services[currentIndex].icon, { className: "text-sky-400 w-6 h-6" })}
              </div>
              <div>
                <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">Showcasing</div>
                <div className="text-white font-bold text-lg leading-none">{services[currentIndex].title}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {services[currentIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
