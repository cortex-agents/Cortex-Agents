"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Brain,
  BrainCircuit,
  Bot,
} from 'lucide-react'


const teamMembers = [
  {
    id: 1,
    name: "Okasha Nadeem",
    role: "Full Stack & AI Developer",
    expertise: ["Next.js", "AI/ML", "TypeScript", "Python"],
    description:
      "Passionate about building intelligent applications with cutting-edge technology.",
    image: "/okasha.jpeg",
    gradient: "from-sky-400 to-sky-600",
    icon: Brain,
    socials: {
      github: "https://github.com/Okashanadeem",
      linkedin: "https://www.linkedin.com/in/okasha-nadeem/",
      email: "okashanadeem0101@gmail.com",
    },
  },
  {
    id: 2,
    name: "Taha Qureshi",
    role: "AI Expert | Frontend Developer | Content Writer",
    expertise: ["React", "Next.js", "UI/UX", "Tailwind", "Content Writing"],
    description:
      "Crafting elegant, intuitive interfaces, intelligent AI agents, and compelling content that people love.",
    image: "/taha.jpg",
    gradient: "from-cyan-400 to-cyan-600",
    icon: Palette,
    socials: {
      github: "https://github.com/Tahaimran56",
      linkedin: "https://www.linkedin.com/in/taha-qureshi-37a5792a6/",
      email: "tahaqureshidev@gmail.com",
    },
  },
  {
    id: 3,
    name: "Muhammad Ubaid Raza",
    role: "Full Stack & Agentic AI Developer",
    expertise: [
      "Next.js",
      "Python",
      "FastAPI",
      "OpenAI Agent SDK",
      "CMS",
    ],
    description:
      "Full Stack developer and AI specialist building intelligent agents, Digital FTEs, and scalable web applications that run 24/7.",
    image: "/ubaid.png",
    gradient: "from-sky-400 to-cyan-400",
    icon: BrainCircuit,
    socials: {
      github: "https://github.com/mub7865",
      linkedin: "https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/",
      email: "muhammadubaidansari145@gmail.com",
    },
  },
  {
    id: 4,
    name: "Syed Ahsan Raza Bukhari",
    role: "Frontend Developer",
    expertise: ["Next.js", "CMS", "Tailwind", "3D Animation"],
    description:
      "Building advanced, visually stunning frontends with Next.js, CMS integrations, and immersive 3D animations.",
    image: "/ahsan.jpeg",
    gradient: "from-sky-400 to-sky-600",
    icon: Code,
    socials: {
      github: "https://github.com/syedahsanrazabukhari",
      linkedin: "https://www.linkedin.com/in/syedahsanrazabukhari/",
      email: "syedahsanrazabukhari10@gmail.com",
    },
  },
  {
    id: 5,
    name: "Syed Hamza Ali",
    role: "Claude Native Agentic AI Developer",
    expertise: ["Python", "Node.js", "Docker", "Express", "React.js", "Next.js"],
    description:
      "Specializing in Claude-powered AI agents and intelligent automation systems.",
    image: "/hamza ali.jpeg",
    gradient: "from-sky-400 to-sky-600",
    icon: Bot,
    socials: {
      github: "#",
      linkedin: "#",
      email: "hamza@cortexagents.com",
    },
  },
]


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

export default function Team() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 30,
          y: (e.clientY - rect.top - rect.height / 2) / 30,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

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
                Meet Our{' '}
                <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-slate-300">
                Talented individuals working together to create amazing AI solutions
              </p>
            </motion.div>

            {/* Team Grid - Future-proof for 5 members: 3 on top, 2 on bottom (centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  style={{
                    transform: `translateZ(${20 + index * 10}px) translateX(${mousePosition.x * (index % 2 === 0 ? 1 : -1)}px) translateY(${mousePosition.y * (index % 2 === 0 ? 1 : -1)}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative h-[500px] cursor-pointer"
                  onClick={() => toggleFlip(member.id)}
                >
                  {/* Card Container with 3D flip */}
                  <motion.div
                    className="relative w-full h-full"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      rotateY: flippedCards.has(member.id) ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="relative w-full h-full bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl overflow-hidden group hover:border-sky-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-400/20">
                        {/* Photo */}
                        <div className="relative h-[60%] overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/30 to-transparent" />

                          {/* Icon Badge */}
                          <div className={`absolute top-6 right-6 p-3 rounded-xl bg-gradient-to-br ${member.gradient} shadow-lg`}>
                            <member.icon size={24} className="text-white" />
                          </div>

                          {/* Glow Ring around photo */}
                          <div className={`absolute inset-0 border-4 border-transparent bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} style={{ mixBlendMode: 'overlay' }} />
                        </div>

                        {/* Info */}
                        <div className="relative h-[40%] p-6 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                          <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                            {member.role}
                          </p>
                          <p className="text-sm text-slate-400">Click to see more →</p>
                        </div>

                        {/* Decorative glow */}
                        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${member.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="relative w-full h-full bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-400/20">
                        {/* Top: Name & Role */}
                        <div>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4`}>
                            <member.icon size={24} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                          <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                            {member.role}
                          </p>
                        </div>

                        {/* Middle: Bio & Skills */}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed mb-4 text-slate-400">
                            {member.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white font-medium`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom: Social Links */}
                        <div className="flex gap-3">
                          <motion.a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 hover:border-sky-400/50 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={18} className="text-white" />
                          </motion.a>
                          <motion.a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 hover:border-sky-400/50 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin size={18} className="text-white" />
                          </motion.a>
                          <motion.a
                            href={`mailto:${member.socials.email}`}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 hover:border-sky-400/50 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail size={18} className="text-white" />
                          </motion.a>
                        </div>

                          <p className="text-xs text-center mt-4 text-slate-400">Click to flip back</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Note for future 5th member */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center text-sm mt-12" style={{ color: '#4D4D4D' }}
            >
              {/* This grid automatically adapts: 3 cards on top row, 2 on bottom (centered) when 5th member is added */}
            </motion.p>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}
