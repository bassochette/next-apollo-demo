import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Contact } from "../../../interfaces/contact.interface";
import * as styles from "./contactCard.module.scss";
import {
  faAddressBook,
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Address } from "./Address/Address";

export interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({
  contact,
}) => {
  return (
    <div className={styles["card-container"]} data-cy="contact">
      <div className={styles["name"]}>{contact.name}</div>
      <div className={styles["info-container"]}>
        <div className={styles["info"]}>
          <FontAwesomeIcon icon={faPhoneSquareAlt} className={styles["icon"]} />{" "}
          {contact.phone}
        </div>
        <div className={styles["info"]}>
          <FontAwesomeIcon icon={faEnvelopeSquare} className={styles["icon"]} />
          {contact.email}
        </div>
        <div className={styles["info"]}>
          <FontAwesomeIcon icon={faAddressBook} className={styles["icon"]} />
          <Address address={contact.address} />
        </div>
      </div>
    </div>
  );
};
