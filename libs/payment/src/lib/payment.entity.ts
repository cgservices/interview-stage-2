export type PaymentDetails = {
  country: string;
  price: number;
  currency: string;
  email: string;
  productId: string;
  externalProductId: string;
  cardScheme: string;
};

export class Payment {
  id!: string;
  sessionId?: string;
  sessionData?: string;
  createdAt!: Date;
  updatedAt!: Date;
  paymentDetails!: PaymentDetails;
}
