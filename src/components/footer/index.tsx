'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import { Locale } from '@/lib/i18n';

import { OptionModel, Select } from '../core/select';

import './footer.css';

interface FooterProps {
  lang: Locale;
  locales: OptionModel[];
}

export function Footer({ lang, locales }: FooterProps) {
  const [value, setValue] = useState(lang);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = useCallback(
    (newLocale: string) => {
      setValue(lang);
      router.push(`${newLocale}${pathname.replace(`/${lang}`, '')}`);
    },
    [lang, pathname, router],
  );

  return (
    <footer className="af-footer">
      <Select
        locale={lang}
        name="language"
        value={value}
        options={locales}
        onChange={handleLanguageChange}
      />
    </footer>
  );
}
