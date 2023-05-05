/* eslint-disable consistent-return */
import { parse } from 'accept-language-parser';
import { NextRequest, NextResponse } from 'next/server';

import { i18n, Locale } from '@/lib/i18n';

const getLangFromPathname = (pathname: string): Locale | null => {
  const lang = pathname.toLowerCase().split('/')[1];
  return i18n.locales.find((locale) => locale.toLowerCase() === lang) ?? null;
};

const getLangFromLocaleStandart = (locale: string): Locale => {
  return locale.split('-')[0] as Locale;
};

const findBestMatchingLocale = (acceptLangHeader: string) => {
  const parsedLangs = parse(acceptLangHeader);

  for (let i = 0; i < parsedLangs.length; i += 1) {
    const parsedLang = parsedLangs[i];
    const matchedLocale = i18n.locales.find((locale) => {
      const lang = getLangFromLocaleStandart(locale);
      return parsedLang.code === lang;
    });
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  return i18n.defaultLocale;
};

function shouldNotRedirect(pathname: string, localeFromPathname: string | null) {
  return localeFromPathname || pathname.startsWith('/assets') || pathname.startsWith('/favicon');
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeFromPathname = getLangFromPathname(pathname);
  if (shouldNotRedirect(pathname, localeFromPathname)) {
    return;
  }

  const userLocale = findBestMatchingLocale(
    request.headers.get('Accept-Language') || i18n.defaultLocale,
  );
  if (!localeFromPathname) {
    return NextResponse.redirect(new URL(`/${userLocale}`, request.nextUrl));
  }
  const pathnameWithoutLocale = pathname.replace(`/${localeFromPathname}`, `/${userLocale}`);
  return NextResponse.redirect(new URL(pathnameWithoutLocale, request.nextUrl));
}

export const config = {
  // do not localize next.js paths
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
