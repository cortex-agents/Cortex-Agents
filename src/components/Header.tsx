
"use client";

import Link from "next/link";
import { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X, Phone, Home, Settings, FolderOpen, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const NAV_ITEMS = useMemo(
    () => [
      { name: "Home", path: "/", icon: Home },
      { name: "Services", path: "/services", icon: Settings },
      { name: "Portfolio", path: "/portfolio", icon: FolderOpen },
      { name: "Contact", path: "/contact", icon: Mail },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled ? "px-4 pt-4 md:px-6 md:pt-6" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`backdrop-blur-xl border shadow-2xl transition-all duration-500 ${
          scrolled
            ? "bg-black/20 border-black rounded-2xl mx-0"
            : "bg-black/40 border-gray-700/30 rounded-none"
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
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={scrolled ? "/logo_dark.png" : "/logo_bright.png"}
                    alt="Cortex Agents"
                    width={44}
                    height={44}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-500"
                  />
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500`} />
                </div>

                <motion.div 
                  className="flex flex-col"
                  animate={{
                    color: scrolled ? "#1f2937" : "#ffffff"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-500 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}>
                    CORTEX
                  </span>
                  <span className={`text-xs sm:text-sm font-light -mt-1 tracking-wider transition-colors duration-500 ${
                    scrolled ? "text-gray-600" : "text-gray-300"
                  }`}>
                    AGENTS
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={item.path}
                    className={`relative px-4 py-2.5 font-medium text-sm tracking-wide rounded-xl group transition-all duration-300 ${
                      pathname === item.path
                        ? scrolled 
                          ? "bg-white/20 text-gray-800 shadow-sm" 
                          : "bg-white/10 text-white shadow-lg"
                        : scrolled
                          ? "text-gray-700 hover:bg-gray-300 hover:text-gray-900" 
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-lg ${
                    scrolled
                      ? "bg-gray-800 text-white hover:bg-gray-700 shadow-gray-800/20"
                      : "bg-white text-gray-800 hover:bg-gray-100 shadow-white/20"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className={`md:hidden p-2.5 focus:outline-none backdrop-blur-sm rounded-xl transition-all duration-300 ${
                scrolled 
                  ? "text-gray-800 bg-gray-100 hover:bg-gray-200" 
                  : "text-white bg-white/10 hover:bg-white/20"
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
                  : "bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/30"
              }`}
            >
              <div className="px-4 py-6 md:px-6">
                {/* Navigation Items */}
                <div className="space-y-2 mb-6">
                  {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={closeMenu}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                            isActive
                              ? scrolled
                                ? "bg-gray-100 border border-gray-200"
                                : "bg-white/10 border border-white/20"
                              : scrolled
                                ? "hover:bg-gray-50 border border-transparent hover:border-gray-200"
                                : "hover:bg-white/5 border border-transparent hover:border-white/10"
                          }`}
                        >
                          <div
                            className={`p-2.5 rounded-lg transition-all duration-300 ${
                              isActive 
                                ? scrolled
                                  ? "bg-gray-800 text-white"
                                  : "bg-white text-gray-800"
                                : scrolled
                                  ? "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                                  : "bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-gray-300"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="flex-1">
                            <span
                              className={`font-medium text-sm ${
                                isActive 
                                  ? scrolled
                                    ? "text-gray-800"
                                    : "text-white"
                                  : scrolled
                                    ? "text-gray-700 group-hover:text-gray-900"
                                    : "text-gray-300 group-hover:text-white"
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                          {isActive && (
                            <motion.div
                              className={`h-2 w-2 rounded-full ${
                                scrolled ? "bg-gray-800" : "bg-white"
                              }`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className={`relative w-full py-4 px-6 rounded-xl font-medium text-sm transition-all flex justify-center items-center gap-3 shadow-xl ${
                        scrolled
                          ? "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white shadow-gray-800/20"
                          : "bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 shadow-white/20"
                      }`}
                    >
                      <Phone size={18} />
                      <span className="font-semibold">Get Free Quote</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center mt-6 pt-4 border-t border-gray-200/20"
                >
                  <span className={`text-xs ${
                    scrolled ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Professional AI Solutions
                  </span>
                  <span className={`text-xs mt-1 ${
                    scrolled ? "text-gray-400" : "text-gray-500"
                  }`}>
                    © 2025 Cortex Agents
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;