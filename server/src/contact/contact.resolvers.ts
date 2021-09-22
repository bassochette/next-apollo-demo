import { Contact, PaginatedContacts } from "./contact.interface";
import { contacts } from "./contact.data";
import { paginate } from "../lib/paginate";
import { search } from "../lib/search";

export const ContactResolvers = {
  Query: {
    getContacts: (): Contact[] => {
      return contacts;
    },
    getContactsPage: (parent, args): PaginatedContacts => {
      const { page, pageSize = 20 } = args;
      return paginate(contacts, page, pageSize);
    },
    searchContactsByName: (parent, args): PaginatedContacts => {
      const { query, page, pageSize } = args;
      const selectedContacts = search(contacts, query);
      return paginate(selectedContacts, page, pageSize);
    },
  },
};
