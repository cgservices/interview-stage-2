import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import waitForExpect from 'wait-for-expect';

const mockInfo = jest.fn();
const mockError = jest.fn();

jest.mock('@nestjs/core');
jest.mock('@recharge/logger', () => ({
  logger: { error: mockError, info: mockInfo },
}));

NestFactory.create = jest.fn();
const createMock = jest.mocked(NestFactory.create);

describe('Main test Api Layer', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should be defined', async () => {
    process.env.PORT = '';
    createMock.mockResolvedValueOnce({
      useGlobalPipes: jest.fn(),
      use: jest.fn(),
      enableCors: jest.fn(),
      listen: jest.fn(),
    } as unknown as INestApplication);

    await expect(import('./main')).resolves.toBeDefined();

    await waitForExpect(() => {
      expect(mockInfo).toHaveBeenCalledTimes(1);
    });
  });

  it('handles error', async () => {
    createMock.mockRejectedValueOnce(new Error('fake'));

    await expect(import('./main')).resolves.toBeDefined();

    await waitForExpect(() => {
      expect(mockError).toHaveBeenCalledTimes(1);
    });
  });
});
