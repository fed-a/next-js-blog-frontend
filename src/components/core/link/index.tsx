'use client';

import anime, { AnimeInstance } from 'animejs';
import LinkNext from 'next/link';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

import { addLocale, getLinkAnimeInParams, getLinkAnimeOutParams } from './lib';
import './link.css';

interface LinkProps {
  href: string;
  locale?: Locale;
  children: React.ReactNode;
  linkIcon?: boolean;
  underlined?: 'always' | 'hover' | 'hover-static' | 'never';
  active?: boolean;
  disabled?: boolean;
}

function LinkComponent(props: LinkProps) {
  const {
    href,
    locale,
    children,
    linkIcon,
    underlined: underline = 'never',
    active,
    disabled,
  } = props;
  const lineRef = useRef<HTMLHRElement>(null);
  const lineAnimeIn = useRef<AnimeInstance | null>(null);
  const lineAnimeOut = useRef<AnimeInstance | null>(null);

  const [isHover, setIsHover] = useState(false);

  const isAnimatedUnderlinOnHover = useMemo(() => underline === 'hover', [underline]);
  const isNeverAnimatedUnderline = useMemo(() => underline === 'never', [underline]);

  useEffect(() => {
    if (isAnimatedUnderlinOnHover) {
      lineAnimeIn.current = anime(getLinkAnimeInParams(lineRef.current));
      lineAnimeOut.current = anime(getLinkAnimeOutParams(lineRef.current));
      lineRef.current?.setAttribute('style', 'width: 0%;');
    }
  }, [isAnimatedUnderlinOnHover]);

  const handleMouseIn = useCallback(() => {
    setIsHover(true);
    if (isAnimatedUnderlinOnHover && lineRef.current) {
      lineAnimeOut.current?.pause();
      lineAnimeIn.current?.restart();
    }
  }, [isAnimatedUnderlinOnHover]);

  const handleMouseOut = useCallback(() => {
    setIsHover(false);
    if (isAnimatedUnderlinOnHover && lineRef.current) {
      lineAnimeIn.current?.pause();
      lineAnimeOut.current?.restart();
    }
  }, [isAnimatedUnderlinOnHover]);

  const className = useMemo(
    () =>
      cn('af-link', {
        active,
        disabled,
        'animated-underline': isAnimatedUnderlinOnHover,
        hover: isHover,
      }),
    [active, disabled, isAnimatedUnderlinOnHover, isHover],
  );

  if (disabled) {
    return (
      <span className={className} aria-disabled>
        {children}
      </span>
    );
  }

  return (
    <LinkNext
      className={className}
      href={addLocale(href, locale)}
      locale={locale}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
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
      {!isNeverAnimatedUnderline && (
        <hr
          className="af-link__line"
          ref={lineRef}
          style={{ width: underline === 'always' ? '100%' : '0%' }}
        />
      )}
    </LinkNext>
  );
}

export const Link = memo(LinkComponent);
