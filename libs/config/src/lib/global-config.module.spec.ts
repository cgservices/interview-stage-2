import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';

import { GlobalConfigModule } from './global-config.module';

jest.mock('@recharge/logger');

describe('Global config', () => {
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
      imports: [GlobalConfigModule],
    })
      .overrideProvider(ConfigService)
      .useValue({
        getOrThrow: jest.fn().mockReturnValue('some value'),
      })
      .compile();

    expect(module.get(GlobalConfigModule)).toBeDefined();
  });
});
