import { NestFactory } from '@nestjs/core';
import type { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { getNatsServerUrl } from '@recharge/config';
import { logger } from '@recharge/logger';

import { AppModule } from './app.module';

export const bootstrap = async () => {
  try {
    const server = getNatsServerUrl();
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.NATS,
        options: {
          servers: [server],
        },
      },
    );
    await app.listen();
    logger.info(`The payments microservice is listening to: ${server}.`);
  } catch (error) {
    logger.error('Unable to start service', error);
  }
};
