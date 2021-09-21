import { gql } from "apollo-server-express";

export const ContactTypeDefs = gql`
  type Contact {
    name: String
    address: String
    email: String
    phone: String
  }

  type Query {
    get: [Contact]
    getPage(page: Int!): [Contact]
    search(query: String!): [Contact]
  }
`;
