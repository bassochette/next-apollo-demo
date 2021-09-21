import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { ContactsLoader } from "./ContactsLoader/ContactsLoader";
import { ContactCard } from "./ContactCard/ContactCard";
import { LoadNextContactPage } from "./LoadNextContactPage/LoadNextContactPage";

export const Contacts = () => {
  const state = useSelector((state: State) => state.contacts);
  return (
    <section>
      {state.contacts.map((contact) => (
        <ContactCard contact={contact} />
      ))}
      {state.loading && <ContactsLoader />}
      {!state.loading && <LoadNextContactPage />}
    </section>
  );
};
