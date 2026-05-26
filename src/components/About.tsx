import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import Link from 'next/link'
import AuroraBackground from './ui/AuroraBackground'
import Image from 'next/image'

const CodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)
const BotIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
  </svg>
)
const ZapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const carouselImages = [
  { src: '/about_images/1.webp', alt: 'Cortex Agents team collaborating on AI solutions' },
  { src: '/about_images/2.webp', alt: 'Futuristic AI workspace with holographic displays' },
  { src: '/about_images/3.webp', alt: 'Autonomous AI agents working on complex tasks' },
  { src: '/about_images/4.webp', alt: 'Advanced code editor with modern development tools' },
  { src: '/about_images/5.webp', alt: 'Neural network visualization representing AI technology' },
]

const services = [
  {
    icon: CodeIcon,
    title: "High-Performance Web",
    description: "Immersive digital experiences built for speed and impact.",
    gradient: "from-sky-400 to-sky-600",
  },
  {
    icon: BotIcon,
    title: "Autonomous AI Agents",
    description: "Intelligent digital employees to automate complex operations.",
    gradient: "from-cyan-400 to-sky-500",
  },
  {
    icon: ZapIcon,
    title: "AI-Powered Engagement",
    description: "Smart systems that qualify and convert leads automatically.",
    gradient: "from-sky-400 to-cyan-400",
  },
]

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered" },
  { number: 2, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
]

