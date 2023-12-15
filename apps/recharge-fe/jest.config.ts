/* eslint-disable */
export default {
  displayName: 'recharge-fe',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['../../jest.setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/recharge-fe',
};
