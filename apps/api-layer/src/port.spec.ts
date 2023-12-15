import { getPort } from './port';

describe('port', () => {
  it('should return default port', () => {
    process.env.PORT = '';
    expect(getPort()).toBe(8000);
  });

  it('should return port', () => {
    process.env.PORT = '1111';
    expect(getPort()).toBe(1111);
  });
});
