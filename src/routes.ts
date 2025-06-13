import { def, type Route } from '@ben-js/router';

export const routes: Route[] = [
  {
    path: '',
    component: def(() => import('~/pages/Home'))
  },
  {
    path: 'about',
    component: def(() => import('~/pages/About'))
  },
  {
    path: 'pokemon',
    component: def(() => import('~/pages/Pokemon')),
    children: [
      {
        path: '[slug]',
        component: def(() => import('~/pages/Pokemon/[slug]'))
      }
    ]
  },
  {
    path: 'calculator',
    component: def(() => import('~/pages/Calculator'))
  },
  {
    path: 'todo-list',
    component: def(() => import('~/pages/TodoList'))
  }
];
