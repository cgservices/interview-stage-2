import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { buttonMock } from './test-factory/button-factory';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Atoms/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { ...buttonMock.build({ label: 'Primary Button' }) },
};
