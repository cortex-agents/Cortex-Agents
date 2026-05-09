import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Shield, Star, Clock, Users, MessageSquare, FileText, Layers, Code, CheckCircle, HeadphonesIcon } from 'lucide-react'
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/MotionDiv'
import AnimatedCounter from '@/components/AnimatedCounter'
import LazyThreeBackground from '@/components/LazyThreeBackground'

// Lazy load heavy components
const Team = dynamic(() => import('@/components/ourTeam'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
})

const values = [
  { icon: Shield, title: "Honest Communication", desc: "We tell you what your project actually needs — not what sounds impressive. If something will not work, we say so upfront. No surprises, no hidden fees, no false promises." },
  { icon: Star, title: "Uncompromising Quality", desc: "We do not ship work we are not proud of. Every website, every chatbot, every agent goes through thorough review before it reaches you. Good enough is never good enough for us." },
  { icon: Clock, title: "We Respect Your Time", desc: "Deadlines are commitments, not suggestions. We deliver on time, communicate proactively, and never leave you wondering what is happening with your project." },
  { icon: Users, title: "Your Success Is Our Success", desc: "We measure our work by one thing — results for you. A beautiful website that does not bring clients is a failure. We build with your business goals in mind, always." }
]

const stats = [
  { num: 50, suffix: "", label: "Projects Delivered", desc: "Websites, chatbots, agents" },
  { num: 2, suffix: "", label: "Years of Experience", desc: "Building real products" },
  { num: 100, suffix: "%", label: "Client Satisfaction", desc: "Genuinely happy clients" },
  { num: 4, suffix: "", label: "Expert Team Members", desc: "Each a specialist" }
]

