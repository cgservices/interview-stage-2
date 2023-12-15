import { Module } from '@nestjs/common';
import { GlobalConfigModule } from '@recharge/config';

import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [GlobalConfigModule, PaymentsModule],
})
export class AppModule {}
