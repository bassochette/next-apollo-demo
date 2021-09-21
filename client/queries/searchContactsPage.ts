import { gql } from "@apollo/client";

export const SEARCH_CONTACTS_PAGE_QUERY = gql`
  query SearchContactsPage($query: String!, $page: Int!, $pageSize: Int) {
    searchContactsByName(query: $query, page: $page, pageSize: $pageSize) {
      contacts {
        name
        address
        phone
        email
      }
      page
      pageSize
      pageCount
    }
  }
`;
