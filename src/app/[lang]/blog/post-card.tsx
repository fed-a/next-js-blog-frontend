import React from 'react';

import { PostsQuery } from '@/gql';

import { Locale } from '@/lib/i18n';
import { Link } from '@/components/core';

interface PostCardProps {
  data: NonNullable<PostsQuery['posts']>['data'][0]['attributes'] | null;
  locale: Locale;
}

export default function PostCard(props: PostCardProps) {
  const { data, locale } = props;
  const { title, description, slug } = data ?? {};
  return (
    <article>
      {title && <span>{title}</span>}
      {title && <br />}
      {description && <span>{description}</span>}
      {description && <br />}
      {slug && (
        <Link href={`/blog/${slug}`} locale={locale} underlined="hover" linkIcon>
          /{slug}
        </Link>
      )}
    </article>
  );
}
