import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cortex Agents",
  description: "Your trusted partner for building high-end websites and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className={dmSans.className}>
        <div className="relative z-10">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
