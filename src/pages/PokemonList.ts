import { html } from 'ben-js';
import { Link } from '@ben-js/router';

const PokemonListPage = () => {
  return html`
    <div class="std-container">
      <h1>Pokemon</h1>
      ${Link({
        href: '/pokemon/charmander',
        content: 'Charmander'
      })}
      ${Link({
        href: '/pokemon/squirtle',
        content: 'Squirtle'
      })}
      ${Link({
        href: '/pokemon/bulbasaur',
        content: 'Bulbasaur'
      })}
    </div>
  `;
};

export default PokemonListPage;
