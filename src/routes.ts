import type { Route } from 'benjs-router';

export const routes: Route[] = [
  {
    path: '',
    component: async () => (await import('~/pages/Home')).default()
  },
  {
    path: 'about',
    component: async () => (await import('~/pages/About')).default()
  }
];
