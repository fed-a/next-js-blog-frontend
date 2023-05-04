import React from 'react';

import { Locale } from '@lib/i18n';

interface LocaleParam {
  lang: Locale;
}

interface PostParam {
  post: string;
}

export interface Params {
  params: LocaleParam & Partial<PostParam>;
}

export interface Children {
  children: React.ReactNode;
}
