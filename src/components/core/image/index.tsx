import React from 'react';

import { getStrapiMedia, getStrapiMediaFormats } from '@/lib/api';
import { cn } from '@/lib/utils';

import { getSizes, getSrcSet } from './lib';
import { ImageFormats } from './types';

interface BlurImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  formats?: ImageFormats;
  // TODO
  className?: string;
}

export default function FormattedImage(props: BlurImageProps) {
  const { src, alt, width, height, formats } = props;

  const strapiSrc = getStrapiMedia(src);
  const strapiFormats = getStrapiMediaFormats(formats ?? null);

  return (
    <div className="af-markdown__img">
      <div
        className={cn(
          'm-auto max-w-full overflow-hidden rounded-lg sm:max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-3xl',
          {
            'shadow-md': width + height >= 500,
            'rounded-lg': width + height >= 500,
          },
          {
            'shadow-sm': width + height < 500,
            'rounded-md': width + height < 500,
          },
        )}
      >
        <img
          src={strapiSrc}
          loading="lazy"
          alt={alt}
          height={height}
          width={width}
          sizes={strapiFormats ? getSizes(strapiFormats) : undefined}
          srcSet={strapiFormats ? getSrcSet(strapiFormats) : undefined}
        />
      </div>
    </div>
  );
}
