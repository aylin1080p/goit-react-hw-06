import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice.js";
import css from "./ContactForm.module.css";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
    const normalizedName = name.toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName,
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
