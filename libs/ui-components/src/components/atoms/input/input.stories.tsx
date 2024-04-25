import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';
import { inputPropsFactory } from './test-factory/input-factory';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Atoms/Input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const email: Story = {
  args: {
    ...inputPropsFactory.build(),
  },
};
