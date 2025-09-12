import { define, type RouteDefinition } from '@ben-js/router';

export const routes: RouteDefinition[] = [
  {
    path: '',
    component: define(() => import('~/pages/Home'))
  },
  {
    path: 'about',
    component: define(() => import('~/pages/About'))
  },
  {
    path: 'pokemon',
    component: define(() => import('~/pages/Pokemon')),
    children: [
      {
        path: '[slug]',
        component: define(() => import('~/pages/Pokemon/[slug]'))
      }
    ]
  },
  {
    path: 'calculator',
    component: define(() => import('~/pages/Calculator'))
  },
  {
    path: 'todo-list',
    component: define(() => import('~/pages/TodoList'))
  }
];
