import { Locale } from '@/lib/i18n';
import { routes } from '@/lib/routes';

import { ThemeSwitch } from '../theme-switch';

import { NavLink } from './nav-link';
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
          <NavLink route={routes.uiKit} locale={lang}>
            Ui-kit
          </NavLink>
        </li>
        <li>
          <NavLink route={routes.main} locale={lang}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink route={routes.blog} locale={lang}>
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
