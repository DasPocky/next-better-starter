import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: process.env.APP_NAME ?? 'App Name',
  description:
    'Starter Template mit Next.js 15, Better-Auth, Drizzle ORM und Tailwind CSS',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
