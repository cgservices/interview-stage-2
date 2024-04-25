import { Sync } from 'factory.ts';

import type { LinkProps } from '../link';

export const linkPropsFactory = Sync.makeFactory<LinkProps>({
  text: 'Test Link',
  baseURL: '//example.com',
  slug: 'test-slug',
});
