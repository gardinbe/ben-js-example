import { type Component, html, normalize, type Props, ref } from 'ben-js';

export type FormProps = Props<{
  onSubmit: (ev: SubmitEvent) => void;
}>;

export const Form = (props: FormProps, ...slots: unknown[]): Component => {
  const { onSubmit } = normalize(props);

  const form = ref<HTMLFormElement>();
  form.on('submit', onSubmit.value);

  return html`<form
    ref="${form}"
    class="flex flex-col gap-4"
  >
    ${slots}
  </form>`;
};
