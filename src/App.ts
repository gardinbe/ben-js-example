import { html } from 'ben-js';
import { Router, useRoutes } from '@ben-js/router';
import { routes } from '~/routes';
import { Footer } from '~/lib/components/Footer';
import { Nav } from '~/lib/components/Nav';

useRoutes(routes);

export const App = () => html`
  <header>${Nav()}</header>
  <main class="flex-1 py-4">${Router()}</main>
  <footer class="px-4 py-2 bg-gray-950">${Footer()}</footer>
`;
