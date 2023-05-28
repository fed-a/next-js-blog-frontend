import { Locale } from '@/lib/i18n';

interface MenuItem {
  id: string;
  order?: number | null | undefined;
  title: string;
  href: string;
}

export interface AdaptiveNavigationLinksProps {
  menuItems: MenuItem[];
  lang: Locale;
}
