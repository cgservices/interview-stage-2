import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './input';
import { inputPropsFactory } from './test-factory/input-factory';

const mockChange = jest.fn();

const setup = (optionalParams = {}) => {
  const defaultProps = {
    ...inputPropsFactory.build(),
    ...optionalParams,
    onChange: mockChange,
  };

  render(<Input {...defaultProps} />);
};

describe('Input', () => {
  beforeEach(jest.resetAllMocks);

  it('should render successfully', () => {
    const label = 'test input';
    setup({ label });

    expect(screen.queryByLabelText(label)).toBeInTheDocument();
  });

  it('should render an input without label', () => {
    const label = undefined;
    const placeholder = 'placeholder';
    setup({ label, placeholder });

    expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should register the input field change successfully', () => {
    const label = 'test input';
    setup({ label });

    fireEvent.change(screen.getByLabelText(label), {
      target: { value: 'new value' },
    });

    expect(mockChange).toHaveBeenCalled();
  });
});
