import { ImageFormats } from '@/components/core/image/types';

export function getStrapiMedia(url: string) {
  const imageUrl = url.startsWith('/') ? `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${url}` : url;
  return imageUrl;
}
export function getStrapiMediaFormats(formats: ImageFormats | null) {
  if (!formats) {
    return null;
  }
  return Object.entries(formats).reduce((acc, entry) => {
    const [key, value] = entry as [keyof ImageFormats, ImageFormats[keyof ImageFormats]];
    const newUrl = getStrapiMedia(value.url);
    acc[key] = {
      ...value,
      url: newUrl,
    };
    return acc;
  }, {} as Partial<ImageFormats>) as ImageFormats;
}
