"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Bot, Code, MessageSquare, Sparkles, Zap, Brain } from 'lucide-react'
import Link from 'next/link'
import HeroShowcase from './HeroShowcase'

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
      className={`relative flex flex-col h-full items-center justify-center text-slate-950 transition-bg ${className}`}
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

type BGVariantType = 'dots' | 'grid'
type BGMaskType = 'fade-edges' | 'none'

interface BGPatternProps extends React.ComponentProps<'div'> {
  variant?: BGVariantType
  mask?: BGMaskType
  size?: number
  fill?: string
}

function BGPattern({
  variant = 'grid',
  mask = 'none',
  size = 24,
  fill = '#c0c0c0',
  className = '',
  style,
  ...props
}: BGPatternProps) {
  const maskClasses = {
    'fade-edges': '[mask-image:radial-gradient(ellipse_at_center,#020008,transparent)]',
    'none': '',
  }

  const getBgImage = (variant: BGVariantType, fill: string) => {
    switch (variant) {
      case 'dots':
        return `radial-gradient(${fill} 1px, transparent 1px)`
      case 'grid':
        return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`
      default:
        return undefined
    }
  }

  const bgSize = `${size}px ${size}px`
  const backgroundImage = getBgImage(variant, fill)

  return (
    <div
      className={`absolute inset-0 z-[-10] size-full ${maskClasses[mask]} ${className}`}
      style={{
        backgroundImage,
        backgroundSize: bgSize,
        ...style,
      }}
      {...props}
    />
  )
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 3, color: 'text-sky-400/40' },
    { Icon: MessageSquare, delay: 0.5, duration: 3.5, color: 'text-sky-400/40' },
    { Icon: Bot, delay: 1, duration: 4, color: 'text-sky-400/40' },
    { Icon: Sparkles, delay: 1.5, duration: 3.2, color: 'text-cyan-400/40' },
    { Icon: Zap, delay: 2, duration: 3.8, color: 'text-sky-400/40' },
    { Icon: Brain, delay: 2.5, duration: 3.3, color: 'text-sky-400/40' },
  ]

  return (
    <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden" style={{ background: '#02040a' }}>
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
        <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(56, 189, 248, 0.08)" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
          }}
        />

        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {floatingIcons.map(({ Icon, delay, duration, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color}`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}

        <div className="absolute top-1/4 right-1/4 w-32 h-32">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-sky-400/30 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
          <div ref={contentRef} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-sm font-medium text-slate-200">AI-Powered Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                We Build the{' '}
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tighter">
                  Future
                </span>{' '}
                with AI
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-sky-400" />
                  Custom Websites
                </span>
                <span className="text-slate-400">·</span>
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-sky-400" />
                  AI Chatbots
                </span>
                <span className="text-slate-400">·</span>
                <span className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-sky-400" />
                  Intelligent Agents
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg max-w-xl leading-relaxed text-slate-400"
              >
                Transform your business with cutting-edge AI technology. We create intelligent solutions that automate workflows, enhance customer experiences, and drive growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-primary btn-primary-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-outline btn-outline-lg">
                  See Our Work
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-slate-400">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-400">AI Support</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <HeroShowcase />
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}
export default Hero
