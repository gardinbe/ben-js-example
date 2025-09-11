import { type Route } from '@ben-js/router';
import { html } from 'ben-js';
import { Calculator } from '~/lib/components/calculator/Calculator';

const CalculatorPage: Route = () => {
  return html`
    <div class="std-container">
      <h1>Calculator</h1>
      ${Calculator()}
    </div>
  `;
};

export default CalculatorPage;
