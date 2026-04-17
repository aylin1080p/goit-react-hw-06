import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";
import css from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
