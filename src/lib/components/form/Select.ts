import { attributes, component, html, List, ref } from 'ben-js';

export type SelectOption = {
  default?: boolean;
  disabled?: boolean;
  label: string;
  selected?: boolean;
  value: string;
};

export type SelectProps = {
  autocomplete?: string;
  label: string;
  name: string;
  onUpdate: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  type?: string;
};

export const Select = component<SelectProps>((props) => {
  const select = ref<HTMLSelectElement>();
  const uuid = crypto.randomUUID();

  select.on('input', () => {
    props.onUpdate.value(select.el.value!.value);
  });

  return html` <div class="flex flex-col gap-2">
    <label for="${uuid}">${props.label}</label>
    <select
      ref=${select}
      ${attributes({
        autocomplete: props.autocomplete ?? 'off',
        class: 'std-input',
        id: uuid,
        name: props.name,
        placeholder: props.placeholder,
        type: props.type ?? 'select-one',
      })}
    >
      ${List(() =>
        props.options.value.map((option) => ({
          component: html`<option
            ${attributes({
              default: option.default,
              disabled: option.disabled,
              selected: option.selected,
              value: option.value,
            })}
          >
            ${option.label}
          </option>`,
          key: option.value,
        })),
      )}
    </select>
  </div>`;
});
