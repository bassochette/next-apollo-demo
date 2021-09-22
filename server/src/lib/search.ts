import { filter } from "lodash";
import { Contact } from "../contact/contact.interface";

export const search = (contacts: Contact[], query: string): Contact[] => {
  return filter(contacts, (contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
};
