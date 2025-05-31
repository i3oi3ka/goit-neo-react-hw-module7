import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styless from "./ContactList.module.css";
import ContactListEmpty from "../ContactListEmpty/ContactListEmpty";
import SearchResultEmpty from "../SearchResultEmpty/SearchResultEmpty";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color: "#ffffff",
};

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ClipLoader
        color={override.color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <p>{error}</p>}
      {!isLoading &&
        !error &&
        (contacts.length > 0 ? (
          <ul className={styless.container}>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : filter ? (
          <SearchResultEmpty />
        ) : (
          <ContactListEmpty />
        ))}
    </>
  );
};

export default ContactList;
