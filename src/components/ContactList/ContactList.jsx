import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styless from "./ContactList.module.css";
import ContactListEmpty from "../ContactListEmpty/ContactListEmpty";
import SearchResultEmpty from "../SearchResultEmpty/SearchResultEmpty";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts =
    filter !== "" && contacts.length > 0
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={styless.container}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : filter ? (
        <SearchResultEmpty />
      ) : (
        <ContactListEmpty />
      )}
    </>
  );
};

export default ContactList;
