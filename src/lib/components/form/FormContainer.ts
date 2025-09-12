import { type Component, html } from 'ben-js';

export const FormContainer = (...slots: unknown[]): Component => {
  return html`<div class="flex flex-col gap-4 w-75">${slots}</div>`;
};
