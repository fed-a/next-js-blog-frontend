'use client';

import { Link } from '@/components/core';

import { Locale } from '@/lib/i18n';
import { routes } from '@/lib/routes';

import { ThemeSwitch } from '../theme-switch';

import './navigation.css';

interface NavigationProps {
  lang?: Locale;
}

function Navigation(props: NavigationProps) {
  const { lang } = props;
  return (
    <div className="af-nav">
      <div className="af-nav__logo" />
      <ul>
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <Link href={routes.uiKit} locale={lang} underlined="hover">
            Ui-kit
          </Link>
        </li>
        <li>
          <Link href={routes.main} locale={lang} underlined="hover">
            Main
          </Link>
        </li>
        <li>
          <Link href={routes.blog} locale={lang} underlined="hover">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
