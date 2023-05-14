import ReactMarkdown from 'react-markdown';

import { DEFAULT_COMPONENTS } from './components';
import { MarkdownComponents } from './types';

interface MarkdownProps {
  children: string;
  components?: MarkdownComponents;
}

export function Markdown(props: MarkdownProps) {
  const { children, components } = props;
  return <ReactMarkdown components={components ?? DEFAULT_COMPONENTS}>{children}</ReactMarkdown>;
}
