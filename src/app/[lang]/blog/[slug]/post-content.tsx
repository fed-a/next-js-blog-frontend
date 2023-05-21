import React from 'react';

import { MarkdownBlocks } from './markdown-blocks';
import './post-content.css';
import { PostType } from './types';

interface PostContentProps {
  data: PostType | null;
}
export default function PostContent(props: PostContentProps) {
  const { data } = props;
  const { title, description, content, timeToRead } = data ?? {};

  if (!data) {
    return null;
  }
  return (
    <article className="af-article">
      <h2>{title}</h2>
      <p>{timeToRead} минута на прочтение</p>
      <p>{description}</p>
      <MarkdownBlocks content={content ?? null} />
    </article>
  );
}
