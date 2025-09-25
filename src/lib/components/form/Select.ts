import { attributes, type Component, html, List, normalize, type Props, ref } from 'ben-js';

export type SelectOption = {
  default?: boolean;
  disabled?: boolean;
  label: string;
  selected?: boolean;
  value: string;
};

export type SelectProps = Props<{
  autocomplete?: string;
  label: string;
  name: string;
  onUpdate: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  type?: string;
}>;

export const Select = (props: SelectProps): Component => {
  const { autocomplete, label, name, onUpdate, options, placeholder, type } = normalize(props);

  const select = ref<HTMLSelectElement>();
  const uuid = crypto.randomUUID();

  select.on('input', () => {
    onUpdate.value(select.el.value!.value);
  });

  return html` <div class="flex flex-col gap-2">
    <label for="${uuid}">${label}</label>
    <select
      ref=${select}
      ${attributes({
        autocomplete: autocomplete ?? 'off',
        class: 'std-input',
        id: uuid,
        name: name,
        placeholder: placeholder,
        type: type ?? 'select-one',
      })}
    >
      ${List(() =>
        options.value.map((option) => ({
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
};
