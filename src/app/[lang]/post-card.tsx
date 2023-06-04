import React from 'react';

import { PostsQuery } from '@/gql';

import { Link, Typography } from '@/components/core';
import FormattedImage from '@/components/core/image';

import { Locale } from '@/lib/i18n';
import { cutDescription, cutTitle } from '@/lib/utils/cut-text';

interface PostCardProps {
  data: NonNullable<PostsQuery['posts']>['data'][0]['attributes'] | null;
  locale: Locale;
  testFlag?: boolean;
}

export function PostCard(props: PostCardProps) {
  const { data, locale, testFlag } = props;
  const { title, description, slug, thumbnail: thumbnailImage, timeToRead } = data ?? {};
  const { thumbnail } = thumbnailImage?.data?.attributes?.formats ?? {};
  const { url } = thumbnail ?? {};
  return (
    <article className="flex justify-between gap-4 border-b-[1px] border-black pb-8 dark:border-white">
      <div className="flex-grow ">
        {title && (
          <Link href={`/blog/${slug}`} locale={locale} underlined="hover-static">
            <Typography type="p2" styleType={['bold']} className="line-clamp-2 overflow-ellipsis">
              {testFlag
                ? cutTitle(`Какой-то очень  asda длинный заголовок, чтобы понять, как поведет себя верстка с большим
                заголовком`)
                : title}
            </Typography>
          </Link>
        )}
        {timeToRead && (
          <Typography
            isSpan={false}
            type="p5"
            className="mb-4 hidden opacity-80 md:block"
          >{`${timeToRead} минута на прочтение`}</Typography>
        )}
        {description && (
          <Typography
            isSpan={false}
            type="p4"
            className="mb-4 line-clamp-1 overflow-ellipsis md:line-clamp-2"
          >
            {testFlag
              ? cutDescription(`Какое-то очень asdasdaasdasda sdasdasdasdasda asdasd asdas dasd asd asd asdasdasdasdsdasdasdasds длинное описание, чтобы понять, как поведет себя верстка с большим
            описанием`)
              : description}
          </Typography>
        )}
      </div>
      {Boolean(thumbnail) && (
        <div className="w-1/5 flex-shrink-0 flex-grow-0">
          <Link href={`/blog/${slug}`} locale={locale} underlined="never">
            <FormattedImage
              src={url}
              alt={title ?? ''}
              width={156}
              height={156}
              formats={undefined}
            />
          </Link>
        </div>
      )}
    </article>
  );
}
