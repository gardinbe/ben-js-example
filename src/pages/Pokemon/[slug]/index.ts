import { route } from '@ben-js/router';
import type { Pokemon } from '~/lib/types/pokeapi';
import type { Result } from '~/lib/types/result';
import { html } from 'ben-js';
import { fetchJson } from '~/lib/utils/fetch-json';
import { capitalize } from '~/lib/utils/capitalize';

const PokemonPage = route(async (ctx) => {
  if (!ctx.slug) {
    return html`
      <div class="std-container">
        <h1>No Pokemon name provided</h1>
        <p>Please provide a Pokemon name in the URL slug.</p>
      </div>
    `;
  }

  const [pokemon, error] = await fetchPokemon(ctx.slug);

  if (error) {
    return html`
      <div class="std-container">
        <h1>Error</h1>
        <p>${error.message}</p>
      </div>
    `;
  }

  return html`
    <div class="std-container">
      <h1>${capitalize(pokemon.name)}</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
      />
    </div>
  `;
});

export default PokemonPage;

/**
 * Fetches the provided Pokemon's data from the PokeAPI.
 * @param name - Name of the pokemon to fetch.
 * @returns Pokemon data result.
 * @see https://pokeapi.co
 */
const fetchPokemon = async (name: string): Promise<Result<Pokemon>> =>
  fetchJson(`https://pokeapi.co/api/v2/pokemon/${name}`);
