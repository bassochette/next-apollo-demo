import { PaginatedContacts } from "../../interfaces/contact.interface";
import { Dispatch } from "redux";
import { client } from "../../lib/apolloClient";
import { GET_CONTACT_PAGE_QUERY } from "../../queries/getContactPage";

export const GET_CONTACT_PAGE = "get_contact_page";
export const GET_CONTACT_PAGE_SUCCESS = "get_contact_page_success";
export const GET_CONTACT_PAGE_ERROR = "get_contact_page_error";

export const getContactPageAction = (page: number, pageSize?: number) => ({
  type: GET_CONTACT_PAGE,
  page,
  pageSize,
});

export const getContactPageSuccessAction = (data: PaginatedContacts) => ({
  type: GET_CONTACT_PAGE_SUCCESS,
  ...data,
});

export const getContactPageErrorAction = (error: Error) => ({
  type: GET_CONTACT_PAGE_ERROR,
  error,
});

export const getContactPage = async ({
  page,
  pageSize,
  dispatch,
}: {
  page: number;
  pageSize?: number;
  dispatch: Dispatch;
}) => {
  try {
    dispatch(getContactPageAction(page, pageSize));
    const { error, data } = await client.query({
      query: GET_CONTACT_PAGE_QUERY,
      variables: {
        page,
        pageSize,
      },
    });
    if (error) {
      dispatch(getContactPageErrorAction(error));
    } else {
      dispatch(getContactPageSuccessAction(data.getContactsPage));
    }
  } catch (error) {
    console.error(error);
    dispatch(getContactPageErrorAction(error));
  }
};
