import type { INestMicroservice } from '@nestjs/common';
import { Sync } from 'factory.ts';

export const testINestMicroservice = Sync.makeFactory<INestMicroservice>({
  listen: jest.fn().mockResolvedValue(undefined),
  useWebSocketAdapter: jest.fn().mockReturnThis(),
  useGlobalFilters: jest.fn().mockReturnThis(),
  useGlobalPipes: jest.fn().mockReturnThis(),
  useGlobalInterceptors: jest.fn().mockReturnThis(),
  useGlobalGuards: jest.fn().mockReturnThis(),
  close: jest.fn().mockReturnValue(Promise.resolve()),
  select: jest.fn().mockReturnThis(),
  get: jest.fn(),
  resolve: jest.fn().mockReturnValue(Promise.resolve()),
  registerRequestByContextId: jest.fn(),
  useLogger: jest.fn(),
  flushLogs: jest.fn(),
  enableShutdownHooks: jest.fn().mockReturnThis(),
  init: jest.fn().mockReturnValue(Promise.resolve(this)),
});
