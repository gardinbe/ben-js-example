import { attrs, type Component, html, normalize, type Props, ref } from 'ben-js';

export type InputProps = Props<{
  autocomplete?: string;
  label: string;
  name: string;
  onUpdate: (value: string) => void;
  placeholder: string;
  type?: string;
}>;

export const Input = (props: InputProps): Component => {
  const { onUpdate } = normalize(props);

  const input = ref<HTMLInputElement>();
  const uuid = crypto.randomUUID();

  input.on('input', () => {
    onUpdate.value(input.el!.value);
  });

  return html` <div class="flex flex-col gap-2">
    <label for="${uuid}">${props.label}</label>
    <input
      ref=${input}
      ${attrs({
        autocomplete: props.autocomplete ?? 'off',
        class: 'std-input',
        id: uuid,
        name: props.name,
        placeholder: props.placeholder,
        type: props.type ?? 'text',
      })}
    />
  </div>`;
};
