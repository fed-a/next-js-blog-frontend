export function addLocale(path: string, locale?: string) {
  return locale ? `/${locale}${path}` : path;
}
