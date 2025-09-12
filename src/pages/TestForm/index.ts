import type { Route } from '@ben-js/router';

import { html, reactive } from 'ben-js';

import { Btn } from '~/lib/components/Btn';
import { Form } from '~/lib/components/form/Form';
import { FormContainer } from '~/lib/components/form/FormContainer';
import { Input } from '~/lib/components/form/Input';
import { Select } from '~/lib/components/form/Select';

const StepFormPage: Route = () => {
  const data = reactive({
    email: '',
    firstName: '',
    gender: '',
    lastName: '',
  });

  return html`<div class="std-container">
    ${FormContainer(
      Form(
        {
          onSubmit: () => {
            console.log('submit');
          },
        },
        Input({
          autocomplete: 'email',
          label: 'Email',
          name: 'email',
          onUpdate: (email) => (data.value.email = email),
          placeholder: 'Email',
        }),
        Input({
          autocomplete: 'given-name',
          label: 'First Name',
          name: 'first-name',
          onUpdate: (firstName) => (data.value.firstName = firstName),
          placeholder: 'First name',
        }),
        Input({
          autocomplete: 'family-name',
          label: 'Last Name',
          name: 'last-name',
          onUpdate: (lastName) => (data.value.lastName = lastName),
          placeholder: 'Last name',
        }),
        Select({
          autocomplete: 'gender',
          label: 'Gender',
          name: 'gender',
          onUpdate: (gender) => (data.value.gender = gender),
          options: [
            { default: true, disabled: true, label: 'Select', selected: true, value: '' },
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ],
          placeholder: 'Select gender',
        }),
      ),
      Btn(
        {
          onClick: () => {
            console.log(data.value);
          },
          type: 'submit',
          variant: 'primary',
        },
        'Submit',
      ),
    )}
    </div>
  </div>`;
};

export default StepFormPage;
