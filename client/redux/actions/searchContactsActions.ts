import { PaginatedContacts } from "../../interfaces/contact.interface";
import { Dispatch } from "redux";
import { client } from "../../lib/apolloClient";
import { GET_CONTACT_PAGE_QUERY } from "../../queries/getContactPage";
import { SEARCH_CONTACTS_PAGE_QUERY } from "../../queries/searchContactsPage";

export const SEARCH_CONTACT_PAGE = "search_contact_page";
export const SEARCH_CONTACT_PAGE_SUCCESS = "search_contact_page_success";
export const SEARCH_CONTACT_PAGE_ERROR = "search_contact_page_error";

export const searchContactsPageAction = (
  query: string,
  page: number,
  pageSize?: number,
  clear = true
) => ({
  type: SEARCH_CONTACT_PAGE,
  query,
  page,
  pageSize,
  clear,
});

export const searchContactsPageSuccessAction = (data: PaginatedContacts) => ({
  type: SEARCH_CONTACT_PAGE_SUCCESS,
  ...data,
});

export const searchContactsPageErrorAction = (error: Error) => ({
  type: SEARCH_CONTACT_PAGE_ERROR,
  error,
});

export const searchContactPage = async ({
  query,
  page,
  pageSize,
  dispatch,
  clear,
}: {
  query: string;
  page: number;
  pageSize?: number;
  dispatch: Dispatch;
  clear: boolean;
}) => {
  try {
    dispatch(searchContactsPageAction(query, page, pageSize, clear));
    const { error, data } = await client.query({
      query: SEARCH_CONTACTS_PAGE_QUERY,
      variables: {
        query,
        page,
        pageSize,
      },
    });
    if (error) {
      dispatch(searchContactsPageErrorAction(error));
    } else {
      dispatch(searchContactsPageSuccessAction(data.searchContactsByName));
    }
  } catch (error) {
    console.error(error);
    dispatch(searchContactsPageErrorAction(error));
  }
};
