import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { PaymentsModule } from './payments.module';
import { PaymentsResolver } from './payments.resolver';
import { PaymentsService } from './payments.service';

describe('ApiLayerPaymentsModule', () => {
  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PaymentsModule],
    }).compile();

    const paymentsResolver = module.get(PaymentsResolver);
    const paymentsService = module.get(PaymentsService);

    expect(paymentsResolver).toBeDefined();
    expect(paymentsService).toBeDefined();
  });
});
