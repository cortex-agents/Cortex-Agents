import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter_Tight, Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
  weight: ['400', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#F5F5F0' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cortexagents.com'), // Assuming domain
  title: {
    default: "Cortex Agents | AI Automation & High-End Web Development",
    template: "%s | Cortex Agents",
  },
  description: "Cortex Agents engineers intelligent software systems. From autonomous AI agents to high-performance Next.js web applications, we automate workflows and drive business growth.",
  keywords: ["AI Agents", "Next.js Development", "Web Development", "AI Chatbots", "Business Automation", "Software Engineering", "Karachi Web Agency"],
  authors: [{ name: "Cortex Agents" }],
  creator: "Cortex Agents",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cortexagents.com",
    siteName: "Cortex Agents",
    title: "Cortex Agents | AI Automation & High-End Web Development",
    description: "Cortex Agents engineers intelligent software systems. From autonomous AI agents to high-performance Next.js web applications.",
    images: [
      {
        url: "/logo_dark.png",
        width: 1200,
        height: 630,
        alt: "Cortex Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Agents | AI Automation & High-End Web Development",
    description: "Cortex Agents engineers intelligent software systems. From autonomous AI agents to high-performance Next.js web applications.",
    images: ["/logo_dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo_bright.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo_bright.png', type: 'image/png' },
    ],
    shortcut: '/logo_bright.png',
  },
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cortex Agents",
              "url": "https://cortexagents.com",
              "logo": "https://cortexagents.com/logo_dark.png",
              "description": "Cortex Agents engineers intelligent software systems. From autonomous AI agents to high-performance Next.js web applications.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-321-232-2687",
                "contactType": "customer service",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61582835397946",
                "https://www.instagram.com/cortex_agents"
              ]
            })
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Subtle noise grain texture overlay */}
          <div 
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
