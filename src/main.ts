import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root was not found.');
}

app.innerHTML = `
  <main class="converter">
    <h1>Temperature Converter</h1>
    <p class="description">
      Enter the temperature, select units and submit
    </p>

    <form class="converter-form">
      <input
        id="temperature"
        name="temperature"
        type="number"
        step="any"
        placeholder="0.00"
        aria-label="Temperature"
      />

      <select id="from-unit" name="from-unit" aria-label="From unit">
        <option value="" selected disabled>From Unit</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="celsius">Celsius</option>
        <option value="kelvin">Kelvin</option>
      </select>

      <select id="to-unit" name="to-unit" aria-label="To unit">
        <option value="" selected disabled>To Unit</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="celsius">Celsius</option>
        <option value="kelvin">Kelvin</option>
      </select>

      <button type="submit" disabled>Convert</button>
    </form>

    <output class="result" aria-live="polite"></output>
  </main>
`;

const form = document.querySelector<HTMLFormElement>('.converter-form');
const temperatureInput =
  document.querySelector<HTMLInputElement>('#temperature');
const fromUnitSelect =
  document.querySelector<HTMLSelectElement>('#from-unit');
const toUnitSelect = document.querySelector<HTMLSelectElement>('#to-unit');
const convertButton = document.querySelector<HTMLButtonElement>(
  'button[type="submit"]',
);

if (
  !form ||
  !temperatureInput ||
  !fromUnitSelect ||
  !toUnitSelect ||
  !convertButton
) {
  throw new Error('Required form elements were not found.');
}

const updateButtonState = (): void => {
  convertButton.disabled =
    temperatureInput.value.trim() === '' ||
    fromUnitSelect.value === '' ||
    toUnitSelect.value === '';
};

temperatureInput.addEventListener('input', updateButtonState);
fromUnitSelect.addEventListener('change', updateButtonState);
toUnitSelect.addEventListener('change', updateButtonState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
});