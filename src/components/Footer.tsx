import Link from 'next/link';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from './ui/BrandIcons';
import { Section } from './ui/Section';
import { FadeInUp } from './ui/Animations';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/learn' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, link: 'https://www.facebook.com/profile.php?id=61582835397946', label: 'Facebook' },
    { icon: WhatsAppIcon, link: 'https://wa.me/923212322687', label: 'WhatsApp' },
    { icon: InstagramIcon, link: 'https://www.instagram.com/cortex_agents?igsh=dWI0bHhkZTZ4OGY2', label: 'Instagram' },
    { icon: LinkedInIcon, link: 'https://www.linkedin.com/company/cortex-agents/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <Section spacing="standard">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <FadeInUp className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase">
                Cortex<br />
                <span className="text-accent italic font-serif tracking-normal">Agents.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-sm mb-8 md:mb-12">
                Engineering intelligent systems, autonomous AI agents, and high-performance digital infrastructure for ambitious businesses.
              </p>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, link, label }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                  className="text-muted-foreground hover:text-foreground hover:text-accent transition-colors duration-150 group"
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </FadeInUp>

          {/* Quick Links */}
          <FadeInUp delay={0.1} className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center text-sm font-bold hover:text-accent transition-colors duration-150 uppercase tracking-wider text-foreground"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-150 ease-fast group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Contact */}
          <FadeInUp delay={0.15} className="lg:col-span-3">
            <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-8">
              Contact
            </h3>
            <div className="space-y-8">
              <div>
                <span className="block font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase">Email</span>
                <a href="mailto:cortexagents@gmail.com" className="text-sm font-mono font-bold hover:text-accent transition-colors duration-150 tracking-wider uppercase block text-foreground">
                  CORTEXAGENTS@GMAIL.COM
                </a>
              </div>
              <div>
                <span className="block font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase">WhatsApp</span>
                <a href="https://wa.me/923212322687" target="_blank" rel="noopener noreferrer" className="text-sm font-mono font-bold hover:text-accent transition-colors duration-150 tracking-wider block text-foreground">
                  +92 321 232 2687
                </a>
              </div>
              <div>
                <span className="block font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase">Location</span>
                <p className="text-sm font-mono font-bold text-muted-foreground tracking-wider uppercase">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Section>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 px-6 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-wider">
          <p>
            &copy; {currentYear} CORTEX AGENTS. ALL RIGHTS RESERVED.
          </p>
          <Link
            href="/privacy"
            className="group relative inline-flex items-center hover:text-accent transition-colors duration-150"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-150 ease-fast group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
