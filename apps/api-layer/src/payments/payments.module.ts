import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getNatsServerUrl } from '@recharge/config';

import { PaymentsResolver } from './payments.resolver';
import { PaymentsService } from './payments.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_GATEWAY_PAYMENTS',
        transport: Transport.NATS,
        options: {
          debug: process.env.NODE_ENV === 'development',
          servers: [getNatsServerUrl()],
          jetstream: true,
        },
      },
    ]),
  ],
  providers: [PaymentsResolver, PaymentsService],
})
export class PaymentsModule {}
