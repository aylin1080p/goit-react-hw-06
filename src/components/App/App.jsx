import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import css from "./App.module.css";

function App() {
  return (
    <main className={css.container}>
      <section className={css.panel}>
        <div className={css.header}>
          <p className={css.eyebrow}>Redux Toolkit</p>
          <h1 className={css.title}>Phonebook</h1>
        </div>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </section>
    </main>
  );
}

export default App;
