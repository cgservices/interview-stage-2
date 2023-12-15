import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig } from '@playwright/test';
import waitForExpect from 'wait-for-expect';

waitForExpect.defaults.interval = 1000;

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        headless: true,
        launchOptions: {
          args: ['--no-sandbox'],
        },
      },
    },
  ],
});
