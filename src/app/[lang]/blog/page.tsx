import { Metadata } from 'next';
import React from 'react';

import { PostsDocument, PostsQueryResult, PostsQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import { Params } from '../types';

import PostCard from './post-card';

export const metadata: Metadata = {
  title: 'Blog',
};

async function Blog({ params }: Params) {
  const { lang } = params;
  const recentPosts = await fetchAPI<PostsQueryResult, PostsQueryVariables>(PostsDocument, {
    locale: lang,
    pagination: {
      limit: 10,
    },
  });
  return (
    <>
      <div style={{ minHeight: '200vh' }}>
        {recentPosts?.data?.posts?.data?.map((post) => (
          <PostCard key={post.id} data={post.attributes ?? null} locale={lang} />
        ))}
      </div>
    </>
  );
}

export default Blog;
