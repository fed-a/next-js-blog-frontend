import { Metadata } from 'next';
import React from 'react';

import { PostsDocument, PostsQueryResult, PostsQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import { PostCard } from './post-card';
import { Params } from './types';

export const metadata: Metadata = {
  title: 'Blog',
};

async function HomeBlog({ params }: Params) {
  const { lang } = params;
  const recentPosts = await fetchAPI<PostsQueryResult, PostsQueryVariables>(PostsDocument, {
    locale: lang,
    pagination: {
      limit: 10,
    },
  }).catch(() => null);
  // return <code>{JSON.stringify(recentPosts)}</code>;
  return (
    <div className="container">
      <h1>Блог обо всяком</h1>
      <div className="grid grid-cols-2 gap-28">
        <div className="">
          {recentPosts?.data?.posts?.data?.map((post) => (
            <PostCard key={post.id} data={post.attributes ?? null} locale={lang} />
          ))}
        </div>
        <aside className="border-l-[1px] border-black pl-28">Aside</aside>
      </div>
    </div>
  );
}

export default HomeBlog;
