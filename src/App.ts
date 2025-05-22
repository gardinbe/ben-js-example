import { html, type Component } from 'benjs';
import { Router } from 'benjs-router';
import { routes } from '~/routes';

export const App = (): Component => {
  return html`${Router({ routes })}`;
};
