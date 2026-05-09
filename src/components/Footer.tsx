'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

// Floating background shapes
function FloatingShape({
  className,
  delay = 0,
  width = 300,
  height = 80,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
      </motion.div>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#02040a] text-slate-300 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape delay={0.2} width={400} height={100} rotate={8} className="absolute left-[-5%] top-[20%]" />
        <FloatingShape delay={0.4} width={300} height={80} rotate={-12} className="absolute right-[-5%] top-[60%]" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <motion.div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo_bright.png"
                    alt="Cortex Agents Logo"
                    width={50}
                    height={50}
                    className="rounded-xl object-contain drop-shadow-md"
                  />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-white">
                    Cortex Agents
                  </h2>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Empowering businesses with intelligent automation, AI innovation, and next-generation digital solutions.
                </p>
                <div className="flex gap-3 mt-4">
                  {[
                    { icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=61582835397946', label: 'Facebook' },
                    { icon: RiWhatsappFill, link: 'https://wa.me/923212322687', label: 'Whatsapp' },
                    { icon: FaInstagram, link: 'https://www.instagram.com/cortex_agents?igsh=dWI0bHhkZTZ4OGY2', label: 'Instagram' },
                  ].map(({ icon: Icon, link, label }, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all shadow-lg hover:shadow-[#38bdf8]/30"
                      >
                        <Icon size={18} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated blob */}
              <motion.span
                className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <motion.div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative">
                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Quick Links</h3>
                <ul className="space-y-3 text-slate-400">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Services', href: '/services' },
                    { name: 'Projects', href: '/portfolio' },
                    { name: 'Contact', href: '/contact' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link href={item.href} className="hover:text-[#38bdf8] transition-colors">
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Animated blob */}
              <motion.span
                className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <motion.div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative">
                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Get in Touch</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <span className="block text-slate-500 text-sm mb-1">Email</span>
                    <span className="hover:text-[#38bdf8] transition-colors">
                      cortexagents@gmail.com
                    </span>
                  </li>
                  <li>
                    <span className="block text-slate-500 text-sm mb-1">WhatsApp</span>
                    <Link
                      href="https://wa.me/923212322687"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#38bdf8] transition-colors"
                    >
                      +92 321 2322687
                    </Link>
                  </li>
                  <li>
                    <span className="block text-slate-500 text-sm mb-1">Address</span>
                    Karachi, Pakistan
                  </li>
                </ul>
              </div>

              {/* Animated blob */}
              <motion.span
                className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-[#38bdf8]/20" />

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 py-6 text-center text-sm text-slate-500"
      >
        © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Cortex Agents</span>. All Rights Reserved.
        <span className="hidden md:inline"> | Designed with 💡 by Cortex Design Studio</span>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </footer>
  );
}
