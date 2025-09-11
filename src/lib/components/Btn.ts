import { component, html, ref } from 'ben-js';

export type BtnProps = {
  onclick: (ev: MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  variant: 'primary' | 'secondary';
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
