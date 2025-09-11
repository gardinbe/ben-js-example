import { component, html, reactive } from 'ben-js';

import { CalculatorBtn } from '~/lib/components/calculator/CalculatorBtn';

export const Calculator = component(() => {
  const prev = reactive(0);
  const next = reactive(0);
  const awaitingInput = reactive(true);
  const display = reactive(EmptyDisplay);

  let currentOperation: null | Operation = null;

  /**
   * Executes the current operation.
   */
  const exec = (): number => currentOperation?.(prev.value, next.value) ?? next.value;

  /**
   * Completes the previous operation and loads a new one.
   * @param operation - Operation to load.
   */
  const load = (operation: Operation): void => {
    prev.value = exec();
    next.value = 0;
    awaitingInput.value = true;
    display.value = `${prev.value}`;
    currentOperation = operation;
  };

  /**
   * Finishes the current operation.
   */
  const finish = (): void => {
    next.value = exec();
    prev.value = 0;
    awaitingInput.value = true;
    display.value = `${next.value}`;
    currentOperation = null;
  };

  /**
   * Resets the calculator.
   */
  const reset = (): void => {
    prev.value = 0;
    next.value = 0;
    awaitingInput.value = true;
    display.value = EmptyDisplay;
    currentOperation = null;
  };

  /**
   * Appends a character to the display.
   * @param char - Character to append.
   */
  const append = (char: string): void => {
    if (awaitingInput.value) {
      display.value = '';
      awaitingInput.value = false;
    }

    display.value = display.value + char;
    next.value = parseFloat(display.value);
  };

  return html`
    <div class="w-full flex-1 flex flex-col gap-4 p-4 bg-gray-800 sm:flex-0 sm:w-96">
      <div class="p-6 bg-gray-700 text-2xl font-bold sm:p-3">${display}</div>
      <div class="flex-1 grid grid-cols-4 gap-2 sm:auto-rows-[--spacing(12)]">
        ${CalculatorBtn(
          {
            onclick: () => {
              append('7');
            },
            type: 'number',
          },
          '7',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('8');
            },
            type: 'number',
          },
          '8',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('9');
            },
            type: 'number',
          },
          '9',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              load((prev, next) => prev / next);
            },
            type: 'operation',
          },
          '/',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('4');
            },
            type: 'number',
          },
          '4',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('5');
            },
            type: 'number',
          },
          '5',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('6');
            },
            type: 'number',
          },
          '6',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              load((prev, next) => prev * next);
            },
            type: 'operation',
          },
          '*',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('1');
            },
            type: 'number',
          },
          '1',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('2');
            },
            type: 'number',
          },
          '2',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('3');
            },
            type: 'number',
          },
          '3',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              load((prev, next) => prev - next);
            },
            type: 'operation',
          },
          '-',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('0');
            },
            type: 'number',
          },
          '0',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              append('.');
            },
            type: 'number',
          },
          '.',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              reset();
            },
            type: 'operation',
          },
          'C',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              load((prev, next) => prev + next);
            },
            type: 'operation',
          },
          '+',
        )}
        ${CalculatorBtn(
          {
            onclick: () => {
              finish();
            },
            type: 'equals',
          },
          '=',
        )}
      </div>
    </div>
  `;
});

type Operation = (prev: number, next: number) => number;

const EmptyDisplay = '-';
