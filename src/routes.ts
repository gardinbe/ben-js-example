import { define, type RouteDefinition } from '@ben-js/router';

export const routes: RouteDefinition[] = [
  {
    component: define(() => import('~/pages/Home')),
    path: '',
  },
  {
    component: define(() => import('~/pages/About')),
    path: 'about',
  },
  {
    children: [
      {
        component: define(() => import('~/pages/Pokemon/[slug]')),
        path: '[slug]',
      },
    ],
    component: define(() => import('~/pages/Pokemon')),
    path: 'pokemon',
  },
  {
    component: define(() => import('~/pages/Calculator')),
    path: 'calculator',
  },
  {
    component: define(() => import('~/pages/TodoList')),
    path: 'todo-list',
  },
];
