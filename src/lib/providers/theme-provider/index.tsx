'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext<'light' | 'dark' | null>(null);

export function ThemeProviderDepr({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
