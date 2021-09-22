# Technical test

## Live demo

[Frontend](https://frontend-test-publicis.herokuapp.com/)
[GraphQL API](https://backend-test-publicis.herokuapp.com/)

## Docker

Start with docker-compose, at the monorepo root:
```bash
docker-compose up
```

## Server
[Apollo sandbox](https://studio.apollographql.com/sandbox/explorer/)

Seed data will generate on server startup.

Start a dev server, in the server folder:
```bash
npm run start:dev
```

Run test:
```
npm test
```


## NextJS frontend

In the client repo, start a dev server
```
npm run dev
```

Run cypress test, server and client need to be started
```
npm run cypress:open
```


