import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import type { Payment } from '@recharge/payment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('API_GATEWAY_PAYMENTS') public paymentsProxy: ClientProxy,
  ) {}

  findPaymentById(id: string) {
    return firstValueFrom(
      this.paymentsProxy.send<Payment>('payments.findPaymentById', id),
    );
  }
}
