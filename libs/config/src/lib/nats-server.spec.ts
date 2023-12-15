import { getNatsServerUrl } from './nats-server';

describe('nats server', () => {
  it('should return the default nats server', () => {
    process.env.NATS_SERVER = '';
    expect(getNatsServerUrl()).toBe('0.0.0.0:4222');
  });

  it('should return the nats server', () => {
    process.env.NATS_SERVER = 'nats.com';
    expect(getNatsServerUrl()).toBe('nats.com');
  });
});
