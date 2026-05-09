'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import products from '../../components/data/products';
import { Product } from '../../components/data/products_types';

// Floating background shapes
function FloatingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
      </motion.div>
    </motion.div>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: Product;
  index: number;
  onHover: (index: number | null) => void;
  isHovered: boolean;
}

function ProjectCard({ project, index, onHover, isHovered }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover(index)}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX: mousePosition.y * 0.5,
          rotateY: mousePosition.x * 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        />

        {/* Card container */}
        <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl overflow-hidden shadow-2xl">
          {/* Skewed gradient panel */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:w-full"
            style={{ transformOrigin: "left" }}
          />

          {/* Image section */}
          <div className="relative h-56 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/50 to-transparent" />
          </div>

          {/* Content section */}
          <div className="relative p-6 space-y-4" style={{ transform: "translateZ(50px)" }}>
            <motion.h3
              className="text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors duration-300"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-slate-400 text-sm leading-relaxed line-clamp-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ delay: 0.05 }}
            >
              {project.description}
            </motion.p>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.tags.map((tag: string, tagIndex: number) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                  className="text-xs px-3 py-1.5 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 rounded-full hover:bg-[#38bdf8]/20 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Action button */}
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#02040a] font-semibold rounded-lg shadow-lg shadow-[#38bdf8]/20 hover:shadow-[#38bdf8]/40 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </Link>
            </motion.div>
          </div>

          {/* Animated blobs */}
          <motion.span
            className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:top-[-20px] group-hover:right-[-20px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#02040a]">

      {/* Main Content */}
      <section className="relative min-h-screen w-full text-white py-20 px-4 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingShape delay={0.3} width={600} height={140} rotate={12} className="absolute left-[-10%] top-[15%]" />
          <FloatingShape delay={0.5} width={500} height={120} rotate={-15} className="absolute right-[-5%] top-[70%]" />
          <FloatingShape delay={0.4} width={300} height={80} rotate={-8} className="absolute left-[5%] bottom-[10%]" />
          <FloatingShape delay={0.6} width={200} height={60} rotate={20} className="absolute right-[15%] top-[10%]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6"
            >
              <span className="text-sm text-[#38bdf8] font-medium tracking-wide">All Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">
                Our Complete Portfolio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Explore all our projects featuring cutting-edge technologies and innovative solutions
            </motion.p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((project: Product, index: number) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onHover={setHoveredIndex}
                isHovered={hoveredIndex === index}
              />
            ))}
          </div>

          {/* Back to Home CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">← Back to Home</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ width: '200%' }}
                />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
      </section>

    </div>
  );
}
