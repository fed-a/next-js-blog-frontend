import React from 'react';

import { resolveStyles, resolveTag } from './lib';
import { TypographyProps } from './types';

function TypographyComponent({
  children,
  type = 'p2',
  styleType = ['normal'],
  isSpan = true,
}: TypographyProps) {
  const tag = resolveTag(type, isSpan);
  const styles = resolveStyles(type, styleType);

  return React.createElement(
    tag,
    {
      className: styles,
    },
    children,
  );
}

export const Typography = React.memo(TypographyComponent);
