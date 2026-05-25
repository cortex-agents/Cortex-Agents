"use client";

import { useState, useCallback, useEffect, Suspense, lazy, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './styles/Header.module.css';

const MobileMenu = lazy(() => import("./MobileMenu"));

const ICON_MAP: Record<string, () => React.ReactNode> = {
  Home: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Portfolio: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>,
  "About Us": () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
};

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
];

export default function HeaderContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const itemsWithIcons = useMemo(() => NAV_ITEMS.map(item => ({
    ...item,
    icon: ICON_MAP[item.name]
  })), []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 animate-fade-in-down ${scrolled ? "px-4 pt-2 md:px-6 md:pt-3" : "px-0 pt-0"}`}>
      <nav className={`backdrop-blur-2xl border shadow-2xl transition-all duration-500 relative overflow-hidden ${scrolled ? `bg-[#02040a]/90 border-sky-400/40 rounded-2xl mx-0 shadow-[0_0_30px_rgba(56,189,248,0.15)] ${styles['is-scrolled']} ${styles['navbar-container']}` : "bg-[#02040a]/80 border-sky-400/10 rounded-none"}`}>
        <div className={`absolute inset-0 bg-sky-400/[0.03] animate-aurora pointer-events-none ${styles['navbar-wrapper']}`} style={{ backgroundSize: '200% 100%' }} />
        <div className={`max-w-7xl mx-auto px-4 md:px-6 ${scrolled ? styles['navbar-content'] : ""}`}>
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer relative group transition-transform duration-300 hover:scale-105">
              <Link href="/" className="flex items-center gap-3">
                <div className="group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 rounded-xl">
                  <Image src="/logo_bright.webp" alt="" width={44} height={44} className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-500 drop-shadow-lg" priority />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white">CORTEX</span>
                  <span className="text-xs sm:text-sm font-light -mt-1 tracking-wider text-gray-400">AGENTS</span>
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.name} className="relative group transition-all duration-300 hover:-translate-y-0.5 hover:scale-105">
                    <Link href={item.href} prefetch={true} aria-current={isActive ? 'page' : undefined} className={`relative px-4 py-2.5 font-medium text-sm tracking-wide rounded-xl transition-all duration-300 block ${isActive ? "bg-sky-400/10 text-white shadow-lg shadow-sky-400/20" : "text-gray-100 hover:bg-sky-400/5 hover:text-white hover:shadow-md hover:shadow-sky-400/10"}`}>
                      {item.name}
                      {isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-sky-400" />}
                    </Link>
                  </div>
                );
              })}
              <div className="relative group transition-all duration-300 hover:-translate-y-0.5 hover:scale-105">
                <Link href="/contact" prefetch={true} className="ml-4 px-6 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:from-sky-500 hover:to-sky-700 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} />
                </Link>
              </div>
            </div>

            <button onClick={toggleMenu} className="md:hidden p-2.5 rounded-xl bg-sky-400/5 border border-sky-400/30 text-gray-100 hover:bg-sky-400/10 hover:border-sky-400/50 transition-all duration-300 relative overflow-hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              <div className="transition-all duration-200" style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'none' }}>
                {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>}
              </div>
            </button>
          </div>
        </div>

        <Suspense fallback={null}>
          <MobileMenu navItems={itemsWithIcons} pathname={pathname} isOpen={isMenuOpen} onClose={toggleMenu} />
        </Suspense>
      </nav>
    </div>
  );
}
