import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import * as styles from "./contacts.module.scss";
import { ContactsLoader } from "./ContactsLoader/ContactsLoader";
import { ContactCard } from "./ContactCard/ContactCard";
import { LoadNextContactPage } from "./LoadNextContactPage/LoadNextContactPage";

export const Contacts = () => {
  const state = useSelector((state: State) => state.contacts);
  return (
    <section className={styles["contacts-container"]}>
      <div className={styles["contact-cards-container"]}>
        {state.contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.email} />
        ))}
      </div>
      {state.loading && <ContactsLoader />}
      {!state.loading && <LoadNextContactPage />}
    </section>
  );
};
