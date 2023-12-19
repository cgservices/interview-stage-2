import { Module } from '@nestjs/common';

import { PaymentsResolver } from './payments.resolver';
import { PaymentsService } from './payments.service';

@Module({
  imports: [],
  providers: [PaymentsResolver, PaymentsService],
})
export class PaymentsModule {}
