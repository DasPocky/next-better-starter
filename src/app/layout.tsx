import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: process.env.APP_NAME ?? 'App Name',
  description:
    'Starter Template mit Next.js 15, Better‑Auth, Drizzle ORM und Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}