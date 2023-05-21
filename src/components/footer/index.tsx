import React from 'react';

import { Locale } from '@/lib/i18n';

import './footer.css';

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  return <footer className="af-footer">{lang}</footer>;
}
