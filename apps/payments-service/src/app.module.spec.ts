import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { expect } from '@playwright/test';
import { GlobalConfigModule } from '@recharge/config';

import { AppModule } from './app.module';
import { PaymentsModule } from './payments/payments.module';

jest.mock('@recharge/logger');

jest.mock('nats', () => ({
  connect: jest.fn().mockResolvedValue({
    jetstream: jest.fn(),
  }),
  JSONCodec: jest.fn(),
}));

describe('AppPaymentsModule', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ConfigService)
      .useValue({
        getOrThrow: jest.fn().mockReturnValue('some value'),
      })
      .compile();

    expect(module.get(AppModule)).toBeDefined();
    expect(module.get(GlobalConfigModule)).toBeDefined();
    expect(module.get(PaymentsModule)).toBeDefined();
  });
});
