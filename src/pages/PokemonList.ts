import { html } from 'ben-js';
import { Link } from '@ben-js/router';

const PokemonListPage = () => {
  return html`
    <div class="std-container">
      <h1>Pokemon</h1>
      ${Link(
        {
          href: '/pokemon/charmander'
        },
        'Charmander'
      )}
      ${Link(
        {
          href: '/pokemon/squirtle'
        },
        'Squirtle'
      )}
      ${Link(
        {
          href: '/pokemon/bulbasaur'
        },
        'Bulbasaur'
      )}
    </div>
  `;
};

export default PokemonListPage;
