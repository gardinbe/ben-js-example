import { html } from 'benjs';
import { Link } from 'benjs-router';

const HomePage = () => {
  return html`
    <h1>Home</h1>
    ${Link({ href: '/about', content: 'About' })}
  `;
};

export default HomePage;
