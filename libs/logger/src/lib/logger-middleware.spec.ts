import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Controller, Get, Module, RequestMethod } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { logger } from './logger';
import { LoggerMiddleware } from './logger-middleware';

logger.info = jest.fn();
const mockInfo = jest.mocked(logger.info);

@Controller()
class TestController {
  @Get('/test')
  getTest() {
    return 'test';
  }
}

@Module({
  imports: [],
  exports: [],
  controllers: [TestController],
  providers: [],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

const createApp = async () => {
  const app = (
    await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
  ).createNestApplication();

  await app.init();

  return app;
};

describe('logger middleware', () => {
  it('logs requests', async () => {
    const app = await createApp();
    await request(app.getHttpServer()).get('/test').expect(200, 'test');

    expect(mockInfo).toHaveBeenCalled();
  });
});
