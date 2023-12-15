import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getNatsServerUrl } from '@recharge/config';
import { connect } from 'nats';

import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.register([
      {
        name: 'PAYMENTS_SERVICE',
        transport: Transport.NATS,
        options: {
          debug: process.env.NODE_ENV === 'development',
          servers: [getNatsServerUrl()],
        },
      },
    ]),
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,

    {
      provide: 'NATS_JETSTREAM_CONNECTION',
      useFactory: async () => {
        const client = await connect({
          servers: [getNatsServerUrl()],
        });
        return client.jetstream();
      },
    },
  ],
})
export class PaymentsModule {}
