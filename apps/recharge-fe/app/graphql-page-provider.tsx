'use client';
import type { ReactNode } from 'react';

import { Provider } from 'urql';
import { cacheExchange, createClient, fetchExchange } from 'urql/core';

export const client: ReturnType<typeof createClient> = createClient({
  url: `${
    process.env['NEXT_PUBLIC_BASE_URL'] || 'http://localhost:8000'
  }/graphql`,
  requestPolicy: 'cache-and-network',
  exchanges: [cacheExchange, fetchExchange],
});

export const GraphqlPageProvider = ({ children }: { children: ReactNode }) => (
  <Provider value={client}>{children}</Provider>
);
