import { component, html, ref } from 'ben-js';

export type BtnProps = {
  onClick: (ev: MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  variant: 'primary' | 'secondary';
};

export const Btn = component<BtnProps>((props, ...slots) => {
  const btn = ref();
  btn.on('click', props.onClick.value);

  return html`
    <button
      ref="${btn}"
      type="${props.type}"
      class="std-btn"
    >
      ${slots}
    </button>
  `;
});
