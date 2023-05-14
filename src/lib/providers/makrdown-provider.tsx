import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import React from 'react';

export const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} sizes="100vw" style={{ width: '100%', height: 'auto' }} {...props} />
);

const components = {
  img: ResponsiveImage,
};

export function Markdown({ children }: { children: string }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
