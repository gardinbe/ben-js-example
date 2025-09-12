import { Router, useRoutes } from '@ben-js/router';
import { type Component, html } from 'ben-js';

import { Footer } from '~/lib/components/Footer';
import { Nav } from '~/lib/components/Nav';
import { routes } from '~/routes';

useRoutes(routes);

export const App = (): Component => html`
  <header>${Nav()}</header>
  <main class="flex-1 py-4">${Router()}</main>
  <footer class="px-4 py-2 bg-gray-950">${Footer()}</footer>
`;
