const nxPreset = require('@nx/jest/preset').default;

process.env.NODE_ENV = 'test';

module.exports = {
  ...nxPreset,
  testPathIgnorePatterns: ['e2e'],
  coverageReporters: ['lcov', 'text'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,tsx,ts}',
    '**/*.*.{js,jsx,tsx,ts}',
    '!**/mockServiceWorker.js',
    '!**/*-mock.ts',
    '!**/test/**/*.{js,jsx,tsx,ts}',
    '!**/e2e/**/*.{js,jsx,tsx,ts}',
    '!**/generated/*.{js,jsx,tsx,ts}',
    '!**/*.stories*.{jsx,tsx,mdx}',
    '!**/test-factory/*.{js,jsx,tsx,ts}',
    '!**/.storybook/*',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/*.config.{js,ts}',
    '!src/rules-engine/scripts/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@recharge/tailwind/global-css$':
      '<rootDir>/libs/ui-components/src/components/tailwind/tailwind.css',
  },
};