function About() {
  return (
    <section className="relative w-full overflow-hidden" id="about">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 z-0 bg-[#02040a]">
        {/* Perspective Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
        }} />
        {/* Glow Orbs */}
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-sky-900/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[8%] w-[350px] h-[350px] rounded-full bg-cyan-900/15 blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <AuroraBackground showRadialGradient={true}>
        <div className="relative z-10 w-full py-24 lg:py-32">

          {/* === SECTION HEADER === */}
          <div className="text-center mb-20 px-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
              <span className="text-sm text-[#38bdf8] font-medium tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-5">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">
                Cortex Agents
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              We bridge the gap between human ambition and AI efficiency.
            </p>
          </div>

          {/* === MAIN TWO-COLUMN LAYOUT === */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* === IMAGE DISPLAY — mobile: after heading, desktop: right column === */}
            <div className="lg:hidden mb-12 animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#38bdf8]/8 via-transparent to-[#0ea5e9]/8 rounded-[2rem] blur-xl" />

                {/* Main Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-[#38bdf8]/20 bg-[#02040a]/50">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#38bdf8]/10 bg-[#02040a]/60">
                    <span className="text-[10px] text-[#38bdf8]/70 font-medium tracking-wider uppercase">Showcase</span>
                    <div className="flex-1" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] text-slate-500 font-medium">Verified Work</span>
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="relative aspect-[16/10]">
                    <div className="carousel-container absolute inset-0">
                      {carouselImages.map((img, index) => (
                        <div key={index} className="carousel-slide absolute inset-0">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            loading={index === 0 ? "eager" : "lazy"}
                            quality={80}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Scan Line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent animate-scan-line" />
                    </div>

                    {/* Corner Brackets */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#38bdf8]/40 rounded-tl-md z-10" />
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#38bdf8]/25 rounded-tr-md z-10" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#38bdf8]/25 rounded-bl-md z-10" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#38bdf8]/40 rounded-br-md z-10" />

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02040a]/80 to-transparent z-10" />

                    {/* Status Indicator */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      <span className="text-[10px] text-[#38bdf8]/70 font-mono tracking-wider">LIVE</span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 border-t border-[#38bdf8]/10 bg-[#02040a]/60">
                    <span className="text-[10px] text-slate-500 font-medium">Projects Portfolio</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[10px] text-slate-500 font-medium">Auto-play</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">5 Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-24">

              {/* LEFT COLUMN — Content (2/5) */}
              <div className="lg:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>

                {/* Mission Panel */}
                <div className="relative p-7 bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl overflow-hidden group">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#38bdf8]/15 via-transparent to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-0.5 shrink-0">
                        <div className="w-full h-full bg-[#02040a] rounded-[7px] flex items-center justify-center">
                          <BotIcon className="w-5 h-5 text-[#38bdf8]" />
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        The Future is <span className="text-[#38bdf8]">Autonomous</span>
                      </h3>
                    </div>
                    <p className="text-slate-300 text-[15px] leading-relaxed">
                      We don&apos;t just build software; we build intelligence. Our agency creates autonomous digital assets that work while you sleep — scaling your capabilities without scaling your effort.
                    </p>
                  </div>
                </div>

                {/* Service Cards */}
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="relative group flex items-start gap-4 p-5 bg-[#02040a]/50 backdrop-blur-sm border border-[#38bdf8]/10 rounded-xl hover:border-[#38bdf8]/30 hover:bg-[#02040a]/70 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + i * 0.08}s`, animationFillMode: 'both' }}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-105 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#02040a] rounded-[7px] flex items-center justify-center">
                        <service.icon className="w-[18px] h-[18px] text-[#38bdf8]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}

                {/* CTA */}
                <div className="pt-2 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
                  <Link
                    href="/about"
                    aria-label="Discover Cortex Agents"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white font-semibold rounded-full shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden group text-[15px]"
                  >
                    <span className="relative z-10">Discover Cortex Agents</span>
                    <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN — Holographic Image Display (3/5) — desktop only */}
              <div className="hidden lg:col-span-3 lg:block lg:animate-fade-in-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#38bdf8]/8 via-transparent to-[#0ea5e9]/8 rounded-[2rem] blur-xl" />

                  {/* Main Frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#38bdf8]/20 bg-[#02040a]/50">
                    {/* Top Bar */}
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#38bdf8]/10 bg-[#02040a]/60">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-[10px] text-[#38bdf8]/50 font-mono tracking-[0.2em] uppercase">cortex_display.exe</span>
                      </div>
                      <div className="w-12" />
                    </div>

                    {/* Image Area */}
                    <div className="relative aspect-[16/10]">
                      <div className="carousel-container absolute inset-0">
                        {carouselImages.map((img, index) => (
                          <div key={index} className="carousel-slide absolute inset-0">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 55vw"
                              loading={index === 0 ? "eager" : "lazy"}
                              quality={80}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Scan Line */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                        <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent animate-scan-line" />
                      </div>

                      {/* Corner Brackets */}
                      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#38bdf8]/40 rounded-tl-md z-10" />
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#38bdf8]/25 rounded-tr-md z-10" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#38bdf8]/25 rounded-bl-md z-10" />
                      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#38bdf8]/40 rounded-br-md z-10" />

                      {/* Bottom Gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02040a]/80 to-transparent z-10" />

                      {/* Status Indicator */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
                        <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                        <span className="text-[10px] text-[#38bdf8]/70 font-mono tracking-wider">LIVE</span>
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-t border-[#38bdf8]/10 bg-[#02040a]/60">
                      <span className="text-[10px] text-slate-500 font-mono">5 assets loaded</span>
                      <div className="flex gap-1">
                        {carouselImages.map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#38bdf8]' : 'bg-[#38bdf8]/20'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">auto-rotate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === STATS BAR === */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.65s', animationFillMode: 'both' }}>
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/15 via-[#0ea5e9]/10 to-[#38bdf8]/15 blur-sm" />
              <div className="relative grid grid-cols-3 divide-x divide-[#38bdf8]/10 bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl overflow-hidden">
                {stats.map((stat, i) => (
                  <div key={i} className="relative group text-center py-8 px-4 hover:bg-[#38bdf8]/5 transition-colors duration-300">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
                      <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-slate-500 text-xs md:text-sm font-medium tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </AuroraBackground>
    </section>
  )
}

export default About
