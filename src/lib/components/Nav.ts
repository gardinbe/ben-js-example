import { cn, derived, html } from 'ben-js';
import { isActive, Link } from '@ben-js/router';

type LinkItem = {
  text: string;
  href: string;
};

const links: LinkItem[] = [
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

export const Nav = () => {
  return html`
    <nav class="bg-gray-950">
      <menu class="flex">
        ${links.map((link) =>
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
};
