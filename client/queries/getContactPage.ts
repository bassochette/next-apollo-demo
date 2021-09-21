import { gql } from "@apollo/client";

export const GET_CONTACT_PAGE_QUERY = gql`
  query GetContactsPage($page: Int!, $pageSize: Int) {
    getContactsPage(page: $page, pageSize: $pageSize) {
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
