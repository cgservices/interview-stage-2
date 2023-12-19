import { fireEvent, render, screen } from '@testing-library/react';

import type { ButtonVariantsProps } from './button';
import { Button, ButtonVariants } from './button';
import { buttonMock } from './test-factory/button-factory';

const mockCall = jest.fn();
const testLabel = 'test';

type SetupParams = {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariantsProps;
};

const setup = ({
  isLoading = false,
  disabled = false,
  variant = ButtonVariants.PRIMARY,
}: SetupParams = {}) => {
  const overriddenMockData = buttonMock.build({
    label: testLabel,
    onClick: mockCall,
    variant,
    isLoading,
    disabled,
  });

  render(<Button {...overriddenMockData} />);

  return screen.getByRole('button');
};

describe('Button', () => {
  beforeEach(() => mockCall.mockReset());

  const variants = [ButtonVariants.PRIMARY];

  it.each(variants)('should render %s variant successfully', (variant) => {
    const button = setup({
      variant,
    });
    expect(button).toBeInTheDocument();
  });

  it('should register 3 button clicks when clicked', () => {
    const button = setup();
    const buttonClick = () => fireEvent.click(button);
    buttonClick();
    buttonClick();
    buttonClick();
    expect(mockCall).toHaveBeenCalledTimes(3);
  });

  it('should render the disabled button successfully', () => {
    const button = setup({ disabled: true });
    expect(button).toBeDisabled();
  });
});
