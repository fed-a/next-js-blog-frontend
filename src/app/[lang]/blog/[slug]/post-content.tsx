import React from 'react';

import { PostsQueryResult } from '@/gql';

interface PostContentProps {
  data: NonNullable<NonNullable<PostsQueryResult['data']>['posts']>['data'][0]['attributes'] | null;
}

export default function PostContent(props: PostContentProps) {
  const { data } = props;
  const { title, description, content } = data ?? {};
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      {JSON.stringify(content)}
    </article>
  );
}
