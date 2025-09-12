import { Async, html, type Component } from 'ben-js';
import { Link, Router } from '@ben-js/router';
import { routes } from '~/routes';

export const App = (): Component => {
  return html`
    <header>
      <nav class="p-4 bg-gray-950">
        <menu class="flex gap-4">
          ${Link({
            href: '/',
            content: 'Home'
          })}
          ${Link({
            href: '/about',
            content: 'About'
          })}
          ${Link({
            href: '/pokemon',
            content: 'Pokemon'
          })}
        </menu>
      </nav>
    </header>
    <main class="flex-1 py-4">${Async(Router(routes))}</main>
    <footer class="px-4 py-2 bg-gray-950">Footer</footer>
  `;
};
