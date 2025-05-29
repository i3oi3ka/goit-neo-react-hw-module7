import { ToastContainer } from "react-toastify";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
