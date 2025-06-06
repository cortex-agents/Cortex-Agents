'use client'
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl mx-auto text-center"
      >
        {/* Logo & Brand */}
        <motion.h2 
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          MUR Crafts Solution
        </motion.h2>
        
        {/* Navigation Links */}
        <motion.ul 
          className="flex justify-center space-x-6 text-lg font-medium my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.li 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        
        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-6 text-2xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
            <motion.a 
              key={index} 
              whileHover={{ scale: 1.2 }} 
              className="cursor-pointer hover:text-blue-500 transition"
              href="#"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
        
        {/* Copyright */}
        <motion.p 
          className="mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} MUR Crafts Solution. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
