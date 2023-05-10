'use client';

import type LocomotiveScroll from 'locomotive-scroll';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useMemo, useRef, useState } from 'react';

import { i18n } from '@/lib/i18n';

const IGNORE_PATHS = i18n.locales.map((locale) => `/${locale}/blog`);

export const LocomotiveScrollContext = createContext<LocomotiveScroll | null>(null);

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [scrollRef, setScrollRef] = useState<LocomotiveScroll | null>(null);

  const isNotSmooth = useMemo(
    () => IGNORE_PATHS.some((ignorePath) => pathname.startsWith(ignorePath)),
    [pathname],
  );

  useEffect(() => {
    if (isNotSmooth) {
      return () => {};
    }
    let scroll: LocomotiveScroll | null = null;
    import('locomotive-scroll').then((module) => {
      if (!divRef.current) {
        return;
      }
      const initPosition = { x: window.scrollX, y: window.scrollY };
      const ResolvedLocomotiveScroll = module.default;
      scroll = new ResolvedLocomotiveScroll({
        el: divRef.current,
        smooth: true,
        lerp: 0.1,
        initPosition,
        getSpeed: true,
        smartphone: {
          smooth: true,
        },
      });
      setScrollRef(scroll);
    });
    return () => {
      scroll?.destroy();
    };
  }, [isNotSmooth, pathname]);

  return (
    <LocomotiveScrollContext.Provider value={scrollRef}>
      <div data-scroll-container data-scroll-offset="100,100" ref={divRef}>
        <div className="max-w-[100dvw] overflow-hidden">{children}</div>
      </div>
    </LocomotiveScrollContext.Provider>
  );
}
