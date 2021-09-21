import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";

import { ContactResolvers } from "./contact/contact.resolvers";
import { ContactTypeDefs } from "./contact/contact.graphql";

const graphqlServer = new ApolloServer({
  resolvers: {
    ...ContactResolvers,
  },
  typeDefs: {
    ...ContactTypeDefs,
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

graphqlServer.start().then(() => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("tiny"));

  graphqlServer.applyMiddleware({ app });

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(
      `Graphql Server started on: http://localhost:${port}${graphqlServer.graphqlPath}`
    );
  });
});

process.on("uncaughtException", (error) => {
  console.error("Unhandled error: ", error);
  process.exit(1);
});
