import { Async, html, watch, type Component } from 'benjs';
import { Router } from 'benjs-router';
import { routes } from '~/routes';

export const App = (): Component => {
  const r = Router(routes);

  watch(r, () => {
    console.log('route changed');
  });

  return html`${Async(r)}`;
};
