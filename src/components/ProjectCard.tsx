"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Product } from './data/products_types';

interface ProjectCardProps {
  project: Product;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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
    setIsHovered(false);
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
      onMouseEnter={() => setIsHovered(true)}
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
        <div className={`absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'}`} />

        {/* Card container */}
        <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl overflow-hidden shadow-2xl">
          {/* Skewed gradient panel */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:w-full"
            style={{ transformOrigin: "left" }}
          />

          {/* Image section */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-600 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/50 to-transparent" />
          </div>

          {/* Content section */}
          <div className="relative p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 rounded-full hover:bg-[#38bdf8]/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action button */}
            <div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#02040a] font-semibold rounded-lg shadow-lg shadow-[#38bdf8]/20 hover:shadow-[#38bdf8]/40 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
