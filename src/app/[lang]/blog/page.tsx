import { Metadata } from 'next';
import React from 'react';

import { PostsDocument, PostsQueryResult, PostsQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import { Params } from '../types';

import { PostCard } from './post-card';

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
  }).catch(() => null);
  // return <code>{JSON.stringify(recentPosts)}</code>;
  return (
    <>
      <h1>Блог обо всяком</h1>
      <div className="grid grid-cols-2 gap-28">
        <div className="">
          {recentPosts?.data?.posts?.data?.map((post) => (
            <PostCard key={post.id} data={post.attributes ?? null} locale={lang} />
          ))}
        </div>
        <aside className="border-l-[1px] border-black pl-28">Aside</aside>
      </div>
    </>
  );
}

export default Blog;
