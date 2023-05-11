'use client';

import { ThemeProvider } from 'next-themes';

import { LocomotiveScrollProvider } from './locomotive';
import { YandexMetricaProvider } from './yandex-metrica';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <YandexMetricaProvider>
        <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
      </YandexMetricaProvider>
    </ThemeProvider>
  );
}
