'use client';

import { ThemeProvider } from 'next-themes';

import { LocomotiveScrollProvider } from './locomotive';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
    </ThemeProvider>
  );
}
