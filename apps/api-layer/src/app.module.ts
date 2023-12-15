import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module, RequestMethod } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GlobalConfigModule } from '@recharge/config';
import { LoggerMiddleware } from '@recharge/logger';

import { GlobalGraphQlModule } from './graphql/graphql.module';
import { GlobalHealthzController } from './healthz/global-healthz.controller';
import { GlobalHealthzService } from './healthz/global-healthz.service';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [GlobalConfigModule, GlobalGraphQlModule, PaymentsModule],
  exports: [GlobalGraphQlModule],
  controllers: [GlobalHealthzController],
  providers: [GlobalHealthzService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
