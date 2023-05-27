import { MenuDocument, MenuQueryResult, MenuQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';
import { Locale } from '@/lib/i18n';
import { routes } from '@/lib/routes';

import { ThemeSwitch } from '../theme-switch';

import { NavLink } from './nav-link';
import './navigation.css';
import { Link } from '../core';

interface NavigationProps {
  lang?: Locale;
}

export async function Navigation(props: NavigationProps) {
  const { lang } = props;

  const menu = await fetchAPI<MenuQueryResult, MenuQueryVariables>(MenuDocument, {
    locale: lang,
  });
  const menuItems = [...(menu.data?.menu?.data?.attributes?.items ?? [])];
  const sortedMenuItems = menuItems
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .filter(Boolean) as NonNullable<(typeof menuItems)[number]>[];

  return (
    <div className="af-nav">
      <Link href="/" locale={lang}>
        <div className="af-nav__logo" />
      </Link>
      <ul>
        <li>
          <ThemeSwitch />
        </li>
        {process.env.NODE_ENV === 'development' && (
          <li>
            <NavLink route={routes.uiKit} locale={lang}>
              Ui-kit
            </NavLink>
          </li>
        )}
        {sortedMenuItems.map(({ href, title, id }) => (
          <li key={id}>
            <NavLink route={href} locale={lang}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
