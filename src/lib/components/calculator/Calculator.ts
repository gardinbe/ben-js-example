import { html, reactive } from 'ben-js';
import { CalculatorBtn } from '~/lib/components/calculator/CalculatorBtn';

type Operation = (prev: number, next: number) => number;

const EmptyDisplay = '-';

export const Calculator = () => {
  const prev = reactive(0);
  const next = reactive(0);
  const awaitingInput = reactive(true);
  const display = reactive(EmptyDisplay);

  let currentOperation: Operation | null = null;

  /**
   * Executes the current operation.
   */
  const exec = () => currentOperation?.(prev.value, next.value) ?? next.value;

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
            type: 'number',
            onclick: () => {
              append('7');
            }
          },
          '7'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('8');
            }
          },
          '8'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('9');
            }
          },
          '9'
        )}
        ${CalculatorBtn(
          {
            type: 'operation',
            onclick: () => {
              load((prev, next) => prev / next);
            }
          },
          '/'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('4');
            }
          },
          '4'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('5');
            }
          },
          '5'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('6');
            }
          },
          '6'
        )}
        ${CalculatorBtn(
          {
            type: 'operation',
            onclick: () => {
              load((prev, next) => prev * next);
            }
          },
          '*'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('1');
            }
          },
          '1'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('2');
            }
          },
          '2'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('3');
            }
          },
          '3'
        )}
        ${CalculatorBtn(
          {
            type: 'operation',
            onclick: () => {
              load((prev, next) => prev - next);
            }
          },
          '-'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('0');
            }
          },
          '0'
        )}
        ${CalculatorBtn(
          {
            type: 'number',
            onclick: () => {
              append('.');
            }
          },
          '.'
        )}
        ${CalculatorBtn(
          {
            type: 'operation',
            onclick: () => {
              reset();
            }
          },
          'C'
        )}
        ${CalculatorBtn(
          {
            type: 'operation',
            onclick: () => {
              load((prev, next) => prev + next);
            }
          },
          '+'
        )}
        ${CalculatorBtn(
          {
            type: 'equals',
            onclick: () => {
              finish();
            }
          },
          '='
        )}
      </div>
    </div>
  `;
};
