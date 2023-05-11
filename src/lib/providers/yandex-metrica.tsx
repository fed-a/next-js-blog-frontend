/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function YandexMetricaProvider(): JSX.Element | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(93530946, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
            `,
        }}
      ></script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/93530946"
            loading="lazy"
            style={{ position: 'absolute', left: '-9999px' }}
            aria-hidden
            alt=""
          />
        </div>
      </noscript>
    </div>
  );
}
