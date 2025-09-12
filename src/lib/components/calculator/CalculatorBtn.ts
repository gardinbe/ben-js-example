import { type MaybeReactiveObject, html, isReactive, ref, derived } from 'ben-js';

export type CalculatorBtnProps = MaybeReactiveObject<{
  type: 'number' | 'operation' | 'equals';
  onclick: () => void;
}>;

export const CalculatorBtn = (props: CalculatorBtnProps, slot: unknown) => {
  const btn = ref();

  btn.on('click', () => {
    const onclick = isReactive(props.onclick) ? props.onclick.value : props.onclick;
    onclick();
  });

  const colorClass = derived(() => {
    const type = isReactive(props.type) ? props.type.value : props.type;
    return type === 'equals'
      ? 'bg-blue-800 hover:bg-blue-700 active:bg-blue-600'
      : type === 'operation'
        ? 'bg-orange-800 hover:bg-orange-700 active:bg-orange-600'
        : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600';
  });

  return html`
    <button
      ref="${btn}"
      class="text-2xl font-bold cursor-pointer ${colorClass}"
    >
      ${slot}
    </button>
  `;
};
