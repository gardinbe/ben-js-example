import { component, html, ref } from 'ben-js';

export type FormProps = {
  onSubmit: () => void;
};

export const Form = component<FormProps>((props, ...slots) => {
  const form = ref<HTMLFormElement>();
  form.on('submit', props.onSubmit.value);
  return html`<form
    ref="${form}"
    class="flex flex-col gap-4"
  >
    ${slots}
  </form>`;
});
