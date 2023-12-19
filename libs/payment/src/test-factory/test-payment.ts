import * as Factory from 'factory.ts';

import type { Payment } from '../lib/payment.entity';

type PaymentDetails = Payment['paymentDetails'];

export const testPaymentDetails = Factory.Sync.makeFactory<PaymentDetails>({
  country: 'France',
  price: 1000,
  currency: 'EUR',
  email: 'test@test.com',
  productId: '100200',
  externalProductId: '12345',
  cardScheme: 'AMEX',
});

export const testPayment = Factory.Sync.makeFactory<Payment>({
  id: '1',
  sessionId: '1',
  sessionData: 'something',
  createdAt: new Date(8.64e15),
  updatedAt: new Date(8.64e15),
  paymentDetails: testPaymentDetails.build(),
});
