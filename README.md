# Technical test

## Live demo

A live demo is currently hosted on heroku.

- [Frontend](https://frontend-test-publicis.herokuapp.com/)
- [GraphQL API](https://backend-test-publicis.herokuapp.com/)

## Docker

Start with docker-compose, at the monorepo root:
```bash
docker-compose up
```

## Server
[Apollo sandbox](https://studio.apollographql.com/sandbox/explorer/)

Seed data will generate on server startup.

Start a dev server on port `5000`, in the server folder:
```bash
npm install
npm run start:dev
```

Run test:
```
npm test
```


## NextJS frontend

In the client repo, start a dev server on port `3000`
```
npm install
npm run dev
```

Run cypress test, server and client need to be started
```
npm run cypress:open
```

## Devel process

- This repo follow the conventional commit style guide. Any invalid commits WILL BE REVERTED!
- Style is applied by prettier though the pre-commit hook
- Make sure to run npm install at the top level to ensure the presence of husky hooks 
