import { render, screen } from '@testing-library/react';

import RootLayout from './layout';

Object.assign(console, { error: jest.fn() });

describe('layout', () => {
  it('renders children', () => {
    render(<RootLayout>test</RootLayout>);

    expect(screen.queryByText('test')).toBeInTheDocument();
  });
});
