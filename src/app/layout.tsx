import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import CursorGridWrapper from '@/components/CursorGridWrapper';

export const metadata: Metadata = {
  title: "Cortex Agents",
  description: "Your trusted partner for building high-end websites and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CursorGridWrapper />

        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
