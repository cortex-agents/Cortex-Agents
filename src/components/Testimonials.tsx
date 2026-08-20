'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { FadeInUp, AccentBar } from './ui/Animations';

const testimonials = [
  {
    id: 1,
    name: 'Ali Raza',
    role: 'CTO, TechFlow PK',
    text: "Cortex Agents didn't just build our platform; they engineered our entire operational workflow. We saved 40 hours a week on manual tasks.",
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Founder, Nexus Enterprise',
    text: "The AI integration they built for our customer support is flawless. It handles 80% of our tier-1 tickets with zero hallucinations.",
  },
  {
    id: 3,
    name: 'Usman Tariq',
    role: 'Head of Product, Zindigi FinTech',
    text: "Blistering fast Next.js architecture. Our conversion rates doubled within a month of deployment. They write code that scales.",
  },
  {
    id: 4,
    name: 'Marcus Thorne',
    role: 'VP Engineering, Vanguard Logistics',
    text: "We needed a multi-tenant SaaS application built in record time. Cortex delivered an airtight, secure system ahead of schedule.",
  },
  {
    id: 5,
    name: 'Ayesha Khan',
    role: 'Director, Luxe Retail',
    text: "The UI/UX design is elegant and ruthlessly optimized for sales. They understand business outcomes better than any agency we've hired.",
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per testimonial

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), []);
  const handlePrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), []);

  // Timer logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPaused) return; // Only trigger if mouse is hovering (focused)
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused, handleNext, handlePrev]);

  // Helper to determine the position of a card relative to the center
  const getPosition = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === testimonials.length - 1) return 'left';
    return 'hidden';
  };

  // Upgraded Physics-based Spring Animation
  const springConfig = { type: 'spring' as const, stiffness: 280, damping: 28, mass: 1 };
  
  const variants = {
    center: { 
      x: '0%', 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      zIndex: 20,
      transition: springConfig
    },
    left: { 
      x: '-70%', 
      scale: 0.85, 
      rotate: -10, 
      opacity: 0.3,
      zIndex: 10,
      transition: springConfig
    },
    right: { 
      x: '70%', 
      scale: 0.85, 
      rotate: 10, 
      opacity: 0.3,
      zIndex: 10,
      transition: springConfig
    },
    hidden: { 
      x: '0%', 
      scale: 0.5, 
      rotate: 0, 
      opacity: 0,
      zIndex: 0,
      transition: springConfig
    }
  };

  return (
    <Section spacing="loose" className="overflow-hidden bg-background" hasTopBorder>
      <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1 mb-6 inline-block">
            Verified Outcomes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
            CLIENT <br /> TESTIMONIALS
          </h2>
          <AccentBar />
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center border border-border hover:bg-foreground hover:text-background transition-colors duration-150"
            aria-label="Previous Testimonial"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center border border-border hover:bg-foreground hover:text-background transition-colors duration-150"
            aria-label="Next Testimonial"
          >
            →
          </button>
        </div>
      </FadeInUp>

      {/* A11y role region */}
      <div 
        className="relative w-full h-[500px] md:h-[450px] flex items-center justify-center mt-12 mb-8 focus:outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-live="polite"
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false}>
          {testimonials.map((t, i) => {
            const pos = getPosition(i);
            
            if (pos === 'hidden') return null;

            const isCenter = pos === 'center';

            return (
              <motion.div
                key={t.id}
                variants={variants}
                initial="hidden"
                animate={pos}
                exit="hidden"
                aria-hidden={!isCenter} // A11y fix
                className={`absolute w-[90%] md:w-[600px] bg-background backdrop-blur-sm border border-border p-8 md:p-12 flex flex-col justify-between shadow-2xl ${
                  !isCenter ? 'cursor-pointer hover:border-accent transition-colors' : 'cursor-grab active:cursor-grabbing'
                }`}
                style={{ transformOrigin: 'center bottom', minHeight: '350px' }}
                // Click to focus side cards
                onClick={() => {
                  if (pos === 'left') handlePrev();
                  if (pos === 'right') handleNext();
                }}
                // Mobile Drag/Swipe logic for active card
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -50 || velocity.x < -500) {
                    handleNext();
                  } else if (offset.x > 50 || velocity.x > 500) {
                    handlePrev();
                  }
                }}
              >
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight text-foreground select-none">
                  &quot;{t.text}&quot;
                </p>
                <div className="mt-8 border-l-2 border-accent pl-4 shrink-0 select-none">
                  <h3 className="font-mono font-bold tracking-wider uppercase text-foreground">{t.name}</h3>
                  <p className="font-mono text-sm tracking-wider uppercase text-muted-foreground mt-1">{t.role}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Progress Bar (Global for active card) */}
      <div className="max-w-2xl mx-auto flex items-center gap-4 mt-8">
        <span className="font-mono text-xs text-muted-foreground">0{currentIndex + 1}</span>
        <div className="h-1 flex-1 bg-border relative overflow-hidden">
          <style>{`
            @keyframes fillProgress {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            .progress-bar-anim {
              animation: fillProgress ${AUTO_PLAY_INTERVAL}ms linear forwards;
            }
          `}</style>
          <div 
            key={currentIndex} 
            className={`absolute top-0 left-0 h-full bg-accent progress-bar-anim ${isPaused ? '[animation-play-state:paused]' : '[animation-play-state:running]'}`}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">0{testimonials.length}</span>
      </div>

    </Section>
  );
}
