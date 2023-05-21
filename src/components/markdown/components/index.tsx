import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Skeleton } from '@/components/core/skeleton';

import { MarkdownComponents } from '../types';

export const getMarkdownComponents = (theme: string | null): MarkdownComponents => {
  const markdownCodeTheme = (() => {
    switch (theme) {
      case 'dark':
        return atomOneDark;
      case 'light':
        return atomOneLight;
      default:
        return null;
    }
  })();
  return {
    code: ({ node, inline, className, children, ...props }: any) => {
      const lineCount = String(children).split('\n').filter(Boolean).length;
      if (!markdownCodeTheme) {
        return (
          <div className="py-2">
            <Skeleton count={lineCount + 1} />
          </div>
        );
      }
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="af-markdown__code">
          <div className="code__topbar">
            <span />
            <span />
            <span />
          </div>
          <SyntaxHighlighter
            {...props}
            showLineNumbers={lineCount > 1}
            style={markdownCodeTheme}
            language={match[1]}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };
};
