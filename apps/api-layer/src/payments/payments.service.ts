import { Injectable } from '@nestjs/common';
import type { Payment } from '@recharge/payment';

@Injectable()
export class PaymentsService {
  private payments = new Map<string, Payment>();

  async findPaymentById(id: string) {
    return await Promise.resolve(this.payments.get(id));
  }
}
