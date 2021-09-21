import { filter } from "lodash";
import { Contact, PaginatedContacts } from "./contact.interface";
import { contacts } from "./contact.data";

const paginate = (
  data: Contact[],
  page = 0,
  pageSize = 20
): PaginatedContacts => {
  return {
    contacts: data.slice(page * pageSize, page * pageSize + pageSize),
    page,
    pageSize,
    pageCount: Math.ceil(data.length / pageSize),
  };
};

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
      const selectedContacts = filter(contacts, (contact) => {
        return contact.name.toLowerCase().includes(query.toLowerCase());
      });
      return paginate(selectedContacts, page, pageSize);
    },
  },
};
