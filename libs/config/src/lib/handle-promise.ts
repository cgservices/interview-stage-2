export const handlePromise = <T, E = Error>(
  promise: Promise<T>,
): Promise<[E, null] | [null, T]> =>
  promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[E, null]>((err: E) => [err, null]);
