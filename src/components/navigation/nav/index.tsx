import React from 'react';

import { LocaleParam } from '@/app/[lang]/types';
import { MenuDocument, MenuQueryResult, MenuQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import { DesktopNavigationLinks } from './desktop';
import { MobileNavigationLinks } from './mobile';

export async function NavigationLinks({ lang }: LocaleParam) {
  const menu = await fetchAPI<MenuQueryResult, MenuQueryVariables>(MenuDocument, {
    locale: lang,
  });
  const menuItems = [...(menu.data?.menu?.data?.attributes?.items ?? [])];
  const sortedMenuItems = menuItems
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .filter(Boolean) as NonNullable<(typeof menuItems)[number]>[];
  return (
    <>
      <DesktopNavigationLinks menuItems={sortedMenuItems} lang={lang} />
      <MobileNavigationLinks menuItems={sortedMenuItems} lang={lang} />
    </>
  );
}
