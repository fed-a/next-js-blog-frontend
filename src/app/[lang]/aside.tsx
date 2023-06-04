import { Typography } from '@/components/core';

import { LocaleParam } from './types';

export function BlogAside({ lang }: LocaleParam) {
  return (
    <aside>
      <div>
        <Typography type="p3">Теги</Typography>
      </div>

      <div>
        <Typography type="p3">Сортировка</Typography>
      </div>
    </aside>
  );
}
