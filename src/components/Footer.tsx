import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './ui/BrandIcons';

// Inline SVG icons
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const ArrowUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>;

// Floating particle
function Particle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <div
      className="absolute w-1 h-1 bg-[#38bdf8] rounded-full animate-float-particle opacity-60"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, link: 'https://www.facebook.com/profile.php?id=61582835397946', label: 'Facebook' },
    { icon: WhatsAppIcon, link: 'https://wa.me/923212322687', label: 'WhatsApp' },
    { icon: InstagramIcon, link: 'https://www.instagram.com/cortex_agents?igsh=dWI0bHhkZTZ4OGY2', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: MailIcon, label: 'Email', value: 'cortexagents@gmail.com', href: 'mailto:cortexagents@gmail.com' },
    { icon: PhoneIcon, label: 'WhatsApp', value: '+92 321 2322687', href: 'https://wa.me/923212322687' },
    { icon: MapPinIcon, label: 'Location', value: 'Karachi, Pakistan', href: '#' },
  ];

  return (
    <footer className="relative bg-[#02040a] text-slate-300 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#0ea5e9]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} delay={i * 0.3} x={Math.random() * 100} y={Math.random() * 100} />
        ))}
      </div>

      {/* Top divider with glow */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#38bdf8]/10 to-transparent blur-sm" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="relative group h-full">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
              <div className="relative h-full bg-[#02040a]/90 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:border-transparent overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#38bdf8]/30 rounded-tl-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#38bdf8]/60" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#38bdf8]/30 rounded-br-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#38bdf8]/60" />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl transition-all duration-700 group-hover:skew-x-0 group-hover:w-full" style={{ transformOrigin: 'left' }} />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src="/logo_bright.webp"
                        alt="Cortex Agents Logo"
                        width={56}
                        height={56}
                        className="rounded-xl object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-xl bg-[#38bdf8]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-white">
                      Cortex Agents
                    </h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    Empowering businesses with intelligent automation, AI innovation, and next-generation digital solutions.
                  </p>
                  <div className="flex gap-3 pt-2">
                    {socialLinks.map(({ icon: Icon, link, label }, index) => (
                      <Link
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${label} page`}
                        className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-[#38bdf8]/30 cursor-pointer"
                      >
                        <div aria-hidden="true"><Icon size={18} /></div>
                      </Link>
                    ))}
                  </div>
                </div>

                <span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:top-[-15px] group-hover:right-[-15px] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="relative group h-full">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0ea5e9] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
              <div className="relative h-full bg-[#02040a]/90 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:border-transparent overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#0ea5e9]/30 rounded-tl-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#0ea5e9]/60" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#0ea5e9]/30 rounded-br-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#0ea5e9]/60" />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#0ea5e9]/10 to-[#38bdf8]/5 transform skew-x-12 rounded-2xl transition-all duration-700 group-hover:skew-x-0 group-hover:w-full" style={{ transformOrigin: 'left' }} />

                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold mb-6 text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#38bdf8]"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                    </span>
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          prefetch={true}
                          className="group/link flex items-center gap-3 text-slate-400 hover:text-[#38bdf8] transition-all duration-300 py-2 cursor-pointer"
                        >
                          <span className="w-6 h-6 rounded-md bg-[#38bdf8]/10 flex items-center justify-center opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#38bdf8]"><path d="m9 18 6-6-6-6"/></svg>
                          </span>
                          <span className="text-sm sm:text-base font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:opacity-100 group-hover:bottom-[-15px] group-hover:left-[-15px] animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="relative group h-full">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#06b6d4] via-[#38bdf8] to-[#06b6d4] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-border-flow" style={{ backgroundSize: '200% 200%' }} />
              <div className="relative h-full bg-[#02040a]/90 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:border-transparent overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#06b6d4]/30 rounded-tl-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#06b6d4]/60" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#06b6d4]/30 rounded-br-2xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-[#06b6d4]/60" />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#06b6d4]/10 to-[#38bdf8]/5 transform skew-x-12 rounded-2xl transition-all duration-700 group-hover:skew-x-0 group-hover:w-full" style={{ transformOrigin: 'left' }} />

                <address className="relative not-italic">
                  <h3 className="text-lg sm:text-xl font-bold mb-6 text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#06b6d4]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#06b6d4]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    Get in Touch
                  </h3>
                  <ul className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          target={item.href !== '#' ? '_blank' : undefined}
                          rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 group/contact hover:text-[#38bdf8] transition-all duration-300 cursor-pointer"
                        >
                          <span className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center group-hover/contact:bg-[#38bdf8]/20 group-hover/contact:border-[#38bdf8]/50 group-hover/contact:scale-110 transition-all duration-300">
                            <item.icon />
                          </span>
                          <div>
                            <span className="block text-xs text-slate-500 mb-0.5">{item.label}</span>
                            <span className="text-sm font-medium">{item.value}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </address>

                <span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#06b6d4]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:opacity-100 group-hover:top-[-15px] group-hover:right-[-15px] animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with animated gradient */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#38bdf8]/30 to-transparent" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            &copy; {currentYear} <span className="text-slate-300 font-medium">Cortex Agents</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <span className="hidden md:inline">Designed with passion by Cortex Design Studio</span>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:scale-110 transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </footer>
  );
}
