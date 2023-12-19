import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { PaymentsService } from './payments.service';

const mockIdInput = '123456';

describe('PaymentsService', () => {
  const getServices = async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PaymentsService,
        {
          provide: 'API_GATEWAY_PAYMENTS',
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compile();

    return {
      paymentsService: moduleRef.get(PaymentsService),
      paymentsProxy: moduleRef.get('API_GATEWAY_PAYMENTS'),
    };
  };

  it("should call findPaymentById's paymentsProxy.send with correct parameters", async () => {
    const { paymentsService, paymentsProxy } = await getServices();

    jest.spyOn(paymentsProxy, 'send').mockReturnValue(of(undefined));

    await paymentsService.findPaymentById(mockIdInput);

    expect(paymentsProxy.send).toHaveBeenCalledWith(
      'payments.findPaymentById',
      mockIdInput,
    );
  });
});
