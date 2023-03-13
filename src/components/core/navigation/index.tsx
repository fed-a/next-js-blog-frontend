import { Locale } from "@lib/i18n";
import { Routes } from "@lib/routes";
import { Link } from "@components/core";

interface NavigationProps {
  lang?: Locale;
}

function Navigation(props: NavigationProps) {
  const { lang } = props;
  return (
    <ul>
      <li>
        <Link href={Routes.UiKit} lang={lang}>
          Ui-kit
        </Link>
        <Link href={Routes.Main} lang={lang}>
          Main
        </Link>
        <Link href={Routes.Blog} lang={lang}>
          Blog
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
