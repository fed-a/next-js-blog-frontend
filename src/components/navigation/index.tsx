import { Link } from '@components/core';

import { Locale } from '@lib/i18n';
import { routes } from '@lib/routes';

interface NavigationProps {
  lang?: Locale;
}

function Navigation(props: NavigationProps) {
  const { lang } = props;
  return (
    <ul>
      <li>
        <Link href={routes.uiKit} locale={lang}>
          Ui-kit
        </Link>
        <Link href={routes.main} locale={lang}>
          Main
        </Link>
        <Link href={routes.blog} locale={lang}>
          Blog
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
