import { cn, component, derived, html, ref } from 'ben-js';

export type CalculatorBtnProps = {
  onclick: () => void;
  type: 'equals' | 'number' | 'operation';
};

export const CalculatorBtn = component<CalculatorBtnProps>((props, slot) => {
  const btn = ref();
  btn.on('click', props.onclick.value);

  return html`
    <button
      ref="${btn}"
      class="${cn(
        'text-2xl font-bold cursor-pointer',
        derived(() =>
          props.type.value === 'equals'
            ? 'bg-blue-800 hover:bg-blue-700 active:bg-blue-600'
            : props.type.value === 'operation'
              ? 'bg-orange-800 hover:bg-orange-700 active:bg-orange-600'
              : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600',
        ),
      )}"
    >
      ${slot}
    </button>
  `;
});
