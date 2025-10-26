'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-gray-300">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Cortex Agents
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Empowering businesses with intelligent automation, AI innovation, and next-generation digital solutions.
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: FaFacebookF, link: '#', label: 'Facebook' },
              { icon: RiWhatsappFill, link: 'https://wa.me/923212322687', label: 'Whatsapp' },
              { icon: FaLinkedinIn, link: '#', label: 'LinkedIn' },
              { icon: FaInstagram, link: '#', label: 'Instagram' },
            ].map(({ icon: Icon, link, label }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.15 }}>
                <Link
                  href={link}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Projects', href: '/portfolio' },
              { name: 'Contact', href: '/contact' }
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: '#60a5fa' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={item.href} className="hover:text-blue-400 transition-colors">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Get in Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="block text-gray-500 text-sm">Email</span>
              <Link
                href="mailto:cortexagents@gmail.com?subject=Inquiry&body=Hello%20Cortex%20Agents,"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                cortexagents@gmail.com
              </Link>
            </li>
            <li>
              <span className="block text-gray-500 text-sm">Whatsapp</span>
              <Link
                href="https://wa.me/923212322687"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                +92 3212322687
              </Link>
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
