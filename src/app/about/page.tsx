import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'

const TargetIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const EyeIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const ShieldIcon = ({ className, size = 32 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>;
const StarIcon = ({ className, size = 32 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const ClockIcon = ({ className, size = 32 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const UsersIcon = ({ className, size = 32 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const MessageIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const FileTextIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>;
const LayersIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const CodeIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const CheckCircleIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const HeadphonesIcon = ({ className, size = 24 }: { className?: string; size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>;

const Team = dynamic(() => import('@/components/ourTeam'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

const heroImages = [
  { src: '/about_images/1.webp', alt: 'Cortex Agents team collaborating' },
  { src: '/about_images/2.webp', alt: 'Futuristic AI workspace' },
  { src: '/about_images/3.webp', alt: 'Autonomous AI agents' },
  { src: '/about_images/4.webp', alt: 'Advanced code editor' },
  { src: '/about_images/5.webp', alt: 'Neural network visualization' },
]

const values = [
  { icon: ShieldIcon, title: "Honest Communication", desc: "We tell you what your project actually needs — not what sounds impressive. If something will not work, we say so upfront. No surprises, no hidden fees, no false promises." },
  { icon: StarIcon, title: "Uncompromising Quality", desc: "We do not ship work we are not proud of. Every website, every chatbot, every agent goes through thorough review before it reaches you. Good enough is never good enough for us." },
  { icon: ClockIcon, title: "We Respect Your Time", desc: "Deadlines are commitments, not suggestions. We deliver on time, communicate proactively, and never leave you wondering what is happening with your project." },
  { icon: UsersIcon, title: "Your Success Is Our Success", desc: "We measure our work by one thing — results for you. A beautiful website that does not bring clients is a failure. We build with your business goals in mind, always." }
]

const stats = [
  { num: 50, suffix: "", label: "Projects Delivered", desc: "Websites, chatbots, agents" },
  { num: 2, suffix: "", label: "Years of Experience", desc: "Building real products" },
  { num: 100, suffix: "%", label: "Client Satisfaction", desc: "Genuinely happy clients" },
  { num: 4, suffix: "", label: "Expert Team Members", desc: "Each a specialist" }
]

const processSteps = [
  { num: "01", icon: MessageIcon, title: "Free Consultation", desc: "We start with a no-pressure call to understand your business, your goals, and what you actually need. We ask the right questions — and we listen." },
  { num: "02", icon: FileTextIcon, title: "Clear Proposal", desc: "You receive a detailed proposal — scope of work, timeline, cost, and deliverables. Everything in writing. No vague promises, no surprises later." },
  { num: "03", icon: LayersIcon, title: "Design First", desc: "Before writing a single line of code, we design and show you exactly how the final product will look. You request changes freely — nothing is built until you approve." },
  { num: "04", icon: CodeIcon, title: "Build & Update", desc: "We build your project and share progress updates regularly. You always know where things stand — no radio silence, no mystery." },
  { num: "05", icon: CheckCircleIcon, title: "Review & Launch", desc: "You review the final product. We revise until you are 100% satisfied. Then we launch, hand over everything, and make sure you are set up for success." },
  { num: "06", icon: HeadphonesIcon, title: "Ongoing Support", desc: "We do not disappear after launch. We offer post-launch support, answer your questions, and are available when you need us." }
]

const techStack = [
  { label: "Frontend", techs: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Three.js"] },
  { label: "Backend", techs: ["Node.js", "Python", "REST APIs", "GraphQL", "PostgreSQL"] },
  { label: "AI & Agents", techs: ["OpenAI API", "LangChain", "OpenAI Agent SDK", "AgentKit", "Pinecone"] },
  { label: "Cloud & DevOps", techs: ["AWS", "Vercel", "GitHub Actions", "Docker", "CI/CD"] }
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-slate-100 font-sans pb-32">

      {/* === UNIQUE ANIMATED BACKGROUND — Diamond Pattern === */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#02040a]">
        {/* Diamond Grid */}
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%2338bdf8' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }} />
        {/* Radial Glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(56,189,248,0.12) 0%, transparent 60%)',
        }} />
        {/* Floating Orbs */}
        <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-sky-800/25 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-cyan-800/20 blur-[130px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[50%] left-[50%] w-[350px] h-[350px] rounded-full bg-sky-900/15 blur-[100px] animate-pulse" style={{ animationDelay: '5s' }} />
      </div>

      {/* SECTION 1: PAGE HERO — with Image Carousel */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#38bdf8] text-sm font-semibold tracking-wider animate-fade-in">
            About Cortex Agents
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            We Are the Team Behind Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9]">Next Big Thing</span>
          </h1>
          <p
            className="text-lg md:text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            A Karachi-based AI &amp; Web agency built by developers who got tired of average — so we decided to build something better.
          </p>
        </div>

        {/* Hero Image Carousel */}
        <div
          className="flex-1 relative w-full aspect-video md:aspect-square max-h-[500px] z-10 animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#38bdf8]/20 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
            <div className="carousel-container absolute inset-0">
              {heroImages.map((img, index) => (
                <div key={index} className="carousel-slide absolute inset-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#38bdf8]/40 rounded-br-md z-10" />
          </div>
          <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-full -z-10" />
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/3 relative animate-fade-in">
          <div className="w-64 h-64 bg-sky-600/20 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#38bdf8] to-[#0ea5e9] rounded-full" />
          <h2 className="text-4xl font-bold pl-8 py-4">
            <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">How Cortex Agents Started</span>
          </h2>
        </div>
        <div
          className="w-full md:w-2/3 space-y-6 text-slate-300 text-lg leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <p>Cortex Agents was born out of a simple frustration {" — "} too many Pakistani businesses had outdated, slow, and broken digital presence, while the tools to fix this had never been more powerful or accessible.</p>
          <p>Four developers {" — "} each expert in their own domain {" — "} came together in Karachi with one shared belief: that every business, no matter its size, deserves a world-class digital presence. Not templated. Not generic. Custom-built, thoughtfully designed, and engineered to perform.</p>
          <p>Since then, we have delivered 50+ projects across web development, UI/UX design, AI chatbots, and intelligent automation {" — "} helping businesses across Pakistan and beyond look professional, operate efficiently, and grow faster with technology.</p>
          <blockquote className="border-l-4 border-[#38bdf8] pl-6 py-2 my-8 text-2xl font-medium italic bg-[#38bdf8]/5 rounded-r-lg">
            <span className="bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent">&ldquo;We don&apos;t just write code. We solve business problems with technology.&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* SECTION 3: OUR MISSION & VISION */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group p-10 rounded-3xl bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] transition-all animate-fade-in-up">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#02040a]/80" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#38bdf8]/15 flex items-center justify-center mb-8">
                <TargetIcon className="text-[#38bdf8]" />
              </div>
              <div className="text-[#38bdf8] font-semibold mb-2 tracking-wider uppercase text-sm">Our Mission</div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">Empowering Businesses With AI & Technology</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">To make world-class web and AI solutions accessible to every business {" — "} delivering work that is fast, beautiful, intelligent, and built to last. We treat every project as if it were our own business.</p>
            </div>
          </div>

          <div
            className="relative group p-10 rounded-3xl bg-[#02040a]/70 backdrop-blur-xl border border-[#0ea5e9]/15 hover:border-[#0ea5e9]/40 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#0ea5e9]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#02040a]/80" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/15 flex items-center justify-center mb-8">
                <EyeIcon className="text-[#0ea5e9]" />
              </div>
              <div className="text-[#0ea5e9] font-semibold mb-2 tracking-wider uppercase text-sm">Our Vision</div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">Building Pakistan&apos;s Most Trusted AI Agency</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">To become the most trusted name in AI and web development across Pakistan {" — "} known not just for the quality of our work, but for the trust, transparency, and long-term relationships we build with every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY TRUST US */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">What We Stand For</span>
          </h2>
          <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent max-w-2xl mx-auto">These are not just words on a page — they are the standards we hold ourselves to on every single project.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-2xl bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 transition-all flex gap-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
              <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
              <div className="relative z-10 flex gap-6">
                <div className="mt-1">
                  <val.icon className="text-[#38bdf8] group-hover:text-[#0ea5e9] transition-colors" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent">{val.title}</span>
                  </h4>
                  <p className="text-slate-400">{val.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">Cortex Agents in Numbers</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/15 via-[#0ea5e9]/10 to-[#38bdf8]/15 blur-sm" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-[#38bdf8]/10 bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center py-10 px-4 hover:bg-[#38bdf8]/5 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8] mb-2">
                    <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TEAM */}
      <section className="relative z-20">
        <div className="text-center pt-24 pb-8 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">The People Behind Your Project</span>
          </h2>
          <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent">When you work with Cortex Agents, you work directly with the people building your product {" — "} no outsourcing, no juniors, no middlemen.</p>
        </div>
        <Team />
      </section>

      {/* SECTION 7: OUR PROCESS */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">How We Work With You</span>
          </h2>
          <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent max-w-2xl mx-auto">A simple, transparent process {" — "} so you always know what is happening and what comes next.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#38bdf8] to-[#0ea5e9] -translate-x-1/2" />

          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-in-up ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="relative group p-8 rounded-2xl bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all">
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                    <div className="absolute inset-[1px] rounded-2xl bg-[#02040a]/80" />
                    <div className="relative z-10">
                      <div className="text-[#38bdf8] font-mono mb-2">Phase {step.num}</div>
                      <h4 className="text-2xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-[#38bdf8]/90 to-white bg-clip-text text-transparent">{step.title}</span>
                      </h4>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-[#02040a] border-2 border-[#38bdf8] items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  <step.icon className="text-[#38bdf8]" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TECH STACK */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">Our Tech Stack</span>
        </h2>
        <p className="text-xl bg-gradient-to-r from-slate-300 via-[#38bdf8]/70 to-slate-400 bg-clip-text text-transparent mb-16">We use modern, industry-proven technologies {" — "} the same tools trusted by the world&apos;s top companies.</p>

        <div className="space-y-12">
          {techStack.map((cat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h4 className="text-lg font-medium text-[#38bdf8] mb-6 uppercase tracking-widest">{cat.label}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.techs.map((tech, j) => (
                  <div
                    key={j}
                    className="relative group px-6 py-3 rounded-full bg-[#02040a]/80 border border-[#38bdf8]/20 text-white shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:border-[#38bdf8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all cursor-default animate-fade-in"
                    style={{ animationDelay: `${j * 0.05}s`, animationFillMode: 'both' }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="relative group p-16 rounded-3xl bg-[#02040a]/70 backdrop-blur-xl border border-[#38bdf8]/20 shadow-[0_0_80px_rgba(56,189,248,0.1)] overflow-hidden animate-fade-in-up">
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#38bdf8]/15 via-transparent to-[#0ea5e9]/15 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          <div className="absolute inset-[1px] rounded-3xl bg-[#02040a]/80" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 to-[#0ea5e9]/5 opacity-30 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">Ready to Work With a Team You Can Trust?</span>
            </h2>
            <p className="text-xl bg-gradient-to-r from-slate-200 via-[#38bdf8]/80 to-slate-300 bg-clip-text text-transparent mb-10 max-w-2xl mx-auto font-medium">Let&apos;s have a free, no-commitment conversation about your project. We will tell you honestly what you need — and exactly how we can help.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-white font-bold text-lg shadow-lg shadow-[#38bdf8]/25 hover:shadow-[#38bdf8]/40 hover:-translate-y-1 transition-all relative overflow-hidden group/btn">
                <span className="relative z-10">Start a Conversation</span>
                <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" style={{ width: '200%' }} />
              </Link>
              <a href="https://wa.me/923212322687" target="_blank" rel="noopener noreferrer" className="px-9 py-4 rounded-full bg-transparent border-2 border-[#38bdf8]/30 text-white font-bold text-lg hover:border-[#38bdf8] hover:text-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all">
                WhatsApp Us Directly
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">Free consultation • Response within 2 hours • No pressure, no pushy sales</p>
          </div>
        </div>
      </section>
    </main>
  )
}
