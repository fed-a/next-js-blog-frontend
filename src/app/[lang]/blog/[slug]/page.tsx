import React from 'react';

import { PostsDocument, PostsQueryResult, PostsQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import { LocaleParam, PostParam } from '../../types';

import PostContent from './post-content';

export default async function PostPage({ params }: { params: LocaleParam & PostParam }) {
  const { lang, slug } = params;
  const recentPosts = await fetchAPI<PostsQueryResult, PostsQueryVariables>(PostsDocument, {
    locale: lang,
    filters: {
      slug: {
        eq: slug,
      },
    },
  });
  const data = recentPosts.data?.posts?.data?.[0]?.attributes ?? null;
  return <PostContent data={data} />;
}
