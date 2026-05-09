"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X, Phone, Home, Settings, FolderOpen, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "px-4 pt-4 md:px-6 md:pt-6" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`backdrop-blur-2xl border shadow-2xl transition-all duration-500 relative overflow-hidden ${
          scrolled
            ? "bg-[#02040a]/90 border-sky-400/40 rounded-2xl mx-0 backdrop-saturate-150 shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            : "bg-[#02040a]/80 border-sky-400/10 rounded-none"
        }`}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-cyan-400/5 to-sky-400/5"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />

        {/* Multiple floating orbs for depth */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              scrolled ? "py-3 md:py-4" : "py-4 md:py-5"
            }`}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <Link href="/" className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/logo_bright.png"}
                    alt="Cortex Agents"
                    width={44}
                    height={44}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-500 drop-shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  style={{
                    transform: 'translateZ(10px)',
                  }}
                >
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    CORTEX
                  </span>
                  <span className="text-xs sm:text-sm font-light -mt-1 tracking-wider text-gray-400">
                    AGENTS
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 font-medium text-sm tracking-wide rounded-xl group transition-all duration-300 block ${
                        isActive
                          ? "bg-sky-400/10 text-white shadow-lg shadow-sky-400/20"
                          : "text-gray-100 hover:bg-sky-400/5 hover:text-white hover:shadow-md hover:shadow-sky-400/10"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-sky-400"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {/* 3D depth indicator on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-b from-sky-400/0 to-sky-400/0 group-hover:from-sky-400/10 group-hover:to-sky-400/20 transition-all duration-300 -z-10"
                        style={{
                          transform: 'translateZ(-5px)',
                        }}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <Link
                  href="/contact"
                  className="ml-4 px-6 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:from-sky-500 hover:to-sky-700 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <ArrowRight size={16} className="relative z-10" />
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      width: '200%',
                    }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-xl bg-sky-400/5 border border-sky-400/30 text-gray-100 hover:bg-sky-400/10 hover:border-sky-400/50 transition-all duration-300 relative overflow-hidden group"
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
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-sky-400/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ zIndex: -1 }}
              />
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
              className="md:hidden overflow-hidden bg-[#02040a]/95 backdrop-blur-xl border-t border-sky-400/20"
            >
              <div className="px-4 py-6 md:px-6">
                <div className="space-y-2 mb-6">
                  {NAV_ITEMS.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group border relative overflow-hidden ${
                            isActive
                              ? "bg-sky-400/10 border-sky-400/40 shadow-lg shadow-sky-400/20"
                              : "hover:bg-sky-400/5 border-transparent hover:border-sky-400/20"
                          }`}
                        >
                          <motion.div
                            className="p-2.5 rounded-lg bg-sky-400/10 text-sky-400 group-hover:bg-sky-400/20 border border-sky-400/30"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Icon size={18} />
                          </motion.div>
                          <span className="font-medium text-sm text-gray-100 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                          {/* Shine effect on hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                            style={{ width: '200%' }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="w-full py-4 px-6 rounded-xl font-medium text-sm flex justify-center items-center gap-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:from-sky-500 hover:to-sky-700 shadow-xl shadow-sky-400/30 transition-all relative overflow-hidden group"
                  >
                    <Phone size={18} className="relative z-10" />
                    <span className="font-semibold relative z-10">Contact Us</span>
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ width: '200%' }}
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
