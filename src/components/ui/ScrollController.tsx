'use client';

import React, { useRef, useCallback } from 'react';
import Image from 'next/image';

export function ScrollController() {
  const holdTimer = useRef<NodeJS.Timeout | null>(null);
  const scrollRaf = useRef<number | null>(null);
  const isHolding = useRef(false);

  const startContinuousScroll = useCallback((direction: number) => {
    const scrollStep = () => {
      window.scrollBy({ top: direction * 15, left: 0, behavior: 'auto' });
      scrollRaf.current = requestAnimationFrame(scrollStep);
    };
    scrollRaf.current = requestAnimationFrame(scrollStep);
  }, []);

  const handlePointerDown = useCallback((direction: number) => {
    isHolding.current = false;
    
    // Clear any existing timers/frames just in case
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);

    holdTimer.current = setTimeout(() => {
      isHolding.current = true;
      startContinuousScroll(direction);
    }, 200); // 200ms threshold to count as a "hold"
  }, [startContinuousScroll]);

  const handlePointerUp = useCallback((direction: number) => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);

    // If it was just a quick click, do a page scroll
    if (!isHolding.current) {
      window.scrollBy({
        top: direction * window.innerHeight * 0.75, // Scroll by 75% of viewport height
        left: 0,
        behavior: 'smooth',
      });
    }
    
    isHolding.current = false;
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    isHolding.current = false;
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-center justify-between w-12 md:w-14 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-2xl">
      
      {/* Scroll Up Button */}
      <button
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-150 touch-none outline-none"
        onPointerDown={(e) => { e.preventDefault(); handlePointerDown(-1); }}
        onPointerUp={(e) => { e.preventDefault(); handlePointerUp(-1); }}
        onPointerLeave={handlePointerLeave}
        onContextMenu={(e) => e.preventDefault()}
        aria-label="Scroll Up"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>

      {/* Center Logo */}
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center pointer-events-none select-none py-1">
        <Image 
          src="/logo_bright.png" 
          alt="Cortex Agents" 
          width={28} 
          height={28} 
          className="hidden dark:block object-contain"
        />
        <Image 
          src="/logo_dark.png" 
          alt="Cortex Agents" 
          width={28} 
          height={28} 
          className="block dark:hidden object-contain"
        />
      </div>

      {/* Scroll Down Button */}
      <button
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors duration-150 touch-none outline-none"
        onPointerDown={(e) => { e.preventDefault(); handlePointerDown(1); }}
        onPointerUp={(e) => { e.preventDefault(); handlePointerUp(1); }}
        onPointerLeave={handlePointerLeave}
        onContextMenu={(e) => e.preventDefault()}
        aria-label="Scroll Down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

    </div>
  );
}
