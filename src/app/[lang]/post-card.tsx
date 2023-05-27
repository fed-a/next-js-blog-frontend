import React from 'react';

import { PostsQuery } from '@/gql';

import { Link, Typography } from '@/components/core';
import FormattedImage from '@/components/core/image';

import { Locale } from '@/lib/i18n';

interface PostCardProps {
  data: NonNullable<PostsQuery['posts']>['data'][0]['attributes'] | null;
  locale: Locale;
}

export function PostCard(props: PostCardProps) {
  const { data, locale } = props;
  const { title, description, slug, thumbnail: thumbnailImage, timeToRead } = data ?? {};
  const { thumbnail } = thumbnailImage?.data?.attributes?.formats ?? {};
  const { url } = thumbnail ?? {};
  return (
    <article className="flex justify-between border-b-[1px] border-black pb-6">
      <div className="flex-grow">
        {title && (
          <div className="mb-3">
            <Link href={`/blog/${slug}`} locale={locale} underlined="hover">
              <Typography type="p1" styleType={['bold']}>
                {title}
              </Typography>
            </Link>
          </div>
        )}
        {timeToRead && (
          <Typography
            isSpan={false}
            type="p4"
            className="mb-4"
          >{`${timeToRead} минута на прочтение`}</Typography>
        )}
        {description && (
          <Typography isSpan={false} type="p4" className="mb-4">
            {description}
          </Typography>
        )}
      </div>
      {Boolean(thumbnail) && (
        <Link href={`/blog/${slug}`} locale={locale} underlined="never">
          <div className="flex-grow-0">
            <FormattedImage
              src={url}
              alt={title ?? ''}
              width={156}
              height={156}
              formats={undefined}
            />
          </div>
        </Link>
      )}
    </article>
  );
}
