import { route } from '@ben-js/router';
import { html } from 'ben-js';
import { Calculator } from '~/lib/components/calculator/Calculator';

const CalculatorPage = route(() => {
  return html`
    <div class="std-container">
      <h1>Calculator</h1>
      ${Calculator()}
    </div>
  `;
});

export default CalculatorPage;
