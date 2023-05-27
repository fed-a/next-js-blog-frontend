export const routes = {
  about: '/about',
  blog: '/',
  uiKit: '/ui-kit',
};

export type Routes = (typeof routes)[keyof typeof routes];
