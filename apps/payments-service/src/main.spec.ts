import { bootstrap } from './bootstrap';

jest.mock('./bootstrap');

const mockBootstrap = jest.mocked(bootstrap);

describe('Payment service main', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('should be defined', async () => {
    await expect(import('./main')).resolves.toBeDefined();

    expect(mockBootstrap).toHaveBeenCalledTimes(1);
  });
});
