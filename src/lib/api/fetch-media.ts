export function getStrapiMedia(url: string) {
  const imageUrl = url.startsWith('/') ? `${process.env.STRAPI_ENDPOINT}${url}` : url;
  return imageUrl;
}
