import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';

import { i18n } from '@/lib/i18n';
import { Providers } from '@/lib/providers';

import './globals.css';
import './locomotive-scroll.css';
import { Children, Params } from './types';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: Params & Children) {
  const { lang } = params;

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
          <Navigation lang={lang} />
          <div className="af-wrapper">{children}</div>
          <Footer lang={lang} />
        </Providers>
      </body>
    </html>
  );
}
