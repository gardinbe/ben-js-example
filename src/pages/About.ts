import { html } from 'benjs';
import { Link } from 'benjs-router';

const AboutPage = () => {
  return html`
    <h1>About</h1>
    ${Link({ href: '/', content: 'Home' })}
  `;
};

export default AboutPage;
