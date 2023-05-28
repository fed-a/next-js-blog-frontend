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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_18rem] md:gap-12 lg:gap-20 xl:gap-28">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          {recentPosts?.data?.posts?.data?.map((post) => (
            <PostCard key={post.id} data={post.attributes ?? null} locale={lang} testFlag={true} />
          ))}
          {recentPosts?.data?.posts?.data?.map((post) => (
            <PostCard key={post.id} data={post.attributes ?? null} locale={lang} />
          ))}
        </div>
        <aside className="order-1 border-b-[1px] border-black pl-12 dark:border-white md:order-2 md:border-b-0 md:border-l-[1px] lg:pl-20 xl:pl-28">
          Aside
        </aside>
      </div>
    </div>
  );
}

export default HomeBlog;
