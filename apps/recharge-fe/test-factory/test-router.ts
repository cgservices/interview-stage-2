import * as Factory from 'factory.ts';
import type { useRouter } from 'next/navigation';

type Router = ReturnType<typeof useRouter>;

export const testRouter = Factory.Sync.makeFactory<Router>({
  push: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
});
