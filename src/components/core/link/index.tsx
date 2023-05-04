'use client';

import anime, { AnimeInstance } from 'animejs';
import LinkNext from 'next/link';
import React, { memo, useCallback, useEffect, useRef } from 'react';

import { Locale } from '@lib/i18n';

import { addLocale } from './lib';
import './link.css';

interface LinkProps {
  href: string;
  locale?: Locale;
  children: React.ReactNode;
  linkIcon?: boolean;
  underline?: 'always' | 'hover' | 'never';
}

function LinkComponent(props: LinkProps) {
  const { href, locale, children, linkIcon, underline = 'never' } = props;
  const lineRef = useRef<HTMLHRElement>(null);
  const lineAnimation = useRef<AnimeInstance | null>(null);

  useEffect(() => {
    if (lineRef.current) {
      if (underline === 'hover') {
        lineAnimation.current = anime({
          targets: lineRef.current,
          width: ['0%', '100%'],
          direction: 'normal',
          loop: false,
          autoplay: false,
          easing: 'easeOutElastic(1, .6)',
        });
        lineRef.current.setAttribute('style', 'width: 0');
      }
      if (underline === 'always') {
        lineRef.current.setAttribute('style', 'width: 100%');
      }
    }
  }, [underline]);

  const start = useCallback(() => {
    if (lineAnimation.current?.reversed) {
      lineAnimation.current.reverse();
    }
    lineAnimation.current?.restart();
  }, []);

  const stop = useCallback(() => {
    lineAnimation.current?.reverse();
  }, []);

  const onMouseEnter = useCallback(() => {
    console.log('mouse enter');
    if (underline === 'hover') {
      start();
    }
  }, [start, underline]);
  const onMouseLeave = useCallback(() => {
    console.log('mouse leave');
    if (underline === 'hover') {
      stop();
    }
  }, [stop, underline]);

  return (
    <LinkNext
      className="af-link"
      href={addLocale(href, locale)}
      locale={locale}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {linkIcon && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M9 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V9M8 10L17 1M17 1H12M17 1V6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <hr className="af-link__line" ref={lineRef} style={{ width: 0 }} />
    </LinkNext>
  );
}

export const Link = memo(LinkComponent);
