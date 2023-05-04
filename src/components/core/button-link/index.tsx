import { Locale } from '@/lib/i18n';

import { Button, ButtonProps } from '../button';
import { Link } from '../link';

type ButtonLinkProps = Omit<ButtonProps, 'onClick'> & {
  href: string;
  locale: Locale;
};

export function ButtonLink(props: ButtonLinkProps) {
  const { children, href, locale, ...buttonProps } = props;
  return (
    <Link href={href} locale={locale}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
}
