export const routes = {
  main: '/',
  blog: '/blog',
  uiKit: '/ui-kit',
};

export type Routes = (typeof routes)[keyof typeof routes];
