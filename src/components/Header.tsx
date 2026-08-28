"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Learn", href: "/learn" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-background border-b border-border">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-accent z-50 transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative bg-background z-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-transparent flex items-center justify-center">
               {/* Dark mode logo */}
               <Image src="/logo_bright.png" alt="Cortex Agents Logo" width={48} height={48} sizes="48px" className="hidden dark:block w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300" priority />
               {/* Light mode logo */}
               <Image src="/logo_dark.png" alt="Cortex Agents Logo" width={48} height={48} sizes="48px" className="block dark:hidden w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none">CORTEX</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">AGENTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href} 
                  prefetch={true}
                  className={`relative font-mono text-sm uppercase tracking-wider transition-colors duration-150 ease-fast py-2 ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transition-transform duration-150 ease-fast ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
            
            <div className="pl-4 border-l border-border flex items-center gap-4">
              <ThemeToggle />
              <Button variant="primary" size="default" href="/contact">
                Start Project
              </Button>
            </div>
          </nav>

          {/* Mobile Controls: Theme Toggle + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2 z-50">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="w-12 h-12 flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 ease-fast" 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl overflow-hidden -z-10"
          >
            <nav className="flex flex-col p-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-4 px-4 font-mono text-sm uppercase tracking-wider border-b border-border transition-colors duration-150 ${isActive ? "text-accent bg-muted/50" : "text-foreground hover:text-accent"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="py-6 px-4">
                <Button variant="secondary" size="lg" className="w-full" href="/contact">
                  Start Project
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
