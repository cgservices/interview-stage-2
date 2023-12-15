import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';
import { inputMockProps } from './input.mocks';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Atoms/Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const email: Story = {
  args: {
    ...inputMockProps,
  },
};
