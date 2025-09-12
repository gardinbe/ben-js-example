import { go, route } from '@ben-js/router';
import { html, ref } from 'ben-js';
import { Btn } from '~/lib/components/Btn';

const PokemonListPage = route(() => {
  const input = ref<HTMLInputElement>();

  return html`
    <div class="std-container">
      <h1>Pokemon</h1>
      <form>
        <input
          ref="${input}"
          type="text"
          placeholder="Pokemon name..."
        />
        ${Btn(
          {
            variant: 'primary',
            type: 'submit',
            onclick: (ev) => {
              ev.preventDefault();
              go(`/pokemon/${input.el.value?.value}`);
            }
          },
          'Search'
        )}
      </form>
    </div>
  `;
});

export default PokemonListPage;
