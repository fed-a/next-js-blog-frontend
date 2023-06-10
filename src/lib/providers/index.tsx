'use client';

import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';

// import { LocomotiveScrollProvider } from './locomotive';
import SkeletonTheming from './skeleton-theme';

const YandexMetricaProvider = dynamic(() => import('./yandex-metrica'), {
  ssr: false,
}) as any; // TODO: something's wrong with ReactNode

const LAZY_LOADING_BLUR_OPACITY = `
document.querySelectorAll('.af-img__picture-container').forEach((container) => {
  const img = container.querySelector('img');
  if (img?.complete) {
    container.classList.remove('blur-xl');
    container.children[0].classList.remove('opacity-0');
  } else {
    img.addEventListener('load', () => {
      container.classList.remove('blur-xl');
      container.children[0].classList.remove('opacity-0');
    })
  }
})`;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <SkeletonTheming>
          {/* <LocomotiveScrollProvider> */}
          {children}
          {/* </LocomotiveScrollProvider> */}
        </SkeletonTheming>
      </ThemeProvider>
      <YandexMetricaProvider />
      <script
        dangerouslySetInnerHTML={{
          __html: LAZY_LOADING_BLUR_OPACITY,
        }}
      />
    </>
  );
}
