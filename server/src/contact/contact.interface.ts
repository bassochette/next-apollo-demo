export interface Contact {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export interface PaginatedContacts {
  contacts: Contact[];
  page: number;
  pageSize: number;
  pageCount: number;
}
