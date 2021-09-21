import { FunctionComponent } from "react";
import { Contact } from "../../../interfaces/contact.interface";

export interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({
  contact,
}) => {
  return <>{contact.name}</>;
};
