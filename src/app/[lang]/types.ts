import React from 'react';

import { Locale } from '@/lib/i18n';

export interface LocaleParam {
  lang: Locale;
}

export interface PostParam {
  slug: string;
}

export interface Params {
  params: LocaleParam & Partial<PostParam>;
}

export interface Children {
  children: React.ReactNode;
}
