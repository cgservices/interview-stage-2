import type { NestMiddleware } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

import { logger } from './logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const { method, url, hostname, body } = request;
    const { statusCode, statusMessage } = response;

    logger.info({ request: { method, url, hostname, body } });
    logger.info({ response: { url, statusCode, statusMessage } });
    next();
  }
}
