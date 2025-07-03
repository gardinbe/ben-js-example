import { component, html, ref } from 'ben-js';

export const Btn = component<Props>((props, slot) => {
  const btn = ref();
  btn.on('click', props.onclick.value);

  return html`
    <button
      ref="${btn}"
      type="${props.type}"
      class="px-3 py-1 font-bold bg-gray-100 text-gray-900 cursor-pointer hover:bg-gray-400 active:bg-gray-500"
    >
      ${slot}
    </button>
  `;
});

type Props = {
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onclick: (ev: MouseEvent) => void;
};
