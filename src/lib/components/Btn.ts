import { type MaybeReactiveObject, html, isReactive, ref } from 'ben-js';

export type BtnProps = MaybeReactiveObject<{
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onclick: (ev: MouseEvent) => void;
}>;

export const Btn = (props: BtnProps, slot: unknown) => {
  const btn = ref();

  btn.on('click', (ev) => {
    const onclick = isReactive(props.onclick) ? props.onclick.value : props.onclick;
    onclick(ev);
  });

  return html`
    <button
      ref="${btn}"
      type="${props.type}"
      class="px-3 py-1 font-bold bg-gray-100 text-gray-900 cursor-pointer hover:bg-gray-400 active:bg-gray-500"
    >
      ${slot}
    </button>
  `;
};
