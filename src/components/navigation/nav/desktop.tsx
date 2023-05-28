import { ThemeSwitch } from '@/components/theme-switch';

import { routes } from '@/lib/routes';

import { NavLink } from './nav-link';
import { AdaptiveNavigationLinksProps } from './types';

export function DesktopNavigationLinks(props: AdaptiveNavigationLinksProps) {
  const { menuItems, lang } = props;
  return (
    <div className="hidden md:block">
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
        {menuItems.map(({ href, title, id }) => (
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
