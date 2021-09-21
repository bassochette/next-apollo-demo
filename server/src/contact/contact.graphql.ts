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
    getContacts: [Contact!]
    getContactsPage(page: Int!, pageSize: Int): PaginatedContacts
    searchContactsByName(
      query: String!
      page: Int
      pageSize: Int
    ): PaginatedContacts
  }
`;
