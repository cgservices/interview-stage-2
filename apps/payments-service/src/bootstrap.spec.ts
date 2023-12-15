import { NestFactory } from '@nestjs/core';
import { logger } from '@recharge/logger';
import { testINestMicroservice } from '@recharge/test-util/test-factory';

import { bootstrap } from './bootstrap';

jest.mock('@nestjs/core');
jest.mock('@recharge/logger');

const mockError = jest.spyOn(logger, 'error').mockReturnValue(undefined);
const mockInfo = jest.spyOn(logger, 'info').mockReturnValue(undefined);

NestFactory.createMicroservice = jest.fn();
const createMock = jest.mocked(NestFactory.createMicroservice);

describe('Payment service bootstrap', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should start with default environment variable', async () => {
    process.env.NATS_SERVER = '';
    createMock.mockResolvedValueOnce(testINestMicroservice.build());

    await bootstrap();

    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledWith(
      'The payments microservice is listening to: 0.0.0.0:4222.',
    );
  });

  it('should start with nats server from environment variables', async () => {
    process.env.NATS_SERVER = 'nats.com';
    createMock.mockResolvedValueOnce(testINestMicroservice.build());

    await bootstrap();

    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledWith(
      'The payments microservice is listening to: nats.com.',
    );
  });

  it('handles error', async () => {
    createMock.mockResolvedValueOnce(
      testINestMicroservice.build({
        listen: jest.fn().mockRejectedValueOnce(new Error('fake')),
      }),
    );
    await bootstrap();

    expect(mockError).toHaveBeenCalledTimes(1);
  });
});
