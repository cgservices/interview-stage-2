import * as Factory from 'factory.ts';

import type { ButtonProps } from '../button';
import { ButtonVariants } from '../button';
export const buttonMock = Factory.Sync.makeFactory<ButtonProps>({
  label: 'some label',
  variant: ButtonVariants.PRIMARY,
  isLoading: false,
  disabled: false,
});
