import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './ui/BrandIcons';

// Floating background shapes - Pure CSS
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
    <div
      className={`${className} animate-fade-in`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
        transform: `rotate(${rotate}deg)`
      }}
    >
      <div
        className="relative animate-float-slow"
        style={{
          width,
          height,
          willChange: 'transform',
          animationDelay: `${delay}s`
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo_bright.webp"
                    alt="Cortex Agents Logo"
                    width={50}
                    height={50}
                    className="rounded-xl object-contain drop-shadow-md"
                  />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-white">
                    Cortex Agents
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Empowering businesses with intelligent automation, AI innovation, and next-generation digital solutions.
                </p>
                <div className="flex gap-3 mt-4">
                  {[
                    { icon: FacebookIcon, link: 'https://www.facebook.com/profile.php?id=61582835397946', label: 'Facebook' },
                    { icon: WhatsAppIcon, link: 'https://wa.me/923212322687', label: 'Whatsapp' },
                    { icon: InstagramIcon, link: 'https://www.instagram.com/cortex_agents?igsh=dWI0bHhkZTZ4OGY2', label: 'Instagram' },
                  ].map(({ icon: Icon, link, label }, index) => (
                    <div key={index} className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${label} page`}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all shadow-lg hover:shadow-[#38bdf8]/30"
                      >
                        <div aria-hidden="true">
                          <Icon size={20} />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated blob */}
              <span
                className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px] animate-pulse"
                style={{ willChange: 'transform, opacity' }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative">
                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Quick Links</h3>
                <ul className="space-y-4 text-slate-300">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Services', href: '/services' },
                    { name: 'Projects', href: '/portfolio' },
                    { name: 'Contact', href: '/contact' }
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="transition-transform duration-300 hover:translate-x-1"
                    >
                      <Link href={item.href} prefetch={true} className="text-lg py-2 hover:text-[#38bdf8] transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated blob */}
              <span
                className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px] animate-pulse"
                style={{ willChange: 'transform, opacity', animationDelay: '1s' }}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-xl hover:border-[#38bdf8]/40 transition-all">
              {/* Glow effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Skewed gradient panel */}
              <div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                style={{ transformOrigin: 'left' }}
              />

              <address className="relative not-italic">
                <h3 className="text-lg sm:text-xl font-semibold mb-5 text-white">Get in Touch</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <span className="block text-slate-500 text-sm mb-1">Email</span>
                    <a href="mailto:cortexagents@gmail.com" className="hover:text-[#38bdf8] transition-colors">
                      cortexagents@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-slate-500 text-sm mb-1">WhatsApp</span>
                    <Link
                      href="https://wa.me/923212322687"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp"
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
              </address>

              {/* Animated blob */}
              <span
                className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px] animate-pulse"
                style={{ willChange: 'transform, opacity', animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-[#38bdf8]/20" />

      {/* Bottom Bar */}
      <div
        className="relative z-10 py-6 text-center text-sm text-slate-500 animate-fade-in"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        © {currentYear} <span className="text-slate-300 font-medium">Cortex Agents</span>. All Rights Reserved.
        <span className="hidden md:inline"> | Designed with 💡 by Cortex Design Studio</span>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
    </footer>
  );
}
