import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Contact } from "../../../interfaces/contact.interface";
import * as styles from "./contactCard.module.scss";
import {
  faAddressBook,
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

export interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({
  contact,
}) => {
  return (
    <div className={styles["card-container"]}>
      <div>{contact.name}</div>
      <div>
        <FontAwesomeIcon icon={faPhoneSquareAlt} /> {contact.phone}
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelopeSquare} />
        {contact.email}
      </div>
      <div>
        <FontAwesomeIcon icon={faAddressBook} />
        {contact.address}
      </div>
    </div>
  );
};
