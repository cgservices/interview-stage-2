import { render, screen } from '@testing-library/react';

import { Link } from './link';
import { mockLinkProps } from './link.mocks';

jest.mock(
  'next/legacy/image',
  () =>
    function MockedImage({ src, alt }: { src: string; alt: string }) {
      return <img src={src} alt={alt} />;
    },
);

const renderComponent = (propsOverride = {}) => {
  const defaultProps = {
    ...mockLinkProps,
    ...propsOverride,
  };

  return render(<Link {...defaultProps} />);
};

describe('Link', () => {
  it('renders the link text correctly', () => {
    renderComponent();
    const testLink = screen.getByText('Test Link');

    expect(testLink).toBeInTheDocument();
  });

  it('renders without an icon when icon props are not provided', () => {
    renderComponent();
    const linkIcon = screen.queryByAltText(/^link icon/);

    expect(linkIcon).not.toBeInTheDocument();
  });

  it('does not render any icon when iconProps is null or undefined', () => {
    const { container } = renderComponent({ iconProps: null });

    const icons = container.querySelectorAll('img');

    expect(icons.length).toBe(0);
  });

  it('constructs the link href correctly', () => {
    const linkProps = { baseURL: 'https://example.com', slug: 'test-slug' };

    renderComponent(linkProps);

    const anchorTag = screen.getByText('Test Link').closest('a');

    expect(anchorTag).toHaveAttribute('href', 'https://example.com/test-slug');
  });

  it('renders with a left icon when icon props are provided with "left" position', () => {
    const linkProps = {
      iconPosition: 'left',
      iconProps: {
        icon: { fields: { file: { url: '//example.com/icon.svg' } } },
      },
    };

    renderComponent(linkProps);

    const icon = screen.getByAltText('link icon to the left of the text');

    expect(icon).toBeInTheDocument();

    expect(icon).toHaveAttribute('src', 'https://example.com/icon.svg');
  });

  it('renders with a right icon when icon props are provided with "right" position', () => {
    const linkProps = {
      iconPosition: 'right',
      iconProps: {
        icon: { fields: { file: { url: '//example.com/icon.svg' } } },
      },
    };

    renderComponent(linkProps);

    const icon = screen.getByAltText('link icon to the right of the text');

    expect(icon).toBeInTheDocument();

    expect(icon).toHaveAttribute('src', 'https://example.com/icon.svg');
  });

  it('applies custom classes when provided', () => {
    const linkProps = { classes: 'custom-class' };

    renderComponent(linkProps);

    const anchorTag = screen.getByText('Test Link').closest('a');

    expect(anchorTag).toHaveClass('custom-class');
  });
});
