import { html, ref, derived, component } from 'ben-js';

export const CalculatorBtn = component<Props>((props, slot) => {
  const btn = ref();

  btn.on('click', props.onclick.value);

  const colorClass = derived(() =>
    props.type.value === 'equals'
      ? 'bg-blue-800 hover:bg-blue-700 active:bg-blue-600'
      : props.type.value === 'operation'
        ? 'bg-orange-800 hover:bg-orange-700 active:bg-orange-600'
        : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600'
  );

  return html`
    <button
      ref="${btn}"
      class="text-2xl font-bold cursor-pointer ${colorClass}"
    >
      ${slot}
    </button>
  `;
});

export type Props = {
  type: 'number' | 'operation' | 'equals';
  onclick: () => void;
};
