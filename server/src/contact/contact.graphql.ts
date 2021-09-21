import { gql } from "apollo-server-express";

export const ContactTypeDefs = gql`
  type Contact {
    name: String!
    address: String!
    email: String
    phone: String
  }

  type PaginatedContacts {
    contacts: [Contact!]
    page: Int!
    pageSize: Int!
    pageCount: Int!
  }

  type Query {
    get: [Contact!]
    getPage(page: Int!, pageSize: Int): PaginatedContacts
    searchByName(query: String!, page: Int, pageSize: Int): PaginatedContacts
  }
`;
