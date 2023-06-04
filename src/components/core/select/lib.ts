import { Locale } from '@/lib/i18n';

import locales from './locales.json';

export function getDefaultPlaceholder(locale: Locale) {
  const { de, en, ru, sv } = locales;
  switch (locale) {
    case 'ru':
      return ru;
    case 'sv':
      return sv;
    case 'de':
      return de;

    default:
      return en;
  }
}
