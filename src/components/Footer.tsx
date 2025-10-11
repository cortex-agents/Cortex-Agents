'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-gray-300">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/* Brand Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_bright.png"
              alt="Cortex Agents Logo"
              width={50}
              height={50}
              className="rounded-xl object-contain drop-shadow-md"
            />
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Cortex Agents
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Empowering businesses with intelligent automation, AI innovation, and next-generation digital solutions.
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: FaFacebookF, link: '#', label: 'Facebook' },
              { icon: FaTwitter, link: '#', label: 'Twitter' },
              { icon: FaLinkedinIn, link: '#', label: 'LinkedIn' },
              { icon: FaInstagram, link: '#', label: 'Instagram' },
            ].map(({ icon: Icon, link, label }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-white transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-5 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: '#60a5fa' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:text-blue-400 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-5 text-white">Get in Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="block text-gray-500 text-sm">Email</span>
              <a href="mailto:cortexagents@gmail.com" className="hover:text-blue-400 transition-colors">
                cortexagents@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-gray-500 text-sm">Phone</span>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                +123 456 7890
              </a>
            </li>
            <li>
              <span className="block text-gray-500 text-sm">Address</span>
              Karachi, Pakistan
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Cortex Agents</span>. All Rights Reserved.  
        <span className="hidden md:inline"> | Designed with 💡 by Cortex Design Studio</span>
      </motion.div>
    </footer>
  );
}
