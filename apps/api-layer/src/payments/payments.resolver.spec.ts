import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { testPayment } from '@recharge/payment/test-factory';

import { PaymentsResolver } from './payments.resolver';
import { PaymentsService } from './payments.service';

const mockPayment = testPayment.build();

const findPaymentById = jest.fn();

describe('PaymentsResolver', () => {
  const getResolver = async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PaymentsResolver,
        {
          provide: PaymentsService,
          useValue: {
            findPaymentById,
          },
        },
        {
          provide: 'API_GATEWAY_PAYMENTS',
          useValue: {},
        },
      ],
    }).compile();

    return moduleRef.get(PaymentsResolver);
  };

  describe('Payments', () => {
    it('should call the findPaymentById resolver with the mocked results', async () => {
      findPaymentById.mockResolvedValueOnce(mockPayment);
      const paymentsResolver = await getResolver();
      const result = await paymentsResolver.findPaymentById(mockPayment.id);
      expect(result).toStrictEqual(mockPayment);
    });

    it('should call the findPaymentById and receive a not found', async () => {
      findPaymentById.mockResolvedValueOnce(null);
      const paymentsResolver = await getResolver();
      await expect(paymentsResolver.findPaymentById('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
