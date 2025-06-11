import { Async, html, type Component } from 'ben-js';
import { Router } from '@ben-js/router';
import { routes } from '~/routes';
import { Footer } from '~/lib/components/Footer';
import { Nav } from '~/lib/components/Nav';

export const App = (): Component => {
  // prettier-ignore
  return html`
    <header>
      ${Nav()}
    </header>
    <main class="flex-1 py-4">
      ${Async(Router(routes))}
    </main>
    <footer class="px-4 py-2 bg-gray-950">
      ${Footer()}
    </footer>
  `;
};
