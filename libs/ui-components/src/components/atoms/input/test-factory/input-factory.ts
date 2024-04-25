import { Sync } from 'factory.ts';

import type { InputProps } from '../input';

export const inputPropsFactory = Sync.makeFactory<InputProps>({
  id: 'input-id-1',
  label: 'email example',
  name: 'email example',
  type: 'email',
  placeholder: 'test@test.com',
});
