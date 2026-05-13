import { type Component, html, normalize, type Props, ref } from 'ben-js';

export type BtnProps = {
  onClick?: (ev: MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
};

export const Btn = (props: Props<BtnProps>, slot: unknown): Component => {
  const { onClick, type } = normalize(props);
  const btn = ref();

  btn.on('click', (ev) => {
    onClick?.value?.(ev);
  });

  return html`
    <button
      ref="${btn}"
      type="${type}"
      class="std-btn"
    >
      ${slot}
    </button>
  `;
};
