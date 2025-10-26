'use client';

import { ThemeProvider } from '@/lib/theme';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

