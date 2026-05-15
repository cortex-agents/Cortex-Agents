"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AuroraBackground from './ui/AuroraBackground';

// Inline SVGs for minimal hydration
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>;
const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.1 2.5-.3.5-.1.8-.6.7-1.1l-.2-1c-.2-1 .5-2 1.5-2.2l1.1-.2c.5-.1 1-.4 1.1-.9.5-2.1.3-4.4-.6-6.4C17.1 3.8 14.7 2 12 2Z"/></svg>;
const BrainCircuitIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 6.588A3 3 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 1 0 12.001 5"/><path d="M15 13a4.5 4.5 0 0 1-3-4"/><path d="M17.997 5.125A3 3 0 1 1 12 5"/><path d="M12 18a3 3 0 1 0 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 6.588A3 3 0 1 0 12 18Z"/><path d="M15 13a4.5 4.5 0 0 0-3 4"/><path d="M12 18a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 6.588A3 3 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 1 3 4"/></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;

const ICON_MAP: Record<string, React.FC> = {
  Brain: BrainIcon,
  Palette: PaletteIcon,
  BrainCircuit: BrainCircuitIcon,
  Code: CodeIcon,
  Bot: BotIcon,
};

const teamMembers = [
  { id: 1, name: "Okasha Nadeem", role: "Full Stack & AI Developer", expertise: ["Next.js", "AI/ML", "TypeScript", "Python"], description: "Passionate about building intelligent applications with cutting-edge technology.", image: "/okasha.webp", gradient: "from-sky-400 to-sky-600", iconName: "Brain", socials: { github: "https://github.com/Okashanadeem", linkedin: "https://www.linkedin.com/in/okasha-nadeem/", email: "okashanadeem0101@gmail.com" } },
  { id: 2, name: "Taha Qureshi", role: "AI Expert | Frontend Developer | Content Writer", expertise: ["React", "Next.js", "UI/UX", "Tailwind", "Content Writing"], description: "Crafting elegant, intuitive interfaces, intelligent AI agents, and compelling content that people love.", image: "/taha.webp", gradient: "from-cyan-400 to-cyan-600", iconName: "Palette", socials: { github: "https://github.com/Tahaimran56", linkedin: "https://www.linkedin.com/in/taha-qureshi-37a5792a6/", email: "tahaqureshidev@gmail.com" } },
  { id: 3, name: "Muhammad Ubaid Raza", role: "Full Stack & Agentic AI Developer", expertise: ["Next.js", "Python", "FastAPI", "OpenAI Agent SDK", "CMS"], description: "Full Stack developer and AI specialist building intelligent agents, Digital FTEs, and scalable web applications that run 24/7.", image: "/ubaid.webp", gradient: "from-sky-400 to-cyan-400", iconName: "BrainCircuit", socials: { github: "https://github.com/mub7865", linkedin: "https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/", email: "muhammadubaidansari145@gmail.com" } },
  { id: 4, name: "Syed Ahsan Raza Bukhari", role: "Frontend Developer", expertise: ["Next.js", "CMS", "Tailwind", "3D Animation"], description: "Building advanced, visually stunning frontends with Next.js, CMS integrations, and immersive 3D animations.", image: "/ahsan.webp", gradient: "from-sky-400 to-sky-600", iconName: "Code", socials: { github: "https://github.com/syedahsanrazabukhari", linkedin: "https://www.linkedin.com/in/syedahsanrazabukhari/", email: "syedahsanrazabukhari10@gmail.com" } },
  { id: 5, name: "Syed Hamza Ali", role: "Claude Native Agentic AI Developer", expertise: ["Python", "Node.js", "Docker", "Express", "React.js", "Next.js"], description: "Specializing in Claude-powered AI agents and intelligent automation systems.", image: "/hamza_ali.webp", gradient: "from-sky-400 to-sky-600", iconName: "Bot", socials: { github: "#", linkedin: "#", email: "hamza@cortexagents.com" } },
];

export default function Team() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20" id="team">
      <AuroraBackground showRadialGradient={true}>
        {/* Animated Background Line */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-sky-400/30 to-transparent animate-line-drop" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Meet Our </span>
              <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-300">Talented individuals working together to create amazing AI solutions</p>
          </div>

          {/* Team Grid - Single client component boundary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = ICON_MAP[member.iconName] || CodeIcon;
            const isFlipped = flippedCards.has(member.id);
            return (
              <div
                key={member.id}
                className="relative h-[500px] cursor-pointer animate-fade-in-up"
                style={{
                  perspective: '1000px',
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'both',
                }}
                onClick={() => toggleFlip(member.id)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${isFlipped ? 180 : 0}deg) rotateX(${(mousePosition.y - 50) * -0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`,
                  }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    <div className="relative w-full h-full bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl overflow-hidden group hover:border-sky-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-400/20">
                      <div className="relative h-[60%] overflow-hidden">
                        <Image src={member.image} alt={member.name} fill className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/30 to-transparent" />
                        <div className={`absolute top-6 right-6 p-3 rounded-xl bg-gradient-to-br ${member.gradient} shadow-lg`} aria-hidden="true"><Icon /></div>
                      </div>
                      <div className="relative h-[40%] p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">{member.name}</h3>
                        <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>{member.role}</p>
                        <p className="text-sm text-slate-500 font-medium italic tracking-wide">Click to see more →</p>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="relative w-full h-full bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300">
                      <div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4`} aria-hidden="true"><Icon /></div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">{member.name}</h3>
                        <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>{member.role}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed mb-4 text-slate-400">{member.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.expertise.map((skill, idx) => (
                            <span key={idx} className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white font-medium`}>{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 rounded-xl transition-all duration-300" aria-label={`GitHub profile for ${member.name}`}><GithubIcon /></a>
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 rounded-xl transition-all duration-300" aria-label={`LinkedIn profile for ${member.name}`}><LinkedinIcon /></a>
                        <a href={`mailto:${member.socials.email}`} className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-400/5 hover:bg-sky-400/10 border border-sky-400/30 rounded-xl transition-all duration-300" aria-label={`Send email to ${member.name}`}><MailIcon /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </AuroraBackground>
    </section>
  );
}
