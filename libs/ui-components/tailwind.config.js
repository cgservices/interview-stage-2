const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { GlobalTheme } = require('./src/components/tailwind/global-theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  ...GlobalTheme,
  plugins: [],
};
