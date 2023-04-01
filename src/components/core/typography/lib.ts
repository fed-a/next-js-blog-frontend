import { TypographyStyle, TypographyType } from './types';

export function resolveTag(type: TypographyType, isSpan: boolean) {
  switch (type) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'p1':
    case 'p2':
    case 'p3':
    case 'p4':
    case 'p5':
    case 'p6':
      return isSpan ? 'span' : 'p';
  }
}

function resolveFontStyle(style: TypographyStyle) {
  switch (style) {
    case 'normal':
      return null;
    case 'bold':
      return 'font-bold';
    case 'italic':
      return 'italic';
    case 'underlined':
      return 'underline';
  }
}

function resolveFontStyles(styles: TypographyStyle[]) {
  return styles
    .reduce((acc, style) => {
      const resolvedStyle = resolveFontStyle(style);
      return resolvedStyle ? `${acc} ${resolvedStyle}` : acc;
    }, '')
    .trim();
}

export function resolveStyles(type: TypographyType, styles: TypographyStyle[]) {
  switch (type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return resolveFontStyles(styles);
    case 'p1':
      return `${resolveFontStyles(styles)}`;
    case 'p2':
      return `${resolveFontStyles(styles)}`;
    case 'p3':
      return `${resolveFontStyles(styles)}`;
    case 'p4':
      return `${resolveFontStyles(styles)}`;
    case 'p5':
      return `${resolveFontStyles(styles)}`;
    case 'p6':
      return `${resolveFontStyles(styles)}`;
  }
}
