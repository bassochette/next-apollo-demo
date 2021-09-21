import { gql } from "@apollo/client";

export const GET_CONTACT_PAGE = gql`
  query GetContactsPage($page: Int!, $pageSize: Int) {
    getPage(page: $page, pageSize: $pageSize) {
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
