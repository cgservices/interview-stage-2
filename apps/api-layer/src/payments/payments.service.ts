import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import type { Payment } from '@recharge/payment';

@Injectable()
export class PaymentsService {
  private payments = new Map<string, Payment>();
  constructor(
    @Inject('API_GATEWAY_PAYMENTS') public paymentsProxy: ClientProxy,
  ) {}

  async findPaymentById(id: string) {
    return await Promise.resolve(this.payments.get(id));
  }
}
