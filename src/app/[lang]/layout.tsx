import { LocalizationDocument, LocalizationQueryResult } from '@/gql';

import { OptionModel } from '@/components/core/select';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';

import { fetchAPI } from '@/lib/api';
import { i18n } from '@/lib/i18n';
import { Providers } from '@/lib/providers';

import './globals.css';
import { Children, Params } from './types';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function mapLocales(
  locales: NonNullable<NonNullable<LocalizationQueryResult['data']>['i18NLocales']>['data'],
): OptionModel[] {
  return locales
    .map((locale) => ({
      label: locale.attributes?.name,
      value: locale.attributes?.code,
    }))
    .filter((locale) => locale.label != null && locale.value != null) as OptionModel[];
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: Params & Children) {
  const { lang } = params;
  const localesData = await fetchAPI<LocalizationQueryResult>(LocalizationDocument);
  const locales = mapLocales(localesData?.data?.i18NLocales?.data ?? []);

  // favicon shows up as static prop...
  // @ts-ignore
  if (lang === 'favicon.ico') {
    return (
      <>
        <body></body>
      </>
    );
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/assets/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body>
        <Providers>
          <div className="flex min-h-[100lvh] flex-col overflow-hidden">
            {/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */}
            {/* @ts-expect-error Async Server Component */}
            <Navigation lang={lang} />
            <div className="af-wrapper">{children}</div>
            <Footer lang={lang} locales={locales} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
