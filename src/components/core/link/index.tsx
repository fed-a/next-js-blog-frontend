import { Locale } from "@lib/i18n";
import LinkNext from "next/link";
import React from "react";
import { addLocale } from "./lib";

interface LinkProps {
  href: string;
  lang?: Locale;
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  const { href, lang, children } = props;
  return <LinkNext href={addLocale(href, lang)}>{children}</LinkNext>;
}
