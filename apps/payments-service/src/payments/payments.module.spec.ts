import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';

import { PaymentsController } from './payments.controller';
import { PaymentsModule } from './payments.module';
import { PaymentsService } from './payments.service';

jest.mock('@recharge/logger');

jest.mock('nats', () => ({
  connect: jest.fn().mockResolvedValue({
    jetstream: jest.fn(),
  }),
  JSONCodec: jest.fn(),
}));

describe('PaymentsModule', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      providers: [
        { provide: ClientsModule, useValue: jest.fn() },
        {
          provide: 'PAYMENTS_SERVICE',
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
      imports: [PaymentsModule],
    })
      .overrideProvider(ConfigService)
      .useValue({
        getOrThrow: jest.fn().mockReturnValue('some value'),
      })
      .compile();

    expect(module.get(PaymentsController)).toBeDefined();
    expect(module.get(PaymentsService)).toBeDefined();
  });
});
