import { attributes, component, html, ref } from 'ben-js';

export type InputProps = {
  autocomplete?: string;
  label: string;
  name: string;
  onUpdate: (value: string) => void;
  placeholder: string;
  type?: string;
};

export const Input = component<InputProps>((props) => {
  const input = ref<HTMLInputElement>();
  const uuid = crypto.randomUUID();

  input.on('input', () => {
    props.onUpdate.value(input.el.value!.value);
  });

  return html` <div class="flex flex-col gap-2">
    <label for="${uuid}">${props.label}</label>
    <input
      ref=${input}
      ${attributes({
        autocomplete: props.autocomplete ?? 'off',
        class: 'std-input',
        id: uuid,
        name: props.name,
        placeholder: props.placeholder,
        type: props.type ?? 'text',
      })}
    />
  </div>`;
});
