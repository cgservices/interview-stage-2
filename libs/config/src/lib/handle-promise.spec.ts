import { handlePromise } from './handle-promise';

describe('handle promise', () => {
  it('returns data for a promise', async () => {
    const [error, data] = await handlePromise(Promise.resolve(1));
    expect(data).toBe(1);
    expect(error).toBeNull();
  });

  it('returns a promise error', async () => {
    const promiseError = new Error('Some error');
    const [error, data] = await handlePromise(Promise.reject(promiseError));
    expect(data).toBeNull();
    expect(error).toEqual(promiseError);
  });
});
