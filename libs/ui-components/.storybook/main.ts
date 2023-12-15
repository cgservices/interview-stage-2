import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/nextjs',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
};

export default config;
