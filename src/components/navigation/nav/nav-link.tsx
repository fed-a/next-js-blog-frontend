'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

import { Locale } from '@/lib/i18n';
import { Routes } from '@/lib/routes';

import { Link } from '../../core';

interface NavLinkProps {
  route: Routes;
  children?: React.ReactNode;
  locale?: Locale;
}

export function NavLink(props: NavLinkProps) {
  const { route, locale, children } = props;
  const pathname = usePathname();

  const [isActive, setIsActive] = React.useState(false);

  const localeRoute = `/${locale}${route === '/' ? '' : route}`;

  useEffect(() => {
    setIsActive(pathname.endsWith(localeRoute));
  }, [localeRoute, pathname, route]);

  return (
    <Link
      href={route}
      active={isActive}
      disabled={isActive}
      locale={locale}
      underlined={isActive ? 'never' : 'hover'}
    >
      {children}
    </Link>
  );
}
