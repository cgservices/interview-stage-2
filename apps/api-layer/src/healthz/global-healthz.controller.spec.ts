import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../app.module';

describe('global healthz controller', () => {
  const createApp = async () => {
    const app = (
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile()
    ).createNestApplication();

    await app.init();

    return app;
  };

  it('returns ok for health', async () => {
    const app = await createApp();
    const response = await request(app.getHttpServer()).get('/healthz');

    expect(response.text).toEqual(expect.stringContaining(''));
  });

  it('returns ok for all health', async () => {
    const app = await createApp();
    const response = await request(app.getHttpServer()).get('/healthz/all');

    expect(response.text).toEqual(expect.stringContaining(''));
  });
});
