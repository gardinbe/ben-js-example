import { def, type Route } from 'benjs-router';

export const routes: Route[] = [
  {
    path: '',
    component: def(import('~/pages/Home'))
  },
  {
    path: 'about',
    component: def(import('~/pages/About'))
  },
  {
    path: 'pokemon',
    component: def(import('~/pages/PokemonList')),
    children: [
      {
        path: '[slug]',
        component: def(import('~/pages/Pokemon'))
      }
    ]
  }
];
