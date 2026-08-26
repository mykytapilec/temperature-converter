export type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

const toCelsius = (value: number, unit: TemperatureUnit): number => {
  switch (unit) {
    case 'celsius':
      return value;
    case 'fahrenheit':
      return (value - 32) * (5 / 9);
    case 'kelvin':
      return value - 273.15;
  }
};

const fromCelsius = (value: number, unit: TemperatureUnit): number => {
  switch (unit) {
    case 'celsius':
      return value;
    case 'fahrenheit':
      return value * (9 / 5) + 32;
    case 'kelvin':
      return value + 273.15;
  }
};

export const convertTemperature = (
  value: number,
  fromUnit: TemperatureUnit,
  toUnit: TemperatureUnit,
): number => {
  if (fromUnit === toUnit) {
    return value;
  }

  const celsiusValue = toCelsius(value, fromUnit);

  return fromCelsius(celsiusValue, toUnit);
};