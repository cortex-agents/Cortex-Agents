'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Code, Palette, Brain , BrainCircuit} from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: 'Okasha Nadeem',
        role: 'Full Stack & AI Developer',
        expertise: ['Next.js', 'AI/ML', 'TypeScript', 'Python'],
        description: 'Passionate about building intelligent applications with cutting-edge technology.',
        image: '/okasha.jpeg',
        gradient: 'from-blue-500 to-cyan-500',
        icon: Brain,
        socials: {
            github: 'https://github.com/Okashanadeem/Okashanadeem',
            linkedin: 'https://www.linkedin.com/in/okasha-nadeem/',
            email: 'okashanadeem0101@gmail.com'
        }
    },
    {
        id: 2,
        name: 'Taha Qureshi',
        role: 'AI Expert | Frontend Developer ',
        expertise: ['React', 'Next.js', 'UI/UX', 'Tailwind'],
        description: 'Crafting elegant, intuitive interfaces and intelligent AI agents people love.',
        image: '/taha.jpg',
        gradient: 'from-purple-500 to-pink-500',
        icon: Palette,
        socials: {
            github: 'https://github.com/Tahaimran56',
            linkedin: 'https://www.linkedin.com/in/taha-qureshi-37a5792a6/',
            email: 'tahaqureshidev@gmail.com'
        }
    },
    {
        id: 3,
        name: 'Muhammad Ubaid Raza',
        role: 'Agentic Ai Developer',
        expertise: ['Open AI Agent SDK', 'AgentKit', 'APIs', 'Automation'],
        description: 'AI developer crafting scalable intelligent agents transforming businesses.',
        image: '/ubaid.png',
        gradient: 'from-emerald-500 to-teal-500',
        icon: BrainCircuit,
        socials: {
            github: 'https://github.com/mub7865',
            linkedin: 'https://www.linkedin.com/in/muhammad-ubaid-raza-8207332ba/',
            email: 'muhammadubaidansari145@gmail.com'
        }
    },
    {
        id: 4,
        name: 'Syed Ahsan Raza Bukhari',
        role: 'Full Stack Developer',
        expertise: ['React', 'Node.js', 'DevOps', 'AWS'],
        description: 'End-to-end development with focus on performance and scalability.',
        image: '/ahsan.jpeg',
        gradient: 'from-orange-500 to-amber-500',
        icon: Code,
        socials: {
            github: 'https://github.com/syedahsanrazabukhari',
            linkedin: 'https://www.linkedin.com/in/syedahsanrazabukhari/',
            email: 'syedahsanrazabukhari10@gmail.com'
        }
    }
];

export default function Team() {
    return (
        <section className="relative text-white py-20 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                        Meet Our{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                            Team
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Talented individuals working together to create amazing solutions
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                
                                {/* ✅ Responsive Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-square md:aspect-[4/5] lg:aspect-[3/4] rounded-t-2xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                    <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${member.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <member.icon size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative z-10">
                                    <h3 className="text-xl font-bold mb-1 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                                        {member.name}
                                    </h3>
                                    <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                                        {member.role}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {member.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.expertise.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-4 border-t border-gray-800/50">
                                        <a
                                            href={member.socials.github}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50 rounded-lg transition-all duration-300 group/social"
                                        >
                                            <Github size={16} className="text-gray-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                        <a
                                            href={member.socials.linkedin}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50 rounded-lg transition-all duration-300 group/social"
                                        >
                                            <Linkedin size={16} className="text-gray-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                        <a
                                            href={`mailto:${member.socials.email}`}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50 rounded-lg transition-all duration-300 group/social"
                                        >
                                            <Mail size={16} className="text-gray-400 group-hover/social:text-white transition-colors" />
                                        </a>
                                    </div>
                                </div>

                                {/* Decorative Corner Glow */}
                                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${member.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
