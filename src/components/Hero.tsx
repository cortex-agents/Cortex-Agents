import React from 'react'
import Link from 'next/link'
import HeroShowcase from './HeroShowcase';
import AuroraBackground from './ui/AuroraBackground'

// Inline SVGs for minimal hydration - updated to accept className
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const BotIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const CodeIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const MessageSquareIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const SparklesIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;
const ZapIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.899 13 2l-2.4 8.71h7.4L9 22l2.4-8.71H4z"/></svg>;
const BrainIcon = ({ className, size = 40 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>;

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
  const floatingIcons = [
    { Icon: CodeIcon, delay: 0, duration: 3, color: 'text-sky-400/40' },
    { Icon: MessageSquareIcon, delay: 0.5, duration: 3.5, color: 'text-sky-400/40' },
    { Icon: BotIcon, delay: 1, duration: 4, color: 'text-sky-400/40' },
    { Icon: SparklesIcon, delay: 1.5, duration: 3.2, color: 'text-cyan-400/40' },
    { Icon: ZapIcon, delay: 2, duration: 3.8, color: 'text-sky-400/40' },
    { Icon: BrainIcon, delay: 2.5, duration: 3.3, color: 'text-sky-400/40' },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: '#02040a' }}>
      <AuroraBackground showRadialGradient={true}>
        <BGPattern variant="grid" mask="fade-edges" size={32} fill="rgba(56, 189, 248, 0.08)" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at 50% 50%, rgba(56, 189, 248, 0.15), transparent 60%)`,
          }}
        />

        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500/[0.03] rounded-full blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl" style={{ transform: 'translateZ(0)' }} />

        {floatingIcons.map(({ Icon, delay, duration, color }, index) => (
          <div
            key={index}
            className={`absolute ${color} animate-float-icon`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index % 3) * 20}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              willChange: 'transform'
            }}
            aria-hidden="true"
          >
            <Icon />
          </div>
        ))}

        <div className="absolute top-1/4 right-1/4 w-32 h-32 pointer-events-none" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-sky-400/30 rounded-lg animate-spin-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/30 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <SparklesIcon size={16} className="text-sky-400" />
                <span className="text-sm font-medium text-slate-200">AI-Powered Solutions</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">We Build the </span>
                <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent tracking-tighter">
                  Future
                </span>
                <span className="text-white"> with </span>
                <span className="text-[#38bdf8]">AI</span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-slate-300 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <span className="flex items-center gap-2">
                  <div aria-hidden="true">
                    <CodeIcon size={20} className="text-sky-400" />
                  </div>
                  Custom Websites
                </span>
                <span className="text-slate-400">·</span>
                <span className="flex items-center gap-2">
                  <div aria-hidden="true">
                    <MessageSquareIcon size={20} className="text-sky-400" />
                  </div>
                  AI Chatbots
                </span>
                <span className="text-slate-400">·</span>
                <span className="flex items-center gap-2">
                  <div aria-hidden="true">
                    <BotIcon size={20} className="text-sky-400" />
                  </div>
                  Intelligent Agents
                </span>
              </div>

              <p className="text-lg max-w-xl leading-relaxed text-slate-400 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                Transform your business with cutting-edge AI technology. We create intelligent solutions that automate workflows, enhance customer experiences, and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <Link href="/contact" className="btn-primary btn-primary-lg" aria-label="Start Your Project">
                  Start Your Project
                  <ArrowRightIcon />
                </Link>
                <Link href="/portfolio" className="btn-outline btn-outline-lg" aria-label="See Our Work">
                  See Our Work
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
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
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <HeroShowcase />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}
export default Hero
