import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { PaymentsService } from './payments.service';

@Resolver('Payment')
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Query('findPaymentById')
  async findPaymentById(@Args('id') id: string) {
    const payment = await this.paymentsService.findPaymentById(id);
    if (!payment) {
      throw new NotFoundException(`The payment with the ${id} does not exist.`);
    }
    return payment;
  }
}
