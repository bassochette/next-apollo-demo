import { FunctionComponent } from "react";
import * as styles from "./contactsLoader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactSkeleton: FunctionComponent = () => (
  <div className={styles["card-container"]}>
    <div className={styles["field"]}></div>
    <div className={styles["field"]}>
      <FontAwesomeIcon icon={faPhoneSquareAlt} />
    </div>
    <div className={styles["field"]}>
      <FontAwesomeIcon icon={faEnvelopeSquare} />
    </div>
    <div className={styles["field"]}>
      <FontAwesomeIcon icon={faAddressBook} />
    </div>
  </div>
);

export const ContactsLoader: FunctionComponent = () => {
  return (
    <div className={styles["loader"]} data-cy="loader">
      <ContactSkeleton />
      <ContactSkeleton />
      <ContactSkeleton />
    </div>
  );
};
