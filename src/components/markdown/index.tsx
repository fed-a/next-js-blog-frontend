'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { useSsr } from '@/lib/hooks';

import { getMarkdownComponents } from './components';
import './markdown.css';
import { MarkdownComponents } from './types';

interface MarkdownProps {
  children: string;
  components?: MarkdownComponents;
}

// stupid hack to get rid of hydration error
// @ts-ignore
const ServerReactMarkdown = dynamic(() => import('react-markdown').then((m) => m.default), {});

export function Markdown(props: MarkdownProps) {
  const { children } = props;
  const { resolvedTheme: theme } = useTheme();
  const { isMounted } = useSsr();

  const components = useMemo(() => getMarkdownComponents(theme ?? null), [theme]);

  if (isMounted) {
    return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
  }
  return (
    <ServerReactMarkdown components={getMarkdownComponents(null)}>{children}</ServerReactMarkdown>
  );
}
