import { ImageFormat, ImageFormats } from './types';

export function getSrcSet(formats: ImageFormats) {
  return Object.entries(formats).reduce((acc, entry) => {
    const [size, format] = entry as [keyof ImageFormats, ImageFormats[keyof ImageFormats]];

    if (size === 'thumbnail' || !format) {
      return acc;
    }

    const { url, width } = format;

    const formatSrcSet = `${url} ${width}w`;
    return acc === '' ? formatSrcSet : `${acc}, ${formatSrcSet}`;
  }, '');
}

function getMaxWidth(formatSize: keyof ImageFormats) {
  switch (formatSize) {
    case 'small':
      return '768';
    case 'medium':
      return '976';
    case 'large':
      return '1440';
    default:
      return null;
  }
}

function getSrcSize(formatSize: keyof ImageFormats, format: ImageFormat) {
  const { width } = format;
  const maxLength = getMaxWidth(formatSize);
  return `(max-width: ${maxLength}px) ${width}px`;
}

export function getSizes(formats: ImageFormats) {
  const { small, medium, large } = formats;

  return `${getSrcSize('small', small)} ${getSrcSize('medium', medium)} ${getSrcSize(
    'large',
    large,
  )} 100vw`;
}
