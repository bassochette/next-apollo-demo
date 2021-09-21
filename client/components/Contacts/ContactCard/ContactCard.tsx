import { FunctionComponent } from "react";
import { Contact } from "../../../interfaces/contact.interface";

export interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({
  contact,
}) => {
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
      <div>{contact.address}</div>
    </div>
  );
};
