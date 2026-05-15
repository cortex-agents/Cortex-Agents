"use client";

import Link from "next/link";
import React from "react";

// Inline SVG for minimal hydration
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

interface NavItem {
  name: string;
  href: string;
  icon: React.FC<{ size?: number }>;
}

interface MobileMenuProps {
  navItems: NavItem[];
  pathname: string;
  isOpen: boolean;
}

const MobileMenu = ({ navItems, pathname, isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden overflow-hidden bg-[#02040a]/95 backdrop-blur-xl border-t border-sky-400/20 transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 py-6 md:px-6">
        <div className="space-y-2 mb-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <div
                key={item.name}
                className={`transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={item.href}
                  prefetch={true}
                  className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group border relative overflow-hidden ${
                    isActive
                      ? "bg-sky-400/10 border-sky-400/40 shadow-lg shadow-sky-400/20"
                      : "hover:bg-sky-400/5 border-transparent hover:border-sky-400/20"
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 border border-sky-400/30 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    <Icon />
                  </div>
                  <span className="font-medium text-sm text-gray-100 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div
          className={`transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <Link
            href="/contact"
            prefetch={true}
            className="w-full py-4 px-6 rounded-xl font-medium text-sm flex justify-center items-center gap-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:from-sky-500 hover:to-sky-700 shadow-xl shadow-sky-400/30 transition-all relative overflow-hidden group"
          >
            <div aria-hidden="true">
              <PhoneIcon />
            </div>
            <span className="font-semibold relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
