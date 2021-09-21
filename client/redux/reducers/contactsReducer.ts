import { Contact } from "../../interfaces/contact.interface";
import {
  GET_CONTACT_PAGE,
  GET_CONTACT_PAGE_ERROR,
  GET_CONTACT_PAGE_SUCCESS,
} from "../actions/contactActions";
import {
  SEARCH_CONTACT_PAGE,
  SEARCH_CONTACT_PAGE_ERROR,
  SEARCH_CONTACT_PAGE_SUCCESS,
} from "../actions/searchContactsActions";

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error?: Error;
  currentPage: number;
  pageCount: number;
  query?: string;
}

const initialState = {
  contacts: [],
  loading: false,
  currentPage: 0,
  pageCount: 0,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_PAGE:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_CONTACT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.concat(action.contacts),
        error: undefined,
        currentPage: action.page,
        pageCount: action.pageCount,
      };
    case SEARCH_CONTACT_PAGE:
      return {
        ...state,
        contacts: action.clear ? [] : state.contacts,
        loading: true,
        error: undefined,
        query: action.query,
      };
    case SEARCH_CONTACT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.concat(action.contacts),
        error: undefined,
        currentPage: action.page,
        pageCount: action.pageCount,
      };
    case SEARCH_CONTACT_PAGE_ERROR:
    case GET_CONTACT_PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }

  return { ...state };
};
