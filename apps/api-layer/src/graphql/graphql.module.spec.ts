import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { GlobalGraphQlModule } from './graphql.module';

describe('ApiLayerGraphqlModule', () => {
  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GlobalGraphQlModule],
    }).compile();

    const globalGraphQlModule = module.get(GlobalGraphQlModule);

    expect(globalGraphQlModule).toBeDefined();
  });
});
