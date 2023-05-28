import { LocaleParam } from '@/app/[lang]/types';

import { Link } from '../core';

import { NavigationLinks } from './nav';
import './navigation.css';

export async function Navigation({ lang }: LocaleParam) {
  return (
    <header className="af-nav">
      <Link href="/" locale={lang}>
        <div className="af-nav__logo" />
      </Link>
      {/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */}
      {/* @ts-expect-error Async Server Component */}
      <NavigationLinks lang={lang} />
    </header>
  );
}
