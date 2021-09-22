import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export const client = apolloClient;
export default apolloClient;
