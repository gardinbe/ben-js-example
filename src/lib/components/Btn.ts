import { type Component, html, normalize, type Props, ref } from 'ben-js';

export type BtnProps = Props<{
  onClick?: (ev: MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  variant: 'primary' | 'secondary';
}>;

export const Btn = (props: BtnProps, slot: unknown): Component => {
  const { onClick, type } = normalize(props);
  const btn = ref();

  if (onClick) {
    btn.on('click', onClick.value);
  }

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
