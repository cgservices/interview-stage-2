import type { ReactElement, ReactNode } from 'react';
import { render, renderHook } from '@testing-library/react';

import { GraphqlPageProvider } from '../app/graphql-page-provider';

export const renderWithProviders = (component: ReactElement) => {
  const Wrappers = ({ children }: { children: ReactNode }) => (
    <GraphqlPageProvider>{children}</GraphqlPageProvider>
  );
  return render(component, { wrapper: Wrappers });
};

export const renderHookWithProvider = <Result, Props>(
  render: (props: Props) => Result,
) => {
  const Wrappers = ({ children }: { children: ReactNode }) => (
    <GraphqlPageProvider>{children}</GraphqlPageProvider>
  );

  return renderHook<Result, Props>(render, { wrapper: Wrappers });
};
