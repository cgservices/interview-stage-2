import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

const baseURL = `${process.env['BASE_URL'] || 'http://localhost:8000'}/graphql`;

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './e2e' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
