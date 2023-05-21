'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { getMarkdownComponents } from './components';
import './markdown.css';
import { MarkdownComponents } from './types';

interface MarkdownProps {
  children: string;
  components?: MarkdownComponents;
}

export function Markdown(props: MarkdownProps) {
  const { children } = props;
  const { resolvedTheme: theme } = useTheme();

  const components = useMemo(() => getMarkdownComponents(theme ?? null), [theme]);
  console.log({ components });

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
}
