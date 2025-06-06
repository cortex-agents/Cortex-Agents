// Header.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => setLogoClicked(false), 1000);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container  px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            animate={logoClicked ? { scale: [1, 1.5, 1], rotate: [0, 360, 0] } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo.png" alt="Mur Craft Solutions Logo" height={60} width={60} />
              <span className="text-2xl font-bold">Crafts Solutions</span>
            </Link>


          </motion.div>
        </motion.div>

        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="hidden lg:flex space-x-8 text-lg">
          {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link key={item} href="#" className="hover:text-gray-400 transition duration-300">{item}</Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center space-y-6 text-2xl"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl">
              <X size={32} />
            </button>
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 * (index + 1) }}
              >
                <Link href="#" className="hover:text-gray-400 transition duration-300" onClick={toggleMenu}>{item}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

