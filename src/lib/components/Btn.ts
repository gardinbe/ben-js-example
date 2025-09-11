import { component, html, ref } from 'ben-js';

export type BtnProps = {
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onclick: (ev: MouseEvent) => void;
};

export const Btn = component<BtnProps>((props, slot) => {
  const btn = ref();
  btn.on('click', props.onclick.value);

  return html`
    <button
      ref="${btn}"
      type="${props.type}"
      class="std-btn"
    >
      ${slot}
    </button>
  `;
});
