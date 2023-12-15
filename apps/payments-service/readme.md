# Payments Service

## What is it?

Is a payments service that records a fake payment and returns a response or allows CRUD queries via nats. This works in a pub-sub way.

This uses TypeScript & Nest.js.

## How to run?

You can find out how to run app services in the root README.md [file](../../README.md).

## Build

To build a JavaScript application run from the root of the monorepo:

```sh
pnpm nx build payments-service --skip-nx-cache
```

To build a containerised JavaScript application setting as tag the registry name and commit have run from the root of the monorepo:

```sh
docker buildx build . -f ./projects/payments-service/Dockerfile -t <aws_account_id>.dkr.ecr.eu-west-2.amazonaws.com/payments-service:2fae68612  --platform=linux/amd64
```
