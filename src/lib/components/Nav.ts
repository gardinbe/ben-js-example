import { cn, derived, component, html } from 'ben-js';
import { isActive, Link } from '@ben-js/router';

export const Nav = component(() => {
  return html`
    <nav class="bg-gray-950">
      <menu class="flex">
        ${NavLinks.map((link) =>
          Link(
            {
              class: cn(
                'unstyled-link px-4 py-3 hover:text-green-400 hover:bg-gray-900',
                derived(() => isActive(link.href) && 'text-green-400 bg-gray-900')
              ),
              href: link.href
            },
            link.text
          )
        )}
      </menu>
    </nav>
  `;
});

type NavLink = {
  text: string;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Pokemon',
    href: '/pokemon'
  },
  {
    text: 'Calculator',
    href: '/calculator'
  },
  {
    text: 'Todo List',
    href: '/todo-list'
  }
];
