import { isActive, Link } from '@ben-js/router';
import { cn, type Component, derived, html } from 'ben-js';

export const Nav = (): Component => html`
  <nav class="bg-gray-950">
    <menu class="flex">
      ${NavItems.map((item) =>
        Link(
          {
            class: cn(
              'unstyled-link px-4 py-3 hover:text-green-400 hover:bg-gray-900',
              derived(() => isActive(item.href) && 'text-green-400 bg-gray-900'),
            ),
            href: item.href,
          },
          item.text,
        ),
      )}
    </menu>
  </nav>
`;

type NavItem = {
  href: string;
  text: string;
};

const NavItems: NavItem[] = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/pokemon',
    text: 'Pokemon',
  },
  {
    href: '/calculator',
    text: 'Calculator',
  },
  {
    href: '/todo-list',
    text: 'Todo List',
  },
  {
    href: '/test-form',
    text: 'Test Form',
  },
];
