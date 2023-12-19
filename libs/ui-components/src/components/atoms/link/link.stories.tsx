import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';
import { mockLinkProps } from './link.mocks';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Atoms/Link',
};

export default meta;

type Story = StoryObj<typeof Link>;

const exampleIconUrl = {
  fields: {
    file: {
      url: '//placehold.co/60x40',
    },
  },
};

export const LinkWithoutIcon: Story = {
  args: {
    ...mockLinkProps,
  },
};

export const LinkWithIconInLeft: Story = {
  args: {
    ...mockLinkProps,
    iconPosition: 'left',
    iconProps: {
      icon: exampleIconUrl,
      iconWidth: 24,
      iconHeight: 24,
    },
  },
};

export const LinkWithIconInRight: Story = {
  args: {
    ...mockLinkProps,
    iconPosition: 'right',
    iconProps: {
      icon: exampleIconUrl,
      iconWidth: 24,
      iconHeight: 24,
    },
  },
};
