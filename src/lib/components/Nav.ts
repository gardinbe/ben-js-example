import { isActive, Link } from '@ben-js/router';
import { cn, component, derived, html } from 'ben-js';

export const Nav = component(() => {
  return html`
    <nav class="bg-gray-950">
      <menu class="flex">
        ${NavLinks.map((link) =>
          Link(
            {
              class: cn(
                'unstyled-link px-4 py-3 hover:text-green-400 hover:bg-gray-900',
                derived(() => isActive(link.href) && 'text-green-400 bg-gray-900'),
              ),
              href: link.href,
            },
            link.text,
          ),
        )}
      </menu>
    </nav>
  `;
});

type NavLink = {
  href: string;
  text: string;
};

const NavLinks: NavLink[] = [
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
];
