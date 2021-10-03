Code challenge

## Install

```
yarn install
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Stack

* Next.js
* TypeScript
* Sqlite3
* Apollo server
* Apollo client
* React
* Cypress
* Jest

## Testing

### How to run unit and integration tests

Jest is Javascript testing framework for running all unit and integration tests.

Run the following command to see the project's tests:
```
npm test
```

### How to run E2E tests

Cypress is used to run E2E tests.

To see all E2E tests, run the following command:
```
node_modules/.bin/cypress open
```

## Development

### Generate GraphQL schema

Run the following command to generate the typescript types from the GraphQL schema:
```
npm run graphql:schema:generate
```

## Configuration


Create a file `.env.local` with the following content:
```
PAGINATION_DEFAULT_LIMIT=10
PAGINATION_MAX_LIMIT=20
```

*Modify this file as you like*

Reference: https://nextjs.org/docs/basic-features/environment-variables

## Continuous integration (CI)

All continuos integration runs on Github CI. You can check the whole pipeline on the folder `.github`