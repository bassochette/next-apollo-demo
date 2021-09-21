import { Contact } from "./contact.interface";

export const ContactResolvers = {
  Query: {
    get: (): Contact[] => {
      return [];
    },
    getPage: (): Contact[] => {
      return [];
    },
    search: (): Contact[] => {
      return [];
    },
  },
};
