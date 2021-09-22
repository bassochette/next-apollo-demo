import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const apolloClient = new ApolloClient({
  uri: publicRuntimeConfig.GRAPHQL_URL || "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export const client = apolloClient;
export default apolloClient;
