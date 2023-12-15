import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { logger } from '@recharge/logger';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { getPort } from './port';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.use(cookieParser());

  app.enableCors({ origin: process.env.CORS_URLS, credentials: true });

  await app.listen(getPort());
};
bootstrap()
  .then(() => {
    logger.info(
      `API layer is successfully running on PORT: ${process.env.PORT}.\nView the GraphQL Playground here: http://localhost:${process.env.PORT}/graphql on development mode.`,
    );
  })
  .catch((error) => {
    logger.error(`Unable to start service`, error);
  });
