FROM node:18

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /recharge

COPY dist /recharge/dist

WORKDIR /recharge/dist/apps/payments-service

RUN set -eu && \
  pnpm install ;

ARG adyen_api_key
ARG adyen_environment
ARG adyen_hmac
ARG adyen_webhook_url
ARG dangerously_ignore_adyen_errors
ARG riskified_auth_token
ARG riskified_shop_url
ARG riskified_api_url

ENV ADYEN_API_KEY=$adyen_api_key
ENV DANGEROUSLY_IGNORE_ADYEN_ERRORS=$dangerously_ignore_adyen_errors
ENV NEXT_PUBLIC_ADYEN_ENVIRONMENT=$adyen_environment
ENV ADYEN_HMAC=$adyen_hmac
ENV RISKIFIED_AUTH_TOKEN=$riskified_auth_token
ENV RISKIFIED_SHOP_URL=$riskified_shop_url
ENV RISKIFIED_API_URL=$riskified_api_url

EXPOSE 4001
EXPOSE 4222
EXPOSE 8000

ENV PORT 8000

CMD ["node", "main"]
