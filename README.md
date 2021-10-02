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

## Testing

### How to run unit and integration tests
```
npm test
```

### How to run E2E tests

TODO

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