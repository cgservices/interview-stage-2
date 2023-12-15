import { Sync } from 'factory.ts';
import type {
  Consumers,
  JetStreamClient,
  KV,
  KvEntry,
  Streams,
  Views,
} from 'nats';

export const testKvEntry = Sync.makeFactory<KvEntry>({
  bucket: 'mockBucket',
  key: 'mockKey',
  value: new Uint8Array([]),
  created: new Date(),
  revision: 1,
  delta: 0,
  operation: 'PUT',
  length: 0,
  json: <T>() => ({} as T),
  string: () => '',
});

export const testJetStreamKv = Sync.makeFactory<KV>({
  get: jest.fn(),
  history: jest.fn(),
  watch: jest.fn(),
  close: jest.fn(),
  status: jest.fn(),
  keys: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  purge: jest.fn(),
  destroy: jest.fn(),
});
export const testJetstreamViews = Sync.makeFactory<Views>({
  kv: jest.fn().mockReturnValue(testJetStreamKv.build()),
  os: jest.fn(),
});
export const testJetstreamClient = Sync.makeFactory<JetStreamClient>({
  publish: jest.fn(),
  pull: jest.fn(),
  fetch: jest.fn(),
  pullSubscribe: jest.fn(),
  subscribe: jest.fn(),
  views: testJetstreamViews.build(),
  apiPrefix: '',
  consumers: {} as Consumers,
  streams: {} as Streams,
  jetstreamManager: jest.fn(),
  getOptions: jest.fn(),
});
