/* eslint-disable */
export default {
  displayName: 'ui-components',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['../../jest.setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/libs/ui-components',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/utils/*.{js,jsx,ts,tsx}',
    '!src/components/**/test-factory/*.{js,jsx,tsx,ts}',
    '!src/components/logger-middleware.ts',
    '!src/components/atoms/logger-middleware.ts',
    '!src/components/molecules/logger-middleware.ts',
    '!src/components/tailwind',
  ],
};
