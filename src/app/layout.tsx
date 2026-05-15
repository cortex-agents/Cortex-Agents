import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MouseSpotlight from '@/components/ui/MouseSpotlight';
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#02040a',
};

export const metadata: Metadata = {
  title: "Cortex Agents | AI-Powered Solutions",
  description: "Cortex Agents: Building high-end websites, intelligent chatbots, and autonomous AI agents to automate workflows and drive business growth.",
  keywords: ["AI Agents", "Next.js Development", "Web Development", "AI Chatbots", "Business Automation"],
  openGraph: {
    title: "Cortex Agents",
    description: "Your trusted partner for building high-end websites and AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <title>Cortex Agents | AI-Powered Solutions</title>
        <meta name="description" content="Cortex Agents: Building high-end websites, intelligent chatbots, and autonomous AI agents to automate workflows and drive business growth." />
      </head>
      <body className={dmSans.className} suppressHydrationWarning={true}>
        {/* Ambient background glow - pure CSS, no JS/WebGL */}
        <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10">
          <MouseSpotlight />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}


