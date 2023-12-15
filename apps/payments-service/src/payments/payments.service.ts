import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import type { CreatePaymentDto } from '@recharge/payment';

@Injectable()
export class PaymentsService {
  constructor(@Inject('PAYMENTS_SERVICE') public paymentsProxy: ClientProxy) {}

  createPayment(createPaymentDto: CreatePaymentDto) {
    return createPaymentDto;
  }
}
