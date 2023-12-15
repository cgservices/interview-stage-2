export const getPort = () =>
  process.env.PORT ? Number(process.env.PORT) : 8000;
