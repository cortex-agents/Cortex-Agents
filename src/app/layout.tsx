import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter_Tight, Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollController } from '@/components/ui/ScrollController';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from '@/lib/site';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cortex Agents | AI Automation & High-End Web Development",
    template: "%s | Cortex Agents",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen relative overflow-x-hidden`} suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative z-10">
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
            <ScrollController />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}