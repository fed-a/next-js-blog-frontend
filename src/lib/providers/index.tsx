'use client';

import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';

import { LocomotiveScrollProvider } from './locomotive';
import SkeletonTheming from './skeleton-theme';

const YandexMetricaProvider = dynamic(() => import('./yandex-metrica'), {
  ssr: false,
}) as any; // TODO: something's wrong with ReactNode

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <SkeletonTheming>
          <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
        </SkeletonTheming>
      </ThemeProvider>
      <YandexMetricaProvider />
    </>
  );
}
