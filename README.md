# Temperature Converter

A simple web application for converting temperatures between Celsius, Fahrenheit, and Kelvin.

This project was built as part of the [Temperature Converter project](https://roadmap.sh/projects/temperature-converter) from roadmap.sh. The original project is focused on practicing DOM manipulation, form handling, conditional form controls, and basic calculations.

## Features

* Convert temperatures between Celsius, Fahrenheit, and Kelvin
* Support conversions in all directions between the supported units
* Support decimal values
* Support negative temperatures
* Support converting a value to the same unit
* Disable the `Convert` button until all required fields are filled
* Display the converted temperature below the form
* Responsive interface
* Unit tests for the conversion logic

## Supported Units

* Celsius
* Fahrenheit
* Kelvin

## Conversion Examples

| From       | To         |  Input | Result |
| ---------- | ---------- | -----: | -----: |
| Celsius    | Fahrenheit |     34 |   93.2 |
| Fahrenheit | Celsius    |     32 |      0 |
| Celsius    | Kelvin     |      0 | 273.15 |
| Kelvin     | Celsius    | 273.15 |      0 |
| Fahrenheit | Kelvin     |     32 | 273.15 |
| Celsius    | Fahrenheit |    -40 |    -40 |

## Tech Stack

* TypeScript
* Vite
* Vitest
* HTML
* CSS

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/mykytapilec/temperature-converter.git
cd temperature-converter
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal. Open that URL in your browser.

### Production Build

Create a production build:

```bash
npm run build
```

### Testing

Run the unit test suite:

```bash
npm test
```

The test suite covers the supported conversion directions, same-unit conversions, negative temperatures, and decimal values.

## Project Structure

```text
temperature-converter/
├── src/
│   ├── converter.test.ts
│   ├── converter.ts
│   ├── main.ts
│   └── style.css
├── .gitignore
├── .gitkeep
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Conversion Logic

The conversion logic is isolated in `src/converter.ts`.

The implementation uses Celsius as an intermediate unit for conversions between different temperature scales:

```text
Input value
    ↓
Convert to Celsius
    ↓
Convert from Celsius to target unit
    ↓
Converted value
```

When the source and target units are the same, the original value is returned without performing an unnecessary conversion.

## Testing

Unit tests are implemented with Vitest.

The test suite currently covers:

* Celsius → Fahrenheit
* Fahrenheit → Celsius
* Celsius → Kelvin
* Kelvin → Celsius
* Fahrenheit → Kelvin
* Kelvin → Fahrenheit
* Celsius → Celsius
* Fahrenheit → Fahrenheit
* Kelvin → Kelvin
* Negative temperatures
* Decimal temperatures

Run the tests with:

```bash
npm test
```

## Development Commands

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the Vite development server        |
| `npm run build` | Type-check and create a production build |
| `npm test`      | Run the Vitest test suite                |

## Project Reference

This project is based on the following roadmap.sh project:

**Temperature Converter**
https://roadmap.sh/projects/temperature-converter

## Repository

GitHub repository:

https://github.com/mykytapilec/temperature-converter
