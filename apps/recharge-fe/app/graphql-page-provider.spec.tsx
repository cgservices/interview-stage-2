import { screen } from '@testing-library/react';

import { renderWithProviders } from '../test-utils/render-with-providers';
import { GraphqlPageProvider } from './graphql-page-provider';

describe('graphql page provider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders its children', () => {
    renderWithProviders(
      <GraphqlPageProvider>
        <div>some content</div>
      </GraphqlPageProvider>,
    );

    expect(screen.getByText('some content')).toBeInTheDocument();
  });
});
