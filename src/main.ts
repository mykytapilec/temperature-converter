const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root element was not found.');
}

app.innerHTML = `
  <main>
    <h1>Temperature Converter</h1>
  </main>
`;