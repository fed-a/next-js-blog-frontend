import { AnimeParams } from 'animejs';

export function addLocale(path: string, locale?: string) {
  return locale ? `/${locale}${path}` : path;
}

export const getLinkAnimeInParams = (targets: AnimeParams['targets']): AnimeParams => ({
  targets,
  autoplay: false,
  width: ['0%', '100%'],
  duration: 800,
  easing: 'easeOutElastic(1, .6)',
});

export const getLinkAnimeOutParams = (targets: AnimeParams['targets']): AnimeParams => ({
  targets,
  autoplay: false,
  width: ['100%', '0%'],
  duration: 200,
  easing: 'easeOutQuad',
});
