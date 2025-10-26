import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JARUP - Learn Japanese & Russian',
  description: 'Master Japanese and Russian with interactive lessons, games, and progress tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}

