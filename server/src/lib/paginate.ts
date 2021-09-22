import { Contact, PaginatedContacts } from "../contact/contact.interface";

export const paginate = (
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
