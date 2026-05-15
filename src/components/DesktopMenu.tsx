"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

interface DesktopMenuProps {
  navItems: NavItem[];
}

const DesktopMenu = ({ navItems }: DesktopMenuProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        if (isScrolled) {
          document.documentElement.classList.add("is-scrolled");
        } else {
          document.documentElement.classList.remove("is-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    if (window.scrollY > 20) {
      document.documentElement.classList.add("is-scrolled");
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={item.name} className="relative group transition-all duration-300 hover:-translate-y-0.5 hover:scale-105">
            <Link
              href={item.href}
              prefetch={true}
              className={`relative px-4 py-2.5 font-medium text-sm tracking-wide rounded-xl transition-all duration-300 block ${
                isActive
                  ? "bg-sky-400/10 text-white shadow-lg shadow-sky-400/20"
                  : "text-gray-100 hover:bg-sky-400/5 hover:text-white hover:shadow-md hover:shadow-sky-400/10"
              }`}
            >
              {item.name}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-sky-400" />
              )}
            </Link>
          </div>
        );
      })}

      {/* CTA */}
      <div className="relative group transition-all duration-300 hover:-translate-y-0.5 hover:scale-105">
        <Link
          href="/contact"
          prefetch={true}
          className="ml-4 px-6 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:from-sky-500 hover:to-sky-700 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">Contact Us</span>
          <div aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} />
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
