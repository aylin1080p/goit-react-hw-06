import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const normalizedFilter = filter.trim().toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  if (contacts.length === 0) {
    return <p className={css.message}>No contacts yet.</p>;
  }

  if (visibleContacts.length === 0) {
    return <p className={css.message}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
