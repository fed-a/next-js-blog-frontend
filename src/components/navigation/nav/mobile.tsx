import { Icon } from '@/components/core/icon';

import { AdaptiveNavigationLinksProps } from './types';

export function MobileNavigationLinks(props: AdaptiveNavigationLinksProps) {
  const { menuItems, lang } = props;
  return (
    <button className="block md:hidden">
      <Icon name="menu2" size="large" color="primary" />
    </button>
  );
}