const processSteps = [
  { num: "01", icon: MessageSquare, title: "Free Consultation", desc: "We start with a no-pressure call to understand your business, your goals, and what you actually need. We ask the right questions — and we listen." },
  { num: "02", icon: FileText, title: "Clear Proposal", desc: "You receive a detailed proposal — scope of work, timeline, cost, and deliverables. Everything in writing. No vague promises, no surprises later." },
  { num: "03", icon: Layers, title: "Design First", desc: "Before writing a single line of code, we design and show you exactly how the final product will look. You request changes freely — nothing is built until you approve." },
  { num: "04", icon: Code, title: "Build & Update", desc: "We build your project and share progress updates regularly. You always know where things stand — no radio silence, no mystery." },
  { num: "05", icon: CheckCircle, title: "Review & Launch", desc: "You review the final product. We revise until you are 100% satisfied. Then we launch, hand over everything, and make sure you are set up for success." },
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
      {/* 3D WebGL Background */}
      <LazyThreeBackground />
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400 text-sm font-semibold tracking-wider"
          >
            About Cortex Agents
          </MotionDiv>
          <MotionH1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            We Are the Team Behind Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Next Big Thing</span>
          </MotionH1>
          <MotionP 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl"
          >
            A Karachi-based AI &amp; Web agency built by developers who got tired of average — so we decided to build something better.
          </MotionP>
        </div>
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 relative w-full aspect-video md:aspect-square max-h-[500px] z-10"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-sky-400/20 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
            <Image 
              src="/agency_team.png" 
              alt="Cortex Agents Team" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-full -z-10" />
        </MotionDiv>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <MotionDiv 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 relative"
        >
          <div className="w-64 h-64 bg-purple-600/30 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-sky-500 rounded-full" />
          <h2 className="text-4xl font-bold pl-8 py-4">How Cortex Agents Started</h2>
        </MotionDiv>
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 space-y-6 text-slate-300 text-lg leading-relaxed"
        >
          <p>Cortex Agents was born out of a simple frustration — too many Pakistani businesses had outdated, slow, and broken digital presence, while the tools to fix this had never been more powerful or accessible.</p>
          <p>Four developers — each expert in their own domain — came together in Karachi with one shared belief: that every business, no matter its size, deserves a world-class digital presence. Not templated. Not generic. Custom-built, thoughtfully designed, and engineered to perform.</p>
          <p>Since then, we have delivered 50+ projects across web development, UI/UX design, AI chatbots, and intelligent automation — helping businesses across Pakistan and beyond look professional, operate efficiently, and grow faster with technology.</p>
          <blockquote className="border-l-4 border-sky-500 pl-6 py-2 my-8 text-2xl font-medium text-white italic bg-sky-950/20 rounded-r-lg">
            &ldquo;We don&apos;t just write code. We solve business problems with technology.&rdquo;
          </blockquote>
        </MotionDiv>
      </section>

      {/* SECTION 3: OUR MISSION & VISION */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#0a0f1d]/60 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8">
              <Target className="text-purple-400" size={28} />
            </div>
            <div className="text-purple-400 font-semibold mb-2 tracking-wider uppercase text-sm">Our Mission</div>
            <h3 className="text-3xl font-bold text-white mb-4">Empowering Businesses With AI &amp; Technology</h3>
            <p className="text-slate-400 leading-relaxed">To make world-class web and AI solutions accessible to every business — delivering work that is fast, beautiful, intelligent, and built to last. We treat every project as if it were our own business.</p>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-[#0a0f1d]/60 backdrop-blur-xl border border-sky-500/20 hover:border-sky-500/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-8">
              <Eye className="text-sky-400" size={28} />
            </div>
            <div className="text-sky-400 font-semibold mb-2 tracking-wider uppercase text-sm">Our Vision</div>
            <h3 className="text-3xl font-bold text-white mb-4">Building Pakistan&apos;s Most Trusted AI Agency</h3>
            <p className="text-slate-400 leading-relaxed">To become the most trusted name in AI and web development across Pakistan — known not just for the quality of our work, but for the trust, transparency, and long-term relationships we build with every client.</p>
          </MotionDiv>
        </div>
      </section>

      {/* SECTION 4: WHY TRUST US */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Stand For</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">These are not just words on a page — they are the standards we hold ourselves to on every single project.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <MotionDiv 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0a0f1d]/50 border border-sky-900/30 hover:border-purple-500/50 hover:bg-[#0a0f1d]/80 transition-all flex gap-6"
            >
              <div className="mt-1">
                <val.icon className="text-sky-400 group-hover:text-purple-400 transition-colors" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">{val.title}</h4>
                <p className="text-slate-400">{val.desc}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#0a0f1d] to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Cortex Agents in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 mb-2">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.desc}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TEAM */}
      <section className="relative z-20">
        <div className="text-center pt-24 pb-8 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The People Behind Your Project</h2>
          <p className="text-xl text-slate-400">When you work with Cortex Agents, you work directly with the people building your product — no outsourcing, no juniors, no middlemen.</p>
        </div>
        <Team />
      </section>

      {/* SECTION 7: OUR PROCESS */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work With You</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">A simple, transparent process — so you always know what is happening and what comes next.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 to-purple-500 -translate-x-1/2" />

          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-8 rounded-2xl bg-[#0a0f1d]/80 border border-sky-900/30 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all backdrop-blur-sm">
                    <div className="text-sky-400 font-mono mb-2">Phase {step.num}</div>
                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-[#02040a] border-2 border-sky-500 items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  <step.icon className="text-sky-400" size={24} />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TECH STACK */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Tech Stack</h2>
        <p className="text-xl text-slate-400 mb-16">We use modern, industry-proven technologies — the same tools trusted by the world&apos;s top companies.</p>
        
        <div className="space-y-12">
          {techStack.map((cat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h4 className="text-lg font-medium text-slate-300 mb-6 uppercase tracking-widest">{cat.label}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.techs.map((tech, j) => (
                  <MotionDiv
                    key={j}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="px-6 py-3 rounded-full bg-[#0a0f1d]/80 border border-purple-500/30 text-white shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all cursor-default"
                  >
                    {tech}
                  </MotionDiv>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 rounded-3xl bg-gradient-to-br from-[#0a0f1d] to-sky-950/20 border border-sky-500/30 shadow-[0_0_80px_rgba(56,189,248,0.15)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-30 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to Work With a Team You Can Trust?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Let&apos;s have a free, no-commitment conversation about your project. We will tell you honestly what you need — and exactly how we can help.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all">
              Start a Conversation
            </Link>
            <a href="https://wa.me/923212322687" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-slate-600 text-white font-bold text-lg hover:border-sky-400 hover:text-sky-400 transition-all">
              WhatsApp Us Directly
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-500 relative z-10">Free consultation • Response within 2 hours • No pressure, no pushy sales</p>
        </MotionDiv>
      </section>
    </main>
  )
}