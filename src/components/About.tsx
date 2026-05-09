"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, MessageSquare, Bot, Sparkles, Shield, Clock } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import Link from 'next/link'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  showRadialGradient?: boolean
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
  )
}

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Custom Websites",
      description: "Modern, responsive, high-performance web applications",
      iconColor: "text-sky-400", // Sky Blue - Development
      gradient: "from-sky-400 to-sky-600",
      depth: 20,
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational interfaces for customer engagement",
      iconColor: "text-sky-400", // Electric Cyan - AI Chatbots
      gradient: "from-sky-400 to-cyan-400",
      depth: 40,
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Autonomous systems that automate workflows and enhance productivity",
      iconColor: "text-sky-400", // Electric Cyan - AI Agents
      gradient: "from-cyan-400 to-sky-500",
      depth: 30,
    },
  ]

  const stats = [
    { number: 50, suffix: "+", label: "Projects Delivered", gradient: "from-sky-400 via-cyan-400 to-sky-500", depth: 25 },
    { number: 2, suffix: "+", label: "Years Experience", gradient: "from-cyan-400 via-sky-400 to-cyan-500", depth: 35 },
    { number: 100, suffix: "%", label: "Client Satisfaction", gradient: "from-sky-500 via-cyan-400 to-sky-400", depth: 45 },
  ]

  const whyChooseUs = [
    { icon: Sparkles, title: "Innovation", description: "Cutting-edge AI technology", iconColor: "text-cyan-400", gradient: "from-cyan-400 to-cyan-600" },
    { icon: Shield, title: "Quality", description: "Premium code and design", iconColor: "text-sky-400", gradient: "from-sky-400 to-sky-600" },
    { icon: Bot, title: "AI Expertise", description: "Deep knowledge in AI/ML", iconColor: "text-sky-400", gradient: "from-sky-400 to-cyan-400" },
    { icon: Clock, title: "24/7 Support", description: "Always available for clients", iconColor: "text-teal-400", gradient: "from-teal-400 to-teal-600" },
  ]

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
      <style jsx>{`
        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
        .animate-aurora {
          animation: aurora 60s linear infinite;
        }
      `}</style>

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
          <div ref={contentRef} className="max-w-7xl mx-auto w-full">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Cortex Agents
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We are a team of AI experts specializing in custom websites, intelligent chatbots, and AI agents that transform businesses.
              </p>
            </motion.div>

            {/* Central Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                transform: `translateZ(50px) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
              }}
              className="relative mb-20"
            >
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-sky-400/10 to-cyan-400/10 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-12 text-center shadow-2xl shadow-sky-400/10">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-cyan-400/5 to-sky-400/5 rounded-3xl"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    We Build the Future with AI
                  </h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Transform your business with cutting-edge AI technology. We create intelligent solutions that automate workflows, enhance customer experiences, and drive growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Service Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{
                    transform: `translateZ(${service.depth}px) translateX(${mousePosition.x * (index - 1)}px) translateY(${mousePosition.y * (index - 1)}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative group"
                >
                  <div className="bg-sky-400/5 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#02040a] rounded-xl flex items-center justify-center">
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                  }}
                  style={{
                    transform: `translateZ(${stat.depth}px) translateX(${mousePosition.x * (index - 1) * 0.5}px) translateY(${mousePosition.y * (index - 1) * 0.5}px)`,
                  }}
                  className="relative"
                >
                  <div className="bg-sky-400/5 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 text-center hover:border-sky-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-400/20">
                    <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}>
                      <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-slate-300 text-lg">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-20"
            >
              <h3 className="text-4xl font-bold text-white text-center mb-12">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Cortex Agents
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    className="bg-sky-400/5 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/20"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center`}
                    >
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Discover Cortex Agents</span>
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
  )
}

export default About
