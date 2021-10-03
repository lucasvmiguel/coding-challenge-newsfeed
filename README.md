Code challenge

## Install

To install all required packages to run the application:
```
yarn install
```

## Getting Started

Run the development server:

```bash
yarn dev
```

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

*CI will fail in case the typescript types are not in sync with the GraphQL schema*

## Configuration


Create a file `.env.local` with the following content:
```
PAGINATION_DEFAULT_LIMIT=10
PAGINATION_MAX_LIMIT=20
```

*Modify this file as you like*

Reference: https://nextjs.org/docs/basic-features/environment-variables

## Continuous integration (CI)

All continuous integration runs on Github CI. You can check the whole pipeline in the folder `.github`

### Project structure
### Tech Stack

* Next.js
* TypeScript
* Sqlite3
* Apollo server
* Apollo client
* React
* Cypress
* Jest

### Folder structure:

* `components/` — reusable React components;
* `pages/` — the usual Next.js page structure;
* `graphql/` — GraphQL server, schema, resolvers, DB connection;
* `scripts/` — contains the SQL script used for creating and populating the tables in db.sqlite.
* `cypress/` — contains all E2E tests.
* `husky/` — git hooks.
* `.github/` — CI pipeline.
* `test/` — test utils.