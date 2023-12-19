import { expect, test } from '@playwright/test';

test('returns 404 if payment is not found', async ({ request }) => {
  const nonExistentId = 'non-existent';

  const findPaymentByID = await request.post('/graphql', {
    data: {
      operationName: 'findPaymentById',
      variables: {
        id: `${nonExistentId}`,
      },
      query: `query findPaymentById($id: String!) {
               findPaymentById(id: $id) {
                id,
              }
             }`,
    },
  });

  const resultFindPaymentById = await findPaymentByID.json();

  expect(resultFindPaymentById.errors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        extensions: expect.objectContaining({
          status: 404,
        }),
        message: `The payment with the ${nonExistentId} does not exist.`,
      }),
    ]),
  );
});
