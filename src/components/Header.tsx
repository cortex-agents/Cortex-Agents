"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X, Phone, Home, Settings, FolderOpen, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = useMemo(
    () => [
      { name: "Home", href: "/", icon: Home },
      { name: "Services", href: "/services", icon: Settings },
      { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
      { name: "About Us", href: "/about", icon: Mail },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled ? "px-4 pt-4 md:px-6 md:pt-6" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`backdrop-blur-2xl border shadow-2xl transition-all duration-500 ${
          scrolled
            ? "bg-gray-800/50 border-white/30 rounded-2xl mx-0 backdrop-saturate-150"
            : "bg-gray-900/60 border-gray-600/40 rounded-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              scrolled ? "py-3 md:py-4" : "py-4 md:py-5"
            }`}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/">
                <Image
                  src={"/logo_bright.png"}
                  alt="Cortex Agents"
                  width={44}
                  height={44}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-500"
                />
              </Link>
              <motion.div
                className="flex flex-col"
                animate={{ color: scrolled ? "#1f2937" : "#ffffff" }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight ${
                    scrolled ? "text-gray-400" : "text-white"
                  }`}
                >
                  CORTEX
                </span>
                <span
                  className={`text-xs sm:text-sm font-light -mt-1 tracking-wider ${
                    scrolled ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  AGENTS
                </span>
              </motion.div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <Link key={item.name} href={item.href} className={`relative px-4 py-2.5 font-medium text-sm tracking-wide rounded-xl group transition-all duration-300 ${
                    scrolled
                      ? "text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}>
                  {item.name}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className={`ml-4 px-6 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 shadow-lg transition-all duration-300 ${
                  scrolled
                    ? "bg-gray-800 text-white hover:bg-gray-700 shadow-gray-800/20"
                    : "bg-white text-gray-800 hover:bg-gray-50 shadow-white/20"
                }`}
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={toggleMenu}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-gray-800 bg-gray-100 hover:bg-gray-200"
                  : "text-white bg-white/15 hover:bg-white/25"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden ${
                scrolled
                  ? "bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl"
                  : "bg-gray-800/95 backdrop-blur-xl border-t border-gray-600/40"
              }`}
            >
              <div className="px-4 py-6 md:px-6">
                <div className="space-y-2 mb-6">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                          scrolled
                            ? "hover:bg-gray-50 border border-transparent hover:border-gray-200"
                            : "hover:bg-white/10 border border-transparent hover:border-white/15"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-lg ${
                            scrolled
                              ? "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                              : "bg-white/15 text-gray-300 group-hover:bg-white/25"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <span
                          className={`font-medium text-sm ${
                            scrolled
                              ? "text-gray-700 group-hover:text-gray-900"
                              : "text-gray-200 group-hover:text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-xl font-medium text-sm flex justify-center items-center gap-3 shadow-xl transition-all ${
                    scrolled
                      ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800"
                      : "bg-gradient-to-r from-white to-gray-100 text-gray-800 hover:from-gray-100 hover:to-gray-200"
                  }`}
                >
                  <Phone size={18} />
                  <span className="font-semibold"> Contact Us </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
